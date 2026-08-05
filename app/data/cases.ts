// 客户案例 / 合作模式 / 关于我们补充数据

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
      'Low MOQ from 500 bottles',
      'Lead time 25–35 days',
      'Your brand, your artwork',
      'Minimal upfront investment'
    ],
    featuresZh: [
      '100+ 款成熟配方',
      '最低起订 500 瓶',
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
  { year: '2020', title: 'Founded', titleZh: '公司成立', desc: 'MILDY Health established as a nutritional supplement manufacturer in Guangzhou.', descZh: 'MILDY 健康成立,定位为广州的营养补充剂制造商。' },
  { year: '2021', title: 'GMP Certified', titleZh: 'GMP 认证', desc: 'Obtained national GMP certification and expanded into softgel production.', descZh: '获得国家 GMP 认证,扩展软胶囊生产。' },
  { year: '2022', title: 'Global Export', titleZh: '全球出口', desc: 'Began exporting to Europe and North America; earned FDA facility registration.', descZh: '开始出口欧洲和北美;获得 FDA 工厂注册。' },
  { year: '2023', title: 'New Mega Facility', titleZh: '新工厂投产', desc: 'Opened the 20,000 m² high-tech industrial park with 8 automated lines.', descZh: '20,000 平方米高科技产业园落成,配备 8 条自动化产线。' },
  { year: '2024', title: 'BRC & NSF', titleZh: 'BRC 与 NSF', desc: 'Achieved BRCGS AA and NSF GMP registration, entering Tier-1 global supply.', descZh: '获得 BRCGS AA 级和 NSF GMP 注册,跻身全球一级供应商。' },
  { year: '2025', title: '30+ Countries', titleZh: '30+ 国家', desc: 'Products now serve brands across 30+ countries with full sea-freight export.', descZh: '产品已服务 30+ 国家的品牌,具备完整海运出口能力。' }
]

// 关于我们 —— 团队
export interface TeamMember {
  name: string
  role: string
  roleZh: string
  /** 头像图片 URL（可选；留空则前端用首字母缩写头像，避免使用无意义占位人像） */
  avatar?: string
}

export const team: TeamMember[] = [
  { name: 'Fina', role: 'Chief R&D Officer', roleZh: '首席研发官' },
  { name: 'Ian', role: 'Head of International Sales', roleZh: '国际销售负责人' },
  { name: 'Phoenix He', role: 'Quality Director', roleZh: '质量总监' },
  { name: 'Lira', role: 'Export Logistics Manager', roleZh: '出口物流经理' }
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
    desc: '8 fully-automated lines for gummies, softgels, tablets, capsules, powders and liquids — engineered for high-volume, consistent output.',
    descZh: '8 条全自动化产线,覆盖软糖、软胶囊、片剂、胶囊、粉剂和液体制剂——为高产量、一致性输出而设计。',
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
