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

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  // Web3Forms 询盘表单 access_key —— 去 https://web3forms.com 用邮箱注册即可获取
  // 该 key 设计为前端可见（类似 reCAPTCHA site key），可安全公开
  // 也可通过环境变量 NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY 覆盖
  runtimeConfig: {
    public: {
      web3formsAccessKey: 'b07fa823-6ec0-4508-abb1-244849ee6019' // ← 在此填入你的 access_key
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    // CNAME = www.peng8.cn，使用自定义域名，部署在根路径。
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        // 全局默认 SEO，各页面可通过 useSeoMeta 覆盖
        {
          name: 'keywords',
          content:
            'nutritional supplement manufacturer, OEM ODM, private label, gummies, softgels, tablets, dietary supplement factory, contract manufacturing, MILDY'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
        // Inter 字体已自托管在 public/fonts/，通过 main.css 的 @font-face 加载，
        // 无需再引用 Google Fonts（国内访问受限），零外部依赖
      ]
    }
  },

  // 让 @nuxt/image 对外站图片直接透传，避免在 SSG 下生成额外 provider 配置。
  // img.yfisher.com 为产品实拍图 CDN（抓取自 honglanhealth.com）。
  image: {
    domains: ['picsum.photos', 'fastly.picsum.photos', 'img.yfisher.com'],
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
