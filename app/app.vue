<script setup lang="ts">
import { site, SITE_URL } from '~/data/site'

const { isZh } = useLocale()

// Google Analytics 4（gtag.js）—— 来自 runtimeConfig.public.gaId
const gaId = useRuntimeConfig().public.gaId
if (gaId) {
  useHead({
    link: [
      { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' }
    ]
  })
}

onMounted(() => {
  if (!gaId) return
  const w = window as typeof window & {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    requestIdleCallback?: (cb: () => void) => number
  }
  const loadAnalytics = () => {
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${gaId}"]`)) return
    w.dataLayer = w.dataLayer || []
    w.gtag = (...args: unknown[]) => w.dataLayer?.push(args)
    w.gtag('js', new Date())
    w.gtag('config', gaId)
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    script.async = true
    document.head.appendChild(script)
  }
  if (w.requestIdleCallback) w.requestIdleCallback(loadAnalytics)
  else window.setTimeout(loadAnalytics, 2000)
})

// 注入 <html lang> 与 hreflang 交替链接 —— 由 @nuxtjs/i18n 提供，自动按当前 locale 生成
const localeHead = useLocaleHead()

// 标题模板按当前 locale 选择站名 + tagline（中文/英文不同）
useHead({
  titleTemplate: (t) => (t ? `${t} | ${site.brand}` : `${isZh.value ? site.nameCn : site.name} — ${isZh.value ? site.taglineZh : site.tagline}`),
  htmlAttrs: localeHead.value.htmlAttrs
})

const route = useRoute()
// 去掉路径里的 /zh 前缀，得到「裸路径」用于 hreflang 拼接；兼容旧 /en 链接。
const stripLocalePrefix = (p: string) => p.replace(/^\/(en|zh)(?=\/|$)/, '') || '/'
const canonicalUrl = computed(() => `${SITE_URL}${route.path}`)
const basePath = computed(() => stripLocalePrefix(route.path))
const englishPath = computed(() => basePath.value === '/' ? '' : basePath.value)

// canonical + hreflang alternates（每个页面 x-default 指向英文）
useHead({
  link: computed(() => [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hreflang: 'en-US', href: `${SITE_URL}${englishPath.value}` },
    { rel: 'alternate', hreflang: 'zh-CN', href: `${SITE_URL}/zh${basePath.value === '/' ? '' : basePath.value}` },
    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${englishPath.value}` }
  ])
})

useSeoMeta({
  title: () => `${isZh.value ? site.nameCn : site.name} — ${isZh.value ? site.taglineZh : site.tagline}`,
  ogTitle: () => isZh.value ? site.taglineZh : site.tagline,
  description: () => isZh.value ? site.descriptionZh : site.description,
  ogDescription: () => isZh.value ? site.descriptionZh : site.description,
  ogType: 'website',
  ogSiteName: isZh.value ? site.nameCn : site.name,
  ogUrl: canonicalUrl,
  ogImage: `${SITE_URL}/images/ogImage.jpeg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: () => `${isZh.value ? site.nameCn : site.name} — ${isZh.value ? '全球营养补充剂 OEM/ODM 解决方案' : 'Global Nutritional Supplement OEM/ODM Solutions'}`,
  twitterCard: 'summary_large_image',
  twitterImage: `${SITE_URL}/images/ogImage.jpeg`
})

// 结构化数据：Organization（利于 SEO / Google 富摘要）
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: site.name,
        alternateName: site.nameCn,
        url: SITE_URL,
        logo: `${SITE_URL}/logo/logo.png`,
        description: site.description,
        foundingDate: String(site.founded),
        email: site.contact.email,
        telephone: site.contact.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.contact.address,
          addressCountry: 'CN'
        },
        ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {})
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: site.name,
        alternateName: site.nameCn,
        url: SITE_URL,
        inLanguage: ['en-US', 'zh-CN'],
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/products?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      })
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
