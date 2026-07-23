<script setup lang="ts">
// 产品列表第 1 页（全部剂型）—— 渲染共享浏览器组件
// 分页 / 分类切换由组件内 <NuxtLink> 跳转到对应路径参数路由
</script>

<template>
  <ProductsBrowser category="all" :page="1" />
</template>
