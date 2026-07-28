// 中英文双语切换 —— 基于 @nuxtjs/i18n 的兼容包装
// - 保持原 useLocale() 接口：{ locale, setLocale, toggle, t, isZh }
// - 内部使用 useI18n() / useSwitchLocalePath() / useLocalePath()
// - 切换语言跳转到对应 locale 的同一路径（URL 前缀策略）
// - 保留 t() 函数保持原签名(MessageKey 类型校验 + 占位符替换)
import type { Locale, MessageKey } from '~/i18n/messages'

export function useLocale() {
  const { locale, t: i18nT } = useI18n()
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
   * 占位符 {name} / {shown} 等替换
   */
  const t = (key: MessageKey, params?: Record<string, string | number>): string => {
    let s: string = (i18nT(key as string, params ?? {}) as string) || key
    // 兜底占位符替换（@nuxtjs/i18n 默认已支持，但作为防御）
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        s = s.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
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
