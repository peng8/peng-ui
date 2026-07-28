<script setup lang="ts">
// 全局错误页（404 / 500 等）—— Nuxt 自动捕获 createError 后渲染此页
import type { NuxtError } from '#app'
import { productCategories } from '~/data/products'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error?.statusCode === 404)

// 404 必须告诉爬虫不要索引，避免软 404 污染收录
useSeoMeta({
  robots: 'noindex, nofollow',
  title: () => (is404.value ? 'Page Not Found (404)' : 'Error'),
  description: 'The page you are looking for does not exist. Browse MILDY\'s supplement categories or contact us for OEM/ODM manufacturing.'
})

const handleError = () => clearError({ redirect: '/' })

const { isZh } = useLocale()
</script>

<template>
  <NuxtLayout>
    <section class="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy-900 py-24">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-20">
        <img src="/images/hero/global-export.jpeg" alt="" class="h-full w-full object-cover" loading="eager" />
        <div class="absolute inset-0 hero-overlay" />
      </div>

      <div class="wrap relative text-center text-white">
        <!-- 404 大数字 -->
        <p class="text-[120px] font-extrabold leading-none text-gold md:text-[160px]">
          {{ is404 ? '404' : '⚠' }}
        </p>
        <h1 class="mt-4 text-3xl font-bold md:text-4xl">
          {{ is404 ? (isZh ? '页面未找到' : 'Page Not Found') : (isZh ? '出错了' : 'Something Went Wrong') }}
        </h1>
        <p class="mx-auto mt-4 max-w-xl text-white/70">
          {{ is404
            ? (isZh ? '您访问的页面不存在或已被移动。浏览我们的产品剂型,或返回首页。' : 'The page you are looking for doesn\'t exist or has been moved. Browse our supplement dosage forms or head back home.')
            : (isZh ? '发生了一个错误,请稍后重试或返回首页。' : 'An unexpected error occurred. Please try again or return home.')
          }}
        </p>

        <!-- 主 CTA -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            class="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
            @click="handleError"
          >
            {{ isZh ? '返回首页' : 'Back to Home' }}
          </button>
          <NuxtLink
            to="/products"
            class="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {{ isZh ? '浏览全部产品' : 'Browse All Products' }}
          </NuxtLink>
        </div>

        <!-- 产品分类内链（帮助用户/爬虫重新找到有效页面） -->
        <div class="mx-auto mt-12 max-w-2xl">
          <p class="text-xs uppercase tracking-wider text-white/50">{{ isZh ? '热门剂型' : 'Popular Dosage Forms' }}</p>
          <div class="mt-4 flex flex-wrap justify-center gap-2">
            <NuxtLink
              v-for="cat in productCategories"
              :key="cat.slug"
              :to="`/products/categories/${cat.slug}`"
              class="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-gold hover:text-white"
            >
              {{ isZh ? cat.nameZh : cat.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
