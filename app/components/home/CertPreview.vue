<script setup lang="ts">
import { certifications } from '~/data/certifications'

const { t, isZh } = useLocale()

// 首页只展示前 6 张
const featured = computed(() => certifications.slice(0, 6))
</script>

<template>
  <section class="section bg-mist">
    <div class="wrap">
      <UiSectionHeading
        :eyebrow="t('cert.eyebrow')"
        :title="t('cert.title')"
        :subtitle="t('cert.subtitle')"
      />

      <div class="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        <CertificationCard
          v-for="(item, i) in featured"
          :key="item.code"
          :item="item"
          :index="i"
        />
      </div>

      <div class="reveal mt-10 text-center">
        <UiAppButton to="/manufacturing" variant="ghost" icon-right="arrow-right">
          {{ t('cert.viewAll') }}
        </UiAppButton>
      </div>
    </div>
  </section>
</template>
