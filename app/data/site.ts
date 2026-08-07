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
    /** WGS-84 坐标（Google Maps 用）；lat/lng 为 GCJ-02（国内高德用） */
    wgsLat: number
    wgsLng: number
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
  founded: 2020,
  contact: {
    email: 'MildyHealth@163.com',
    phone: '+86 186-1300-0659',
    phoneHref: 'tel:+8618613000659',
    whatsapp: '+86 186-1300-0659',
    whatsappHref: 'https://wa.me/8618613000659',
    address: 'Building E, Feixingzhe Zhide Communication & Electronics Technology Park, No. 77 Yaxin South Street, Huadu District, Guangzhou, China',
    addressCn: '广州市花都区雅新南街77号飞行者智德通信电子科技园E栋',
    // 地图坐标 —— 两套坐标系并存：
    // · lat/lng       = 高德 GCJ-02（火星坐标），用于国内高德/百度地图
    // · wgsLat/wgsLng = WGS-84，用于 Google Maps（contact 页 embed）
    // 两者不可混用：把 GCJ-02 直接喂给 Google Maps 会偏移约 620 米（本点实测 纬290m+经546m），
    // 客户按错图导航会找不到厂。GCJ-02→WGS-84 转换见下文注释的算法。
    lat: 23.359527,
    lng: 113.238178,
    // WGS-84：由上面 GCJ-02 经标准反解算法转出（迭代法，误差 <1m）
    wgsLat: 23.362132,
    wgsLng: 113.232837,
    hours: 'Mon – Sat, 9:00 – 18:00 (GMT+8)'
  },
  social: [],
  stats: [
    { value: '6', label: 'Years of Manufacturing', labelZh: '年制造经验' },
    { value: '20,000', label: 'm² Production Facility', labelZh: '平方米生产基地' },
    { value: '8', label: 'Automated Production Lines', labelZh: '条自动化产线' },
    { value: '30+', label: 'Countries Served', labelZh: '服务国家和地区' }
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
  '/blog': 'nav.blog',
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
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
]
