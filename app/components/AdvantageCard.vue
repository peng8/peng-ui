<script setup lang="ts">
import type { Advantage } from '~/data/advantages'

defineProps<{ item: Advantage; index?: number }>()

const { isZh } = useLocale()
</script>

<template>
  <div
    class="reveal card group flex flex-col p-7 hover:-translate-y-1 hover:shadow-card-hover"
    :style="index !== undefined ? `transition-delay: ${index * 80}ms` : ''"
  >
    <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-gold">
      <UiAppIcon :name="item.icon" :size="28" />
    </div>
    <h3 class="mt-5 text-lg font-bold text-navy">{{ isZh ? item.titleZh : item.title }}</h3>
    <p class="mt-3 text-sm leading-relaxed text-navy/60">{{ isZh ? item.descZh : item.desc }}</p>
  </div>
</template>
