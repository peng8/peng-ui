<script setup lang="ts">
// 内页通用 Hero（面包屑 + 标题 + 副标题 + 背景图）
// 背景图：站内本地图走 NuxtImg/IPX（WebP + 响应式）；外链产品图(hero.jpg)由
// img-storage 预生成 w640/w1024/w1536 WebP 变体，用原生 img + srcset 输出，
// 否则 NuxtImg 对外链图会把同一 URL 重复塞进 srcset，移动端仍下载全尺寸大图。
import { productImageSrcset } from '~/data/productImageUrl'

const props = withDefaults(
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
// 外链图（http/https）才走 srcset 变体；本地图交给 IPX
const isExternal = computed(() => /^https?:\/\//.test(props.image ?? ''))
const heroSrcset = computed(() => (isExternal.value ? productImageSrcset(props.image ?? '') : ''))
</script>

<template>
  <section class="relative overflow-hidden pt-16 md:pt-20">
    <!-- 背景：本地图走 NuxtImg/IPX 出 WebP + 响应式；外链图用预生成变体 srcset -->
    <div class="absolute inset-0">
      <NuxtImg
        v-if="!heroSrcset"
        :src="image"
        alt=""
        class="h-full w-full object-cover"
        width="1920"
        height="700"
        format="webp"
        quality="78"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
      <img
        v-else
        :src="image"
        :srcset="heroSrcset"
        sizes="100vw"
        alt=""
        loading="eager"
        fetchpriority="high"
        decoding="async"
        class="h-full w-full object-cover"
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
