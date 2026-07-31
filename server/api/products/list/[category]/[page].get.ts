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
  const category = getRouterParam(event, 'category') || 'all'
  const requestedPage = Number(getRouterParam(event, 'page') || '1')
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
