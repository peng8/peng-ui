// 客户案例 / 合作模式 / 关于我们补充数据
export interface ClientCase {
  brand: string
  region: string
  regionZh: string
  category: string
  categoryZh: string
  quote: string
  quoteZh: string
  author: string
  authorTitle: string
  authorTitleZh: string
  logo: string
}

export const clientCases: ClientCase[] = [
  {
    brand: 'NutriVita Wellness',
    region: 'United States',
    regionZh: '美国',
    category: 'Multivitamin Gummies',
    categoryZh: '复合维生素软糖',
    quote:
      'MILDY handled everything from formulation to FDA-compliant packaging. Our private-label gummies launched on schedule and quality has been flawless across 4 reorders.',
    quoteZh: 'MILDY 负责从配方到 FDA 合规包装的全部工作。我们的自有品牌软糖如期上市,四次返单质量始终如一。',
    author: 'Sarah Mitchell',
    authorTitle: 'Procurement Director',
    authorTitleZh: '采购总监',
    logo: 'https://picsum.photos/seed/mildy-logo-1/200/200'
  },
  {
    brand: 'EuroPharm Naturals',
    region: 'Germany',
    regionZh: '德国',
    category: 'Omega-3 Softgels',
    categoryZh: 'Omega-3 软胶囊',
    quote:
      'Their BRC-certified facility and transparent QC reports gave our buyers full confidence. Truly a reliable European-ready manufacturing partner.',
    quoteZh: '他们 BRC 认证的工厂和透明的质检报告让我们的采购方完全放心。真正可靠的欧洲市场制造合作伙伴。',
    author: 'Lukas Becker',
    authorTitle: 'Supply Chain Manager',
    authorTitleZh: '供应链经理',
    logo: 'https://picsum.photos/seed/mildy-logo-2/200/200'
  },
  {
    brand: 'VitaDrop Asia',
    region: 'Singapore',
    regionZh: '新加坡',
    category: 'Vitamin D3 Drops',
    categoryZh: '维生素 D3 滴剂',
    quote:
      'Low MOQ white-label was exactly what our startup needed. From sample to first container in under 8 weeks — outstanding support.',
    quoteZh: '低起订量白标方案正是我们初创公司所需的。从样品到首柜出货不到 8 周——支持出色。',
    author: 'Wei Ling Tan',
    authorTitle: 'Founder & CEO',
    authorTitleZh: '创始人兼 CEO',
    logo: 'https://picsum.photos/seed/mildy-logo-3/200/200'
  },
  {
    brand: 'PureLeaf Nutrition',
    region: 'United Kingdom',
    regionZh: '英国',
    category: 'Marine Collagen Sticks',
    categoryZh: '海洋胶原蛋白粉棒',
    quote:
      'The ODM team developed a unique flavor system for our collagen sticks that no other factory could match. A genuine innovation partner.',
    quoteZh: 'ODM 团队为我们的胶原蛋白粉棒开发了独特的风味体系,其他工厂无法匹敌。真正的创新合作伙伴。',
    author: 'James Whitford',
    authorTitle: 'Brand Owner',
    authorTitleZh: '品牌主理人',
    logo: 'https://picsum.photos/seed/mildy-logo-4/200/200'
  }
]

export interface PartnerLogo {
  name: string
  logo: string
}

export const partnerLogos: PartnerLogo[] = [
  { name: 'NutriVita', logo: 'https://picsum.photos/seed/mildy-pl-1/240/120' },
  { name: 'EuroPharm', logo: 'https://picsum.photos/seed/mildy-pl-2/240/120' },
  { name: 'VitaDrop', logo: 'https://picsum.photos/seed/mildy-pl-3/240/120' },
  { name: 'PureLeaf', logo: 'https://picsum.photos/seed/mildy-pl-4/240/120' },
  { name: 'HealthFirst', logo: 'https://picsum.photos/seed/mildy-pl-5/240/120' },
  { name: 'WellCore', logo: 'https://picsum.photos/seed/mildy-pl-6/240/120' },
  { name: 'NatureOne', logo: 'https://picsum.photos/seed/mildy-pl-7/240/120' },
  { name: 'BioPlus', logo: 'https://picsum.photos/seed/mildy-pl-8/240/120' }
]

