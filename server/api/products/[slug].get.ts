// GET /api/products/:slug — returns a single product + related products + category
// getCategoryBySlug 从轻量的 products.ts 导入（仅依赖 productCategories，避免拉入 ~400KB 产品库）
import { getProductBySlug, getRelatedProducts } from '~/data/products-mutations'
import { getCategoryBySlug } from '~/data/products'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) throw createError({ statusCode: 400, statusMessage: 'Missing slug' })

  const product = getProductBySlug(slug)
  if (!product) throw createError({ statusCode: 404, statusMessage: 'Product not found' })

  const category = getCategoryBySlug(product.category) ?? null
  const related = getRelatedProducts(slug, 4)

  return { product, category, related }
})
