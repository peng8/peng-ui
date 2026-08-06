// 剂型分类轻量模块 —— 与 curatedProducts 分离，避免列表/分类/详情页为取 productCategories
// 而把整份 curated catalog(~160KB) 打包进客户端 bundle。
// 只含 6 大剂型的常量与查询，无重量级产品数据依赖。
import type { ProductCategory } from './products-types'
import { productImageUrl } from './productImageUrl'

export type { ProductCategory } from './products-types'

// ---------- 6 大剂型分类 ----------
export const productCategories: ProductCategory[] = [
  {
    slug: 'gummies',
    name: 'Gummies',
    nameZh: '软糖',
    short: 'Functional Gummies',
    shortZh: '功能软糖',
    desc: 'Pectin & gelatin based functional gummies in custom shapes, flavors and active ingredients. The most popular format for modern wellness brands.',
    descZh: '果胶与明胶基功能软糖,可定制形状、口味与活性成分。现代健康品牌最受欢迎的剂型。',
    image: productImageUrl('m43182_1782872439842-42.jpg'),
    features: ['Pectin / Gelatin / Vegan', 'Sugar-free options', 'Custom shapes & colors', 'Multivitamin, Omega-3, Biotin'],
    moq: '500 bottles',
    examples: []
  },
  {
    slug: 'softgels',
    name: 'Softgels',
    nameZh: '软胶囊',
    short: 'Softgel Capsules',
    shortZh: '软胶囊',
    desc: 'Advanced softgel encapsulation for oils and liquids — fish oil, CoQ10, vitamin E and custom lipid formulations with excellent bioavailability.',
    descZh: '先进的软胶囊包埋工艺,适用于鱼油、辅酶 Q10、维生素 E 及定制脂质配方,生物利用度出色。',
    image: productImageUrl('m0_mr_x3mrofkgwbc3a6fxekyni95g.jpg'),
    features: ['Fish oil / Plant oil', 'Enteric coating', 'Sustained release', 'High bioavailability'],
    moq: '500 bottles',
    examples: []
  },
  {
    slug: 'tablets',
    name: 'Tablets',
    nameZh: '片剂',
    short: 'Compressed Tablets',
    shortZh: '压片片剂',
    desc: 'High-speed tablet pressing for multivitamins, minerals and herbal blends — including coated, chewable and effervescent formats.',
    descZh: '高速压片工艺,适用于复合维生素、矿物质及草本复方——含包衣片、咀嚼片与泡腾片。',
    image: productImageUrl('m0_fc_3ofc52fdgwjb63qbe6hejlys.png'),
    features: ['Film / Sugar coating', 'Chewable & effervescent', 'High-precision dosing', '24-station rotary press'],
    moq: '500 bottles',
    examples: []
  },
  {
    slug: 'hard-capsules',
    name: 'Hard Capsules',
    nameZh: '硬胶囊',
    short: 'Hard Shell Capsules',
    shortZh: '硬胶囊',
    desc: 'Automatic hard capsule filling for powders, granules and pellets. Vegetarian (HPMC) and gelatin shell options available.',
    descZh: '全自动硬胶囊灌装,适用于粉剂、颗粒与微丸。可选植物(HPMC)与明胶胶囊壳。',
    image: productImageUrl('m0_wj_r0wj4jw9yjqexhj9acgq2g62.png'),
    features: ['Gelatin / HPMC vegan', 'Probiotics & enzymes', 'Delayed release', 'Plant extract blends'],
    moq: '500 bottles',
    examples: []
  },
  {
    slug: 'powders',
    name: 'Powders',
    nameZh: '粉剂',
    short: 'Powder & Sticks',
    shortZh: '粉剂条包',
    desc: 'Powder blending, granulation and stick-pack filling — perfect for protein, collagen, greens and electrolyte drink mixes.',
    descZh: '粉剂混合、制粒与条包填充——蛋白、可溶性胶原蛋白、绿粉及电解质冲剂的理想之选。',
    image: productImageUrl('m0_ht_a7htd0actxoxfxttxb4wwedz.jpg'),
    features: ['Stick packs & tubs', 'Instant dissolution', 'Collagen & protein', 'Custom flavor systems'],
    moq: '500 bottles',
    examples: []
  },
  {
    slug: 'liquid-drops',
    name: 'Liquid Drops',
    nameZh: '口服液',
    short: 'Liquid & Oral Drops',
    shortZh: '口服液滴剂',
    desc: 'Liquid filling for oral drops, tinctures and sprays — including vitamin D3 drops, melatonin and herbal liquid extracts.',
    descZh: '稳定液体制造,适用于口服液、滴剂与补充剂——瓶装/滴管配置。',
    image: productImageUrl('m0_xo_wuxou4yvvflxv6xw7c0jcbjh.jpg'),
    features: ['Glass / PET bottles', 'Dropper & spray', 'Oil & water base', 'Kids & infant formats'],
    moq: '500 bottles',
    examples: []
  }
]

/** 按 slug 查剂型分类 */
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug)
}