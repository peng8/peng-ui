// 中英文双语切换 —— 全局响应式 locale + t() 翻译函数
// - locale 在 SSR/CSR 间共享（模块级 ref）
// - 客户端从 localStorage 读取上次选择，默认英文
// - t(key, params) 查字典；支持 {name} 占位符替换
import { messages, type Locale, type MessageKey } from '~/i18n/messages'

// 模块级单例：所有组件共享同一个 locale 状态
const locale = ref<Locale>('en')

// 是否已初始化（避免 SSR 与 CSR 重复初始化）
let initialized = false

export function useLocale() {
  // 客户端首次调用时从 localStorage 读取
  if (import.meta.client && !initialized) {
    initialized = true
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved === 'en' || saved === 'zh') {
      locale.value = saved
    }
    // 同步 <html lang> 属性
    document.documentElement.lang = locale.value
  }

  /** 设置语言并持久化 */
  const setLocale = (l: Locale) => {
    locale.value = l
    if (import.meta.client) {
      localStorage.setItem('locale', l)
      document.documentElement.lang = l
    }
  }

  /** 切换中英文 */
  const toggle = () => {
    setLocale(locale.value === 'en' ? 'zh' : 'en')
  }

  /** 翻译函数：t('nav.home') 或 t('pc.explore', { name: 'Gummies' }) */
  const t = (key: MessageKey, params?: Record<string, string | number>): string => {
    const dict = messages[locale.value] as Record<string, string>
    let s = dict[key] ?? key
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        s = s.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
      }
    }
    return s
  }

  /** 当前是否中文 */
  const isZh = computed(() => locale.value === 'zh')

  return { locale, setLocale, toggle, t, isZh }
}
