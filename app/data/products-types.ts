// 产品类型定义（客户端 + 服务端共用，无数据依赖）

export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  slug: string
  name: string
  /** 所属剂型 slug，对应 productCategories.slug */
  category: string
  /** 封面大图（列表卡片 + 详情页主图默认） */
  cover: string
  /** 详情页缩略图画廊（点击切换主图） */
  gallery: string[]
  /** 列表卡片上的简短一句话 */
  shortDesc: string
  /** 详情页正文描述 */
  description: string
  /** 卖点特性（勾选列表） */
  features: string[]
  /** 规格参数表（键值对） */
  specs: ProductSpec[]
  /** 起订量 */
  moq: string
  // ---- 以下为中文字段（可选，缺失则回退到英文）----
  nameZh?: string
  shortDescZh?: string
  descriptionZh?: string
  featuresZh?: string[]
  specsZh?: ProductSpec[]
}

export interface ProductCategory {
  slug: string
  name: string
  nameZh: string
  short: string
  shortZh: string
  desc: string
  descZh: string
  image: string
  features: string[]
  moq: string
  examples: { name: string; image: string }[]
}

export type ProductCardItem = Pick<
  Product,
  'slug' | 'name' | 'nameZh' | 'category' | 'cover' | 'shortDesc' | 'shortDescZh' | 'moq'
>

export interface ProductListResponse {
  items: ProductCardItem[]
  total: number
  totalPages: number
  page: number
  category: string
}
