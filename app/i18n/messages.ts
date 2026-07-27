// 中英文双语字典 —— UI 静态文案
// 数据型文案（advantages/cases/process/certifications 等）直接在数据文件里加 zh 字段，
// 此处只收录页面里硬编码的 UI 文案（标题、按钮、标签等）。
export type Locale = 'en' | 'zh'

export const messages = {
  en: {
    // 通用
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.viewMore': 'View More',
    'common.getQuote': 'Get a Quote',
    'common.contactUs': 'Contact Us',
    'common.readMore': 'Read More',
    'common.backToProducts': 'Back to Products',
    'common.relatedProducts': 'Related Products',
    'common.allRightsReserved': 'All rights reserved.',

    // 导航
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.certifications': 'Certifications',
    'nav.manufacturing': 'Manufacturing',
    'nav.howItWorks': 'How It Works',
    'nav.contact': 'Contact',
    'nav.allProducts': 'All Products',

    // 产品分类
    'cat.gummies': 'Gummies',
    'cat.softgels': 'Softgels',
    'cat.tablets': 'Tablets',
    'cat.hard-capsules': 'Hard Capsules',
    'cat.powders': 'Powders',
    'cat.liquid-drops': 'Liquid Drops',

    // 首页 Hero
    'hero.eyebrow': 'Premium OEM/ODM Manufacturer',
    'hero.title': 'Your Trusted Partner for Nutritional Supplements',
    'hero.subtitle': '10 years of manufacturing expertise. 6 dosage forms. 80+ countries served. From concept to container — one partner, one roof.',
    'hero.cta.primary': 'Start Your Project',
    'hero.cta.secondary': 'Explore Products',
    'hero.stat1': 'Years of Manufacturing',
    'hero.stat2': 'm² Production Facility',
    'hero.stat3': 'Automated Lines',
    'hero.stat4': 'Countries Served',
    'hero.slide1': 'GMP-Certified Manufacturing',
    'hero.slide2': 'Full Range of Dosage Forms',
    'hero.slide3': 'In-House R&D & QC Lab',
    'hero.slide4': 'Trusted by 80+ Countries',

    // 优势模块
    'adv.eyebrow': 'Why Choose MILDY',
    'adv.title': 'A Manufacturing Partner You Can Trust',
    'adv.subtitle': 'Six core strengths that make global brands choose MILDY as their long-term OEM/ODM partner.',

    // 产品分类模块
    'pc.eyebrow': 'Our Products',
    'pc.title': 'Six Major Dosage Forms, Infinite Possibilities',
    'pc.subtitle': 'From gummies to liquid drops — explore our full range of supplement manufacturing capabilities.',
    'pc.explore': 'Explore {name}',
    'pc.viewAll': 'View All Products',

    // 合作模式模块
    'cm.eyebrow': 'Cooperation Models',
    'cm.title': 'Two Ways to Build Your Brand',
    'cm.subtitle': 'Whether you need fast market entry or a fully bespoke product, we have a model designed for your goals.',

    // 工厂展示模块
    'fs.eyebrow': 'Manufacturing Power',
    'fs.title': '20,000 m² of World-Class Production',
    'fs.subtitle': 'A purpose-built high-tech industrial park with automated lines, cleanrooms and in-house laboratories — engineered for volume, consistency and compliance.',
    'fs.stat1': 'm² Facility Area',
    'fs.stat2': 'Production Lines',
    'fs.stat3': 'Units / Year',
    'fs.stat4': 'Workshops',
    'fs.tour': 'Tour Our Facility',

    // 资质模块
    'cert.eyebrow': 'Certifications',
    'cert.title': 'Globally Certified, Export-Ready',
    'cert.subtitle': 'Our facilities meet the strictest international quality and food-safety standards — ready for your market.',
    'cert.viewAll': 'View All Certifications',

    // 流程模块
    'proc.eyebrow': 'How It Works',
    'proc.title': 'From Inquiry to Shipment in 6 Steps',
    'proc.subtitle': 'A clear, transparent process that takes you from first contact to a container on the water — typically 8–12 weeks.',
    'proc.seeFull': 'See Full Process',

    // 客户案例
    'cc.eyebrow': 'Client Success',
    'cc.title': 'Trusted by Brands Worldwide',
    'cc.subtitle': 'From startups to established multinationals, brands across 80+ countries rely on MILDY.',

    // 询价 CTA
    'cta.eyebrow': 'Ready to Start?',
    'cta.title': 'Get Your Custom Quote Today',
    'cta.subtitle': 'Tell us about your product idea and our team will respond within 24 hours with formulation options, MOQ and pricing.',
    'cta.benefit1': 'Free formulation consultation',
    'cta.benefit2': 'Samples within 7–15 days',
    'cta.benefit3': 'Dedicated export coordinator',
    'cta.benefit4': 'No-obligation quotation',

    // 页脚
    'footer.company': 'Company',
    'footer.products': 'Products',
    'footer.contact': 'Contact',
    'footer.whatsapp': 'WhatsApp Chat',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.tagline': 'Health Group',

    // 产品列表页
    'products.eyebrow': 'Our Products',
    'products.title': 'Full-Range Supplement Manufacturing',
    'products.subtitle': 'Six major dosage forms, hundreds of mature formulas, unlimited customization possibilities.',
    'products.showing': 'Showing {shown} of {total} products',
    'products.empty': 'No products in this category yet.',
    'products.prev': 'Prev',
    'products.next': 'Next',

    // 产品详情页
    'detail.description': 'Product Description',
    'detail.features': 'Key Features',
    'detail.specs': 'Specifications',
    'detail.gallery': 'Product Gallery',
    'detail.moq': 'Minimum Order Quantity',
    'detail.category': 'Dosage Form',
    'detail.requestQuote': 'Request a Quote',
    'detail.downloadSpec': 'Download Spec Sheet',
    'detail.share': 'Share',
    'detail.back': 'Back to Products',
    'detail.related': 'You May Also Like',
    'detail.overview': 'Overview',

    // 通用按钮/标签
    'btn.sendInquiry': 'Send Inquiry',
    'btn.submit': 'Submit',
    'btn.send': 'Send',
    'btn.getStarted': 'Get Started',
    'btn.talkToExpert': 'Talk to an Expert',
  },

  zh: {
    // 通用
    'common.learnMore': '了解更多',
    'common.viewAll': '查看全部',
    'common.viewMore': '查看更多',
    'common.getQuote': '获取报价',
    'common.contactUs': '联系我们',
    'common.readMore': '阅读更多',
    'common.backToProducts': '返回产品列表',
    'common.relatedProducts': '相关产品',
    'common.allRightsReserved': '版权所有。',

    // 导航
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.products': '产品中心',
    'nav.services': '服务',
    'nav.certifications': '资质认证',
    'nav.manufacturing': '生产实力',
    'nav.howItWorks': '合作流程',
    'nav.contact': '联系我们',
    'nav.allProducts': '全部产品',

    // 产品分类
    'cat.gummies': '软糖',
    'cat.softgels': '软胶囊',
    'cat.tablets': '片剂',
    'cat.hard-capsules': '硬胶囊',
    'cat.powders': '粉剂',
    'cat.liquid-drops': '口服液',

    // 首页 Hero
    'hero.eyebrow': '高端 OEM/ODM 制造商',
    'hero.title': '您值得信赖的营养补充剂合作伙伴',
    'hero.subtitle': '10 年制造经验 · 6 大剂型 · 服务 80+ 国家。从概念到出货——一个合作伙伴,一站搞定。',
    'hero.cta.primary': '开始您的项目',
    'hero.cta.secondary': '浏览产品',
    'hero.stat1': '年制造经验',
    'hero.stat2': '平方米生产基地',
    'hero.stat3': '条自动化产线',
    'hero.stat4': '服务国家',
    'hero.slide1': 'GMP 认证工厂',
    'hero.slide2': '全剂型产品覆盖',
    'hero.slide3': '自建研发质检实验室',
    'hero.slide4': '服务 80+ 国家客户',

    // 优势模块
    'adv.eyebrow': '为何选择 MILDY',
    'adv.title': '值得信赖的制造合作伙伴',
    'adv.subtitle': '六大核心优势,让全球品牌选择 MILDY 作为长期 OEM/ODM 合作伙伴。',

    // 产品分类模块
    'pc.eyebrow': '我们的产品',
    'pc.title': '六大剂型,无限可能',
    'pc.subtitle': '从软糖到口服液——探索我们全剂型的营养补充剂制造能力。',
    'pc.explore': '了解 {name}',
    'pc.viewAll': '查看全部产品',

    // 合作模式模块
    'cm.eyebrow': '合作模式',
    'cm.title': '打造您品牌的两种方式',
    'cm.subtitle': '无论您需要快速切入市场,还是完全定制的产品,我们都有适合您的合作模式。',

    // 工厂展示模块
    'fs.eyebrow': '制造实力',
    'fs.title': '20,000 平方米世界级生产基地',
    'fs.subtitle': '专用的高科技产业园,配备自动化产线、洁净车间和自建实验室——为规模化、一致性和合规性而建。',
    'fs.stat1': '平方米厂区',
    'fs.stat2': '条产线',
    'fs.stat3': '年产能',
    'fs.stat4': '大车间',
    'fs.tour': '参观工厂',

    // 资质模块
    'cert.eyebrow': '资质认证',
    'cert.title': '全球认证,出口就绪',
    'cert.subtitle': '我们的工厂符合最严苛的国际质量与食品安全标准——为您的市场做好准备。',
    'cert.viewAll': '查看全部认证',

    // 流程模块
    'proc.eyebrow': '合作流程',
    'proc.title': '从询盘到出货,6 步完成',
    'proc.subtitle': '清晰透明的流程,从首次接触到出货通常只需 8–12 周。',
    'proc.seeFull': '查看完整流程',

    // 客户案例
    'cc.eyebrow': '客户成功案例',
    'cc.title': '全球品牌信赖之选',
    'cc.subtitle': '从初创公司到跨国企业,80+ 国家的品牌选择 MILDY。',

    // 询价 CTA
    'cta.eyebrow': '准备开始了吗?',
    'cta.title': '立即获取定制报价',
    'cta.subtitle': '告诉我们您的产品想法,我们的团队将在 24 小时内回复配方方案、起订量和报价。',
    'cta.benefit1': '免费配方咨询',
    'cta.benefit2': '7–15 天提供样品',
    'cta.benefit3': '专属出口对接人',
    'cta.benefit4': '无义务报价',

    // 页脚
    'footer.company': '公司',
    'footer.products': '产品',
    'footer.contact': '联系方式',
    'footer.whatsapp': 'WhatsApp 在线咨询',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.tagline': '健康集团',

    // 产品列表页
    'products.eyebrow': '我们的产品',
    'products.title': '全剂型营养补充剂制造',
    'products.subtitle': '六大剂型,数百款成熟配方,无限定制可能。',
    'products.showing': '显示 {shown} / 共 {total} 款产品',
    'products.empty': '该分类暂无产品。',
    'products.prev': '上一页',
    'products.next': '下一页',

    // 产品详情页
    'detail.description': '产品描述',
    'detail.features': '核心特点',
    'detail.specs': '产品规格',
    'detail.gallery': '产品图片',
    'detail.moq': '最小起订量',
    'detail.category': '剂型',
    'detail.requestQuote': '索取报价',
    'detail.downloadSpec': '下载规格书',
    'detail.share': '分享',
    'detail.back': '返回产品列表',
    'detail.related': '您可能也喜欢',
    'detail.overview': '概述',

    // 通用按钮/标签
    'btn.sendInquiry': '发送询盘',
    'btn.submit': '提交',
    'btn.send': '发送',
    'btn.getStarted': '立即开始',
    'btn.talkToExpert': '咨询专家',
  }
} as const

export type MessageKey = keyof typeof messages.en
