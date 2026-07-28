<script setup lang="ts">
import { site } from '~/data/site'

// 站点绝对地址（与 nuxt.config 的 site.url 保持一致）
const SITE_URL = 'https://www.mildy-health.com'

const { isZh, localePath } = useLocale()

// Google Analytics 4（gtag.js）—— 来自 runtimeConfig.public.gaId
const gaId = useRuntimeConfig().public.gaId
if (gaId) {
  useHead({
    script: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true },
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`
      }
    ]
  })
}

// 注入 <html lang> 与 hreflang 交替链接 —— 由 @nuxtjs/i18n 提供，自动按当前 locale 生成
const localeHead = useLocaleHead({ addSeoAttributes: true })

// 标题模板按当前 locale 选择站名 + tagline（中文/英文不同）
useHead({
  titleTemplate: (t) => (t ? `${t} | ${site.brand}` : `${isZh.value ? site.nameCn : site.name} — ${isZh.value ? site.taglineZh : site.tagline}`),
  htmlAttrs: localeHead.value.htmlAttrs
})

const route = useRoute()
// 去掉路径里的 /en 或 /zh 前缀，得到「裸路径」用于 hreflang 拼接
const stripLocalePrefix = (p: string) => p.replace(/^\/(en|zh)(?=\/|$)/, '') || '/'
const canonicalUrl = computed(() => `${SITE_URL}${route.path}`)
const basePath = computed(() => stripLocalePrefix(route.path))

// canonical + hreflang alternates（每个页面 x-default 指向英文）
useHead({
  link: computed(() => [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hreflang: 'en-US', href: `${SITE_URL}/en${basePath.value === '/' ? '' : basePath.value}` },
    { rel: 'alternate', hreflang: 'zh-CN', href: `${SITE_URL}/zh${basePath.value === '/' ? '' : basePath.value}` },
    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/en${basePath.value === '/' ? '' : basePath.value}` },
    ...localeHead.value.link
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
  ogImageAlt: () => `${isZh.value ? site.nameCn : site.name} — 全球营养补充剂 OEM/ODM 解决方案`,
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
        sameAs: site.social.map((s) => s.href)
      })
    }
  ]
})

// 暴露 localePath 给模板（防止未使用警告）
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
localePath
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
