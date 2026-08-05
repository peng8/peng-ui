// 全局视频弹窗播放状态（单例）
// 状态为模块级单例，多个组件共享；生命周期与路由关闭由唯一挂载点 layout/VideoLightbox.vue 负责，
// 不在 useVideoLightbox() 内注册 watch/onUnmounted，避免每个调用组件重复注册、互相干扰。
export interface LightboxVideo {
  src: string
  title?: string
}

const isOpen = ref(false)
const videos = ref<LightboxVideo[]>([])
const index = ref(0)

export function useVideoLightbox() {
  const open = (list: LightboxVideo[], start = 0) => {
    if (!list || list.length === 0) return
    videos.value = list
    index.value = Math.max(0, Math.min(start, list.length - 1))
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const next = () => {
    if (videos.value.length === 0) return
    index.value = (index.value + 1) % videos.value.length
  }

  const prev = () => {
    if (videos.value.length === 0) return
    index.value = (index.value - 1 + videos.value.length) % videos.value.length
  }

  const current = computed<LightboxVideo | null>(
    () => videos.value[index.value] || null
  )

  return { isOpen, videos, index, current, open, close, next, prev }
}