// 两大合作模式 —— 首页模块5 / Services 页
export interface CooperationMode {
  key: 'white-label' | 'odm'
  name: string
  nameZh: string
  subtitle: string
  subtitleZh: string
  desc: string
  descZh: string
  best: string
  bestZh: string
  features: string[]
  featuresZh: string[]
  image: string
}

export const cooperationModes: CooperationMode[] = [
  {
    key: 'white-label',
    name: 'White Label',
    nameZh: '白标定制',
    subtitle: 'Fast to Market',
    subtitleZh: '快速上市',
    desc: 'Choose from our mature, ready-to-market formulas and apply your brand. Lowest MOQ, shortest lead time — ideal for launching new SKUs quickly.',
    descZh: '从我们成熟、即用即售的配方中选择并贴上您的品牌。起订量最低、交期最短——适合快速推出新品。',
    best: 'Best for: new brands, fast launches, proven formulas',
    bestZh: '适用:新品牌、快速上市、成熟配方',
    features: [
      '100+ ready mature formulas',
      'Low MOQ from 30k units',
      'Lead time 25–35 days',
      'Your brand, your artwork',
      'Minimal upfront investment'
    ],
    featuresZh: [
      '100+ 款成熟配方',
      '最低起订 3 万件',
      '交期 25–35 天',
      '您的品牌、您的包装设计',
      '前期投入少'
    ],
    image: '/images/services/white-label.jpg'
  },
  {
    key: 'odm',
    name: 'ODM Custom',
    nameZh: 'ODM 定制',
    subtitle: 'Deep Customization',
    subtitleZh: '深度定制',
    desc: 'Full turnkey development from concept to finished product — bespoke formulation, unique dosage form, custom packaging and regulatory support.',
    descZh: '从概念到成品的完整交钥匙开发——定制配方、独特剂型、定制包装和法规支持。',
    best: 'Best for: established brands, unique selling points, IP ownership',
    bestZh: '适用:成熟品牌、独特卖点、知识产权归属',
    features: [
      'Bespoke R&D formulation',
      'Unique shapes, flavors & formats',
      'Patent-ready IP ownership',
      'Custom structural packaging',
      'Full regulatory & registration support'
    ],
    featuresZh: [
      '定制研发配方',
      '独特形状、口味与剂型',
      '可申请专利的 IP 归属',
      '定制结构性包装',
      '完整法规与备案支持'
    ],
    image: '/images/banner-frames/frame-10s.jpg'
  }
]

// 关于我们 —— 发展历程里程碑
export interface Milestone {
  year: string
  title: string
  titleZh: string
  desc: string
  descZh: string
}

export const milestones: Milestone[] = [
  { year: '2004', title: 'Founded', titleZh: '公司成立', desc: 'MILDY Health established as a nutritional supplement manufacturer in Guangzhou.', descZh: 'MILDY 健康成立,定位为广州的营养补充剂制造商。' },
  { year: '2010', title: 'GMP Certified', titleZh: 'GMP 认证', desc: 'Obtained national GMP certification and expanded into softgel production.', descZh: '获得国家 GMP 认证,扩展软胶囊生产。' },
  { year: '2015', title: 'Global Export', titleZh: '全球出口', desc: 'Began exporting to Europe and North America; earned FDA facility registration.', descZh: '开始出口欧洲和北美;获得 FDA 工厂注册。' },
  { year: '2019', title: 'New Mega Facility', titleZh: '新工厂投产', desc: 'Opened the 60,000 m² high-tech industrial park with 12 automated lines.', descZh: '60,000 平方米高科技产业园落成,配备 12 条自动化产线。' },
  { year: '2022', title: 'BRC & NSF', titleZh: 'BRC 与 NSF', desc: 'Achieved BRCGS AA and NSF GMP registration, entering Tier-1 global supply.', descZh: '获得 BRCGS AA 级和 NSF GMP 注册,跻身全球一级供应商。' },
  { year: '2024', title: '80+ Countries', titleZh: '80+ 国家', desc: 'Products now serve brands across 80+ countries with full sea-freight export.', descZh: '产品已服务 80+ 国家的品牌,具备完整海运出口能力。' }
]

// 关于我们 —— 团队
export interface TeamMember {
  name: string
  role: string
  roleZh: string
  avatar: string
}

