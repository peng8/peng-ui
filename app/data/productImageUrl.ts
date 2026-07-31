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
