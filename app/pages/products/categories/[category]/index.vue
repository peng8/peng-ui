<script setup lang="ts">
// 某剂型分类第 1 页（放在 /products/categories/ 前缀下，避免与详情页 /products/[slug] 冲突）
import { productCategories } from '~/data/products'

const route = useRoute()
const category = computed(() => String(route.params.category))

// 非法分类 slug → 404
if (!productCategories.some((c) => c.slug === category.value)) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found', fatal: true })
}
</script>

<template>
  <ProductsBrowser :category="category" :page="1" />
</template>
