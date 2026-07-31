// 企业基础信息、联系方式、社媒
export const SITE_URL = 'https://www.mildy-health.com'

export interface SiteInfo {
  name: string
  nameCn: string
  brand: string
  tagline: string
  taglineZh: string
  description: string
  descriptionZh: string
  founded: number
  contact: {
    email: string
    phone: string
    phoneHref: string
    whatsapp: string
    whatsappHref: string
    address: string
    addressCn: string
    lat: number
    lng: number
    hours: string
  }
  social: { label: string; icon: string; href: string }[]
  stats: { value: string; label: string; labelZh: string }[]
}

export const site: SiteInfo = {
  name: 'MILDY Health',
  nameCn: '迈德健康',
  brand: 'MILDY',
  tagline: 'Your Trusted OEM/ODM Partner for Nutritional Supplements',
  taglineZh: '您值得信赖的营养补充剂 OEM/ODM 合作伙伴',
  description:
    'MILDY Health is a leading dietary supplement contract manufacturer in China, delivering one-stop OEM/ODM private-label solutions for global brands, cross-border sellers and distributors.',
  descriptionZh:
    'MILDY Health 是中国领先的营养补充剂合同制造商,为全球品牌、跨境卖家和分销商提供一站式 OEM/ODM 白标解决方案。',
  founded: 2016,
  contact: {
    email: 'MildyHealth@163.com',
    phone: '+86 186-1300-0659',
    phoneHref: 'tel:+8618613000659',
    whatsapp: '+86 186-1300-0659',
    whatsappHref: 'https://wa.me/8618613000659',
    address: 'Building E, Feixingzhe Zhide Communication & Electronics Technology Park, No. 77 Yaxin South Street, Huadu District, Guangzhou, China',
    addressCn: '广州市花都区雅新南街77号飞行者智德通信电子科技园E栋',
    // 地图坐标（高德 GCJ-02 坐标系）—— 注意：Google Maps 使用 WGS-84，
    // 直接用 GCJ-02 坐标在 Google Maps 上会有百米级偏移。若用于海外导航需先转 WGS-84。
    lat: 23.359527,
    lng: 113.238178,
    hours: 'Mon – Sat, 9:00 – 18:00 (GMT+8)'
  },
  social: [],
  stats: [
    { value: '10', label: 'Years of Manufacturing', labelZh: '年制造经验' },
    { value: '20,000', label: 'm² Production Facility', labelZh: '平方米生产基地' },
    { value: '8', label: 'Automated Production Lines', labelZh: '条自动化产线' },
    { value: '80+', label: 'Countries Served', labelZh: '服务国家和地区' }
  ]
}

// 导航菜单
export const navKeyMap = {
  '/': 'nav.home',
  '/about': 'nav.about',
  '/products': 'nav.products',
  '/services': 'nav.services',
  '/manufacturing': 'nav.manufacturing',
  '/how-it-works': 'nav.howItWorks',
  '/contact': 'nav.contact'
} as const

export interface NavItem {
  label: string
  to: keyof typeof navKeyMap
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Contact', to: '/contact' }
]
