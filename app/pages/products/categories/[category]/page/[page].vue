<script setup lang="ts">
// 某剂型分类第 N 页
import { productCategories } from '~/data/products'

const route = useRoute()
const category = computed(() => String(route.params.category))
const page = computed(() => Number(route.params.page))

// 非法分类或页码越界 → 404
if (!productCategories.some((c) => c.slug === category.value)) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found', fatal: true })
}
if (!Number.isFinite(page.value) || page.value < 2 || page.value > getTotalPages(category.value)) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <ProductsBrowser :category="category" :page="page" />
</template>
