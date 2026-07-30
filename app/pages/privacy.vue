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
          <template v-if="isZh">
            当您提交询盘表单时,我们会收集您的姓名、公司名称、邮箱、国家、产品需求和留言内容。我们不收集支付或财务信息。
          </template>
          <template v-else>
            When you submit an inquiry form, we collect your name, company name, email address,
            country, product requirements and message content. We do not collect payment or
            financial information.
          </template>
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '2. 我们如何使用您的信息' : '2. How We Use Your Information' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          <template v-if="isZh">
            您的信息仅用于回复您的业务询盘、提供报价并跟进您的项目。我们不会出于营销目的出售、出租或与第三方共享您的数据。
          </template>
          <template v-else>
            Your information is used solely to respond to your business inquiry, provide quotations
            and follow up on your project. We do not sell, rent or share your data with third parties
            for marketing purposes.
          </template>
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '3. 数据安全' : '3. Data Security' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          <template v-if="isZh">
            我们采取合理的技术和组织措施,保护您的个人信息免受未经授权的访问、更改、披露或销毁。
          </template>
          <template v-else>
            We implement reasonable technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure or destruction.
          </template>
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '4. Cookie' : '4. Cookies' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          <template v-if="isZh">
            本网站可能使用少量技术性 Cookie 以维持网站功能。我们不使用跟踪或广告类 Cookie。
          </template>
          <template v-else>
            This website may use minimal technical cookies for site functionality. We do not use
            tracking or advertising cookies.
          </template>
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '5. 联系方式' : '5. Contact' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          <template v-if="isZh">
            如有任何与隐私相关的问题,请通过
            <a :href="`mailto:${site.contact.email}`" class="text-navy-500 underline">{{ site.contact.email }}</a>
            联系我们。
          </template>
          <template v-else>
            For any privacy-related questions, please contact us at
            <a :href="`mailto:${site.contact.email}`" class="text-navy-500 underline">{{ site.contact.email }}</a>.
          </template>
        </p>
      </div>
    </section>
  </div>
</template>
