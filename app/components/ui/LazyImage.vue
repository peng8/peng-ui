<script setup lang="ts">
// 图片懒加载封装：带占位底色 + 加载淡入 + 错误兜底
// - 站内本地图（/images/...，含已本地化的产品图）→ <NuxtImg>，IPX 预渲染 WebP + 响应式 srcset（利于 LCP）
// - 外部 http(s) 图 → 原生 <img>：GitHub Pages 纯静态无 IPX 服务，外链图无法预渲染会 404，故直接用原图
const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    ratio?: string // tailwind aspect class, e.g. 'aspect-[4/3]'
    cover?: boolean
    rounded?: string
    eager?: boolean // 关闭懒加载（首屏 banner 用）
    sizes?: string // 响应式 sizes，告诉浏览器各断点下图片实际显示宽度
  }>(),
  {
    cover: true,
    rounded: 'rounded-lg',
    eager: false,
    // 默认适配卡片/画廊的常见布局：手机全宽、sm 半宽、lg 约 1/3 宽
    sizes: '100vw sm:50vw lg:33vw'
  }
)

// 是否站内本地图（相对路径，可走 IPX）；http(s) 外链图直接用原生 img
const isLocal = computed(() => !/^https?:\/\//.test(props.src))

const loaded = ref(false)
const error = ref(false)

const onLoad = () => {
  loaded.value = true
}
const onError = () => {
  error.value = true
  loaded.value = true
}

// src 变化时重置状态：避免切换图片时旧 loaded/error 残留导致新图不显示或无淡入
watch(() => props.src, () => {
  loaded.value = false
  error.value = false
})
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
    <!-- 站内图：WebP + 响应式 -->
    <NuxtImg
      v-if="isLocal"
      :src="src"
      :alt="alt || ''"
      :loading="eager ? 'eager' : 'lazy'"
      :sizes="sizes"
      format="webp"
      quality="80"
      :class="[
        'transition-all duration-700',
        cover ? 'h-full w-full object-cover' : 'h-full w-full object-contain',
        loaded && !error ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
        'group-hover:scale-105'
      ]"
      @load="onLoad"
      @error="onError"
    />
    <!-- 外部 CDN 图：原生 img（懒加载 + 淡入保留） -->
    <img
      v-else
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
