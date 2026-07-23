<script setup lang="ts">
import { site, navItems } from '~/data/site'

const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)

// 滚动时给 header 加白底 + 阴影
const onScroll = () => {
  scrolled.value = window.scrollY > 24
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

// 路由变化时关闭移动菜单
watch(() => route.fullPath, () => (mobileOpen.value = false))

const isActive = (to: string) =>
  to === '/' ? route.path === '/' : route.path.startsWith(to)

const { locale, toggle, t, isZh } = useLocale()

// 导航项 + 本地化标签（英文用 navItems.label，中文走 i18n 字典 t('nav.xxx')）
const navKeyMap: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/products': 'products',
  '/services': 'services',
  '/certifications': 'certifications',
  '/manufacturing': 'manufacturing',
  '/how-it-works': 'howItWorks',
  '/contact': 'contact'
}
const navList = computed(() =>
  navItems.map((n) => ({
    to: n.to,
    label: isZh.value ? t(`nav.${navKeyMap[n.to]}` as any) : n.label
  }))
)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled || mobileOpen
        ? 'bg-white/95 shadow-card backdrop-blur'
        : 'bg-navy shadow-card'
    "
  >
    <div class="wrap flex h-16 items-center justify-between md:h-20">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5" aria-label="MILDY Home">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-sm font-extrabold tracking-wider text-gold md:h-10 md:w-10"
        >
          M
        </span>
        <span class="flex flex-col leading-none">
          <span
            class="text-lg font-extrabold tracking-tight md:text-xl"
            :class="scrolled || mobileOpen ? 'text-navy' : 'text-white'"
          >
            {{ site.brand }}
          </span>
          <span
            class="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em]"
            :class="scrolled || mobileOpen ? 'text-navy/50' : 'text-white/70'"
          >
            Health Group
          </span>
        </span>
      </NuxtLink>

      <!-- 桌面导航 -->
      <nav class="hidden items-center gap-1 lg:flex">
        <NuxtLink
          v-for="item in navList"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-3 py-2 text-sm font-medium transition-colors"
          :class="
            isActive(item.to)
              ? scrolled
                ? 'text-navy-500'
                : 'text-gold-light'
              : scrolled
                ? 'text-navy/75 hover:text-navy'
                : 'text-white/85 hover:text-white'
          "
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- 右侧操作 -->
      <div class="flex items-center gap-2 md:gap-3">
        <!-- 语言切换 -->
        <button
          class="hidden items-center gap-1 rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors sm:flex"
          :class="
            scrolled || mobileOpen
              ? 'border-navy/15 text-navy hover:border-navy/40'
              : 'border-white/40 text-white hover:border-white'
          "
          @click="toggle"
        >
          <span :class="locale === 'en' ? '' : 'opacity-50'">EN</span>
          <span class="opacity-30">/</span>
          <span :class="locale === 'zh' ? '' : 'opacity-50'">中</span>
        </button>

        <UiAppButton
          to="/contact"
          variant="primary"
          size="sm"
          icon="send"
          class="hidden md:inline-flex"
        >
          {{ isZh ? '获取报价' : 'Get A Quote' }}
        </UiAppButton>

        <!-- 移动菜单按钮 -->
        <button
          class="flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
          :class="scrolled || mobileOpen ? 'text-navy' : 'text-white'"
          aria-label="Menu"
          @click="mobileOpen = !mobileOpen"
        >
          <UiAppIcon :name="mobileOpen ? 'close' : 'menu'" :size="24" />
        </button>
      </div>
    </div>

    <!-- 移动菜单展开 -->
    <Transition name="mnav">
      <div v-if="mobileOpen" class="lg:hidden">
        <nav class="wrap flex flex-col gap-1 pb-5 pt-2">
          <NuxtLink
            v-for="item in navList"
            :key="item.to"
            :to="item.to"
            class="rounded-md px-3 py-3 text-sm font-medium text-navy/80 transition-colors hover:bg-mist hover:text-navy"
            :class="isActive(item.to) ? 'bg-mist text-navy-500' : ''"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="mt-3 flex items-center gap-3">
            <button
              class="flex items-center gap-1 rounded-md border border-navy/15 px-2.5 py-1.5 text-xs font-semibold text-navy"
              @click="toggle"
            >
              <span :class="locale === 'en' ? '' : 'opacity-50'">EN</span>
              <span class="opacity-30">/</span>
              <span :class="locale === 'zh' ? '' : 'opacity-50'">中</span>
            </button>
            <UiAppButton to="/contact" variant="primary" size="sm" icon="send" class="flex-1">
              {{ isZh ? '获取报价' : 'Get A Quote' }}
            </UiAppButton>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.mnav-enter-active,
.mnav-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mnav-enter-from,
.mnav-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
