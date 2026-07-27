<script setup lang="ts">
// 数字滚动动画：元素进入视口时从 0 滚到目标值
const props = withDefaults(
  defineProps<{
    value: string // 例如 "20,000" / "80+" / "20"
    duration?: number
    light?: boolean
    suffix?: string
  }>(),
  { duration: 1800, light: false }
)

const el = ref<HTMLElement | null>(null)
const display = ref('0')
const started = ref(false)

// 解析数字部分与前后缀
const parsed = computed(() => {
  const match = props.value.match(/^([\d,]+)(.*)$/)
  if (!match) return { num: 0, suffix: '', hasComma: false }
  const num = parseInt(match[1].replace(/,/g, ''), 10)
  return {
    num,
    suffix: (props.suffix || '') + match[2],
    hasComma: match[1].includes(',')
  }
})

const formatNum = (n: number, comma: boolean) => {
  return comma ? Math.round(n).toLocaleString('en-US') : String(Math.round(n))
}

const animate = () => {
  if (started.value) return
  started.value = true
  const { num, suffix, hasComma } = parsed.value
  if (isNaN(num)) {
    display.value = props.value
    return
  }
  const start = performance.now()
  const step = (now: number) => {
    const t = Math.min((now - start) / props.duration, 1)
    // easeOutCubic
    const eased = 1 - Math.pow(1 - t, 3)
    display.value = formatNum(num * eased, hasComma) + suffix
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  if (!el.value) return
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    animate()
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animate()
        io.disconnect()
      }
    },
    { threshold: 0.4 }
  )
  io.observe(el.value)
})
</script>

<template>
  <div ref="el">
    <div
      class="text-4xl font-bold tracking-tight md:text-5xl"
      :class="light ? 'text-white' : 'text-navy'"
    >
      {{ display }}
    </div>
  </div>
</template>
