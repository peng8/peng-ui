// 统一的 body 滚动锁（引用计数）—— 多个弹窗（Lightbox / PagefindSearch / 移动菜单）可同时加锁，
// 任一关闭不会误释放其他弹窗仍持有的锁。全部释放后才恢复 body 滚动。
let lockCount = 0
let savedOverflow = ''

export function useScrollLock() {
  const lock = () => {
    if (import.meta.server) return
    if (lockCount === 0) {
      savedOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    }
    lockCount++
  }

  const unlock = () => {
    if (import.meta.server) return
    if (lockCount === 0) return
    lockCount--
    if (lockCount === 0) {
      document.body.style.overflow = savedOverflow
      savedOverflow = ''
    }
  }

  return { lock, unlock }
}
