<script setup lang="ts">
// 图片懒加载封装：带占位底色 + 加载淡入 + 错误兜底
// - 站内本地图（/images/...，含已本地化的产品图）→ <NuxtImg>，IPX 预渲染 WebP + 响应式 srcset（利于 LCP）
// - 外部 http(s) 图 → 原生 <img>：GitHub Pages 纯静态无 IPX 服务，外链图无法预渲染会 404，故直接用原图
//   产品大图(jpg/png)由 img-storage 项目的 sharp 脚本预生成 w640/w1024/w1536 WebP 变体，
//   通过 productImageSrcset() 输出 srcset，浏览器按视口选最优尺寸（移动端 -94% 体积）。
import { productImageSrcset } from '~/data/productImageUrl'

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

// 外链产品大图(jpg/png)才有预生成变体；imported webp 与外链非产品图返回空串
const srcset = computed(() => (isLocal.value ? '' : productImageSrcset(props.src)))

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
    <!-- 站内图：WebP + 响应式。
         注：NuxtImg 单 <img> 模式下 format 数组不会生成 <picture> 协商，
         nuxt.config 的 format:['avif','webp'] 仅对 NuxtPicture 生效；
         这里必须显式 format="webp"，否则省略 f_ 参数会回退成原 JPEG，图片反而变大。 -->
    <NuxtImg
      v-if="isLocal"
      :src="src"
      :alt="alt || ''"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
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
    <!-- 外部 CDN 图：原生 img + srcset（变体由 img-storage sharp 预生成） -->
    <img
      v-else
      :src="src"
      :alt="alt || ''"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : 'auto'"
      :srcset="srcset || undefined"
      :sizes="srcset ? sizes : undefined"
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
