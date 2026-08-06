export const DEFAULT_PRODUCT_IMAGE_BASE_URL = 'https://img.mildy-health.com'
// 备用图片地址 https://img-storage-1sp.pages.dev
type ImportMetaWithEnv = ImportMeta & {
  env?: Record<string, string | undefined>
}

const viteEnv = (import.meta as ImportMetaWithEnv).env
const nodeEnv = typeof process !== 'undefined' ? process.env : {}

export const productImageBaseUrl = (
  viteEnv?.NUXT_PUBLIC_PRODUCT_IMAGE_BASE_URL ||
  nodeEnv.NUXT_PUBLIC_PRODUCT_IMAGE_BASE_URL ||
  nodeEnv.PRODUCT_IMAGE_BASE_URL ||
  DEFAULT_PRODUCT_IMAGE_BASE_URL
).trim().replace(/\/+$/, '')

export const productImageUrl = (path: string) => {
  if (/^https?:\/\//.test(path)) return path

  const normalized = path
    .replace(/^\/+/, '')
    .replace(/^images\/products\/?/, '')
    .replace(/^products\/?/, '')

  return `${productImageBaseUrl}/products/${normalized}`
}

// 预生成 WebP 变体的宽度 —— 与 img-storage/scripts/optimize-images.mjs 的 WIDTHS 对齐。
// variants 产物路径约定：products/w{640,1024,1536}/<basename>.webp
const VARIANT_WIDTHS = [640, 1024, 1536]

/**
 * 为产品图生成响应式 srcset 字符串。
 *
 * 输入既可能是相对路径（'m0_xxx.png'）也可能是 productImageUrl() 产出的完整 URL
 * （'https://img.mildy-health.com/products/m0_xxx.png'），两种都要支持。
 *
 * 规则：
 * - imported/*.webp（已是优化过的 WebP）→ 返回空串，不发 srcset（徒增 404 风险）
 * - 非 jpg/png（如外链 webp/gif）→ 返回空串
 * - 根目录 jpg/png 大图 → 按 w640/w1024/w1536 约定生成 WebP 候选
 *
 * 变体由 img-storage 项目的 sharp 脚本预生成并随 Cloudflare Pages 部署，
 * 详见 img-storage/scripts/README.md。命名约定确保新增图片只要跑过脚本即生效，
 * 无需在此维护图片清单。
 */
export const productImageSrcset = (path: string): string => {
  // 必须是 jpg/jpeg/png 源图（变体只对这类生成）
  if (!/\.(jpe?g|png)$/i.test(path)) return ''
  // imported/ 下的图本身已是优化过的 WebP，跳过
  if (/(^|\/)imported\//i.test(path)) return ''

  // 统一成完整 URL 再解析，得到 .../products/<filename>
  const fullUrl = /^https?:\/\//.test(path) ? path : productImageUrl(path)
  const parts = fullUrl.match(/^(.*\/products\/)([^?#]+)$/)

  // 兜底：URL 形态不符预期（如非 products/ 路径的外链图）时不发 srcset
  if (!parts) return ''
  const prefix = parts[1] // .../products/
  const filename = parts[2] // name.ext
  const basename = filename.replace(/\.[^.]+$/, '')

  return VARIANT_WIDTHS.map((w) => `${prefix}w${w}/${basename}.webp ${w}w`).join(', ')
}
