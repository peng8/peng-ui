// GET /api/products/list/:category/:page — 分页卡片列表
// Runs server-side only; the heavy products-mutations.ts is never bundled into the client.
import { getAllProducts } from '~/data/products-mutations'
import { productCategories } from '~/data/products'
import { PRODUCT_PAGE_SIZE } from '~/data/productRoutes'
import type { ProductListResponse } from '~/data/products-types'
// toCardItem 由 Nitro 从 server/utils/ 自动导入

const VALID_CATEGORIES = new Set(['all', ...productCategories.map((c) => c.slug)])

export default defineEventHandler((event) => {
  const category = getRouterParam(event, 'category') || 'all'
  // 校验分类白名单：不存在则 404，与页面路由行为一致
  if (!VALID_CATEGORIES.has(category)) {
    throw createError({ statusCode: 404, statusMessage: 'Category not found' })
  }

  const requestedPage = Number(getRouterParam(event, 'page') || '1')
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? Math.floor(requestedPage) : 1

  const products = getAllProducts()
  const filtered = category === 'all' ? products : products.filter((product) => product.category === category)
  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / PRODUCT_PAGE_SIZE))

  // 越界页码返回 404，与 SSG 只生成 1..totalPages 的页面行为一致
  if (page > totalPages) {
    throw createError({ statusCode: 404, statusMessage: 'Page out of range' })
  }

  const start = (page - 1) * PRODUCT_PAGE_SIZE

  const response: ProductListResponse = {
    items: filtered.slice(start, start + PRODUCT_PAGE_SIZE).map(toCardItem),
    total,
    totalPages,
    page,
    category
  }

  return response
})
