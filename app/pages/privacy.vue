<script setup lang="ts">
import { site } from '~/data/site'

const { t, isZh, localePath } = useLocale()

useSeoMeta({
  title: () => isZh.value ? '隐私政策' : 'Privacy Policy',
  description: () => isZh.value
    ? `${site.name} 隐私政策 — 我们如何收集、使用和保护您的个人信息。`
    : `${site.name} privacy policy — how we collect, use and protect your personal information.`
})
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('privacy.hero.eyebrow')"
      :title="t('privacy.hero.title')"
      :subtitle="t('privacy.hero.subtitle')"
      image="/images/manufacturing/facility/automation-line.jpeg"
      :breadcrumb="[{ label: t('nav.home'), to: localePath('/') }, { label: t('privacy.hero.title') }]"
    />
    <section class="section bg-white">
      <div class="wrap mx-auto max-w-3xl prose prose-navy">
        <p class="text-sm text-navy/55">{{ t('privacy.lastUpdated') }}</p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('privacy.section.1.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('privacy.section.1.content') }}
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('privacy.section.2.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('privacy.section.2.content') }}
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('privacy.section.3.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('privacy.section.3.content') }}
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('privacy.section.4.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('privacy.section.4.content') }}
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('privacy.section.5.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('privacy.section.5.beforeLink') }}<a :href="`mailto:${site.contact.email}`" class="text-navy-500 underline">{{ site.contact.email }}</a>{{ t('privacy.section.5.afterLink') }}
        </p>
      </div>
    </section>
  </div>
</template>
