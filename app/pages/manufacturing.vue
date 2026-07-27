<script setup lang="ts">
import { facilities, qcSteps } from '~/data/cases'
import { site } from '~/data/site'

useSeoMeta({
  title: 'Manufacturing — 20,000 m² GMP Facility & QC Lab',
  description:
    'Tour MILDY 20,000 m² GMP-certified facility: cleanrooms, 12 automated production lines, R&D lab, QC testing, warehousing and packaging. Full traceability and quality control.',
  keywords: 'GMP facility, supplement cleanroom, production lines, QC laboratory, manufacturing tour, dietary supplement factory China'
})

const capacityStats = [
  { value: '20,000', label: 'm² Total Area', labelZh: '平方米总面积', icon: 'box' },
  { value: '12', label: 'Production Lines', labelZh: '条产线', icon: 'gear' },
  { value: '8', label: 'GMP Workshops', labelZh: '个 GMP 车间', icon: 'shield-check' },
  { value: '30B+', label: 'Units Annual Capacity', labelZh: '年产能(件)', icon: 'layers' }
]

const { t, isZh } = useLocale()
</script>

<template>
  <div>
    <PageHero
      :eyebrow="isZh ? '生产实力' : 'Manufacturing'"
      :title="isZh ? '走进世界级工厂' : 'Inside Our World-Class Facility'"
      :subtitle="isZh ? '20,000 平方米专用产业园,为规模、精度和合规而建。' : 'A 20,000 m² purpose-built industrial park engineered for volume, precision and compliance.'"
      image="/images/manufacturing/hero.jpg"
      :breadcrumb="[{ label: isZh ? '首页' : 'Home', to: '/' }, { label: isZh ? '生产实力' : 'Manufacturing' }]"
    />

    <!-- 数据概览 -->
    <section class="section bg-navy text-white">
      <div class="wrap">
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div
            v-for="(s, i) in capacityStats"
            :key="s.label"
            class="reveal text-center"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <UiAppIcon :name="s.icon" :size="32" class="mx-auto text-gold" />
            <UiStatCounter :value="s.value" light class="mt-3" />
            <p class="mt-1 text-xs uppercase tracking-wider text-white/60">{{ isZh ? s.labelZh : s.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 设施图文 -->
    <section class="section bg-white">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="isZh ? '我们的设施' : 'Our Facilities'"
          :title="isZh ? '每个环节,为品质而设' : 'Every Stage, Engineered for Quality'"
          :subtitle="isZh ? '从原料入库到成品发货——每个环节都有专用空间。' : 'From raw material intake to finished-goods shipping — purpose-built spaces for every step.'"
        />
        <div class="mt-12 grid gap-8 md:grid-cols-2">
          <div
            v-for="(f, i) in facilities"
            :key="f.title"
            class="reveal group overflow-hidden rounded-2xl bg-mist shadow-card ring-1 ring-mist-border"
            :style="`transition-delay: ${(i % 2) * 100}ms`"
          >
            <div class="block w-full overflow-hidden">
              <UiLazyImage :src="f.image" :alt="isZh ? f.titleZh : f.title" ratio="aspect-[16/10]" class="transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-navy">{{ isZh ? f.titleZh : f.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-navy/65">{{ isZh ? f.descZh : f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 品控流程 -->
    <section class="section bg-mist">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="isZh ? '品质控制' : 'Quality Control'"
          :title="isZh ? '四层质量护盾' : 'Four-Layer Quality Shield'"
          :subtitle="isZh ? '质量不是检出来的——而是贯穿生产每一环节造出来的。' : `Quality isn't inspected in — it's built in at every stage of production.`"
        />
        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(step, i) in qcSteps"
            :key="step.title"
            class="reveal relative rounded-2xl bg-white p-7 shadow-card"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <span class="absolute right-5 top-4 text-4xl font-extrabold text-navy/5">0{{ i + 1 }}</span>
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf/10 text-leaf-dark">
              <UiAppIcon name="shield-check" :size="24" />
            </div>
            <h3 class="mt-4 text-base font-bold text-navy">{{ isZh ? step.titleZh : step.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-navy/60">{{ isZh ? step.descZh : step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 设备与技术 -->
    <section class="section bg-white">
      <div class="wrap grid items-center gap-12 lg:grid-cols-2">
        <div class="reveal grid grid-cols-2 gap-4">
          <img src="/images/manufacturing/equip-1.jpg" alt="HPLC instrument" class="rounded-xl object-cover shadow-card" loading="lazy" />
          <img src="/images/manufacturing/equip-2.jpg" alt="Encapsulation machine" class="mt-8 rounded-xl object-cover shadow-card" loading="lazy" />
          <img src="/images/manufacturing/equip-3.jpg" alt="Blending tank" class="rounded-xl object-cover shadow-card" loading="lazy" />
          <img src="/images/manufacturing/equip-4.jpg" alt="Packaging line" class="mt-8 rounded-xl object-cover shadow-card" loading="lazy" />
        </div>
        <div class="reveal" :style="`transition-delay:120ms`">
          <span class="eyebrow"><span class="h-px w-6 bg-gold" />{{ isZh ? '设备与技术' : 'Equipment & Technology' }}</span>
          <h2 class="mt-3 text-3xl font-bold md:text-4xl">{{ isZh ? '投入最精良的设备' : 'Invested in the Best Equipment' }}</h2>
          <p class="mt-5 leading-relaxed text-navy/70">
            <template v-if="isZh">
              我们持续投入最先进的机械设备和分析仪器,确保产出稳定、高效且完全合规。
            </template>
            <template v-else>
              We continuously reinvest in state-of-the-art machinery and analytical instruments to keep
              our output consistent, efficient and fully compliant.
            </template>
          </p>
          <ul class="mt-6 space-y-3">
            <li v-for="e in (isZh ? [
              '高速旋转式压片机(24+ 工位)',
              '全自动软胶囊封装产线',
              'HPLC、GC、UV-Vis 及快速微生物检测',
              '配备 HEPA 过滤的恒温恒湿洁净室',
              '自动化条包与袋装灌装产线',
              '机器人辅助包装与码垛'
            ] : [
              'High-speed rotary tablet presses (24+ stations)',
              'Automatic softgel encapsulation lines',
              'HPLC, GC, UV-Vis & rapid microbiology testing',
              'Climate-controlled cleanrooms with HEPA filtration',
              'Automated stick-pack & sachet filling lines',
              'Robot-assisted packaging and palletizing'
            ])" :key="e" class="flex items-start gap-3 text-sm text-navy/75">
              <UiAppIcon name="check" :size="18" class="mt-0.5 text-leaf" />{{ e }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-navy">
      <div class="wrap reveal text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ isZh ? '想参观我们的工厂?' : 'Want to Visit Our Factory?' }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-white/75">{{ isZh ? '提供现场及线上工厂参观,立即预约。' : 'On-site and virtual factory tours available. Schedule your visit today.' }}</p>
        <UiAppButton to="/contact" variant="primary" size="lg" icon="send" class="mt-8">{{ isZh ? '预约参观' : 'Book a Tour' }}</UiAppButton>
      </div>
    </section>
  </div>
</template>
