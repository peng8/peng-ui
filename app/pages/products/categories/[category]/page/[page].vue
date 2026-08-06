<script setup lang="ts">
// 某剂型分类第 N 页
// 分类与页码验证由 SSG 路由生成保证；浏览器直接访问不存在的路由由服务端返回 404。
import { productCategories } from '~/data/productCategories'

const route = useRoute()
const category = computed(() => String(route.params.category))
const page = computed(() => Number(route.params.page))

// 非法分类 slug → 404
if (!productCategories.some((c) => c.slug === category.value)) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found', fatal: true })
}
</script>

<template>
  <ProductsBrowser :category="category" :page="page" />
</template>
