// 服务端产品映射工具 —— 供各 API 端点共用，避免 toCardItem 重复定义
import type { Product, ProductCardItem } from '~/data/products-types'

/** Product → ProductCardItem（列表卡片精简字段） */
export const toCardItem = (product: Product): ProductCardItem => ({
  slug: product.slug,
  name: product.name,
  nameZh: product.nameZh,
  category: product.category,
  cover: product.cover,
  shortDesc: product.shortDesc,
  shortDescZh: product.shortDescZh,
  moq: product.moq
})
