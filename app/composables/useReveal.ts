// 滚动进入动画：元素挂 .reveal，进入视口后加 .is-visible
// 用法：<div ref="el" class="reveal">…</div>，const { observe } = useReveal(); observe(el)
export function useReveal() {
  const observe = (target: HTMLElement | null | undefined) => {
    if (!target) return
    // SSR / 无 IntersectionObserver 时直接显示
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      target.classList.add('is-visible')
      return
    }
    // 已可见则跳过
    if (target.classList.contains('is-visible')) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(target)
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
