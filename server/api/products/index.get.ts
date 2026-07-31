// GET /api/products — returns a paginated card list.
// Runs server-side only; the heavy products-mutations.ts is never bundled into the client.
import { getAllProducts } from '~/data/products-mutations'
import { PRODUCT_PAGE_SIZE } from '~/data/productRoutes'
import type { ProductCardItem, ProductListResponse } from '~/data/products-types'

const toCardItem = (product: ReturnType<typeof getAllProducts>[number]): ProductCardItem => ({
  slug: product.slug,
  name: product.name,
  nameZh: product.nameZh,
  category: product.category,
  cover: product.cover,
  shortDesc: product.shortDesc,
  shortDescZh: product.shortDescZh,
  moq: product.moq
})

export default defineEventHandler((event) => {
  const query = getQuery<{ category?: string; page?: string }>(event)
  const category = query.category || 'all'
  const requestedPage = Number(query.page || '1')
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? Math.floor(requestedPage) : 1

  const products = getAllProducts()
  const filtered = category === 'all' ? products : products.filter((product) => product.category === category)
  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / PRODUCT_PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * PRODUCT_PAGE_SIZE

  const response: ProductListResponse = {
    items: filtered.slice(start, start + PRODUCT_PAGE_SIZE).map(toCardItem),
    total,
    totalPages,
    page: safePage,
    category
  }

  return response
})