export const team: TeamMember[] = [
  { name: 'Dr. Chen Ming', role: 'Chief R&D Officer', roleZh: '首席研发官', avatar: 'https://picsum.photos/seed/mildy-team-1/400/400' },
  { name: 'Linda Wang', role: 'Head of International Sales', roleZh: '国际销售负责人', avatar: 'https://picsum.photos/seed/mildy-team-2/400/400' },
  { name: 'Mark Liu', role: 'Quality Director', roleZh: '质量总监', avatar: 'https://picsum.photos/seed/mildy-team-3/400/400' },
  { name: 'Sophie Zhang', role: 'Export Logistics Manager', roleZh: '出口物流经理', avatar: 'https://picsum.photos/seed/mildy-team-4/400/400' }
]

// 生产实力 —— 车间 / 产线 / 实验室图文
export interface FacilityItem {
  title: string
  titleZh: string
  desc: string
  descZh: string
  image: string
}

export const facilities: FacilityItem[] = [
  {
    title: 'GMP Cleanroom Workshops',
    titleZh: 'GMP 洁净车间',
    desc: 'Class 100,000 (D-class) cleanrooms with positive-pressure HVAC, air showers and full environmental monitoring across all production zones.',
    descZh: '十万级(D 级)洁净室,配备正压 HVAC、风淋室和全线环境监测。',
    image: '/images/manufacturing/facility/gmp-cleanroom.jpeg'
  },
  {
    title: 'Automated Production Lines',
    titleZh: '自动化产线',
    desc: '12 fully-automated lines for gummies, softgels, tablets, capsules, powders and liquids — engineered for high-volume, consistent output.',
    descZh: '12 条全自动化产线,覆盖软糖、软胶囊、片剂、胶囊、粉剂和液体制剂——为高产量、一致性输出而设计。',
    image: '/images/manufacturing/facility/automation-line.jpeg'
  },
  {
    title: 'R&D Laboratory',
    titleZh: '研发实验室',
    desc: 'A dedicated formulation lab developing 30+ new recipes annually, with pilot-scale equipment for fast, accurate sampling.',
    descZh: '专属配方实验室,每年开发 30+ 款新配方,配备中试设备以实现快速精准打样。',
    image: '/images/manufacturing/facility/rd-laboratory.jpeg'
  },
  {
    title: 'Fresh from the Line',
    titleZh: '新鲜出炉',
    desc: 'Gummies, softgels and tablets coming off the line moments after molding — still warm, perfectly shaped and ready for cooling, coating and packaging.',
    descZh: '软糖、软胶囊和片剂成型后刚下线——余温尚存、形态完美,随即进入冷却、包衣与包装工序。',
    image: '/images/banner-frames/frame-03s.jpg'
  },
  {
    title: 'Warehousing & Cold Storage',
    titleZh: '仓储与冷链',
    desc: 'Climate-controlled raw material and finished-goods warehouses with full FIFO traceability and quarantine zones.',
    descZh: '温控原料仓与成品仓,完整 FIFO 可追溯,设隔离区。',
    image: '/images/manufacturing/facility/warehouse-coldchain.jpeg'
  },
  {
    title: 'Packaging & Logistics',
    titleZh: '包装与物流',
    desc: 'In-house carton packing, palletizing and container loading — integrated with sea-freight export documentation.',
    descZh: '厂内装箱、码垛和装柜——与海运出口单证一体化衔接。',
    image: '/images/manufacturing/facility/packaging-logistics.jpeg'
  }
]

// 品控流程
export interface QcStep {
  title: string
  titleZh: string
  desc: string
  descZh: string
}

export const qcSteps: QcStep[] = [
  { title: 'Raw Material Inspection', titleZh: '原料检验', desc: 'Identity, potency and contaminant testing on every incoming lot.', descZh: '对每批进料进行鉴别、含量和污染物检测。' },
  { title: 'In-Process Control', titleZh: '过程控制', desc: 'Weight variation, hardness, disintegration and microbial checks during production.', descZh: '生产过程中检测重量差异、硬度、崩解时限和微生物。' },
  { title: 'Finished Product Testing', titleZh: '成品检测', desc: 'Full assay of active ingredients, heavy metals and microbiology.', descZh: '全面检测有效成分含量、重金属和微生物指标。' },
  { title: 'Stability & Batch Release', titleZh: '稳定性与放行', desc: 'COA issued per batch; retained samples monitored for shelf-life stability.', descZh: '每批次出具 COA;留样持续监测保质期稳定性。' }
]
