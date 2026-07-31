// 全局图片弹窗预览状态（单例）
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
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
  }

  const openOne = (img: LightboxImage) => open([img], 0)

  const close = () => {
    isOpen.value = false
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
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

  // 路由变化时关闭弹窗，释放 body 滚动锁（与 PagefindSearch 行为一致）
  if (import.meta.client) {
    const route = useRoute()
    watch(() => route.fullPath, () => close())
  }

  // 组件卸载时确保恢复 body 滚动
  if (import.meta.client) {
    onUnmounted(() => close())
  }

  return { isOpen, images, index, current, open, openOne, close, next, prev }
}
