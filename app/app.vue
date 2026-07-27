<script setup lang="ts">
import { site } from '~/data/site'

// 站点绝对地址（与 nuxt.config 的 site.url 保持一致）
const SITE_URL = 'https://www.mildy-health.com'

// 全局 SEO 默认值（各页面用 useSeoMeta 覆盖）
useHead({
  titleTemplate: (t) => (t ? `${t} | ${site.brand}` : `${site.name} — ${site.tagline}`)
})

// 每页自动生成 canonical + og:url，避免分页/分类页被 Google 判重复内容
const route = useRoute()
const canonicalUrl = computed(() => `${SITE_URL}${route.path}`)

useHead({
  link: computed(() => [{ rel: 'canonical', href: canonicalUrl.value }])
})

useSeoMeta({
  title: `${site.name} — OEM/ODM Nutritional Supplement Manufacturer`,
  ogTitle: site.tagline,
  description: site.description,
  ogDescription: site.description,
  ogType: 'website',
  ogSiteName: site.name,
  ogUrl: canonicalUrl,
  ogImage: `${SITE_URL}/images/ogImage.jpeg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${site.name} — Global Dietary Supplement OEM/ODM Solutions`,
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
        url: 'https://www.mildy-health.com',
        logo: 'https://www.mildy-health.com/logo/logo.png',
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
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
