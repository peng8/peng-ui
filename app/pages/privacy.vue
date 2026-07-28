<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: 'Privacy Policy',
  description: `${site.name} privacy policy — how we collect, use and protect your personal information.`
})

const {  t, isZh , localePath } = useLocale()
</script>

<template>
  <div>
    <PageHero
      :eyebrow="isZh ? '法律' : 'Legal'"
      :title="isZh ? '隐私政策' : 'Privacy Policy'"
      :subtitle="isZh ? '我们如何收集、使用和保护您的个人信息。' : 'How we collect, use and protect your personal information.'"
      image="/images/manufacturing/facility/automation-line.jpeg"
      :breadcrumb="[{ label: isZh ? '首页' : 'Home', to: localePath('/') }, { label: isZh ? '隐私政策' : 'Privacy Policy' }]"
    />
    <section class="section bg-white">
      <div class="wrap mx-auto max-w-3xl prose prose-navy">
        <p class="text-sm text-navy/55">{{ isZh ? '最后更新:2026 年 7 月' : 'Last updated: July 2026' }}</p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '1. 我们收集的信息' : '1. Information We Collect' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          When you submit an inquiry form, we collect your name, company name, email address,
          country, product requirements and message content. We do not collect payment or
          financial information.
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '2. 我们如何使用您的信息' : '2. How We Use Your Information' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          Your information is used solely to respond to your business inquiry, provide quotations
          and follow up on your project. We do not sell, rent or share your data with third parties
          for marketing purposes.
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '3. 数据安全' : '3. Data Security' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          We implement reasonable technical and organizational measures to protect your personal
          information against unauthorized access, alteration, disclosure or destruction.
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '4. Cookie' : '4. Cookies' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          This website may use minimal technical cookies for site functionality. We do not use
          tracking or advertising cookies.
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '5. 联系方式' : '5. Contact' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          For any privacy-related questions, please contact us at
          <a :href="`mailto:${site.contact.email}`" class="text-navy-500 underline">{{ site.contact.email }}</a>.
        </p>
      </div>
    </section>
  </div>
</template>
