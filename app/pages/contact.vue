<script setup lang="ts">
import { site } from '~/data/site'

const { t, isZh, localePath } = useLocale()

useSeoMeta({
  title: () => isZh.value ? '联系 MILDY — OEM/ODM 补充剂报价' : 'Contact MILDY — OEM/ODM Supplement Quote',
  description: () => isZh.value
    ? '联系 MILDY Health 咨询 OEM/ODM 营养补充剂代工。邮件、WhatsApp、电话或在线表单——我们 24 小时内回复。'
    : 'Contact MILDY Health for OEM/ODM supplement manufacturing inquiries. Email, WhatsApp, phone or submit our online form — we respond within 24 hours.'
})

// 用经纬度坐标生成 Google Maps 嵌入地址
// q=lat,lng 格式只会落一个标记点,避免地址文本匹配出多个候选点
const mapSrc = computed(() => {
  const { lat, lng } = site.contact
  return `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`
})

const contactMethods = [
  { icon: 'mail', label: 'Email', labelZh: '邮箱', value: site.contact.email, valueZh: site.contact.email, href: `mailto:${site.contact.email}`, desc: 'For detailed inquiries and quotations', descZh: '适用于详细询盘与报价' },
  { icon: 'whatsapp', label: 'WhatsApp', labelZh: 'WhatsApp', value: 'Chat Now', valueZh: '立即沟通', href: site.contact.whatsappHref, desc: 'Fast response — typically within minutes', descZh: '快速响应——通常几分钟内' },
  { icon: 'phone', label: 'Phone', labelZh: '电话', value: site.contact.phone, valueZh: site.contact.phone, href: site.contact.phoneHref, desc: `${site.contact.hours}`, descZh: `${site.contact.hours}` },
  { icon: 'pin', label: 'Address', labelZh: '地址', value: site.contact.address, valueZh: site.contact.addressCn, href: null, desc: 'Factory visits welcome by appointment', descZh: '欢迎预约参观工厂' }
]
</script>

<template>
  <div>
    <PageHero
      :eyebrow="isZh ? '联系我们' : 'Contact'"
      :title="isZh ? '让我们开始对话' : `Let's Start a Conversation`"
      :subtitle="isZh ? '告诉我们您的项目,我们将在 24 小时内回复定制方案。' : `Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.`"
      image="/images/contact/hero.jpg"
      :breadcrumb="[{ label: isZh ? '首页' : 'Home', to: localePath('/') }, { label: isZh ? '联系我们' : 'Contact' }]"
    />

    <section class="section bg-white">
      <div class="wrap">
        <div class="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <!-- 左：联系方式 -->
          <div>
            <span class="eyebrow"><span class="h-px w-6 bg-gold" />{{ isZh ? '联系我们' : 'Get In Touch' }}</span>
            <h2 class="mt-3 text-2xl font-bold md:text-3xl">{{ isZh ? '多种方式联系到我们' : 'Multiple Ways to Reach Us' }}</h2>
            <p class="mt-4 text-sm leading-relaxed text-navy/65">
              <template v-if="isZh">
                无论您偏好邮件、WhatsApp 还是电话——我们的国际销售团队随时为您提供帮助。
              </template>
              <template v-else>
                Whether you prefer email, WhatsApp or a phone call — our international sales team is ready to help.
              </template>
            </p>

            <div class="mt-8 space-y-5">
              <div
                v-for="method in contactMethods"
                :key="method.label"
                class="flex items-start gap-4 rounded-xl bg-mist p-5 transition-all hover:shadow-card"
              >
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
                  <UiAppIcon :name="method.icon" :size="24" />
                </div>
                <div>
                  <h3 class="text-sm font-bold text-navy">{{ isZh ? method.labelZh : method.label }}</h3>
                  <component
                    :is="method.href ? 'a' : 'p'"
                    v-bind="method.href ? { href: method.href, target: method.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {}"
                    class="mt-1 text-base font-semibold text-navy-500 transition-colors hover:text-navy"
                  >
                    {{ isZh ? method.valueZh : method.value }}
                  </component>
                  <p class="mt-1 text-xs text-navy/50">{{ isZh ? method.descZh : method.desc }}</p>
                </div>
              </div>
            </div>

            <!-- 社媒 -->
            <div class="mt-8">
              <h3 class="text-sm font-bold text-navy">{{ isZh ? '关注我们' : 'Follow Us' }}</h3>
              <div class="mt-3 flex gap-3">
                <a
                  v-for="s in site.social"
                  :key="s.label"
                  :href="s.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="s.label"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-navy-500"
                >
                  <UiAppIcon :name="s.icon" :size="18" />
                </a>
              </div>
            </div>
          </div>

          <!-- 右：询价表单 -->
          <div>
            <QuoteForm variant="light" />
          </div>
        </div>
      </div>
    </section>

    <!-- 地图嵌入 -->
    <section class="bg-mist">
      <div class="wrap py-16">
        <UiSectionHeading
          :eyebrow="isZh ? '我们的位置' : 'Our Location'"
          :title="isZh ? '在中国广州找到我们' : 'Find Us in Guangzhou, China'"
          :subtitle="isZh ? '位于广州高新区产业园,邻近主要港口,交通便利。' : `Conveniently located in Guangzhou's High-Tech Industrial Zone, close to major ports.`"
        />
        <div class="reveal mt-10 overflow-hidden rounded-2xl shadow-card">
          <iframe
            :title="isZh ? 'MILDY 健康位置' : 'MILDY Health location'"
            :src="mapSrc"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full"
          />
        </div>
      </div>
    </section>
  </div>
</template>
