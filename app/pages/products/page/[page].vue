<script setup lang="ts">
// 全部产品第 N 页（路径参数式，便于 SSG 预渲染独立 HTML）
const route = useRoute()
const page = computed(() => Number(route.params.page))

// 页码越界 → 404
if (!Number.isFinite(page.value) || page.value < 2 || page.value > getTotalPages('all')) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <ProductsBrowser category="all" :page="page" />
</template>
