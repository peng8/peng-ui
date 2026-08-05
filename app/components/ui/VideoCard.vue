<script setup lang="ts">
// 视频卡片：首帧封面 + 播放按钮遮罩，点击 emit('open') 由父组件弹窗播放
// - 首屏仅 preload="metadata" 取首帧作封面，不预加载整段视频（多个卡片不会同时占带宽）
// - 加载中显示骨架脉冲占位 + 微弱播放图标，首帧就绪后淡入（对齐 UiLazyImage 的加载体验）
// - 点击卡片 → 父组件打开全屏弹窗播放，不在原位加载视频流
// - 风格对齐 UiLazyImage（hover 放大、骨架底色）与 Lightbox（播放按钮遮罩）
const props = defineProps<{
  src: string
  title?: string
  ratio?: string // tailwind aspect class, e.g. 'aspect-video'
}>()

const { isZh } = useLocale()
const emit = defineEmits<{ open: [src: string, title: string] }>()

// 首帧是否就绪（loadeddata：第一帧可用时触发）
const loaded = ref(false)
const error = ref(false)

// src 变化时重置状态：避免切换视频时旧 loaded/error 残留导致新视频不显示淡入
watch(() => props.src, () => {
  loaded.value = false
  error.value = false
})
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-xl bg-mist-dark"
    :class="ratio || 'aspect-video'"
  >
    <!-- 封面：首帧 + 播放按钮遮罩 -->
    <button
      v-if="!error"
      type="button"
      class="absolute inset-0 h-full w-full"
      :aria-label="isZh ? `播放视频：${title || ''}` : `Play video: ${title || ''}`"
      @click="emit('open', props.src, props.title || '')"
    >
      <!-- 占位骨架：首帧就绪前显示脉冲底色 -->
      <div
        v-if="!loaded"
        class="absolute inset-0 animate-pulse bg-gradient-to-br from-mist-dark to-mist"
      />
      <!-- 首帧：preload=metadata 让浏览器取首帧，无需额外 poster 图 -->
      <video
        :src="src"
        class="h-full w-full object-cover transition-all duration-700"
        :class="loaded ? 'opacity-100 group-hover:scale-105' : 'opacity-0'"
        preload="metadata"
        muted
        playsinline
        :aria-hidden="true"
        tabindex="-1"
        @loadeddata="loaded = true"
        @error="error = true"
      />
      <!-- 渐变 + 播放按钮遮罩 -->
      <span class="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-navy-900/10 to-transparent" />
      <span
        class="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300"
        :class="loaded ? 'group-hover:scale-110' : 'scale-90 opacity-60'"
      >
        <UiAppIcon name="play" :size="26" class="ml-0.5 text-navy" />
      </span>
    </button>

    <!-- 加载失败兜底 -->
    <div
      v-else
      class="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-mist text-navy/40"
    >
      <UiAppIcon name="image" :size="28" />
      <span class="text-xs">{{ isZh ? '视频加载失败' : 'Video unavailable' }}</span>
    </div>
  </div>
</template>
