<script setup lang="ts">
// 产品列表卡片：列表页 + 详情页「同类推荐」共用
// 沿用原 ProductCard.vue 的卡片视觉风格，点击跳详情页
import type { Product } from '~/data/products'
import { getCategoryBySlug } from '~/data/products'

const props = defineProps<{ product: Product; index?: number }>()

// 剂型短标签文案（角标用）
const category = computed(() => getCategoryBySlug(props.product.category))
</script>

<template>
  <NuxtLink
    :to="`/products/${product.slug}`"
    class="reveal group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-mist-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
    :style="index !== undefined ? `transition-delay: ${index * 60}ms` : ''"
  >
    <!-- 封面图 -->
    <div class="relative aspect-[4/3] overflow-hidden bg-mist-dark">
      <UiLazyImage :src="product.cover" :alt="product.name" ratio="aspect-[4/3]" class="h-full" />
      <div class="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
      <!-- 剂型角标 -->
      <span
        v-if="category"
        class="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white"
      >
        {{ category.short }}
      </span>
      <!-- 悬浮「查看详情」 -->
      <span class="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
        View details <UiAppIcon name="arrow-right" :size="16" />
      </span>
    </div>

    <!-- 内容 -->
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-lg font-bold text-navy">{{ product.name }}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{{ product.shortDesc }}</p>
      <div class="mt-4 flex items-center justify-between border-t border-mist pt-4">
        <span class="text-xs text-navy/50">MOQ from</span>
        <span class="text-sm font-semibold text-navy-500">{{ product.moq }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
