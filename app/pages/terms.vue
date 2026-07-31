<script setup lang="ts">
import { site } from '~/data/site'

const { t, isZh, localePath } = useLocale()

useSeoMeta({
  title: () => isZh.value ? '服务条款' : 'Terms of Service',
  description: () => isZh.value
    ? `${site.name} 服务条款 — 规范本网站使用的条款与条件。`
    : `${site.name} terms of service — terms and conditions governing the use of this website.`
})
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('terms.hero.eyebrow')"
      :title="t('terms.hero.title')"
      :subtitle="t('terms.hero.subtitle')"
      image="/images/manufacturing/facility/gmp-cleanroom.jpeg"
      :breadcrumb="[{ label: t('nav.home'), to: localePath('/') }, { label: t('terms.hero.title') }]"
    />
    <section class="section bg-white">
      <div class="wrap mx-auto max-w-3xl prose prose-navy">
        <p class="text-sm text-navy/55">{{ t('terms.lastUpdated') }}</p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('terms.section.1.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('terms.section.1.content', { name: site.name, nameCn: site.nameCn }) }}
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('terms.section.2.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('terms.section.2.content', { name: site.name }) }}
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('terms.section.3.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('terms.section.3.content') }}
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('terms.section.4.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('terms.section.4.content', { name: site.name }) }}
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('terms.section.5.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('terms.section.5.content') }}
        </p>

        <h2 class="mt-8 text-xl font-bold text-navy">{{ t('terms.section.6.title') }}</h2>
        <p class="mt-3 text-sm leading-relaxed text-navy/70">
          {{ t('terms.section.6.beforeLink') }}<a :href="`mailto:${site.contact.email}`" class="text-navy-500 underline">{{ site.contact.email }}</a>{{ t('terms.section.6.afterLink') }}
        </p>
      </div>
    </section>
  </div>
</template>
