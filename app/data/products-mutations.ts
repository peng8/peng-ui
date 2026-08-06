// Full product catalog — SERVER / API ONLY.
// Contains curated + imported products with dedup & mutation logic.
// NEVER import this from client-facing pages/components (it's ~400 KB).
import { curatedProducts, productCategories } from './products'
import { importedProducts } from './importedProducts'
import type { Product } from './products-types'

// ---------- Dedup & mutation ----------
const dedupeProducts = (items: Product[]) => {
  const seen = new Set<string>()
  return items.filter((product) => {
    // 以 slug（路由主键）去重，同名同分类但 slug 不同的产品不会被误丢弃
    const key = product.slug
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

const clippedCopyPattern = /\s*(?:\.{3}|…)\s*$/
// 源站截断残留：描述以孤立连接词/介词结尾（如 "...improving sleep quality, and"）。
// 这类结尾在 meta description 和页面正文里都是断句，需修剪。
const trailingConnectorPattern = /\s(?:and|or|the|with|for|of|to|a|an|in|on|by|from|as|at)\s*[,.;-]?$/i
const categoryNameMap = Object.fromEntries(productCategories.map((c) => [c.slug, c.name]))

// 修剪尾部孤立连接词（可能连续出现，如 "...with a" → 逐个去掉，保留主体内容）
const trimTrailingConnector = (s: string): string => {
  let out = s.trim()
  while (trailingConnectorPattern.test(out)) {
    out = out.replace(/\s+(?:and|or|the|with|for|of|to|a|an|in|on|by|from|as|at)\s*[,.;-]*$/i, '').trim()
  }
  // 清掉尾部残留标点，补句号（若原本不是以句末标点结束）
  out = out.replace(/[\s,;:]+$/, '')
  if (out && !/[.!?…]$/.test(out)) out += '.'
  return out
}

const buildShortDesc = (p: Product) =>
  `${p.name} for private-label supplement brands, with custom formulation, dosage and packaging options.`

const buildDescription = (p: Product) => {
  const categoryName = categoryNameMap[p.category]?.toLowerCase() ?? 'supplement'
  return `${p.name} is available as an OEM/ODM ${categoryName} solution for private-label supplement brands. MILDY supports formula adjustment, dosage planning, flavor or shell options, label-ready packaging and export documentation through a GMP-certified manufacturing workflow.`
}

/** Build the full, deduplicated, mutation-applied product list. */
function buildFullProducts(): Product[] {
  // 浅拷贝每个产品对象后再改字段，避免 mutate 源数据（curatedProducts/importedProducts）污染 client 模块
  const all = dedupeProducts([...curatedProducts, ...importedProducts]).map((p) => ({ ...p }))
  for (const product of all) {
    // 省略号截断 → 整体重建（内容已不可恢复）
    if (clippedCopyPattern.test(product.shortDesc)) product.shortDesc = buildShortDesc(product)
    // 孤立连接词断句 → 只修剪尾部，保留正文
    else if (trailingConnectorPattern.test(product.shortDesc)) product.shortDesc = trimTrailingConnector(product.shortDesc)
    if (clippedCopyPattern.test(product.description)) product.description = buildDescription(product)
  }
  return all
}

// Cached singleton — computed once on first call
let _allProducts: Product[] | null = null

/** Full product list (curated + imported, deduped & cleaned). Server/API only. */
export function getAllProducts(): Product[] {
  if (!_allProducts) _allProducts = buildFullProducts()
  return _allProducts
}

// ---------- Query helpers (operate on full product list) ----------

/** Find product by slug. */
export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug)
}

/** Related products from same category (excludes self). */
export function getRelatedProducts(slug: string, limit: number): Product[] {
  const current = getProductBySlug(slug)
  if (!current) return []
  return getAllProducts()
    .filter((p) => p.category === current.category && p.slug !== slug)
    .slice(0, limit)
}

// getCategoryBySlug 已移至轻量的 products.ts（仅依赖 productCategories，无需拉入完整产品库）
