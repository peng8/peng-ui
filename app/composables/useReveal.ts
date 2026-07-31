// 滚动进入动画：元素挂 .reveal，进入视口后加 .is-visible
// 用法：<div ref="el" class="reveal">…</div>，const { observe } = useReveal(); observe(el)

// 模块级共享 IntersectionObserver，避免每次 observe() 创建新实例
let sharedIo: IntersectionObserver | null = null
const observed = new Set<HTMLElement>()

function getSharedObserver(): IntersectionObserver {
  if (!sharedIo) {
    sharedIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            sharedIo!.unobserve(entry.target)
            observed.delete(entry.target as HTMLElement)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
  }
  return sharedIo
}

export function useReveal() {
  const observe = (target: HTMLElement | null | undefined) => {
    if (!target) return
    // SSR / 无 IntersectionObserver 时直接显示
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      target.classList.add('is-visible')
      return
    }
    // 已可见或已在观察列表中则跳过
    if (target.classList.contains('is-visible') || observed.has(target)) return

    const io = getSharedObserver()
    io.observe(target)
    observed.add(target)
  }

  // 批量观察：用于一次性收集所有 .reveal 元素（配合页面 mounted 调用）
  const observeAll = (selector = '.reveal') => {
    if (typeof document === 'undefined') return
    nextTick(() => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => observe(el))
    })
  }

  return { observe, observeAll }
}

// 页面卸载时断开共享观察器
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    sharedIo?.disconnect()
    sharedIo = null
    observed.clear()
  })
}
