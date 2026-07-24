// 企业基础信息、联系方式、社媒 —— 占位数据，后续替换为真实内容
export interface SiteInfo {
  name: string
  nameCn: string
  brand: string
  tagline: string
  description: string
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
  stats: { value: string; label: string }[]
}

export const site: SiteInfo = {
  name: 'MILDY Health',
  nameCn: '迈德健康',
  brand: 'MILDY',
  tagline: 'Your Trusted OEM/ODM Partner for Nutritional Supplements',
  description:
    'MILDY Health is a leading dietary supplement contract manufacturer in China, delivering one-stop OEM/ODM private-label solutions for global brands, cross-border sellers and distributors.',
  founded: 2004,
  contact: {
    email: 'MildyHealth@163.com',
    phone: '+86 186-1300-0659',
    phoneHref: 'tel:+8618613000659',
    whatsapp: '+86 186-1300-0659',
    whatsappHref: 'https://wa.me/8618613000659',
    address: 'Building E, Feixingzhe Zhide Communication & Electronics Technology Park, No. 77 Yaxin South Street, Huadu District, Guangzhou, China',
    addressCn: '广州市花都区雅新南街77号飞行者智德通信电子科技园E栋',
    // 地图坐标(高德 GCJ-02 坐标系) —— 用于 Google Maps 嵌入定位
    lat: 23.359527,
    lng: 113.238178,
    hours: 'Mon – Sat, 9:00 – 18:00 (GMT+8)'
  },
  social: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
    { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
    { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
    { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' }
  ],
  stats: [
    { value: '20', label: 'Years of Manufacturing' },
    { value: '60,000', label: 'm² Production Facility' },
    { value: '12', label: 'Automated Production Lines' },
    { value: '80+', label: 'Countries Served' }
  ]
}

// 导航菜单
export interface NavItem {
  label: string
  to: string
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
