// 核心优势 —— 首页模块3
export interface Advantage {
  icon: string
  title: string
  titleZh: string
  desc: string
  descZh: string
}

export const advantages: Advantage[] = [
  {
    icon: 'medal',
    title: '10+ Years of Experience',
    titleZh: '10+ 年制造经验',
    desc: 'A decade of expertise in nutritional supplement manufacturing, trusted by brands across 80+ countries worldwide.',
    descZh: '十年营养补充剂制造专业经验,服务全球 80+ 国家的品牌客户。'
  },
  {
    icon: 'layers',
    title: 'Full Dosage Forms',
    titleZh: '全剂型覆盖',
    desc: 'Gummies, softgels, tablets, hard capsules, powders and liquid drops — all manufactured under one roof.',
    descZh: '软糖、软胶囊、片剂、硬胶囊、粉剂、口服液——同一厂区全剂型生产。'
  },
  {
    icon: 'shield-check',
    title: 'International Certifications',
    titleZh: '国际权威认证',
    desc: 'GMP, FDA, NSF, BRC, HALAL and ISO certified facilities meeting the strictest global quality standards.',
    descZh: 'GMP、FDA、NSF、BRC、HALAL、ISO 认证工厂,符合最严苛的全球质量标准。'
  },
  {
    icon: 'flow',
    title: 'One-Stop Service',
    titleZh: '一站式服务',
    desc: 'From R&D and formulation to packaging, registration and sea freight export — a complete turnkey solution.',
    descZh: '从研发配方到包装、备案、海运出口——完整的交钥匙解决方案。'
  },
  {
    icon: 'globe',
    title: 'Stable Export Capability',
    titleZh: '稳定出口能力',
    desc: 'Mature supply chain and logistics network supporting reliable, on-time delivery to Europe, Americas and SEA.',
    descZh: '成熟的供应链与物流网络,支持对欧洲、美洲、东南亚的稳定按时交付。'
  },
  {
    icon: 'flask',
    title: 'In-House QC Laboratory',
    titleZh: '自建质检实验室',
    desc: 'Dedicated quality-control lab testing every batch for purity, potency and safety before shipment.',
    descZh: '专业质检实验室,对每批次进行纯度、含量和安全性检测后方可出货。'
  }
]
