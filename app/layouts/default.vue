<script setup lang="ts">
// 统一头部 + 页脚 + 悬浮按钮 + 全局 Lightbox
import { destroyRevealObserver } from '~/composables/useReveal'

const { observeAll } = useReveal()

// 每次路由切换后重新观察所有 .reveal 元素（SSG 预渲染后客户端水合动画）
onMounted(() => observeAll())
watch(() => useRoute().path, () => nextTick(() => observeAll()))
// 布局卸载时断开共享 observer，避免长会话内存泄漏
onBeforeUnmount(destroyRevealObserver)
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <LayoutTheHeader />
    <!-- data-pagefind-body：让 Pagefind 只索引 main 内容，排除 header/footer/悬浮按钮 -->
    <main class="flex-1" data-pagefind-body>
      <slot />
    </main>
    <LayoutTheFooter />
    <LayoutFloatingActions />
    <LayoutLightbox />
  </div>
</template>
