// 资质认证 —— 首页模块7 / 资质认证页
export interface Certification {
  code: string
  name: string
  nameZh: string
  issuer: string
  issuerZh: string
  desc: string
  descZh: string
  image: string
  category: 'Quality' | 'Food Safety' | 'Market Access'
  categoryZh: '质量' | '食品安全' | '市场准入'
}

export const certifications: Certification[] = [
  {
    code: 'GMP',
    name: 'GMP Certified Manufacturing',
    nameZh: 'GMP 认证制造',
    issuer: 'National Medical Products Administration',
    issuerZh: '国家药品监督管理局',
    desc: 'Current Good Manufacturing Practice — strict controls across the entire production lifecycle.',
    descZh: '现行良好生产规范——贯穿整个生产生命周期的严格管控。',
    image: 'https://picsum.photos/seed/mildy-cert-gmp/600/800',
    category: 'Quality',
    categoryZh: '质量'
  },
  {
    code: 'FDA',
    name: 'FDA Registered Facility',
    nameZh: 'FDA 注册工厂',
    issuer: 'U.S. Food and Drug Administration',
    issuerZh: '美国食品药品监督管理局',
    desc: 'Facility registered with the US FDA for dietary supplement manufacturing and export.',
    descZh: '工厂在美国 FDA 注册,可进行膳食补充剂制造和出口。',
    image: 'https://picsum.photos/seed/mildy-cert-fda/600/800',
    category: 'Market Access',
    categoryZh: '市场准入'
  },
  {
    code: 'NSF',
    name: 'NSF GMP Registration',
    nameZh: 'NSF GMP 注册',
    issuer: 'NSF International',
    issuerZh: 'NSF International',
    desc: 'Independent third-party GMP registration for dietary supplement production.',
    descZh: '针对膳食补充剂生产的独立第三方 GMP 注册。',
    image: 'https://picsum.photos/seed/mildy-cert-nsf/600/800',
    category: 'Quality',
    categoryZh: '质量'
  },
  {
    code: 'BRC',
    name: 'BRC Food Safety',
    nameZh: 'BRC 食品安全',
    issuer: 'Brand Reputation through Compliance',
    issuerZh: 'Brand Reputation through Compliance',
    desc: 'BRCGS Food Safety AA rating — global benchmark for food safety management.',
    descZh: 'BRCGS 食品安全 AA 级——全球食品安全管理标杆。',
    image: 'https://picsum.photos/seed/mildy-cert-brc/600/800',
    category: 'Food Safety',
    categoryZh: '食品安全'
  },
  {
    code: 'HALAL',
    name: 'HALAL Certification',
    nameZh: 'HALAL 清真认证',
    issuer: 'MUI / JAKIM Recognized Body',
    issuerZh: 'MUI / JAKIM 认可机构',
    desc: 'Halal-certified production for markets across Southeast Asia and the Middle East.',
    descZh: '清真认证生产,服务东南亚和中东市场。',
    image: 'https://picsum.photos/seed/mildy-cert-halal/600/800',
    category: 'Market Access',
    categoryZh: '市场准入'
  },
  {
    code: 'ISO22000',
    name: 'ISO 22000:2018',
    nameZh: 'ISO 22000:2018',
    issuer: 'International Organization for Standardization',
    issuerZh: '国际标准化组织',
    desc: 'Food safety management system covering the full supply chain.',
    descZh: '覆盖完整供应链的食品安全管理体系。',
    image: 'https://picsum.photos/seed/mildy-cert-iso22/600/800',
    category: 'Food Safety',
    categoryZh: '食品安全'
  },
  {
    code: 'ISO9001',
    name: 'ISO 9001:2015',
    nameZh: 'ISO 9001:2015',
    issuer: 'International Organization for Standardization',
    issuerZh: '国际标准化组织',
    desc: 'Quality management system certified across all business operations.',
    descZh: '覆盖全部业务运营的质量管理体系认证。',
    image: 'https://picsum.photos/seed/mildy-cert-iso90/600/800',
    category: 'Quality',
    categoryZh: '质量'
  },
  {
    code: 'KOSHER',
    name: 'Kosher Certification',
    nameZh: 'Kosher 犹太认证',
    issuer: 'Recognized Kashrut Authority',
    issuerZh: '认可 Kashrut 权威机构',
    desc: 'Kosher-certified ingredients and production lines for global distribution.',
    descZh: '犹太认证的原料和产线,支持全球分销。',
    image: 'https://picsum.photos/seed/mildy-cert-kosher/600/800',
    category: 'Market Access',
    categoryZh: '市场准入'
  }
]
