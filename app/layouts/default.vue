<script setup lang="ts">
// 统一头部 + 页脚 + 悬浮按钮 + 全局 Lightbox
const { observeAll } = useReveal()

// 每次路由切换后重新观察所有 .reveal 元素（SSG 预渲染后客户端水合动画）
onMounted(() => observeAll())
watch(() => useRoute().path, () => nextTick(() => observeAll()))
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <LayoutTheHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutTheFooter />
    <LayoutFloatingActions />
    <LayoutLightbox />
  </div>
</template>
