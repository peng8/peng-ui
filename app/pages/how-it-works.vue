<script setup lang="ts">
import { processSteps } from '~/data/process'

useSeoMeta({
  title: 'How It Works — 6 Steps from Inquiry to Shipment',
  description:
    'A clear, transparent 6-step process: Inquiry → Formulation & Sampling → Artwork & Packaging → Order Confirmation → Production & QC → Shipping & Export. Typical 8–12 weeks.'
})

const { t, isZh } = useLocale()

const timeline = computed(() =>
  processSteps.map((s) => ({
    ...s,
    title: isZh.value ? s.titleZh : s.title,
    desc: isZh.value ? s.descZh : s.desc,
    duration: isZh.value ? s.durationZh : s.duration
  }))
)

const faqs = [
  {
    q: 'How long does the whole process take?',
    qZh: '整个流程需要多长时间?',
    a: 'White-label orders typically take 6–8 weeks from inquiry to shipment. ODM custom projects are 10–14 weeks depending on R&D complexity.',
    aZh: '白标订单从询盘到出货通常需要 6–8 周。ODM 定制项目为 10–14 周,具体取决于研发复杂度。'
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    qZh: '最小起订量(MOQ)是多少?',
    a: 'MOQ varies by dosage form: liquid drops from 30,000 units, gummies and powders from 50,000, softgels/tablets/capsules from 100,000. We also offer trial orders for new partners.',
    aZh: 'MOQ 因剂型而异:口服液 3 万件起,软糖和粉剂 5 万件起,软胶囊/片剂/胶囊 10 万件起。我们也为新合作伙伴提供试单。'
  },
  {
    q: 'Can I use my own formula?',
    qZh: '可以使用我自己的配方吗?',
    a: 'Yes. In ODM mode, you can provide your formula or work with our R&D team to develop one. The intellectual property belongs to you.',
    aZh: '可以。在 ODM 模式下,您可以提供配方,或与我们的研发团队共同开发。知识产权归您所有。'
  },
  {
    q: 'Do you help with packaging design?',
    qZh: '你们提供包装设计服务吗?',
    a: 'Absolutely. Our in-house design team creates label artwork and structural packaging aligned with your brand and destination-market regulations.',
    aZh: '当然。我们的内部设计团队创建符合您品牌和目标市场法规的标签设计和结构性包装。'
  },
  {
    q: 'What export documents do you provide?',
    qZh: '你们提供哪些出口单证?',
    a: 'We provide COA (Certificate of Analysis), COO (Certificate of Origin), commercial invoice, packing list, bill of lading and any market-specific documents you need.',
    aZh: '我们提供 COA(检验报告)、COO(原产地证)、商业发票、装箱单、提单以及您需要的任何市场专项文件。'
  },
  {
    q: 'Can I visit the factory before placing an order?',
    qZh: '下单前可以参观工厂吗?',
    a: 'Of course. We welcome on-site and virtual factory tours. Contact us to schedule your visit.',
    aZh: '当然。我们欢迎现场及线上工厂参观。联系我们预约您的参观。'
  }
]
</script>

<template>
  <div>
    <PageHero
      :eyebrow="isZh ? '合作流程' : 'How It Works'"
      :title="isZh ? '从询盘到出货,6 步完成' : 'From Inquiry to Shipment in 6 Steps'"
      :subtitle="isZh ? '清晰透明的流程,从首次接触到出货通常只需 8–12 周。' : 'A clear, transparent process that takes you from first contact to a container on the water — typically 8 to 12 weeks.'"
      image="/images/how-it-works/hero.jpg"
      :breadcrumb="[{ label: isZh ? '首页' : 'Home', to: '/' }, { label: isZh ? '合作流程' : 'How It Works' }]"
    />

    <!-- 时间线 -->
    <section class="section bg-white">
      <div class="wrap">
        <div class="mx-auto max-w-2xl">
          <TimelineItem
            v-for="(step, i) in timeline"
            :key="step.step"
            :item="step"
            :index="i"
            :last="i === timeline.length - 1"
          />
        </div>
      </div>
    </section>

    <!-- 视觉流程概览 -->
    <section class="section bg-mist">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="isZh ? '一览' : 'At a Glance'"
          :title="isZh ? '完整旅程' : 'The Complete Journey'"
          :subtitle="isZh ? '您的产品所经历的每个阶段的视觉概览。' : 'A visual overview of every stage your product goes through.'"
        />
        <div class="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div
            v-for="(step, i) in timeline"
            :key="step.step"
            class="reveal text-center"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold shadow-md">
              <UiAppIcon :name="step.icon" :size="24" />
            </div>
            <span class="mt-3 block text-xs font-bold uppercase tracking-widest text-gold">{{ step.step }}</span>
            <h3 class="mt-1 text-sm font-bold text-navy">{{ step.title }}</h3>
            <span class="mt-2 inline-block rounded-full bg-leaf/10 px-2 py-0.5 text-[10px] font-semibold text-leaf-dark">{{ step.duration }}</span>
            <p class="mt-2 text-xs leading-relaxed text-navy/55">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section bg-white">
      <div class="wrap mx-auto max-w-3xl">
        <UiSectionHeading
          :eyebrow="isZh ? '常见问题' : 'FAQ'"
          :title="isZh ? '常见问题解答' : 'Frequently Asked Questions'"
          :subtitle="isZh ? '新合作伙伴最常问问题的快速解答。' : 'Quick answers to the questions we hear most from new partners.'"
        />
        <div class="mt-12 space-y-4">
          <details
            v-for="(faq, i) in faqs"
            :key="i"
            class="reveal group rounded-xl border border-mist-border bg-mist/50 transition-all hover:shadow-card"
            :style="`transition-delay: ${i * 60}ms`"
          >
            <summary class="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold text-navy marker:[content:''] [&::-webkit-details-marker]:hidden">
              {{ isZh ? faq.qZh : faq.q }}
              <UiAppIcon name="chevron-down" :size="18" class="shrink-0 text-navy/40 transition-transform group-open:rotate-180" />
            </summary>
            <p class="px-5 pb-5 text-sm leading-relaxed text-navy/65">{{ isZh ? faq.aZh : faq.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-navy">
      <div class="wrap reveal text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ isZh ? '准备好开始了吗?' : 'Ready to Get Started?' }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-white/75">{{ isZh ? '提交您的询盘,我们的团队将在 24 小时内回复定制方案。' : 'Submit your inquiry and our team will respond within 24 hours with a tailored proposal.' }}</p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <UiAppButton to="/contact" variant="primary" size="lg" icon="send">{{ isZh ? '提交询盘' : 'Submit Inquiry' }}</UiAppButton>
          <a
            href="https://wa.me/8618613000659"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline"
          >
            <UiAppIcon name="whatsapp" :size="18" />{{ isZh ? 'WhatsApp 在线咨询' : 'Chat on WhatsApp' }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
