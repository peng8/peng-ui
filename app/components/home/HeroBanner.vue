<script setup lang="ts">
import { site } from '~/data/site'
import type { MessageKey } from '~/i18n/messages'

const { t, isZh } = useLocale()

// 小亮点：英文硬编码 + 中文走字典
const advantages = computed(() =>
  isZh.value
    ? ['GMP/FDA 认证', '全剂型覆盖', '低起订白标', '海运出口']
    : ['GMP & FDA Certified', 'Full Dosage Forms', 'Low MOQ White Label', 'Sea Freight Export']
)

// Hero 轮播图：4 张宣传图，每张配引导文案（i18n key） + 跳转链接
const slides = [
  { image: '/images/hero/factory-strength.jpeg', eyebrowKey: 'hero.slide1' as MessageKey, link: '/manufacturing' },
  { image: '/images/hero/one-stop-service.jpeg', eyebrowKey: 'hero.slide2' as MessageKey, link: '/products' },
  { image: '/images/hero/quality-rd.jpeg', eyebrowKey: 'hero.slide3' as MessageKey, link: '/manufacturing' },
  { image: '/images/hero/global-export.jpeg', eyebrowKey: 'hero.slide4' as MessageKey, link: '/about' }
]

const current = ref(0)
const timer = ref<ReturnType<typeof setInterval> | null>(null)
const paused = ref(false)

const go = (i: number) => {
  current.value = (i + slides.length) % slides.length
}
const next = () => go(current.value + 1)
const prev = () => go(current.value - 1)

// 自动播放：6 秒切换，悬停暂停
const start = () => {
  stop()
  timer.value = setInterval(() => {
    if (!paused.value) next()
  }, 6000)
}
const stop = () => {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

onMounted(start)
onBeforeUnmount(stop)

// stat 标签按 locale 选用（site.stats.label 为英文，中文走 hero.statN 字典）
const statList = computed(() =>
  site.stats.map((s, i) => ({
    value: s.value,
    label: isZh.value ? t((['hero.stat1', 'hero.stat2', 'hero.stat3', 'hero.stat4'] as MessageKey[])[i]) : s.label
  }))
)
</script>

<template>
  <section
    class="relative min-h-[92vh] overflow-hidden"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <!-- 轮播背景 -->
    <div class="absolute inset-0">
      <NuxtLink
        v-for="(slide, i) in slides"
        :key="i"
        :to="slide.link"
        class="absolute inset-0 block transition-opacity duration-1000 ease-out"
        :class="i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        :aria-label="t(slide.eyebrowKey)"
      >
        <img
          :src="slide.image"
          :alt="t(slide.eyebrowKey)"
          class="h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <!-- 轮播专属轻量遮罩：左侧保证白字可读，右侧让图片清晰可见 -->
        <div class="absolute inset-0 hero-slider-overlay" />
      </NuxtLink>
    </div>

    <!-- 左右切换箭头 -->
    <button
      class="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/15 p-2 text-white backdrop-blur transition hover:bg-white/30 md:flex"
      :aria-label="isZh ? '上一张' : 'Previous slide'"
      @click.prevent="prev"
    >
      <UiAppIcon name="chevron-right" :size="22" class="rotate-180" />
    </button>
    <button
      class="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/15 p-2 text-white backdrop-blur transition hover:bg-white/30 md:flex"
      :aria-label="isZh ? '下一张' : 'Next slide'"
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
            {{ t(slides[current].eyebrowKey) }} · OEM/ODM Since {{ site.founded }}
          </span>
        </Transition>
        <h1 class="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
          {{ isZh ? '您值得信赖的' : 'Your Trusted Partner for' }}
          <span class="text-gradient-gold">{{ isZh ? '营养补充剂' : 'Nutritional Supplement' }}</span>
          {{ isZh ? '制造合作伙伴' : 'Manufacturing' }}
        </h1>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          {{ isZh
            ? '从软糖、软胶囊到粉剂、滴剂——MILDY 为全球品牌提供一站式贴牌方案,拥有 20+ 年出口经验。'
            : 'From gummies and softgels to powders and drops — MILDY delivers one-stop private-label solutions for global brands, with 20+ years of export expertise.'
          }}
        </p>

        <!-- 双 CTA -->
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UiAppButton to="/contact" variant="primary" size="lg" icon="send">
            {{ isZh ? '获取报价' : 'Get A Quote' }}
          </UiAppButton>
          <UiAppButton to="/products" variant="outline" size="lg" icon-right="arrow-right">
            {{ isZh ? '查看产品' : 'View Our Products' }}
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
            :aria-label="`Go to slide ${i + 1}`"
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

/* 轮播专属轻量遮罩：左侧深保证白字可读，右侧透明让图片清晰
   比全局 .hero-overlay（0.92→0.45）轻很多，图片整体可见 */
.hero-slider-overlay {
  background: linear-gradient(
    105deg,
    rgba(6, 23, 48, 0.72) 0%,
    rgba(6, 23, 48, 0.40) 40%,
    rgba(6, 23, 48, 0.12) 100%
  );
}
</style>
