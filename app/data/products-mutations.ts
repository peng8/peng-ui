// Full product catalog — SERVER / API ONLY.
// Contains curated + imported products with dedup & mutation logic.
// NEVER import this from client-facing pages/components (it's ~400 KB).
import { curatedProducts, productCategories } from './products'
import { importedProducts } from './importedProducts'
import type { Product, ProductCategory } from './products-types'

// ---------- Dedup & mutation ----------
const normalizeProductIdentity = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const dedupeProducts = (items: Product[]) => {
  const seen = new Set<string>()
  return items.filter((product) => {
    const key = `${product.category}:${normalizeProductIdentity(product.name)}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

const clippedCopyPattern = /\s*(?:\.{3}|…)\s*$/
const categoryNameMap = Object.fromEntries(productCategories.map((c) => [c.slug, c.name]))

const buildShortDesc = (p: Product) =>
  `${p.name} for private-label supplement brands, with custom formulation, dosage and packaging options.`

const buildDescription = (p: Product) => {
  const categoryName = categoryNameMap[p.category]?.toLowerCase() ?? 'supplement'
  return `${p.name} is available as an OEM/ODM ${categoryName} solution for private-label supplement brands. MILDY supports formula adjustment, dosage planning, flavor or shell options, label-ready packaging and export documentation through a GMP-certified manufacturing workflow.`
}

/** Build the full, deduplicated, mutation-applied product list. */
function buildFullProducts(): Product[] {
  const all = dedupeProducts([...curatedProducts, ...importedProducts])
  for (const product of all) {
    if (clippedCopyPattern.test(product.shortDesc)) product.shortDesc = buildShortDesc(product)
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

/** Total product count (for pagination / route generation). */
export function getTotalProductCount(): number {
  return getAllProducts().length
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

/** Category lookup by slug. */
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug)
}
