<script setup lang="ts">
// 全部产品第 N 页（路径参数式，便于 SSG 预渲染独立 HTML）
// 页码验证由 SSG 路由生成保证；浏览器直接访问不存在的页码由服务端返回 404。
const route = useRoute()
const page = computed(() => Number(route.params.page))
</script>

<template>
  <ProductsBrowser category="all" :page="page" />
</template>
