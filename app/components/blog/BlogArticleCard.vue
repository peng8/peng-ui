<script setup lang="ts">
// 博客文章卡片 —— 两种变体：
// - variant="row"（默认）：横向行布局，左侧封面 + 右侧介绍，用于列表页（与产品卡片的纵向网格区分）
// - variant="mini"：小缩略图 + 标题 + 日期，用于详情页「相关文章」
import type { BlogPost } from '~/data/blog'
import { getBlogCategoryName } from '~/data/blog'

const props = withDefaults(
  defineProps<{
    post: BlogPost
    index?: number
    variant?: 'row' | 'mini'
  }>(),
  { variant: 'row' }
)

const { isZh, localePath } = useLocale()

// 标题/摘要按 locale 取（zh 用 titleZh/descriptionZh，无则回退英文）
const title = computed(() => (isZh.value ? props.post.titleZh ?? props.post.title : props.post.title))
const description = computed(() =>
  isZh.value ? props.post.descriptionZh ?? props.post.description : props.post.description
)

// 分类角标文案
const categoryName = computed(() => getBlogCategoryName(props.post.category, isZh.value))

// 日期展示：ISO 字符串 → YYYY-MM-DD（中英一致）
const dateLabel = computed(() => props.post.date.slice(0, 10))
</script>

<template>
  <!-- 横向行布局：左封面 + 右介绍（列表页） -->
  <NuxtLink
    v-if="variant === 'row'"
    :to="localePath(post.path)"
    class="reveal group grid items-center gap-6 border-b border-mist-border py-8 first:pt-0 last:border-b-0 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10"
    :style="index !== undefined ? `transition-delay: ${index * 60}ms` : ''"
  >
    <!-- 左侧封面 -->
    <div class="relative aspect-[16/9] overflow-hidden rounded-xl bg-mist-dark sm:aspect-[16/10]">
      <UiLazyImage
        :src="post.cover"
        :alt="title"
        ratio="aspect-[16/9]"
        sizes="100vw sm:70vw md:40vw lg:38vw"
        class="h-full"
      />
      <!-- 移动端封面下的渐变遮罩，增强可读性 -->
      <div class="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
    </div>

    <!-- 右侧内容 -->
    <div class="flex flex-col justify-center">
      <!-- 分类 + 日期 -->
      <div class="flex items-center gap-3 text-xs">
        <span class="font-semibold uppercase tracking-wider text-gold-dark">{{ categoryName }}</span>
        <span class="h-1 w-1 rounded-full bg-navy/25" aria-hidden="true" />
        <time class="text-navy/50">{{ dateLabel }}</time>
      </div>
      <!-- 标题 -->
      <h3
        class="mt-3 text-xl font-bold leading-snug text-navy transition-colors group-hover:text-gold-dark md:text-2xl"
        :title="title"
      >
        {{ title }}
      </h3>
      <!-- 摘要 -->
      <p class="mt-3 line-clamp-2 text-sm leading-relaxed text-navy/60 md:text-base" :title="description">
        {{ description }}
      </p>
      <!-- 阅读链接 -->
      <div class="mt-5 flex items-center gap-2 text-sm font-semibold text-navy">
        <span class="border-b border-transparent pb-0.5 transition-colors group-hover:border-gold-dark group-hover:text-gold-dark">
          {{ isZh ? '阅读文章' : 'Read article' }}
        </span>
        <UiAppIcon name="arrow-right" :size="16" class="text-gold-dark transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </NuxtLink>

  <!-- 迷你布局：缩略图 + 标题 + 日期（详情页相关文章） -->
  <NuxtLink
    v-else
    :to="localePath(post.path)"
    class="reveal group flex items-center gap-4 rounded-xl border border-mist-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-card"
  >
    <div class="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-lg bg-mist-dark sm:w-32">
      <UiLazyImage :src="post.cover" :alt="title" ratio="aspect-[4/3]" sizes="160px" />
    </div>
    <div class="min-w-0">
      <div class="flex items-center gap-2 text-[11px]">
        <span class="font-semibold uppercase tracking-wider text-gold-dark">{{ categoryName }}</span>
        <span class="h-1 w-1 rounded-full bg-navy/25" aria-hidden="true" />
        <time class="text-navy/45">{{ dateLabel }}</time>
      </div>
      <h3 class="mt-1.5 line-clamp-2 text-sm font-bold leading-snug text-navy transition-colors group-hover:text-gold-dark" :title="title">
        {{ title }}
      </h3>
    </div>
  </NuxtLink>
</template>
