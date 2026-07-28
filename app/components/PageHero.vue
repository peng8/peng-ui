<script setup lang="ts">
// 内页通用 Hero（面包屑 + 标题 + 副标题 + 背景图）
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    eyebrow?: string
    image?: string
    breadcrumb?: { label: string; to?: string }[]
  }>(),
  {
    image: '/images/hero/factory-strength.jpeg',
    breadcrumb: () => [{ label: 'Home', to: '/' }]
  }
)
</script>

<template>
  <section class="relative overflow-hidden pt-16 md:pt-20">
    <!-- 背景 -->
    <div class="absolute inset-0">
      <NuxtImg
        :src="image"
        alt=""
        class="h-full w-full object-cover"
        loading="eager"
        fetchpriority="high"
        format="webp"
        quality="82"
        sizes="100vw"
      />
      <div class="absolute inset-0 hero-overlay" />
    </div>

    <div class="wrap relative py-16 md:py-24">
      <!-- 面包屑 -->
      <nav class="flex items-center gap-2 text-xs text-white/60">
        <template v-for="(crumb, i) in breadcrumb" :key="i">
          <NuxtLink v-if="crumb.to" :to="crumb.to" class="transition-colors hover:text-gold-light">
            {{ crumb.label }}
          </NuxtLink>
          <span v-else class="text-white/80">{{ crumb.label }}</span>
          <UiAppIcon v-if="i < breadcrumb.length - 1" name="chevron-right" :size="12" class="opacity-50" />
        </template>
      </nav>

      <span v-if="eyebrow" class="eyebrow mt-6 text-gold-light">
        <span class="h-px w-6 bg-gold" />
        {{ eyebrow }}
      </span>
      <h1 class="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
