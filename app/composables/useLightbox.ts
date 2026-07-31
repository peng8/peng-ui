// 全局图片弹窗预览状态（单例）
// 状态为模块级单例，多个组件共享；生命周期与路由关闭由唯一挂载点 Lightbox.vue 负责，
// 不在 useLightbox() 内注册 watch/onUnmounted，避免每个调用组件重复注册、互相干扰。
export interface LightboxImage {
  src: string
  alt?: string
  caption?: string
}

const isOpen = ref(false)
const images = ref<LightboxImage[]>([])
const index = ref(0)

export function useLightbox() {
  const open = (list: LightboxImage[], start = 0) => {
    if (!list || list.length === 0) return
    images.value = list
    index.value = Math.max(0, Math.min(start, list.length - 1))
    isOpen.value = true
  }

  const openOne = (img: LightboxImage) => open([img], 0)

  const close = () => {
    isOpen.value = false
  }

  const next = () => {
    if (images.value.length === 0) return
    index.value = (index.value + 1) % images.value.length
  }

  const prev = () => {
    if (images.value.length === 0) return
    index.value = (index.value - 1 + images.value.length) % images.value.length
  }

  const current = computed<LightboxImage | null>(
    () => images.value[index.value] || null
  )

  return { isOpen, images, index, current, open, openOne, close, next, prev }
}
