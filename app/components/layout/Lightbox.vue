<script setup lang="ts">
// 全局图片弹窗预览：配合 useLightbox 单例
const { isOpen, current, close, next, prev, images } = useLightbox()

const onKey = (e: KeyboardEvent) => {
  if (!isOpen.value) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <Transition name="lb">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/90 p-4 backdrop-blur-sm"
        @click.self="close"
      >
        <!-- 关闭 -->
        <button
          class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
          aria-label="Close"
          @click="close"
        >
          <UiAppIcon name="close" :size="22" />
        </button>

        <!-- 上一张 -->
        <button
          v-if="images.length > 1"
          class="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 md:left-6"
          aria-label="Previous"
          @click="prev"
        >
          <UiAppIcon name="chevron-right" :size="24" class="rotate-180" />
        </button>

        <!-- 图片 -->
        <figure class="max-h-[88vh] max-w-[92vw] text-center" @click.stop>
          <img
            v-if="current"
            :src="current.src"
            :alt="current.alt || ''"
            class="mx-auto max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
          />
          <figcaption
            v-if="current?.caption"
            class="mt-4 text-sm text-white/75"
          >
            {{ current.caption }}
          </figcaption>
        </figure>

        <!-- 下一张 -->
        <button
          v-if="images.length > 1"
          class="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 md:right-6"
          aria-label="Next"
          @click="next"
        >
          <UiAppIcon name="chevron-right" :size="24" />
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lb-enter-active,
.lb-leave-active {
  transition: opacity 0.25s ease;
}
.lb-enter-from,
.lb-leave-to {
  opacity: 0;
}
</style>
