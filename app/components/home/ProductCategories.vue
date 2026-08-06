<script setup lang="ts">
// 首页精选产品：直接引用静态精选模块（仅 2KB），
// 不再从 ~/data/products 引入 curatedProducts，避免首页打包整份目录。
import { featuredProducts } from '~/data/featuredProducts'

const {  t, localePath } = useLocale()

// 静态精选 8 个产品（6 大剂型各取 1 + 补齐 2 个热门），2 行 × 4 个
const featured = featuredProducts
</script>

<template>
  <section class="section bg-mist">
    <div class="wrap">
      <div class="flex flex-col items-end justify-between gap-6 md:flex-row">
        <UiSectionHeading
          :eyebrow="t('pc.eyebrow')"
          :title="t('pc.title')"
          :subtitle="t('pc.subtitle')"
          align="left"
          class="md:max-w-xl"
        />
        <UiAppButton :to="localePath('/products')" variant="ghost" icon-right="arrow-right" class="shrink-0">
          {{ t('nav.allProducts') }}
        </UiAppButton>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ProductGridCard
          v-for="(item, i) in featured"
          :key="item.slug"
          :product="item"
          :index="i"
        />
      </div>
    </div>
  </section>
</template>
