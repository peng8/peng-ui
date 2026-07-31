// GET /api/products/search-index — lean data for client-side product search.
import { productCategories } from '~/data/products'
import { getAllProducts } from '~/data/products-mutations'
import { normalizeSearchText } from '~/data/searchUtils'
import type { ProductCardItem } from '~/data/products-types'
// toCardItem 由 Nitro 从 server/utils/ 自动导入

export interface ProductSearchItem extends ProductCardItem {
  searchText: string
}

// 模块级缓存：searchText 是产品+分类的纯函数，构建一次后跨请求复用，避免每次请求全量 map + O(n×m) 查分类。
let _searchIndex: ProductSearchItem[] | null = null

export default defineEventHandler(() => {
  if (_searchIndex) return _searchIndex

  _searchIndex = getAllProducts().map<ProductSearchItem>((product) => {
    const category = productCategories.find((item) => item.slug === product.category)
    const searchText = normalizeSearchText(
      [
        product.name,
        product.nameZh,
        product.shortDesc,
        product.shortDescZh,
        product.slug,
        product.category,
        category?.name,
        category?.nameZh
      ]
        .filter(Boolean)
        .join(' ')
    )

    return { ...toCardItem(product), searchText }
  })

  return _searchIndex
})
