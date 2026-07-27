// https://nuxt.com/docs/api/configuration/nuxt-config
import { products, productCategories } from './app/data/products'

// 产品列表分页：每页 9 个
const PAGE_SIZE = 9
// 生成某剂型某页的 URL（路径参数式，便于 SSG 预渲染独立 HTML）
// 分类路由放在 /products/categories/ 前缀下，避免与详情页 /products/[slug] 冲突
const listUrl = (cat: string, page: number) =>
  cat === 'all'
    ? page <= 1 ? '/products' : `/products/page/${page}`
    : page <= 1 ? `/products/categories/${cat}` : `/products/categories/${cat}/page/${page}`
// 取所有需要预渲染的列表路由（全部 + 各分类的所有页码）
const getAllListRoutes = () => {
  const routes: string[] = ['/products']
  const cats = ['all', ...productCategories.map((c) => c.slug)]
  for (const cat of cats) {
    const count = cat === 'all' ? products.length : products.filter((p) => p.category === cat).length
    const total = Math.max(1, Math.ceil(count / PAGE_SIZE))
    for (let p = 2; p <= total; p++) routes.push(listUrl(cat, p))
    if (cat !== 'all') routes.push(listUrl(cat, 1))
  }
  return routes
}

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  // 产品路由由数据驱动显式预渲染 ——
  // 1. 详情页 /products/[slug]：列表有分页，crawlLinks 无法稳定发现第 2 页之后的产品链接
  // 2. 列表分页/分类页 /products/page/N、/products/[cat]、/products/[cat]/page/N：
  //    虽用 <NuxtLink> 可被 crawlLinks 发现，但显式注入确保全量生成独立 HTML
  hooks: {
    'nitro:config': (nitroConfig) => {
      nitroConfig.prerender ||= {}
      nitroConfig.prerender.routes ||= []
      nitroConfig.prerender.routes.push(...products.map((p) => `/products/${p.slug}`))
      nitroConfig.prerender.routes.push(...getAllListRoutes())
    }
  },

  // 默认开启 SSR，既能 `npm run dev` 跑动态，也能 `npm run generate` 生成全静态站点。
  ssr: true,

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/sitemap'],

  // 站点绝对地址 —— sitemap / canonical / og:url 的统一基准（SEO 必需）
  site: {
    url: 'https://www.mildy-health.com',
    name: 'MILDY Health'
  },

  // 自动生成 sitemap.xml + robots.txt（GitHub Pages 静态托管同样生效）
  sitemap: {
    // 动态路由（产品详情/分页/分类）由上面 nitro.prerender 显式列出，
    // sitemap 默认会抓取已预渲染的链接，无需额外 sources
    autoLastmod: true
  },

  // Web3Forms 询盘表单 access_key —— 去 https://web3forms.com 用邮箱注册即可获取
  // 该 key 设计为前端可见（类似 reCAPTCHA site key），可安全公开
  // 也可通过环境变量 NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY 覆盖
  runtimeConfig: {
    public: {
      web3formsAccessKey: 'b07fa823-6ec0-4508-abb1-244849ee6019', // ← 在此填入你的 access_key
      // Google Analytics 4 衡量 ID（gtag.js）；可通过环境变量 NUXT_PUBLIC_GA_ID 覆盖
      gaId: 'G-16K2YJ87K0'
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    // CNAME = www.mildy-health.com，使用自定义域名，部署在根路径。
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en' },
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

  // 所有图片已本地化为站内相对路径（含产品图，见 scripts/localize-product-images.mjs），
  // IPX 在 SSG 时统一预渲染为 WebP + 响应式多尺寸，无需外部域名白名单。
  image: {
    format: ['webp']
  },

  nitro: {
    prerender: {
      // 抓取页面内所有 <NuxtLink>，自动预渲染整站为静态 HTML。
      crawlLinks: true,
      routes: ['/', '/404.html'],
      failOnError: false
    }
  }
})
