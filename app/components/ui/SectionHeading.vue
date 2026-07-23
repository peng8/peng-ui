<script setup lang="ts">
// 西式商务标题块：eyebrow（小标签）+ 主标题 + 副标题
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    subtitle?: string
    align?: 'left' | 'center'
    light?: boolean // 深色背景上用
  }>(),
  { align: 'center', light: false }
)
</script>

<template>
  <div
    class="reveal max-w-2xl"
    :class="align === 'center' ? 'mx-auto text-center' : 'text-left'"
  >
    <span
      v-if="eyebrow"
      class="eyebrow"
      :class="light ? 'text-gold-light' : ''"
    >
      <span class="h-px w-6" :class="light ? 'bg-gold-light' : 'bg-gold'" />
      {{ eyebrow }}
    </span>
    <h2
      class="mt-3 text-3xl font-bold leading-tight md:text-4xl"
      :class="light ? 'text-white' : 'text-navy'"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-4 text-base leading-relaxed md:text-lg"
      :class="light ? 'text-white/75' : 'text-navy/65'"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
