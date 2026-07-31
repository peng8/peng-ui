<script setup lang="ts">
import { site } from '~/data/site'
import type { MessageKey } from '~/i18n/messages'

const {  t, isZh , localePath } = useLocale()

// 小亮点：英文硬编码 + 中文走字典
const advantages = computed(() => [
  t('hero.advantage.1'),
  t('hero.advantage.2'),
  t('hero.advantage.3'),
  t('hero.advantage.4')
])

// Hero 轮播图：4 张宣传图，每张配引导文案（i18n key）
const slides = [
  { image: '/images/hero/factory-strength.jpeg', eyebrowKey: 'hero.slide1' as MessageKey },
  { image: '/images/hero/one-stop-service.jpeg', eyebrowKey: 'hero.slide2' as MessageKey },
  { image: '/images/hero/quality-rd.jpeg', eyebrowKey: 'hero.slide3' as MessageKey },
  { image: '/images/hero/global-export.jpeg', eyebrowKey: 'hero.slide4' as MessageKey }
]

const current = ref(0)
const currentSlide = computed(() => slides[current.value] ?? slides[0]!)
let timer: ReturnType<typeof setInterval> | null = null
const paused = ref(false)

// 注意：所有轮播图在 SSR/预渲染时都会渲染出 <NuxtImg>（见模板，不再用 visitedSlides 条件渲染），
// 这样 IPX 在 generate 阶段才能为全部 4 张图生成静态 WebP。
// 纯静态托管(GitHub Pages)没有运行时 IPX，若首屏只渲染第一张，后三张部署后必 404。
// 省带宽仍由 loading="lazy" 保证：浏览器会延迟加载非首图，不阻塞首屏。

const go = (i: number) => {
  current.value = (i + slides.length) % slides.length
}
const next = () => go(current.value + 1)
const prev = () => go(current.value - 1)

// 自动播放：6 秒切换，悬停暂停。尊重 prefers-reduced-motion：用户偏好减少动画时禁用自动播放。
const prefersReducedMotion = ref(false)
const start = () => {
  stop()
  if (prefersReducedMotion.value) return
  timer = setInterval(() => {
    if (!paused.value) next()
  }, 6000)
}
const stop = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mq.matches
    mq.addEventListener('change', (e) => (prefersReducedMotion.value = e.matches))
  }
  start()
})
onBeforeUnmount(stop)

// stat 标签按 locale 选用（site.stats.label 为英文，中文走 hero.statN 字典）
const statList = computed(() => {
  const statKeys: MessageKey[] = ['hero.stat1', 'hero.stat2', 'hero.stat3', 'hero.stat4']
  return site.stats.map((s, i) => ({
    value: s.value,
    label: isZh.value ? t(statKeys[i] ?? statKeys[0]!) : s.label
  }))
})
</script>

