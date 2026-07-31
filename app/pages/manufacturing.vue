<script setup lang="ts">
import { facilities, qcSteps } from '~/data/cases'
import { site } from '~/data/site'

const { t, isZh, localePath } = useLocale()

useSeoMeta({
  title: () => isZh.value ? 'GMP 补充剂制造工厂与品控实验室' : 'GMP Supplement Manufacturing Facility & QC Lab',
  description: () => isZh.value
    ? '参观我们 20,000 平方米的 GMP 认证工厂:洁净车间、8 条自动化产线、研发实验室、品控检测、仓储与包装。完整可追溯,符合 FDA/BRC 标准。'
    : 'Tour our 20,000 m² GMP-certified facility: cleanrooms, 8 automated lines, R&D lab, QC testing, warehousing and packaging. Full traceability and FDA/BRC compliance.'
})

const capacityStats = [
  { value: '20,000', icon: 'box' },
  { value: '8', icon: 'gear' },
  { value: '8', icon: 'shield-check' },
  { value: '30B+', icon: 'layers' }
]

const equipmentImages = [
  { src: '/images/manufacturing/equip-1.jpg', class: '' },
  { src: '/images/manufacturing/equip-2.jpg', class: 'mt-8' },
  { src: '/images/manufacturing/equip-3.jpg', class: '' },
  { src: '/images/manufacturing/equip-4.jpg', class: 'mt-8' }
]

</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('mfg.hero.eyebrow')"
      :title="t('mfg.hero.title')"
      :subtitle="t('mfg.hero.subtitle')"
      image="/images/manufacturing/hero.jpg"
      :breadcrumb="[{ label: t('nav.home'), to: localePath('/') }, { label: t('nav.manufacturing') }]"
    />

    <!-- 数据概览 -->
    <section class="section bg-navy text-white">
      <div class="wrap">
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div
            v-for="(s, i) in capacityStats"
            :key="i"
            class="reveal text-center"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <UiAppIcon :name="s.icon" :size="32" class="mx-auto text-gold" />
            <UiStatCounter :value="s.value" light class="mt-3" />
            <p class="mt-1 text-xs uppercase tracking-wider text-white/60">{{ t(`mfg.stats.${i + 1}.label`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 设施图文 -->
    <section class="section bg-white">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="t('mfg.facilities.eyebrow')"
          :title="t('mfg.facilities.title')"
          :subtitle="t('mfg.facilities.subtitle')"
        />
        <div class="mt-12 grid gap-8 md:grid-cols-2">
          <div
            v-for="(f, i) in facilities"
            :key="i"
            class="reveal group overflow-hidden rounded-2xl bg-mist shadow-card ring-1 ring-mist-border"
            :style="`transition-delay: ${(i % 2) * 100}ms`"
          >
            <div class="block w-full overflow-hidden">
              <UiLazyImage :src="f.image" :alt="t(`mfg.facility.${i + 1}.title`)" ratio="aspect-[16/10]" class="transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-navy">{{ t(`mfg.facility.${i + 1}.title`) }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-navy/65">{{ t(`mfg.facility.${i + 1}.desc`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 品控流程 -->
    <section class="section bg-mist">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="t('mfg.qc.eyebrow')"
          :title="t('mfg.qc.title')"
          :subtitle="t('mfg.qc.subtitle')"
        />
        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(step, i) in qcSteps"
            :key="i"
            class="reveal relative rounded-2xl bg-white p-7 shadow-card"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <span class="absolute right-5 top-4 text-4xl font-extrabold text-navy/5">0{{ i + 1 }}</span>
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf/10 text-leaf-dark">
              <UiAppIcon name="shield-check" :size="24" />
            </div>
            <h3 class="mt-4 text-base font-bold text-navy">{{ t(`mfg.qc.${i + 1}.title`) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-navy/60">{{ t(`mfg.qc.${i + 1}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 设备与技术 -->
    <section class="section bg-white">
      <div class="wrap grid items-center gap-12 lg:grid-cols-2">
        <div class="reveal grid grid-cols-2 gap-4">
          <UiLazyImage
            v-for="(img, i) in equipmentImages"
            :key="img.src"
            :src="img.src"
            :alt="t(`mfg.equipImg.${i + 1}.alt`)"
            ratio="aspect-square"
            class="rounded-xl object-cover shadow-card"
            :class="img.class"
          />
        </div>
        <div class="reveal" :style="`transition-delay:120ms`">
          <span class="eyebrow"><span class="h-px w-6 bg-gold" />{{ t('mfg.equipment.eyebrow') }}</span>
          <h2 class="mt-3 text-3xl font-bold md:text-4xl">{{ t('mfg.equipment.title') }}</h2>
          <p class="mt-5 leading-relaxed text-navy/70">
            {{ t('mfg.equipment.desc') }}
          </p>
          <ul class="mt-6 space-y-3">
            <li v-for="idx in 6" :key="idx" class="flex items-start gap-3 text-sm text-navy/75">
              <UiAppIcon name="check" :size="18" class="mt-0.5 text-leaf" />{{ t(`mfg.equipment.${idx}`) }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-navy">
      <div class="wrap reveal text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ t('mfg.cta.title') }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-white/75">{{ t('mfg.cta.subtitle') }}</p>
        <UiAppButton :to="localePath('/contact')" variant="primary" size="lg" icon="send" class="mt-8">{{ t('mfg.cta.button') }}</UiAppButton>
      </div>
    </section>
  </div>
</template>
