<script setup lang="ts">
import { cooperationModes } from '~/data/cases'

const { t, isZh, localePath } = useLocale()
</script>

<template>
  <section class="section bg-white">
    <div class="wrap">
      <UiSectionHeading
        :eyebrow="t('cm.eyebrow')"
        :title="t('cm.title')"
        :subtitle="t('cm.subtitle')"
      />

      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <div
          v-for="(mode, i) in cooperationModes"
          :key="mode.key"
          class="reveal group overflow-hidden rounded-2xl bg-mist shadow-card ring-1 ring-mist-border transition-all duration-300 hover:shadow-card-hover"
          :style="`transition-delay: ${i * 120}ms`"
        >
          <!-- 图片 -->
          <div class="relative aspect-[16/10] overflow-hidden">
            <UiLazyImage :src="mode.image" :alt="mode.name" class="h-full transition-transform duration-700 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
            <div class="absolute bottom-0 left-0 p-6">
              <span class="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">{{ isZh ? mode.subtitleZh : mode.subtitle }}</span>
              <h3 class="mt-3 text-2xl font-bold text-white">{{ isZh ? mode.nameZh : mode.name }}</h3>
            </div>
          </div>

          <!-- 内容 -->
          <div class="p-6 md:p-8">
            <p class="text-sm leading-relaxed text-navy/70">{{ isZh ? mode.descZh : mode.desc }}</p>
            <p class="mt-4 rounded-lg bg-navy/5 px-4 py-3 text-xs font-medium text-navy/70">
              <UiAppIcon name="check" :size="16" class="text-gold" />
              {{ isZh ? mode.bestZh : mode.best }}
            </p>
            <ul class="mt-5 grid gap-2.5">
              <li v-for="(f, fi) in mode.features" :key="f" class="flex items-start gap-2.5 text-sm text-navy/75">
                <UiAppIcon name="check" :size="16" class="mt-0.5 text-leaf" />
                {{ isZh ? mode.featuresZh[fi] : f }}
              </li>
            </ul>
            <UiAppButton :to="localePath('/services')" variant="navy" icon-right="arrow-right" class="mt-7">
              {{ t('common.learnMore') }}
            </UiAppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
