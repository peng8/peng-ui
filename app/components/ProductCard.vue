<script setup lang="ts">
import type { ProductCategory } from '~/data/products'

defineProps<{ item: ProductCategory; index?: number }>()

const { isZh } = useLocale()
</script>

<template>
  <NuxtLink
    :to="`/products/categories/${item.slug}`"
    class="reveal group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-mist-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
    :style="index !== undefined ? `transition-delay: ${index * 80}ms` : ''"
  >
    <!-- 图片 -->
    <div class="relative aspect-[4/3] overflow-hidden bg-mist-dark">
      <UiLazyImage :src="item.image" :alt="item.name" ratio="aspect-[4/3]" class="h-full" />
      <div class="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
      <!-- 角标 -->
      <span class="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
        {{ item.short }}
      </span>
      <!-- 悬浮查看 -->
      <span class="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
        {{ isZh ? '了解详情' : 'View details' }} <UiAppIcon name="arrow-right" :size="16" />
      </span>
    </div>
    <!-- 内容 -->
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-lg font-bold text-navy">{{ isZh ? item.nameZh : item.name }}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{{ isZh ? item.descZh : item.desc }}</p>
      <div class="mt-4 flex items-center justify-between border-t border-mist pt-4">
        <span class="text-xs text-navy/50">MOQ from</span>
        <span class="text-sm font-semibold text-navy-500">{{ item.moq }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
