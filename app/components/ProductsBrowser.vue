<script setup lang="ts">
// 产品列表浏览器（共享组件）—— 剂型筛选 Tabs + 卡片网格 + 分页
// 由各 products 页面传入 category / page，渲染对应内容。
// 分页与分类切换均用 <NuxtLink> 跳转到路径参数式 URL，便于 SSG 预渲染独立 HTML。
import type { MessageKey } from '~/i18n/messages'
import { productCategories } from '~/data/products'
import { productImageUrl } from '~/data/productImageUrl'
import type { ProductCardItem, ProductListResponse } from '~/data/products-types'
import { PRODUCT_PAGE_SIZE, productListApiPath } from '~/composables/useProducts'

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
const searchQuery = ref('')
const searchPage = ref(1)
const isSearching = computed(() => searchQuery.value.trim().length > 0)
const searchLoading = ref(false)
const searchIndex = ref<Array<ProductCardItem & { searchText: string }> | null>(null)

const normalizeSearchText = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, ' ')
    .trim()

// 列表页只获取当前分类 + 当前页卡片数据，避免每个静态页面重复内嵌完整产品库。
const productFetchKey = computed(() => `products-${activeCat.value}-${currentPage.value}`)
const { data: productPage } = await useAsyncData<ProductListResponse>(
  productFetchKey,
  () => $fetch(productListApiPath(activeCat.value, currentPage.value)),
  {
    watch: [activeCat, currentPage],
    default: () => ({ items: [], total: 0, totalPages: 1, page: 1, category: activeCat.value })
  }
)

const ensureSearchIndex = async () => {
  if (searchIndex.value) return
  searchLoading.value = true
  try {
    searchIndex.value = await $fetch<Array<ProductCardItem & { searchText: string }>>('/api/products/search-index')
  } finally {
    searchLoading.value = false
  }
}

// 搜索时无视剂型 Tab，直接搜全部产品；搜索索引仅在用户输入后懒加载。
const filtered = computed<ProductCardItem[]>(() => {
  if (!isSearching.value) return productPage.value?.items ?? []

  const query = normalizeSearchText(searchQuery.value)
  if (!query) return []

  const terms = query.split(/\s+/).filter(Boolean)
  const list = searchIndex.value ?? []

  return list.filter((product) => terms.every((term) => product.searchText.includes(term)))
})
const resultTotal = computed(() => (isSearching.value ? filtered.value.length : productPage.value?.total ?? 0))
const totalPages = computed(() =>
  isSearching.value
    ? Math.max(1, Math.ceil(filtered.value.length / PRODUCT_PAGE_SIZE))
    : productPage.value?.totalPages ?? 1
)
const activePage = computed(() => (isSearching.value ? searchPage.value : currentPage.value))
const safePage = computed(() => Math.min(Math.max(1, activePage.value), totalPages.value))
const pageItems = computed(() => {
  if (!isSearching.value) return productPage.value?.items ?? []
  const start = (safePage.value - 1) * PRODUCT_PAGE_SIZE
  return filtered.value.slice(start, start + PRODUCT_PAGE_SIZE)
})

type PaginationItem =
  | { type: 'page'; page: number }
  | { type: 'ellipsis'; key: string }

const paginationItems = computed<PaginationItem[]>(() => {
  const total = totalPages.value
  const current = safePage.value

  if (total <= 7) {
    return Array.from({ length: total }, (_, i): PaginationItem => ({ type: 'page', page: i + 1 }))
  }

  const pages = new Set<number>([1, total, current, current - 1, current + 1])

  if (current <= 4) {
    for (const page of [2, 3, 4, 5]) pages.add(page)
  }

  if (current >= total - 3) {
    for (const page of [total - 4, total - 3, total - 2, total - 1]) pages.add(page)
  }

  const sortedPages = Array.from(pages)
    .filter((page) => page >= 1 && page <= total)
    .sort((a, b) => a - b)

  return sortedPages.reduce<PaginationItem[]>((items, page, index) => {
    const previousPage = sortedPages[index - 1]

    if (previousPage && page - previousPage > 1) {
      items.push({ type: 'ellipsis', key: `ellipsis-${previousPage}-${page}` })
    }

    items.push({ type: 'page', page })
    return items
  }, [])
})

const goSearchPage = (page: number) => {
  searchPage.value = Math.min(Math.max(1, page), totalPages.value)
  if (import.meta.client) nextTick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
}

const clearSearch = () => {
  searchQuery.value = ''
  searchPage.value = 1
}

// 筛选项：「全部」+ 6 大剂型（按当前语言切换显示名）
const filters = computed(() => [
  { slug: 'all', name: t('nav.allProducts') },
  ...productCategories.map((c) => ({
    slug: c.slug,
    name: isZh.value ? c.nameZh : c.name
  }))
])

