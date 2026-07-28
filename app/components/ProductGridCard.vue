<script setup lang="ts">
// 产品列表卡片：列表页 + 详情页「同类推荐」共用
// 沿用原 ProductCard.vue 的卡片视觉风格，点击跳详情页
import type { Product } from '~/data/products'
import { getCategoryBySlug } from '~/data/products'

const props = defineProps<{ product: Product; index?: number }>()

const { isZh, formatMoq, localePath } = useLocale()

// 剂型短标签文案（角标用）
const category = computed(() => getCategoryBySlug(props.product.category))

// 产品名/描述按 locale 取（中文版产品暂回退到英文字段，待 nameZh/shortDescZh 补全后自动生效）
const pName = computed(() => (isZh.value ? props.product.nameZh ?? props.product.name : props.product.name))
const pDesc = computed(() => (isZh.value ? props.product.shortDescZh ?? props.product.shortDesc : props.product.shortDesc))
</script>

<template>
  <NuxtLink
    :to="localePath(`/products/${product.slug}`)"
    class="reveal group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-mist-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
    :style="index !== undefined ? `transition-delay: ${index * 60}ms` : ''"
  >
    <!-- 封面图 -->
    <div class="relative aspect-[4/3] overflow-hidden bg-mist-dark">
      <UiLazyImage :src="product.cover" :alt="pName" ratio="aspect-[4/3]" class="h-full" />
      <div class="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
      <!-- 剂型角标 -->
      <span
        v-if="category"
        class="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white"
      >
        {{ isZh ? category.shortZh : category.short }}
      </span>
      <!-- 悬浮「查看详情」 -->
      <span class="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
        {{ isZh ? '查看详情' : 'View details' }} <UiAppIcon name="arrow-right" :size="16" />
      </span>
    </div>

    <!-- 内容 -->
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-lg font-bold text-navy">{{ pName }}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{{ pDesc }}</p>
      <div class="mt-4 flex items-center justify-between border-t border-mist pt-4">
        <span class="text-xs text-navy/50">{{ isZh ? '起订量' : 'MOQ from' }}</span>
        <span class="text-sm font-semibold text-navy-500">{{ formatMoq(product.moq) }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
