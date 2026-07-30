import { products, productCategories, type Product } from '~/data/products'

// 产品列表分页：每页 9 个
export const PRODUCT_PAGE_SIZE = 16

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

/** 某剂型下的总页数（至少 1） */
export function getTotalPages(category: string): number {
  const count = getFilteredProducts(category).length
  return Math.max(1, Math.ceil(count / PRODUCT_PAGE_SIZE))
}

/** 取某剂型某页的产品（页码越界自动夹紧到末页） */
export function getPageItems(category: string, page: number): Product[] {
  const total = getTotalPages(category)
  const safePage = Math.min(Math.max(1, page), total)
  const start = (safePage - 1) * PRODUCT_PAGE_SIZE
  return getFilteredProducts(category).slice(start, start + PRODUCT_PAGE_SIZE)
}

/**
 * 生成某剂型某页的 URL（路径参数式，便于 SSG 预渲染独立 HTML）
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

/** 取所有需要预渲染的列表路由（全部 + 各分类的所有页码） */
export function getAllProductListRoutes(): string[] {
  const routes: string[] = ['/products']
  const allCats = ['all', ...productCategories.map((c) => c.slug)]
  for (const cat of allCats) {
    const total = getTotalPages(cat)
    for (let p = 2; p <= total; p++) {
      routes.push(productPageUrl(cat, p))
    }
    if (cat !== 'all') routes.push(productPageUrl(cat, 1))
  }
  return routes
}
