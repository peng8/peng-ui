<script setup lang="ts">
import { processSteps } from '~/data/process'

const {  t, isZh , localePath } = useLocale()
</script>

<template>
  <section class="section bg-mist">
    <div class="wrap">
      <UiSectionHeading
        :eyebrow="t('proc.eyebrow')"
        :title="t('proc.title')"
        :subtitle="t('proc.subtitle')"
      />

      <!-- 桌面横向时间线 -->
      <div class="mt-14 hidden lg:block">
        <div class="grid grid-cols-6 gap-2">
          <div
            v-for="(step, i) in processSteps"
            :key="step.step"
            class="reveal relative px-2"
            :style="`transition-delay: ${i * 90}ms`"
          >
            <!-- 顶部连接线 -->
            <div class="mb-6 flex items-center">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-gold shadow-md">
                <UiAppIcon :name="step.icon" :size="22" />
              </div>
              <div v-if="i < processSteps.length - 1" class="ml-2 h-px flex-1 bg-mist-border" />
            </div>
            <span class="text-xs font-bold uppercase tracking-widest text-gold">{{ step.step }}</span>
            <h4 class="mt-1 text-sm font-bold text-navy">{{ isZh ? step.titleZh : step.title }}</h4>
            <p class="mt-1.5 text-xs leading-relaxed text-navy/55">{{ isZh ? step.descZh : step.desc }}</p>
            <span class="mt-2 inline-block rounded-full bg-leaf/10 px-2 py-0.5 text-[10px] font-semibold text-leaf-dark">{{ isZh ? step.durationZh : step.duration }}</span>
          </div>
        </div>
      </div>

      <!-- 移动纵向时间线 -->
      <div class="mt-10 lg:hidden">
        <TimelineItem
          v-for="(step, i) in processSteps"
          :key="step.step"
          :item="step"
          :index="i"
          :last="i === processSteps.length - 1"
        />
      </div>

      <div class="reveal mt-12 text-center">
        <UiAppButton :to="localePath('/how-it-works')" variant="navy" icon-right="arrow-right">
          {{ t('proc.seeFull') }}
        </UiAppButton>
      </div>
    </div>
  </section>
</template>
