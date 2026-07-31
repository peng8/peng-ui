// GET /api/products/search-index — lean data for client-side product search.
import { productCategories } from '~/data/products'
import { getAllProducts } from '~/data/products-mutations'
import type { ProductCardItem } from '~/data/products-types'

export interface ProductSearchItem extends ProductCardItem {
  searchText: string
}

const normalizeSearchText = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, ' ')
    .trim()

export default defineEventHandler(() => {
  return getAllProducts().map<ProductSearchItem>((product) => {
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

    return {
      slug: product.slug,
      name: product.name,
      nameZh: product.nameZh,
      category: product.category,
      cover: product.cover,
      shortDesc: product.shortDesc,
      shortDescZh: product.shortDescZh,
      moq: product.moq,
      searchText
    }
  })
})
