// https://nuxt.com/docs/api/configuration/nuxt-config
import { products } from './app/data/products'
import { getAllProductListRoutes } from './app/data/productRoutes'
import { DEFAULT_PRODUCT_IMAGE_BASE_URL } from './app/data/productImageUrl'

// 两个语言：英文为默认裸路径，中文使用 /zh 前缀
const LOCALES = ['en', 'zh'] as const

// 给一组裸路径乘以所有 locale：英文保留裸路径，中文生成 /zh/xxx
const withLocales = (bareRoutes: string[]) =>
  LOCALES.flatMap((l) => bareRoutes.map((r) => l === 'en' ? r : `/${l}${r === '/' ? '' : r}`))

const staticPageRoutes = [
  '/',
  '/about',
  '/products',
  '/services',
  '/manufacturing',
  '/how-it-works',
  '/contact',
  '/privacy',
  '/terms'
]

const canonicalBareRoutes = Array.from(new Set([
  ...staticPageRoutes,
  ...getAllProductListRoutes(),
  ...products.map((p) => `/products/${p.slug}`)
]))

const sitemapEntries = (locale: typeof LOCALES[number]) =>
  canonicalBareRoutes.map((route) => {
    const loc = locale === 'en' ? route : route === '/' ? '/zh' : `/zh${route}`
    const enHref = route
    const zhHref = route === '/' ? '/zh' : `/zh${route}`

    return {
      loc,
      alternatives: [
        { hreflang: 'en-US', href: enHref },
        { hreflang: 'zh-CN', href: zhHref },
        { hreflang: 'x-default', href: enHref }
      ]
    }
  })

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  // 产品路由由数据驱动显式预渲染 ——
  // 1. 详情页 /products/[slug]：列表有分页，crawlLinks 无法稳定发现第 2 页之后的产品链接
  // 2. 列表分页/分类页 /products/page/N、/products/[cat]、/products/[cat]/page/N：
  //    虽用 <NuxtLink> 可被 crawlLinks 发现，但显式注入确保全量生成独立 HTML
  // 双语改造：英文裸路径，中文 /zh 前缀；旧 /en 路径生成 301 静态兼容页。
  hooks: {
    'nitro:config': (nitroConfig) => {
      nitroConfig.prerender ||= {}
      nitroConfig.prerender.routes ||= []
      const productDetailRoutes = withLocales(products.map((p) => `/products/${p.slug}`))
      const listRoutes = withLocales(getAllProductListRoutes())
      const pageRoutes = withLocales(staticPageRoutes)
      nitroConfig.prerender.routes.push(
        ...pageRoutes,
        ...productDetailRoutes,
        ...listRoutes,
        '/404.html'
      )
    }
  },

  // 默认开启 SSR，既能 `npm run dev` 跑动态，也能 `npm run generate` 生成全静态站点。
  ssr: true,

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/sitemap', '@nuxtjs/i18n'],

  // 中英文分路径 SEO：英文使用裸路径，中文使用 /zh/...，利于 Google 分别收录 + hreflang
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'zh', language: 'zh-CN', name: '中文' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default', // 英文默认不带前缀，中文使用 /zh
    // 翻译文案统一来自 i18n/i18n.config.ts（复用原 messages.ts，保持 MessageKey 类型）
    vueI18n: '~/i18n/i18n.config.ts',
    // 默认入口固定到英文，中文页面仅通过 /zh/... 访问，避免浏览器语言把 / 自动导向中文。
    detectBrowserLanguage: false,
    baseUrl: 'https://www.mildy-health.com'
  },

  // 站点绝对地址 —— sitemap / canonical / og:url 的统一基准（SEO 必需）
  site: {
    url: 'https://www.mildy-health.com',
    name: 'MILDY Health'
  },

  // 自动生成 sitemap.xml + robots.txt（@nuxtjs/i18n 与 @nuxtjs/sitemap 原生集成，自动输出 hreflang）
  sitemap: {
    autoLastmod: true,
    autoI18n: false,
    sitemaps: {
      'en-US': { urls: sitemapEntries('en') },
      'zh-CN': { urls: sitemapEntries('zh') }
    }
  },

  // Web3Forms 询盘表单 access_key —— 去 https://web3forms.com 用邮箱注册即可获取
  // 该 key 设计为前端可见（类似 reCAPTCHA site key），可安全公开
  // 也可通过环境变量 NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY 覆盖
  runtimeConfig: {
    public: {
      web3formsAccessKey: 'b07fa823-6ec0-4508-abb1-244849ee6019', // ← 在此填入你的 access_key
      productImageBaseUrl: process.env.NUXT_PUBLIC_PRODUCT_IMAGE_BASE_URL || DEFAULT_PRODUCT_IMAGE_BASE_URL,
      // Google Analytics 4 衡量 ID（gtag.js）；可通过环境变量 NUXT_PUBLIC_GA_ID 覆盖
      gaId: 'G-16K2YJ87K0'
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    // CNAME = www.mildy-health.com，使用自定义域名，部署在根路径。
    baseURL: '/',
    head: {
      // <html lang> 由 @nuxtjs/i18n 按当前 locale 自动设置（en-US / zh-CN），不再硬编码
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
        // 注：不再输出 name="keywords"（Google 自 2009 起已完全忽略该标签）
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
        // Inter 字体已自托管在 public/fonts/，通过 main.css 的 @font-face 加载，
        // 无需再引用 Google Fonts（国内访问受限），零外部依赖
      ]
    }
  },

  // 所有图片已本地化为站内相对路径，
  // IPX 在 SSG 时统一预渲染为 WebP + 响应式多尺寸，无需外部域名白名单。
  image: {
    format: ['webp']
  },

  nitro: {
    prerender: {
      // 抓取页面内所有 <NuxtLink>，自动预渲染整站为静态 HTML。
      crawlLinks: false,
      routes: [],
      failOnError: true
    }
  }
})
