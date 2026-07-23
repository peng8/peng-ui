<script setup lang="ts">
import { clientCases, partnerLogos } from '~/data/cases'

const { t, isZh } = useLocale()

const active = ref(0)
</script>

<template>
  <section class="section bg-white">
    <div class="wrap">
      <UiSectionHeading
        :eyebrow="t('cc.eyebrow')"
        :title="t('cc.title')"
        :subtitle="t('cc.subtitle')"
      />

      <!-- Logo 墙 -->
      <div class="reveal mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
        <div
          v-for="logo in partnerLogos"
          :key="logo.name"
          class="flex items-center justify-center rounded-lg bg-mist p-4 grayscale transition-all duration-300 hover:grayscale-0"
        >
          <img :src="logo.logo" :alt="logo.name" class="h-8 w-auto opacity-70" loading="lazy" />
        </div>
      </div>

      <!-- 案例卡片 -->
      <div class="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <!-- 案例选择列表 -->
        <div class="flex flex-col gap-3">
          <button
            v-for="(c, i) in clientCases"
            :key="c.brand"
            class="reveal flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300"
            :class="active === i ? 'border-navy bg-navy text-white shadow-card' : 'border-mist-border bg-white hover:border-navy/30'"
            :style="`transition-delay: ${i * 80}ms`"
            @click="active = i"
          >
            <img :src="c.logo" :alt="c.brand" class="h-12 w-12 rounded-lg bg-mist object-cover" loading="lazy" />
            <div class="flex-1">
              <p class="text-sm font-bold" :class="active === i ? 'text-white' : 'text-navy'">{{ c.brand }}</p>
              <p class="text-xs" :class="active === i ? 'text-white/70' : 'text-navy/50'">{{ isZh ? c.regionZh : c.region }} · {{ isZh ? c.categoryZh : c.category }}</p>
            </div>
            <UiAppIcon name="arrow-right" :size="18" :class="active === i ? 'text-gold' : 'text-navy/30'" />
          </button>
        </div>

        <!-- 案例引言 -->
        <Transition name="fade" mode="out-in">
          <div :key="active" class="flex flex-col justify-center rounded-2xl bg-mist p-8 md:p-10">
            <UiAppIcon name="star" :size="32" class="text-gold" />
            <p class="mt-5 text-lg font-medium leading-relaxed text-navy">
              "{{ isZh ? clientCases[active].quoteZh : clientCases[active].quote }}"
            </p>
            <div class="mt-6 flex items-center gap-3">
              <img :src="clientCases[active].logo" :alt="clientCases[active].author" class="h-11 w-11 rounded-full bg-white object-cover" loading="lazy" />
              <div>
                <p class="text-sm font-bold text-navy">{{ clientCases[active].author }}</p>
                <p class="text-xs text-navy/55">{{ isZh ? clientCases[active].authorTitleZh : clientCases[active].authorTitle }}, {{ clientCases[active].brand }}</p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
