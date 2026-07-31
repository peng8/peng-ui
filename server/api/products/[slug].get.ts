// GET /api/products/:slug — returns a single product + related products + category
import { getProductBySlug, getRelatedProducts, getCategoryBySlug } from '~/data/products-mutations'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) throw createError({ statusCode: 400, statusMessage: 'Missing slug' })

  const product = getProductBySlug(slug)
  if (!product) throw createError({ statusCode: 404, statusMessage: 'Product not found' })

  const category = getCategoryBySlug(product.category) ?? null
  const related = getRelatedProducts(slug, 4)

  return { product, category, related }
})
