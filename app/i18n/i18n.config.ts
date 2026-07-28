// @nuxtjs/i18n 配置文件 —— 复用现有 messages.ts 的翻译数据
// 通过 vueI18n 配置项导入，与 useLocale() 包装保持兼容
import { messages } from './messages'

export default defineI18nConfig(() => ({
  legacy: false, // 使用 Composition API 模式
  messages
}))
