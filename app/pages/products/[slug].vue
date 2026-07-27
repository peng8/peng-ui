<script setup lang="ts">
// 产品详情页 —— 封面大图 + 缩略图画廊 + 描述特性 + 规格参数表 + 咨询定制 CTA + 同类推荐
import { getProductBySlug, getCategoryBySlug, getRelatedProducts } from '~/data/products'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { t, isZh } = useLocale()

const product = computed(() => getProductBySlug(slug.value))

// 找不到产品 → 抛 404，交由 Nuxt 的错误页 / error.vue 处理
if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

const category = computed(() => getCategoryBySlug(product.value!.category))
const related = computed(() => getRelatedProducts(slug.value, 3))

// 动态 SEO
useSeoMeta({
  title: () => `${product.value!.name} — MILDY OEM/ODM`,
  description: () => product.value!.shortDesc,
  ogType: 'product',
  ogImage: () => product.value!.cover
})

// 结构化数据：Product + BreadcrumbList（Google 富摘要：产品信息 + 面包屑路径）
const SITE_URL = 'https://www.mildy-health.com'
useHead({
  script: computed(() => {
    const p = product.value!
    const cat = category.value
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: p.name,
      description: p.shortDesc,
      image: p.cover,
      category: cat?.name,
      brand: { '@type': 'Brand', name: 'MILDY Health' },
      manufacturer: {
        '@type': 'Organization',
        name: 'MILDY Health',
        url: SITE_URL
      },
      // OEM/ODM 无公开标价，用 Offer 表达可询盘 + 起订量，避免价格误导
      offers: {
        '@type': 'Offer',
        url: `${SITE_URL}/products/${p.slug}`,
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
        // 询盘类产品不标具体价，提供 businessFunction 表示可定制/询盘
        businessFunction: 'https://schema.org/Sell',
        itemCondition: 'https://schema.org/NewCondition',
        inventoryLevel: { '@type': 'QuantitativeValue', value: p.moq, unitText: 'MOQ' }
      }
    }
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
        ...(cat
          ? [{ '@type': 'ListItem', position: 3, name: cat.name, item: `${SITE_URL}/products/categories/${cat.slug}` },
             { '@type': 'ListItem', position: 4, name: p.name, item: `${SITE_URL}/products/${p.slug}` }]
          : [{ '@type': 'ListItem', position: 3, name: p.name, item: `${SITE_URL}/products/${p.slug}` }])
      ]
    }
    return [
      { type: 'application/ld+json', innerHTML: JSON.stringify(productSchema) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema) }
    ]
  })
})

// 画廊：封面图为主图；若产品附带额外画廊图则追加为缩略图（目前产品仅封面一张）
const gallery = computed(() => [product.value!.cover, ...product.value!.gallery])
const activeImg = ref(0)
watch(gallery, () => (activeImg.value = 0))
</script>

