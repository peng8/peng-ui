<script setup lang="ts">
// 首页精选产品：每个剂型取首个，保证多样性
import { curatedProducts, productCategories } from '~/data/products'

const {  t, localePath } = useLocale()

// 首页精选 8 个产品（每个剂型取 1 个，保证剂型多样性），2 行 × 4 个填满
const featured = computed(() => {
  const result: typeof curatedProducts = []
  const seen = new Set<string>()
  // 第一轮：每个剂型取 1 个，保证剂型多样性
  for (const cat of productCategories) {
    const first = curatedProducts.find((p) => p.category === cat.slug)
    if (first && !seen.has(first.slug)) {
      result.push(first)
      seen.add(first.slug)
    }
    if (result.length >= 8) return result
  }
  // 第二轮：按数据顺序补足到 8 个
  for (const p of curatedProducts) {
    if (seen.has(p.slug)) continue
    result.push(p)
    seen.add(p.slug)
    if (result.length >= 8) break
  }
  return result
})
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
