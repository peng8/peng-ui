<script setup lang="ts">
// 产品列表浏览器（共享组件）—— 剂型筛选 Tabs + 卡片网格 + 分页
// 由各 products 页面传入 category / page，渲染对应内容。
// 分页与分类切换均用 <NuxtLink> 跳转到路径参数式 URL，便于 SSG 预渲染独立 HTML。
import type { MessageKey } from '~/i18n/messages'
import { productCategories } from '~/data/products'

const props = withDefaults(
  defineProps<{
    /** 当前剂型 slug，'all' 表示全部 */
    category?: string
    /** 当前页码（从 1 开始） */
    page?: number
  }>(),
  { category: 'all', page: 1 }
)

const {  t, isZh , localePath } = useLocale()

const activeCat = computed(() => props.category || 'all')
const currentPage = computed(() => Math.max(1, props.page || 1))

const filtered = computed(() => getFilteredProducts(activeCat.value))
const totalPages = computed(() => getTotalPages(activeCat.value))
const safePage = computed(() => Math.min(currentPage.value, totalPages.value))
const pageItems = computed(() => getPageItems(activeCat.value, currentPage.value))

// 筛选项：「全部」+ 6 大剂型（按当前语言切换显示名）
const filters = computed(() => [
  { slug: 'all', name: isZh.value ? '全部产品' : 'All Products' },
  ...productCategories.map((c) => ({
    slug: c.slug,
    name: isZh.value ? c.nameZh : c.name
  }))
])

// 面包屑：分类页多一级（路径用 localePath 包装带 locale 前缀）
const breadcrumb = computed(() => {
  const base = [
    { label: isZh.value ? '首页' : 'Home', to: localePath('/') },
    { label: isZh.value ? '产品中心' : 'Products', to: localePath('/products') }
  ]
  if (activeCat.value !== 'all') {
    const cat = productCategories.find((c) => c.slug === activeCat.value)
    if (cat) base.push({ label: isZh.value ? cat.nameZh : cat.name })
  }
  return base
})

// 动态 SEO（按 locale 切换）
const catName = computed(() => productCategories.find((c) => c.slug === activeCat.value))
useSeoMeta({
  title: () => {
    const n = catName.value ? (isZh.value ? catName.value.nameZh : catName.value.name) : null
    const base = n
      ? (isZh.value ? `${n} — OEM/ODM 营养补充剂制造商` : `${n} — Supplement OEM/ODM`)
      : (isZh.value ? '全剂型营养补充剂 OEM/ODM' : 'Products — Supplement Dosage Forms OEM/ODM')
    return safePage.value > 1 ? `${base} | ${isZh.value ? '第' : 'Page'} ${safePage.value}` : base
  },
  description: () =>
    isZh.value
      ? `探索 MILDY ${catName.value ? catName.value.nameZh : '全剂型'}营养补充剂产品${
          safePage.value > 1 ? ` — 第 ${safePage.value} / ${totalPages.value} 页` : ''
        }。支持白标定制与配方开发。`
      : `Explore MILDY ${catName.value ? catName.value.name.toLowerCase() : 'full range of'} supplement products${
          safePage.value > 1 ? ` — page ${safePage.value} of ${totalPages.value}` : ''
        }. Private label and custom formulation available.`
})

// 切换筛选 / 翻页后回到列表顶部
watch(
  () => [activeCat.value, currentPage.value],
  () => {
    if (import.meta.client) nextTick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }
)
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('products.eyebrow')"
      :title="t('products.title')"
      :subtitle="t('products.subtitle')"
      image="/images/products/hero.jpg"
      :breadcrumb="breadcrumb"
    />

    <!-- 剂型筛选 Tabs（NuxtLink 便于爬虫发现各分类页） -->
    <section class="sticky top-16 z-30 border-b border-mist-border bg-white/95 backdrop-blur md:top-20">
      <div class="wrap flex gap-1 overflow-x-auto py-3">
        <NuxtLink
          v-for="f in filters"
          :key="f.slug"
          :to="localePath(productPageUrl(f.slug, 1))"
          class="shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors"
          :class="activeCat === f.slug ? 'bg-navy text-white' : 'text-navy/60 hover:bg-navy hover:text-white'"
        >
          {{ f.name }}
        </NuxtLink>
      </div>
    </section>

    <!-- 产品卡片网格 -->
    <section class="section bg-mist">
      <div class="wrap">
        <!-- 结果计数 -->
        <p class="mb-8 text-sm text-navy/55">
          {{ t('products.showing', { shown: pageItems.length, total: filtered.length }) }}
        </p>

        <div v-if="pageItems.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridCard
            v-for="(item, i) in pageItems"
            :key="item.slug"
            :product="item"
            :index="i"
          />
        </div>

        <!-- 空态 -->
        <div v-else class="rounded-xl bg-white py-20 text-center shadow-card ring-1 ring-mist-border">
          <UiAppIcon name="box" :size="40" class="mx-auto text-navy/30" />
          <p class="mt-4 text-navy/60">{{ t('products.empty') }}</p>
        </div>

        <!-- 分页 -->
        <div v-if="totalPages > 1" class="mt-12 flex items-center justify-center gap-2">
          <!-- Prev -->
          <NuxtLink
            v-if="safePage > 1"
            :to="localePath(productPageUrl(activeCat, safePage - 1))"
            class="btn-navy px-4 py-2 text-xs"
          >
            <UiAppIcon name="chevron-right" :size="14" class="rotate-180" />
            {{ t('products.prev') }}
          </NuxtLink>
          <span v-else class="btn-navy px-4 py-2 text-xs cursor-not-allowed opacity-40">
            <UiAppIcon name="chevron-right" :size="14" class="rotate-180" />
            {{ t('products.prev') }}
          </span>

          <!-- 数字页码：用 line-height + text-align 实现单行文字垂直水平居中 -->
          <NuxtLink
            v-for="p in totalPages"
            :key="p"
            :to="localePath(productPageUrl(activeCat, p))"
            class="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold leading-none transition-colors"
            :class="p === safePage ? 'bg-navy text-white' : 'bg-white text-navy/70 ring-1 ring-mist-border hover:bg-mist'"
          >
            {{ p }}
          </NuxtLink>

          <!-- Next -->
          <NuxtLink
            v-if="safePage < totalPages"
            :to="localePath(productPageUrl(activeCat, safePage + 1))"
            class="btn-navy px-4 py-2 text-xs"
          >
            {{ t('products.next') }}
            <UiAppIcon name="chevron-right" :size="14" />
          </NuxtLink>
          <span v-else class="btn-navy px-4 py-2 text-xs cursor-not-allowed opacity-40">
            {{ t('products.next') }}
            <UiAppIcon name="chevron-right" :size="14" />
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
