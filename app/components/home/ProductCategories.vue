<script setup lang="ts">
import type { MessageKey } from '~/i18n/messages'
import { productCategories } from '~/data/products'

const {  t, isZh , localePath } = useLocale()
</script>

<template>
  <section class="section bg-mist">
    <div class="wrap">
      <div class="flex flex-col items-end justify-between gap-6 md:flex-row">
        <UiSectionHeading
          :eyebrow="t('pc.eyebrow')"
          :title="isZh ? '六大剂型,无限可能' : 'Full Range of Dosage Forms'"
          :subtitle="isZh ? '同一 GMP 认证厂区生产所有主流补充剂剂型——随时可贴您的品牌。' : 'Every major supplement format, manufactured under one GMP-certified roof — ready for your private label.'"
          align="left"
          class="md:max-w-xl"
        />
        <UiAppButton :to="localePath('/products')" variant="ghost" icon-right="arrow-right" class="shrink-0">
          {{ isZh ? '全部产品' : 'All Products' }}
        </UiAppButton>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          v-for="(item, i) in productCategories"
          :key="item.slug"
          :item="item"
          :index="i"
        />
      </div>
    </div>
  </section>
</template>
