import { products, productCategories, type Product } from '~/data/products'
import {
  PRODUCT_PAGE_SIZE,
  productPageUrl,
  getTotalPages,
  getAllProductListRoutes
} from '~/data/productRoutes'

// 路由/分页纯函数复用自 data/productRoutes.ts（构建期 nuxt.config 与运行时共用）
export { PRODUCT_PAGE_SIZE, productPageUrl, getTotalPages, getAllProductListRoutes }

/** 按剂型筛选后的产品列表（'all' 表示全部） */
export function getFilteredProducts(category: string): Product[] {
  return category === 'all' ? products : products.filter((p) => p.category === category)
}

/**
 * 首页精选产品：每个剂型取首个产品，凑满 count 个（不足则按数据顺序补足）。
 * 这样首页 8 个卡片能覆盖多种剂型，避免单一剂型刷屏。
 */
export function getFeaturedProducts(count = 8): Product[] {
  const featured: Product[] = []
  const seen = new Set<string>()
  // 第一轮：每个剂型取 1 个，保证剂型多样性
  for (const cat of productCategories) {
    const first = products.find((p) => p.category === cat.slug)
    if (first && !seen.has(first.slug)) {
      featured.push(first)
      seen.add(first.slug)
    }
    if (featured.length >= count) return featured
  }
  // 第二轮：按数据顺序补足到 count 个
  for (const p of products) {
    if (seen.has(p.slug)) continue
    featured.push(p)
    seen.add(p.slug)
    if (featured.length >= count) break
  }
  return featured
}

/** 取某剂型某页的产品（页码越界自动夹紧到末页） */
export function getPageItems(category: string, page: number): Product[] {
  const total = getTotalPages(category)
  const safePage = Math.min(Math.max(1, page), total)
  const start = (safePage - 1) * PRODUCT_PAGE_SIZE
  return getFilteredProducts(category).slice(start, start + PRODUCT_PAGE_SIZE)
}
