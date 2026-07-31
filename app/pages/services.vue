<script setup lang="ts">
import { cooperationModes } from '~/data/cases'

const { t, isZh, localePath } = useLocale()

useSeoMeta({
  title: () => isZh.value ? 'OEM 白标 & ODM 定制补充剂制造' : 'OEM White Label & ODM Custom Supplement Manufacturing',
  description: () => isZh.value
    ? '一站式 OEM/ODM 服务:500 瓶起快速上市的白标方案,以及含完整研发的深度定制 ODM。配方、包装、备案与海运出口。'
    : 'One-stop OEM/ODM services: white-label fast-launch from 500 bottles, and deep-customization ODM with full R&D. Formulation, packaging, registration and sea-freight export.'
})

const oneStopServices = [
  { icon: 'chat', key: '1' },
  { icon: 'flask', key: '2' },
  { icon: 'box', key: '3' },
  { icon: 'shield-check', key: '4' },
  { icon: 'gear', key: '5' },
  { icon: 'ship', key: '6' }
]

const compareRows = ['1', '2', '3', '4', '5', '6', '7']
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('services.hero.eyebrow')"
      :title="t('services.hero.title')"
      :subtitle="t('services.hero.subtitle')"
      image="/images/services/hero.jpg"
      :breadcrumb="[{ label: t('nav.home'), to: localePath('/') }, { label: t('nav.services') }]"
    />

    <!-- 两大模式 -->
    <section class="section bg-white">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="t('services.models.eyebrow')"
          :title="t('services.models.title')"
          :subtitle="t('services.models.subtitle')"
        />
        <div class="mt-12 grid gap-8 lg:grid-cols-2">
          <div
            v-for="(mode, i) in cooperationModes"
            :key="mode.key"
            class="reveal group overflow-hidden rounded-2xl bg-mist shadow-card ring-1 ring-mist-border"
            :style="`transition-delay: ${i * 120}ms`"
            :class="mode.key === 'odm' ? 'ring-2 ring-gold/40' : ''"
          >
            <div class="relative aspect-[16/9] overflow-hidden">
              <UiLazyImage :src="mode.image" :alt="t(`services.mode.${i + 1}.name`)" class="h-full transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-navy-900/85 to-transparent" />
              <div class="absolute bottom-0 left-0 p-6">
                <span v-if="mode.key === 'odm'" class="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">{{ t('services.recommended') }}</span>
                <h3 class="mt-2 text-2xl font-bold text-white">{{ t(`services.mode.${i + 1}.name`) }}</h3>
                <p class="text-sm text-white/80">{{ t(`services.mode.${i + 1}.subtitle`) }}</p>
              </div>
            </div>
            <div class="p-6 md:p-8">
              <p class="text-sm leading-relaxed text-navy/70">{{ t(`services.mode.${i + 1}.desc`) }}</p>
              <p class="mt-4 rounded-lg bg-navy/5 px-4 py-3 text-xs font-medium text-navy/70">🎯 {{ t(`services.mode.${i + 1}.best`) }}</p>
              <ul class="mt-5 grid gap-2.5">
                <li v-for="fi in mode.features.length" :key="fi" class="flex items-start gap-2.5 text-sm text-navy/75">
                  <UiAppIcon name="check" :size="16" class="mt-0.5 text-leaf" />{{ t(`services.mode.${i + 1}.feature.${fi}`) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 模式对比表 -->
    <section class="section bg-mist">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="t('services.compare.eyebrow')"
          :title="t('services.compare.title')"
          :subtitle="t('services.compare.subtitle')"
        />
        <div class="reveal mt-12 overflow-hidden rounded-2xl border border-mist-border bg-white shadow-card">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-navy text-white">
                <th class="px-5 py-4 text-left font-semibold">{{ t('services.compare.feature') }}</th>
                <th class="px-5 py-4 text-left font-semibold">{{ t('services.compare.wl') }}</th>
                <th class="px-5 py-4 text-left font-semibold text-gold-light">{{ t('services.compare.odm') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(rowKey, i) in compareRows"
                :key="rowKey"
                :class="i % 2 === 0 ? 'bg-white' : 'bg-mist/50'"
              >
                <td class="px-5 py-3.5 font-semibold text-navy">{{ t(`services.compare.${rowKey}.label`) }}</td>
                <td class="px-5 py-3.5 text-navy/70">{{ t(`services.compare.${rowKey}.wl`) }}</td>
                <td class="px-5 py-3.5 text-navy/70">{{ t(`services.compare.${rowKey}.odm`) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 一站式服务流程 -->
    <section class="section bg-white">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="t('services.onestop.eyebrow')"
          :title="t('services.onestop.title')"
          :subtitle="t('services.onestop.subtitle')"
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(s, i) in oneStopServices"
            :key="s.key"
            class="reveal card group p-7 hover:-translate-y-1 hover:shadow-card-hover"
            :style="`transition-delay: ${i * 70}ms`"
          >
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-gold">
                <UiAppIcon :name="s.icon" :size="24" />
              </div>
              <span class="text-2xl font-extrabold text-navy/10">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="mt-4 text-lg font-bold text-navy">{{ t(`services.onestop.${s.key}.title`) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-navy/60">{{ t(`services.onestop.${s.key}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-navy">
      <div class="wrap reveal text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ t('services.cta.title') }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-white/75">{{ t('services.cta.subtitle') }}</p>
        <UiAppButton :to="localePath('/contact')" variant="primary" size="lg" icon="send" class="mt-8">{{ t('services.cta.button') }}</UiAppButton>
      </div>
    </section>
  </div>
</template>
