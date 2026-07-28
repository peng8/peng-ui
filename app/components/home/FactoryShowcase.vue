<script setup lang="ts">
import type { MessageKey } from '~/i18n/messages'
import { site } from '~/data/site'

const {  t, isZh , localePath } = useLocale()

const facilityStats = computed(() => [
  { value: '20,000', label: isZh.value ? '平方米厂区' : 'm² Facility Area', icon: 'box' },
  { value: '8', label: isZh.value ? '条产线' : 'Production Lines', icon: 'gear' },
  { value: '8', label: isZh.value ? '大车间' : 'Workshops', icon: 'shield-check' }
])

const highlights = computed(() => [
  { icon: 'gear', title: isZh.value ? '自动化生产线' : 'Automated Production Lines', desc: isZh.value ? '8 条高速产线,软糖 / 软胶囊 / 片剂 / 粉剂全覆盖。' : '8 high-speed lines covering gummies, softgels, tablets and powders.' },
  { icon: 'shield-check', title: isZh.value ? 'GMP 洁净车间' : 'GMP Cleanrooms', desc: isZh.value ? '10 万级净化,温湿度与压差全程监控。' : 'Class 100,000 cleanrooms with full environmental monitoring.' },
  { icon: 'flask', title: isZh.value ? '自建研发实验室' : 'In-house R&D Laboratory', desc: isZh.value ? '配方开发、稳定性测试与功效验证一站完成。' : 'Formulation, stability and efficacy testing under one roof.' }
])

const { openOne } = useLightbox()
const mainImg = '/images/banner-frames/frame-02s.jpg'
const midImages = [
  { src: '/images/banner-frames/frame-08s.jpg', alt: 'Production line detail' },
  { src: '/images/banner-frames/frame-13s.jpg', alt: 'Facility interior' }
]
</script>

<template>
  <section class="section bg-navy text-white">
    <div class="wrap grid items-center gap-12 lg:grid-cols-2">
      <!-- 左：图文 -->
      <div>
        <UiSectionHeading
          :eyebrow="t('fs.eyebrow')"
          :title="isZh ? '20,000 平方米世界级生产基地' : '20,000 m² of World-Class Production'"
          :subtitle="isZh ? '专用的高科技产业园,配备自动化产线、洁净车间和自建实验室——为规模化、一致性和合规性而建。' : 'A purpose-built high-tech industrial park with automated lines, cleanrooms and in-house laboratories — engineered for volume, consistency and compliance.'"
          align="left"
          light
          class="md:max-w-xl"
        />

        <!-- 数据 -->
        <div class="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3">
          <div v-for="(s, i) in facilityStats" :key="s.label" class="reveal" :style="`transition-delay: ${i * 80}ms`">
            <UiAppIcon :name="s.icon" :size="22" class="text-gold" />
            <UiStatCounter :value="s.value" light class="mt-2 !text-3xl" />
            <p class="mt-1 text-xs text-white/55">{{ s.label }}</p>
          </div>
        </div>

        <!-- 工艺亮点 -->
        <ul class="mt-8 grid gap-3">
          <li
            v-for="(h, i) in highlights"
            :key="h.title"
            class="reveal flex items-start gap-3 rounded-lg bg-white/[0.04] px-4 py-3 ring-1 ring-white/10"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <UiAppIcon :name="h.icon" :size="18" class="mt-0.5 shrink-0 text-gold" />
            <div>
              <p class="text-sm font-semibold text-white">{{ h.title }}</p>
              <p class="mt-0.5 text-xs leading-relaxed text-white/55">{{ h.desc }}</p>
            </div>
          </li>
        </ul>

        <UiAppButton :to="localePath('/manufacturing')" variant="primary" icon-right="arrow-right" class="mt-9">
          {{ t('fs.tour') }}
        </UiAppButton>
      </div>

      <!-- 右:Bento 图片画廊 -->
      <div class="reveal grid grid-cols-2 gap-4">
        <button
          class="group col-span-2 overflow-hidden rounded-xl"
          @click="openOne({ src: mainImg, alt: 'MILDY factory overview', caption: 'MILDY main manufacturing facility' })"
        >
          <UiLazyImage
            :src="mainImg"
            alt="MILDY factory overview"
            ratio="aspect-[16/9]"
            class="transition-transform duration-700 group-hover:scale-105"
          />
        </button>
        <button
          v-for="(m, i) in midImages"
          :key="i"
          class="group overflow-hidden rounded-xl"
          @click="openOne({ src: m.src, alt: m.alt })"
        >
          <UiLazyImage
            :src="m.src"
            :alt="m.alt"
            ratio="aspect-[4/3]"
            class="h-full transition-transform duration-700 group-hover:scale-105"
          />
        </button>
      </div>
    </div>
  </section>
</template>
