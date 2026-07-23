<script setup lang="ts">
import { advantages } from '~/data/advantages'

const { t, isZh } = useLocale()
</script>

<template>
  <section class="section bg-white">
    <div class="wrap">
      <UiSectionHeading
        :eyebrow="t('adv.eyebrow')"
        :title="t('adv.title')"
        :subtitle="t('adv.subtitle')"
      />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AdvantageCard
          v-for="(item, i) in advantages"
          :key="item.title"
          :item="item"
          :index="i"
        />
      </div>
    </div>
  </section>
</template>
