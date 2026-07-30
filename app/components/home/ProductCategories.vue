<script setup lang="ts">
import { getFeaturedProducts } from '~/composables/useProducts'

const {  t, isZh , localePath } = useLocale()

// 首页精选 8 个产品（每个剂型取 1 个，保证剂型多样性），2 行 × 4 个填满
const featured = getFeaturedProducts(8)
</script>

<template>
  <section class="section bg-mist">
    <div class="wrap">
      <div class="flex flex-col items-end justify-between gap-6 md:flex-row">
        <UiSectionHeading
          :eyebrow="t('pc.eyebrow')"
          :title="isZh ? '精选产品,即开即用' : 'Featured Products, Ready to Private-Label'"
          :subtitle="isZh ? '覆盖软糖、软胶囊、片剂、硬胶囊、粉剂与口服液——同一 GMP 认证厂区生产,随时可贴您的品牌。' : 'Gummies, softgels, tablets, capsules, powders & liquid drops — manufactured under one GMP-certified roof, ready for your private label.'"
          align="left"
          class="md:max-w-xl"
        />
        <UiAppButton :to="localePath('/products')" variant="ghost" icon-right="arrow-right" class="shrink-0">
          {{ isZh ? '全部产品' : 'All Products' }}
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
