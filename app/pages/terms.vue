<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: 'Terms of Service',
  description: `${site.name} terms of service — terms and conditions governing the use of this website.`
})

const { t, isZh } = useLocale()
</script>

<template>
  <div>
    <PageHero
      :eyebrow="isZh ? '法律' : 'Legal'"
      :title="isZh ? '服务条款' : 'Terms of Service'"
      :subtitle="isZh ? '规范本网站使用的条款与条件。' : 'Terms and conditions governing the use of this website.'"
      image="https://picsum.photos/seed/mildy-legal-hero/1920/500"
      :breadcrumb="[{ label: isZh ? '首页' : 'Home', to: '/' }, { label: isZh ? '服务条款' : 'Terms of Service' }]"
    />
    <section class="section bg-white">
      <div class="wrap mx-auto max-w-3xl prose prose-navy">
        <p class="text-sm text-navy/55">{{ isZh ? '最后更新:2026 年 7 月' : 'Last updated: July 2026' }}</p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '1. 总则' : '1. General' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          This website is operated by {{ site.name }} ({{ site.nameCn }}). By accessing and using
          this site, you agree to be bound by these terms. This is a B2B informational site for
          business inquiries — no retail sales are conducted.
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '2. 知识产权' : '2. Intellectual Property' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          All content on this website, including text, images, logos and design elements, is the
          property of {{ site.name }} and is protected by intellectual property laws. Unauthorized
          reproduction or distribution is prohibited.
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '3. 免责声明' : '3. Disclaimer' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          Information on this website is provided for general reference. Specifications, pricing
          and availability are subject to change. Product images are for illustrative purposes.
          Specific terms will be confirmed through formal quotations and contracts.
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '4. 责任限制' : '4. Limitation of Liability' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ site.name }} shall not be liable for any indirect, incidental or consequential damages
          arising from the use of this website or reliance on its content.
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '5. 适用法律' : '5. Governing Law' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          These terms shall be governed by and construed in accordance with the laws of the
          People's Republic of China. Any disputes shall be resolved through negotiation or in
          the courts of Guangzhou, China.
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '6. 联系方式' : '6. Contact' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          For questions about these terms, contact us at
          <a :href="`mailto:${site.contact.email}`" class="text-navy-500 underline">{{ site.contact.email }}</a>.
        </p>
      </div>
    </section>
  </div>
</template>
