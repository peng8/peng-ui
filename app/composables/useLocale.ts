// 中英文双语切换 —— 基于 @nuxtjs/i18n 的兼容包装
// - 保持原 useLocale() 接口：{ locale, setLocale, toggle, t, isZh }
// - 内部使用 useI18n() / useSwitchLocalePath() / useLocalePath()
// - 切换语言跳转到对应 locale 的同一路径（URL 前缀策略）
// - 保留 t() 函数保持原签名(MessageKey 类型校验 + 占位符替换)
import type { Locale } from '~/i18n/messages'

export function useLocale() {
  const { locale, t: rawT } = useI18n()
  type TranslateParams = Record<string, string | number | undefined>
  const i18nT = rawT as unknown as (key: string, params?: TranslateParams) => string
  const switchLocalePath = useSwitchLocalePath()
  const localePath = useLocalePath()

  /** 当前是否中文 */
  const isZh = computed(() => locale.value === 'zh')

  /** 切换中英文：导航到对应 locale 的同路径 */
  const setLocale = (l: Locale) => {
    if (l === locale.value) return
    return navigateTo(switchLocalePath(l))
  }

  /** 切换中英文 */
  const toggle = () => {
    return setLocale(locale.value === 'en' ? 'zh' : 'en')
  }

  /**
   * 翻译函数 —— 保持原签名 t(key, params?)
   * 占位符 {name} / {shown} 等替换：vue-i18n 已支持，此处手动 replace 作为运行时兜底
   * （legacy:false 下 vue-i18n 用 Composition API，占位符替换通常生效，
   *   但保留兜底以防个别 key 未被编译器处理）
   */
  const t = (key: string, params?: TranslateParams): string => {
    let s: string = (i18nT(key, params ?? {}) as string) || key
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        if (v === undefined) continue
        // 转义 param key 中的正则元字符，避免误匹配
        const escaped = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        s = s.replace(new RegExp(`\\{${escaped}\\}`, 'g'), String(v))
      }
    }
    return s
  }

  /**
   * 起订量(MOQ)本地化：中文显示「N 瓶」，英文回退原文。
   * 统一 MOQ 口径为 "500 bottles"，按需提取数字 + 单位。
   */
  const formatMoq = (moq: string): string => {
    if (!isZh.value) return moq
    const num = (moq.match(/\d[\d,]*/) || [])[0]
    return num ? `${num} 瓶` : moq
  }

  return {
    locale: locale as Ref<Locale>,
    setLocale,
    toggle,
    t,
    isZh,
    formatMoq,
    // 暴露 useLocalePath() 供模板直接 localePath('/path')
    localePath
  }
}