// 面包屑：分类页多一级（路径用 localePath 包装带 locale 前缀）
const breadcrumb = computed(() => {
  const base: { label: string; to?: string }[] = [
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
    searchPage.value = 1
    if (import.meta.client) nextTick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }
)

watch(searchQuery, () => {
  searchPage.value = 1
  if (isSearching.value) ensureSearchIndex()
})

// 搜索/翻页是客户端原地更新（路由不变），布局里的 reveal 观察不会重跑，
// 导致新插入的卡片停在 opacity:0（透明但可点）。列表变化后重新观察 .reveal。
const { observeAll } = useReveal()
watch(pageItems, () => {
  if (import.meta.client) observeAll()
})
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('products.eyebrow')"
      :title="t('products.title')"
      :subtitle="t('products.subtitle')"
      :image="productImageUrl('hero.jpg')"
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

    <!-- 产品卡片网格（顶部内边距收紧，缩小与筛选 Tabs 的空隙） -->
    <section class="section bg-mist pt-6 md:pt-8">
      <div class="wrap">
        <!-- 搜索 -->
        <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div class="relative w-full md:max-w-xl">
            <UiAppIcon
              name="search"
              :size="18"
              class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/35"
            />
            <input
              v-model="searchQuery"
              type="search"
              :placeholder="isZh ? '搜索产品名称、描述、分类' : 'Search products by name, description, category'"
              class="h-12 w-full appearance-none rounded-lg border border-mist-border bg-white py-3 pl-11 pr-12 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-navy/30 focus:ring-2 focus:ring-navy/10 [&::-webkit-search-cancel-button]:hidden"
            >
            <button
              v-if="isSearching"
              type="button"
              :aria-label="isZh ? '清除搜索' : 'Clear search'"
              class="absolute right-3 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-navy/45 transition-colors hover:bg-mist hover:text-navy"
              @click="clearSearch"
            >
              <UiAppIcon name="x" :size="16" />
            </button>
          </div>
        </div>

        <!-- 结果计数 -->
        <p class="mb-8 text-sm text-navy/55">
          {{ searchLoading ? (isZh ? '正在加载搜索索引...' : 'Loading search index...') : t('products.showing', { shown: pageItems.length, total: resultTotal }) }}
        </p>

        <div v-if="searchLoading" class="rounded-xl bg-white py-20 text-center shadow-card ring-1 ring-mist-border">
          <UiAppIcon name="search" :size="40" class="mx-auto text-navy/30" />
          <p class="mt-4 text-navy/60">{{ isZh ? '正在搜索产品' : 'Searching products' }}</p>
        </div>

        <div v-else-if="pageItems.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
        <div v-if="totalPages > 1" class="mt-12 flex flex-wrap items-center justify-center gap-2">
          <!-- Prev -->
          <NuxtLink
            v-if="safePage > 1 && !isSearching"
            :to="localePath(productPageUrl(activeCat, safePage - 1))"
            class="btn-navy px-4 py-2 text-xs"
          >
            <UiAppIcon name="chevron-right" :size="14" class="rotate-180" />
            {{ t('products.prev') }}
          </NuxtLink>
          <button
            v-else-if="safePage > 1"
            type="button"
            class="btn-navy px-4 py-2 text-xs"
            @click="goSearchPage(safePage - 1)"
          >
            <UiAppIcon name="chevron-right" :size="14" class="rotate-180" />
            {{ t('products.prev') }}
          </button>
          <span v-else class="btn-navy px-4 py-2 text-xs cursor-not-allowed opacity-40">
            <UiAppIcon name="chevron-right" :size="14" class="rotate-180" />
            {{ t('products.prev') }}
          </span>

          <!-- 数字页码：用 line-height + text-align 实现单行文字垂直水平居中 -->
          <template
            v-for="item in paginationItems"
            :key="item.type === 'page' ? `page-${item.page}` : item.key"
          >
            <NuxtLink
              v-if="item.type === 'page' && !isSearching"
              :to="localePath(productPageUrl(activeCat, item.page))"
              class="inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm font-semibold leading-none transition-colors"
              :class="item.page === safePage ? 'bg-navy text-white' : 'bg-white text-navy/70 ring-1 ring-mist-border hover:bg-mist'"
            >
              {{ item.page }}
            </NuxtLink>
            <button
              v-else-if="item.type === 'page'"
              type="button"
              class="inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm font-semibold leading-none transition-colors"
              :class="item.page === safePage ? 'bg-navy text-white' : 'bg-white text-navy/70 ring-1 ring-mist-border hover:bg-mist'"
              @click="goSearchPage(item.page)"
            >
              {{ item.page }}
            </button>
            <span
              v-else
              aria-hidden="true"
              class="inline-flex h-9 min-w-6 items-center justify-center px-1 text-sm font-semibold leading-none text-navy/35"
            >
              ...
            </span>
          </template>

          <!-- Next -->
          <NuxtLink
            v-if="safePage < totalPages && !isSearching"
            :to="localePath(productPageUrl(activeCat, safePage + 1))"
            class="btn-navy px-4 py-2 text-xs"
          >
            {{ t('products.next') }}
            <UiAppIcon name="chevron-right" :size="14" />
          </NuxtLink>
          <button
            v-else-if="safePage < totalPages"
            type="button"
            class="btn-navy px-4 py-2 text-xs"
            @click="goSearchPage(safePage + 1)"
          >
            {{ t('products.next') }}
            <UiAppIcon name="chevron-right" :size="14" />
          </button>
          <span v-else class="btn-navy px-4 py-2 text-xs cursor-not-allowed opacity-40">
            {{ t('products.next') }}
            <UiAppIcon name="chevron-right" :size="14" />
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