<template>
  <div v-if="product" data-pagefind-body>
    <!-- 面包屑区（深色底，与透明导航栏协调，避免顶部留白无背景） -->
    <section class="border-b border-white/10 bg-navy pt-16 md:pt-20">
      <div class="wrap py-6">
        <nav class="flex items-center gap-2 text-xs text-white/60" data-pagefind-ignore>
          <NuxtLink to="/" class="transition-colors hover:text-gold-light">Home</NuxtLink>
          <UiAppIcon name="chevron-right" :size="12" class="opacity-50" />
          <NuxtLink to="/products" class="transition-colors hover:text-gold-light">{{ isZh ? '产品中心' : 'Products' }}</NuxtLink>
          <UiAppIcon name="chevron-right" :size="12" class="opacity-50" />
          <span v-if="category" class="text-white/80">{{ isZh ? category.nameZh : category.name }}</span>
        </nav>
      </div>
    </section>

    <!-- 主信息区：画廊 + 详情 -->
    <section class="section">
      <div class="wrap grid gap-10 lg:grid-cols-2 lg:gap-14">
        <!-- 左侧：主图 + 缩略图行 -->
        <div class="reveal lg:sticky lg:top-28 lg:self-start">
          <div class="overflow-hidden rounded-2xl bg-mist-dark shadow-card">
            <UiLazyImage :src="gallery[activeImg]" :alt="product.name" ratio="aspect-square" eager />
          </div>
          <!-- 缩略图行：仅当存在多张图时显示 -->
          <div v-if="gallery.length > 1" class="mt-4 grid grid-cols-4 gap-3">
            <button
              v-for="(img, i) in gallery"
              :key="i"
              class="overflow-hidden rounded-lg bg-mist-dark ring-2 transition-all"
              :class="i === activeImg ? 'ring-gold' : 'ring-transparent hover:ring-mist-border'"
              @click="activeImg = i"
            >
              <UiLazyImage :src="img" :alt="`${product.name} ${i + 1}`" ratio="aspect-square" class="transition-transform duration-500 hover:scale-105" />
            </button>
          </div>
        </div>

        <!-- 右侧：产品信息 -->
        <div class="reveal" style="transition-delay: 120ms">
          <span
            v-if="category"
            class="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark"
          >
            {{ category.short }}
          </span>
          <h1 class="mt-4 text-3xl font-bold leading-tight md:text-4xl">{{ product.name }}</h1>
          <p class="mt-4 text-base leading-relaxed text-navy/70">{{ product.shortDesc }}</p>

          <!-- 特性勾选列表 -->
          <ul class="mt-6 grid gap-3 sm:grid-cols-2">
            <li v-for="f in product.features" :key="f" class="flex items-start gap-2.5 text-sm text-navy/80">
              <UiAppIcon name="check" :size="16" class="mt-0.5 shrink-0 text-leaf" />
              {{ f }}
            </li>
          </ul>

          <!-- MOQ + 咨询定制 -->
          <div class="mt-7 flex flex-wrap items-center gap-4 rounded-xl bg-mist p-5 ring-1 ring-mist-border">
            <div>
              <p class="text-xs text-navy/50">{{ t('detail.moq') }}</p>
              <p class="text-xl font-bold text-navy-500">from {{ product.moq }}</p>
            </div>
            <UiAppButton to="/contact" variant="primary" size="lg" icon="send" class="ml-auto">
              {{ t('detail.requestQuote') }}
            </UiAppButton>
          </div>

          <!-- 规格参数表 -->
          <div class="mt-8">
            <h2 class="mb-3 text-lg font-bold text-navy">{{ t('detail.specs') }}</h2>
            <div class="overflow-hidden rounded-xl ring-1 ring-mist-border">
              <table class="w-full text-sm">
                <tbody>
                  <tr
                    v-for="(spec, i) in product.specs"
                    :key="spec.label"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-mist'"
                  >
                    <th scope="row" class="w-2/5 px-4 py-3 text-left font-medium text-navy/60">
                      {{ spec.label }}
                    </th>
                    <td class="px-4 py-3 font-semibold text-navy">{{ spec.value }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 返回列表 -->
          <div class="mt-8">
            <NuxtLink to="/products" class="link-underline">
              <UiAppIcon name="arrow-right" :size="16" class="rotate-180" />
              {{ t('common.backToProducts') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 详细描述（跨栏段落） -->
    <section class="section bg-mist pt-0 md:pt-0">
      <div class="wrap max-w-4xl">
        <UiSectionHeading
          :eyebrow="t('detail.overview')"
          :title="t('detail.description')"
          align="left"
        />
        <p class="reveal mt-6 text-base leading-relaxed text-navy/75">{{ product.description }}</p>
      </div>
    </section>

    <!-- 同类推荐 -->
    <section v-if="related.length" class="section bg-white">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="t('detail.related')"
          :title="isZh ? `更多${category?.nameZh ?? ''}产品` : `More ${category?.name ?? ''} Products`"
          align="left"
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridCard
            v-for="(item, i) in related"
            :key="item.slug"
            :product="item"
            :index="i"
          />
        </div>
      </div>
    </section>
  </div>
</template>
