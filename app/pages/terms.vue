<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: 'Terms of Service',
  description: `${site.name} terms of service — terms and conditions governing the use of this website.`
})

const {  t, isZh , localePath } = useLocale()
</script>

<template>
  <div>
    <PageHero
      :eyebrow="isZh ? '法律' : 'Legal'"
      :title="isZh ? '服务条款' : 'Terms of Service'"
      :subtitle="isZh ? '规范本网站使用的条款与条件。' : 'Terms and conditions governing the use of this website.'"
      image="/images/manufacturing/facility/gmp-cleanroom.jpeg"
      :breadcrumb="[{ label: isZh ? '首页' : 'Home', to: localePath('/') }, { label: isZh ? '服务条款' : 'Terms of Service' }]"
    />
    <section class="section bg-white">
      <div class="wrap mx-auto max-w-3xl prose prose-navy">
        <p class="text-sm text-navy/55">{{ isZh ? '最后更新:2026 年 7 月' : 'Last updated: July 2026' }}</p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '1. 总则' : '1. General' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          <template v-if="isZh">
            本网站由 {{ site.name }}({{ site.nameCn }})运营。访问和使用本网站即表示您同意受这些条款约束。这是一个面向业务询盘的 B2B 信息网站——不进行零售销售。
          </template>
          <template v-else>
            This website is operated by {{ site.name }} ({{ site.nameCn }}). By accessing and using
            this site, you agree to be bound by these terms. This is a B2B informational site for
            business inquiries — no retail sales are conducted.
          </template>
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '2. 知识产权' : '2. Intellectual Property' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          <template v-if="isZh">
            本网站的所有内容,包括文字、图片、标志和设计元素,均为 {{ site.name }} 的财产,受知识产权法保护。禁止未经授权的复制或传播。
          </template>
          <template v-else>
            All content on this website, including text, images, logos and design elements, is the
            property of {{ site.name }} and is protected by intellectual property laws. Unauthorized
            reproduction or distribution is prohibited.
          </template>
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '3. 免责声明' : '3. Disclaimer' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          <template v-if="isZh">
            本网站提供的信息仅供参考。规格、价格和供货情况如有变更,恕不另行通知。产品图片仅供示意。具体条款将通过正式报价与合同确认。
          </template>
          <template v-else>
            Information on this website is provided for general reference. Specifications, pricing
            and availability are subject to change. Product images are for illustrative purposes.
            Specific terms will be confirmed through formal quotations and contracts.
          </template>
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '4. 责任限制' : '4. Limitation of Liability' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          <template v-if="isZh">
            对于因使用本网站或依赖其内容而产生的任何间接、附带或后果性损害,{{ site.name }} 不承担责任。
          </template>
          <template v-else>
            {{ site.name }} shall not be liable for any indirect, incidental or consequential damages
            arising from the use of this website or reliance on its content.
          </template>
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '5. 适用法律' : '5. Governing Law' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          <template v-if="isZh">
            这些条款受中华人民共和国法律管辖并据其解释。任何争议应通过协商解决,或在中国广州的法院解决。
          </template>
          <template v-else>
            These terms shall be governed by and construed in accordance with the laws of the
            People's Republic of China. Any disputes shall be resolved through negotiation or in
            the courts of Guangzhou, China.
          </template>
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ isZh ? '6. 联系方式' : '6. Contact' }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          <template v-if="isZh">
            如对这些条款有任何疑问,请通过
            <a :href="`mailto:${site.contact.email}`" class="text-navy-500 underline">{{ site.contact.email }}</a>
            联系我们。
          </template>
          <template v-else>
            For questions about these terms, contact us at
            <a :href="`mailto:${site.contact.email}`" class="text-navy-500 underline">{{ site.contact.email }}</a>.
          </template>
        </p>
      </div>
    </section>
  </div>
</template>
