<script setup lang="ts">
import type { ProcessStep } from '~/data/process'

defineProps<{ item: ProcessStep; index?: number; last?: boolean }>()
</script>

<template>
  <div
    class="reveal relative flex flex-col items-start pl-16 sm:pl-20"
    :style="index !== undefined ? `transition-delay: ${index * 100}ms` : ''"
  >
    <!-- 时间线点 + 连接线 -->
    <div class="absolute left-0 top-0 flex h-full w-12 flex-col items-center sm:w-16">
      <!-- 图标圆点 -->
      <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold shadow-md sm:h-14 sm:w-14">
        <UiAppIcon :name="item.icon" :size="24" />
      </div>
      <!-- 连接线 -->
      <div v-if="!last" class="mt-2 w-px flex-1 bg-gradient-to-b from-navy/30 to-mist-border" />
    </div>

    <!-- 步骤内容 -->
    <div class="pb-10">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-xs font-bold uppercase tracking-widest text-gold">{{ item.step }}</span>
        <span class="rounded-full bg-leaf/10 px-2.5 py-0.5 text-[11px] font-semibold text-leaf-dark">{{ item.duration }}</span>
      </div>
      <h3 class="mt-2 text-xl font-bold text-navy">{{ item.title }}</h3>
      <p class="mt-2 max-w-md text-sm leading-relaxed text-navy/60">{{ item.desc }}</p>
    </div>
  </div>
</template>
