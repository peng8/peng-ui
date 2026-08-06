// 产品路由纯模块 —— 列表分页 URL 与预渲染路由生成
// 同时被 nuxt.config.ts（构建期预渲染）与 useProducts.ts（运行时）复用，
// 避免「分类×页码→裸路径」规则在两处各写一份导致漂移。
//
// 重要：此模块是客户端安全入口（useProducts → ProductsBrowser 运行时使用），
// 不能 import curatedProducts / 其他重量级数据——否则每个列表页都会把整份目录
// 打进客户端 bundle。分页总数 getTotalPages 必须由调用方显式传产品列表。
import type { Product } from './products-types'

/** 产品列表分页：每页 16 个 */
export const PRODUCT_PAGE_SIZE = 16

/**
 * 生成某剂型某页的「裸路径」（不含 locale 前缀，便于 SSG 预渲染独立 HTML）
 * - 全部第 1 页：/products
 * - 全部第 N 页：/products/page/N
 * - 分类第 1 页：/products/categories/{cat}
 * - 分类第 N 页：/products/categories/{cat}/page/N
 *
 * 分类路由放在 /products/categories/ 前缀下，避免与详情页 /products/[slug] 冲突。
 */
export function productPageUrl(category: string, page: number): string {
  if (category === 'all') {
    return page <= 1 ? '/products' : `/products/page/${page}`
  }
  return page <= 1
    ? `/products/categories/${category}`
    : `/products/categories/${category}/page/${page}`
}

export function productListApiPath(category: string, page: number): string {
  return `/api/products/list/${category}/${Math.max(1, Math.floor(page || 1))}`
}

/** 某剂型下的总页数（至少 1）。必须传入产品列表（客户端不会调用，见文件头注释）。 */
export function getTotalPages(category: string, productList: Product[]): number {
  const count = category === 'all' ? productList.length : productList.filter((p) => p.category === category).length
  return Math.max(1, Math.ceil(count / PRODUCT_PAGE_SIZE))
}

/** 取所有需要预渲染的「裸列表路径」（全部 + 各分类的所有页码）。 */
export function getAllProductListRoutes(productList: Product[]): string[] {
  const routes: string[] = ['/products']
  const allCats = ['all', ...new Set(productList.map((p) => p.category))]
  for (const cat of allCats) {
    const total = getTotalPages(cat, productList)
    for (let p = 2; p <= total; p++) {
      routes.push(productPageUrl(cat, p))
    }
    if (cat !== 'all') routes.push(productPageUrl(cat, 1))
  }
  return routes
}

/** 取所有需要预渲染的「列表 API 路径」（SSG 预渲染 JSON 用）。 */
export function getAllProductListApiRoutes(productList: Product[]): string[] {
  const routes: string[] = []
  const allCats = ['all', ...new Set(productList.map((p) => p.category))]
  for (const cat of allCats) {
    const total = getTotalPages(cat, productList)
    for (let page = 1; page <= total; page++) routes.push(productListApiPath(cat, page))
  }
  return routes
}