<template>
  <section
    class="relative min-h-[92vh] overflow-hidden"
    aria-roledescription="carousel"
    :aria-label="isZh ? '工厂能力与服务亮点轮播' : 'Factory capabilities and service highlights'"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <!-- 轮播背景 -->
    <div class="absolute inset-0">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="absolute inset-0 block transition-opacity duration-1000 ease-out"
        :class="i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        :aria-label="t(slide.eyebrowKey)"
      >
        <NuxtImg
          :src="slide.image"
          :alt="t(slide.eyebrowKey)"
          class="h-full w-full object-cover"
          width="2560"
          height="1440"
          format="webp"
          quality="78"
          :loading="i === 0 ? 'eager' : 'lazy'"
          :fetchpriority="i === 0 ? 'high' : 'auto'"
          decoding="async"
        />
        <!-- 轮播专属轻量遮罩：左侧保证白字可读，右侧让图片清晰可见 -->
        <div class="absolute inset-0 hero-slider-overlay" />
      </div>
    </div>

    <!-- 左右切换箭头 -->
    <button
      class="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/15 p-2 text-white backdrop-blur transition hover:bg-white/30 md:flex"
      :aria-label="t('hero.prevSlide')"
      @click.prevent="prev"
    >
      <UiAppIcon name="chevron-right" :size="22" class="rotate-180" />
    </button>
    <button
      class="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/15 p-2 text-white backdrop-blur transition hover:bg-white/30 md:flex"
      :aria-label="t('hero.nextSlide')"
      @click.prevent="next"
    >
      <UiAppIcon name="chevron-right" :size="22" />
    </button>

    <!-- 内容 -->
    <div class="wrap relative flex min-h-[92vh] flex-col justify-center pt-20 pb-12">
      <div class="max-w-2xl animate-fade-up">
        <!-- 动态 eyebrow（跟随当前轮播图） -->
        <Transition name="eyebrow-fade" mode="out-in">
          <span :key="current" class="eyebrow text-gold-light">
            <span class="h-px w-6 bg-gold" />
            {{ t(currentSlide.eyebrowKey) }} · OEM/ODM Since {{ site.founded }}
          </span>
        </Transition>
        <h1 class="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
          {{ t('hero.title.part1') }}
          <span class="text-gradient-gold">{{ t('hero.title.highlight') }}</span>
          {{ t('hero.title.part3') }}
        </h1>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          {{ t('hero.description') }}
        </p>

        <!-- 双 CTA -->
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UiAppButton :to="localePath('/contact')" variant="primary" size="lg" icon="send">
            {{ t('hero.cta.quote') }}
          </UiAppButton>
          <UiAppButton :to="localePath('/products')" variant="outline" size="lg" icon-right="arrow-right" class="hero-cta-outline">
            {{ t('hero.cta.viewProducts') }}
          </UiAppButton>
        </div>

        <!-- 小亮点 -->
        <ul class="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
          <li v-for="a in advantages" :key="a" class="flex items-center gap-2 text-sm text-white/85">
            <UiAppIcon name="check" :size="16" class="text-gold" />
            {{ a }}
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部：圆点指示器 + 数据条 -->
    <div class="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-navy-900/40 backdrop-blur">
      <div class="wrap flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <!-- 圆点指示器 -->
        <div class="flex items-center gap-2.5">
          <button
            v-for="(slide, i) in slides"
            :key="i"
            class="group flex items-center"
            :aria-label="t('hero.goToSlide', { n: i + 1 })"
            :aria-current="i === current ? 'true' : undefined"
            @click.prevent="go(i)"
          >
            <span
              class="h-1.5 rounded-full transition-all duration-500"
              :class="i === current ? 'w-8 bg-gold' : 'w-4 bg-white/40 hover:bg-white/70'"
            />
          </button>
          <span class="ml-3 text-xs tabular-nums text-white/50">
            {{ String(current + 1).padStart(2, '0') }} / {{ String(slides.length).padStart(2, '0') }}
          </span>
        </div>
        <!-- 数据条 -->
        <div class="grid grid-cols-2 gap-6 md:flex md:gap-10">
          <div v-for="s in statList" :key="s.label" class="text-center md:text-left">
            <UiStatCounter :value="s.value" light />
            <p class="mt-1 text-xs uppercase tracking-wider text-white/60">{{ s.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.eyebrow-fade-enter-active,
.eyebrow-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.eyebrow-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.eyebrow-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* 轮播专属轻量遮罩：左侧加深保证白字在任何背景图上都可读，右侧透明让图片清晰
   左侧 0.82 + 过渡点右移到 50%，比原 0.72→40% 更稳，仍保留图片可见性 */
.hero-slider-overlay {
  background: linear-gradient(
    105deg,
    rgba(6, 23, 48, 0.82) 0%,
    rgba(6, 23, 48, 0.50) 50%,
    rgba(6, 23, 48, 0.12) 100%
  );
}

/* outline 按钮局部强化：加实底 + 更实边框 + 轻阴影，避免白边白字在亮图上消失
   仅作用于 Hero，不影响全局 .btn-outline */
.hero-cta-outline {
  background-color: rgba(6, 23, 48, 0.40);
  border-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}
.hero-cta-outline:hover {
  background-color: rgba(6, 23, 48, 0.55);
}
</style>
