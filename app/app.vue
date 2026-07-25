<script setup lang="ts">
import { site } from '~/data/site'

// 全局 SEO 默认值（各页面用 useSeoMeta 覆盖）
useHead({
  titleTemplate: (t) => (t ? `${t} | ${site.brand}` : `${site.name} — ${site.tagline}`)
})

useSeoMeta({
  title: `${site.name} — OEM/ODM Nutritional Supplement Manufacturer`,
  ogTitle: site.tagline,
  description: site.description,
  ogDescription: site.description,
  ogType: 'website',
  ogSiteName: site.name,
  ogImage: 'https://picsum.photos/seed/mildy-og/1200/630',
  twitterCard: 'summary_large_image'
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
