<script setup lang="ts">
// 图片懒加载封装：基于原生 loading="lazy"，带占位底色 + 加载淡入 + 错误兜底
// 外站占位图（picsum）无需 @nuxt/image provider，直接用 <img> 更稳。
const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    ratio?: string // tailwind aspect class, e.g. 'aspect-[4/3]'
    cover?: boolean
    rounded?: string
    eager?: boolean // 关闭懒加载（首屏 banner 用）
  }>(),
  { cover: true, rounded: 'rounded-lg', eager: false }
)

const loaded = ref(false)
const error = ref(false)

const onLoad = () => {
  loaded.value = true
}
const onError = () => {
  error.value = true
  loaded.value = true
}
</script>

<template>
  <div
    class="relative overflow-hidden bg-mist-dark"
    :class="[rounded, ratio]"
  >
    <!-- 占位骨架 -->
    <div
      v-if="!loaded"
      class="absolute inset-0 animate-pulse bg-gradient-to-br from-mist-dark to-mist"
    />
    <img
      :src="src"
      :alt="alt || ''"
      :loading="eager ? 'eager' : 'lazy'"
      :class="[
        'transition-all duration-700',
        cover ? 'h-full w-full object-cover' : 'h-full w-full object-contain',
        loaded && !error ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
        'group-hover:scale-105'
      ]"
      @load="onLoad"
      @error="onError"
    />
    <!-- 加载失败兜底 -->
    <div
      v-if="error"
      class="absolute inset-0 flex items-center justify-center bg-mist text-navy/40"
    >
      <UiAppIcon name="image" :size="28" />
    </div>
  </div>
</template>
