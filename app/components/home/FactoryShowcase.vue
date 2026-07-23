<script setup lang="ts">
import type { MessageKey } from '~/i18n/messages'
import { site } from '~/data/site'

const { t, isZh } = useLocale()

const facilityStats = computed(() => [
  { value: '60,000', label: isZh.value ? '平方米厂区' : 'm² Facility Area', icon: 'box' },
  { value: '12', label: isZh.value ? '条产线' : 'Production Lines', icon: 'gear' },
  { value: '30B+', label: isZh.value ? '年产能' : 'Units / Year', icon: 'layers' },
  { value: '8', label: isZh.value ? '大车间' : 'Workshops', icon: 'shield-check' }
])

const { openOne } = useLightbox()
const mainImg = 'https://picsum.photos/seed/mildy-factory-main/1000/1200'
const gallery = [
  'https://picsum.photos/seed/mildy-factory-g1/600/600',
  'https://picsum.photos/seed/mildy-factory-g2/600/600',
  'https://picsum.photos/seed/mildy-factory-g3/600/600',
  'https://picsum.photos/seed/mildy-factory-g4/600/600'
]
</script>

<template>
  <section class="section bg-navy text-white">
    <div class="wrap grid items-center gap-12 lg:grid-cols-2">
      <!-- 左：图文 -->
      <div>
        <UiSectionHeading
          :eyebrow="t('fs.eyebrow')"
          :title="isZh ? '60,000 平方米世界级生产基地' : '60,000 m² of World-Class Production'"
          :subtitle="isZh ? '专用的高科技产业园,配备自动化产线、洁净车间和自建实验室——为规模化、一致性和合规性而建。' : 'A purpose-built high-tech industrial park with automated lines, cleanrooms and in-house laboratories — engineered for volume, consistency and compliance.'"
          align="left"
          light
          class="md:max-w-xl"
        />

        <!-- 数据 -->
        <div class="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
          <div v-for="(s, i) in facilityStats" :key="s.label" class="reveal" :style="`transition-delay: ${i * 80}ms`">
            <UiAppIcon :name="s.icon" :size="22" class="text-gold" />
            <UiStatCounter :value="s.value" light class="mt-2 !text-3xl" />
            <p class="mt-1 text-xs text-white/55">{{ s.label }}</p>
          </div>
        </div>

        <UiAppButton to="/manufacturing" variant="primary" icon-right="arrow-right" class="mt-9">
          {{ t('fs.tour') }}
        </UiAppButton>
      </div>

      <!-- 右：图片画廊 -->
      <div class="reveal grid grid-cols-2 gap-4">
        <button class="group col-span-2 overflow-hidden rounded-xl" @click="openOne({ src: mainImg, alt: 'MILDY factory overview', caption: 'MILDY main manufacturing facility' })">
          <UiLazyImage :src="mainImg" alt="MILDY factory overview" ratio="aspect-[16/9]" class="transition-transform duration-700 group-hover:scale-105" />
        </button>
        <button v-for="(g, i) in gallery" :key="i" class="group overflow-hidden rounded-xl" @click="openOne({ src: g, alt: `Facility ${i + 1}` })">
          <UiLazyImage :src="g" :alt="`Facility ${i + 1}`" ratio="aspect-square" class="transition-transform duration-700 group-hover:scale-105" />
        </button>
      </div>
    </div>
  </section>
</template>
