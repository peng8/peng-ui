<script setup lang="ts">
// 产品详情页 —— 封面大图 + 缩略图画廊 + 描述特性 + 规格参数表 + 咨询定制 CTA + 同类推荐
import { getProductBySlug, getCategoryBySlug, getRelatedProducts } from '~/data/products'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const {  t, isZh , formatMoq, localePath } = useLocale()

const product = computed(() => getProductBySlug(slug.value))

// 找不到产品 → 抛 404，交由 Nuxt 的错误页 / error.vue 处理
if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

const category = computed(() => getCategoryBySlug(product.value!.category))
const related = computed(() => getRelatedProducts(slug.value, 4))

// 动态 SEO
// title 命中买家搜索意图(产品名 + 剂型 + OEM/Supplier)，超长时智能截断产品名保关键词
const seoTitle = computed(() => {
  const p = product.value!
  const catName = category.value?.name ?? 'Supplement'
  // 后缀固定约 18 字符，预留产品名空间；超长则按单词边界截断
  const suffix = ` | OEM ${catName} Supplier`
  const maxName = 60 - suffix.length
  let name = p.name
  if (name.length > maxName) {
    name = name.slice(0, maxName - 1).replace(/\s+\S*$/, '') + '…'
  }
  return `${name}${suffix}`
})

// 站点绝对地址（与 app.vue / nuxt.config 的 site.url 一致）
const SITE_URL = 'https://www.mildy-health.com'

useSeoMeta({
  title: () => isZh.value ? (product.value!.nameZh ?? product.value!.name) : seoTitle.value,
  description: () => isZh.value ? (product.value!.shortDescZh ?? product.value!.shortDesc) : product.value!.shortDesc,
  ogTitle: () => isZh.value ? (product.value!.nameZh ?? product.value!.name) : seoTitle.value,
  ogType: 'product',
  ogImage: () => (product.value!.cover.startsWith('http') ? product.value!.cover : `${SITE_URL}${product.value!.cover}`)
})

// 结构化数据：Product + BreadcrumbList（Google 富摘要：产品信息 + 面包屑路径）
useHead({
  script: computed(() => {
    const p = product.value!
    const cat = category.value
    const zh = isZh.value
    const pn = zh ? p.nameZh ?? p.name : p.name
    const pd = zh ? p.shortDescZh ?? p.shortDesc : p.shortDesc
    const cn = cat ? (zh ? cat.nameZh : cat.name) : null
    const pm = formatMoq(p.moq)
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: pn,
      description: pd,
      image: p.cover,
      category: cn ?? cat?.name,
      brand: { '@type': 'Brand', name: 'MILDY Health' },
      manufacturer: {
        '@type': 'Organization',
        name: 'MILDY Health',
        url: SITE_URL
      },
      // OEM/ODM 无公开标价，用 Offer 表达可询盘 + 起订量，避免价格误导
      offers: {
        '@type': 'Offer',
        url: `${SITE_URL}${zh ? '/zh' : ''}/products/${p.slug}`,
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
        // 询盘类产品不标具体价，提供 businessFunction 表示可定制/询盘
        businessFunction: 'https://schema.org/Sell',
        itemCondition: 'https://schema.org/NewCondition',
        inventoryLevel: { '@type': 'QuantitativeValue', value: p.moq, unitText: 'MOQ' }
      }
    }
    const localePrefix = zh ? '/zh' : ''
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: zh ? '首页' : 'Home', item: `${SITE_URL}${localePrefix}/` },
        { '@type': 'ListItem', position: 2, name: zh ? '产品中心' : 'Products', item: `${SITE_URL}${localePrefix}/products` },
        ...(cat
          ? [{ '@type': 'ListItem', position: 3, name: cn, item: `${SITE_URL}${localePrefix}/products/categories/${cat.slug}` },
             { '@type': 'ListItem', position: 4, name: pn, item: `${SITE_URL}${localePrefix}/products/${p.slug}` }]
          : [{ '@type': 'ListItem', position: 3, name: pn, item: `${SITE_URL}${localePrefix}/products/${p.slug}` }])
      ]
    }
    // FAQ schema：覆盖买家最常问的询盘问题，利于 Google 富摘要
    const faqSchema = zh
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: `${pn} 的最小起订量是多少?`, acceptedAnswer: { '@type': 'Answer', text: `${pn} 的最小起订量为 ${pm},我们也为新合作伙伴提供试单。` } },
            { '@type': 'Question', name: '可以定制配方和包装吗?', acceptedAnswer: { '@type': 'Answer', text: `可以。作为 OEM/ODM 制造商,我们提供${cn ?? '补充剂'}的全面定制——活性成分剂量、口味、形状、标签设计和结构化包装。` } },
            { '@type': 'Question', name: '交期多久?', acceptedAnswer: { '@type': 'Answer', text: '确认包装设计和订单后,常规生产交期 7–14 个工作日,样品通常 7–15 天内完成。' } },
            { '@type': 'Question', name: '工厂持有哪些认证?', acceptedAnswer: { '@type': 'Answer', text: '我们 20,000 平方米工厂持有 GMP 认证、FDA 注册、BRCGS 和 NSF GMP。每批次出具完整 COA,涵盖有效成分、重金属和微生物检测。' } }
          ]
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: `What is the MOQ for ${pn}?`, acceptedAnswer: { '@type': 'Answer', text: `The minimum order quantity for ${pn} is ${p.moq}. We also support trial orders for new partners — contact us to discuss your volume needs.` } },
            { '@type': 'Question', name: 'Can I customize the formula and packaging?', acceptedAnswer: { '@type': 'Answer', text: `Yes. As an OEM/ODM manufacturer we offer full customization for ${cat?.name ?? 'supplements'} — including active ingredient dosage, flavor, shape, color, label artwork and structural packaging. Free formulation consultation is available.` } },
            { '@type': 'Question', name: 'What is the lead time?', acceptedAnswer: { '@type': 'Answer', text: 'Typical production lead time is 7–14 working days after artwork and order confirmation. Samples are usually ready within 7–15 days. Sea-freight export documentation is handled in-house.' } },
            { '@type': 'Question', name: 'Which certifications does your facility hold?', acceptedAnswer: { '@type': 'Answer', text: 'Our 20,000 m² facility is GMP-certified with FDA registration, BRCGS and NSF GMP. Every batch ships with a full COA covering active assay, heavy metals and microbiology.' } }
          ]
        }
    return [
      { type: 'application/ld+json', innerHTML: JSON.stringify(productSchema) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema) },
      { type: 'application/ld+json', innerHTML: JSON.stringify(faqSchema) }
    ]
  })
})

// SEO 正文：基于产品名+剂型+MOQ+OEM 关键词生成，补充详情页文字内容（利于关键词排名）
const seoParagraph = computed(() => {
  const p = product.value!
  const cat = category.value
  if (isZh.value) {
    const catNameZh = cat?.nameZh ?? '营养补充剂'
    const productName = p.nameZh ?? p.name
    return `MILDY Health 是中国领先的 ${catNameZh} OEM/ODM 制造商,为 ${productName} 提供白标贴牌与定制配方服务。我们拥有 20,000 平方米 GMP 认证工厂、FDA 注册与 BRCGS 资质,服务全球 80+ 国家和地区的品牌方、跨境卖家与分销商。我们的${catNameZh}能力覆盖活性成分剂量、口味、形状、植物基配方和品牌包装定制,起订量 ${formatMoq(p.moq)}。欢迎联系我们获取免费配方咨询、样品打样方案和无义务报价。`
  }
  const catName = cat?.name ?? 'supplement'
  return `MILDY Health is a leading OEM/ODM manufacturer of ${catName.toLowerCase()} in China, offering private-label and custom-formulation services for ${p.name}. With a 20,000 m² GMP-certified facility, FDA registration and BRCGS accreditation, we serve supplement brands, cross-border sellers and distributors across 80+ countries. Our ${catName.toLowerCase()} capabilities cover custom active-ingredient dosage, flavors, shapes, vegan bases and branded packaging — starting from ${p.moq}. Request a free formulation consultation, samples within 7–15 days, and a no-obligation quote for your ${catName.toLowerCase()} project.`
})

// 画廊：封面图为主图；若产品附带额外画廊图则追加为缩略图（目前产品仅封面一张）
const gallery = computed(() => [product.value!.cover, ...product.value!.gallery])
const activeImg = ref(0)
watch(gallery, () => (activeImg.value = 0))

const formatSpecValue = (value: string) => {
  if (!isZh.value) return value
  const replacements: Record<string, string> = {
    Gummy: '软糖',
    Gummies: '软糖',
    Softgel: '软胶囊',
    Softgels: '软胶囊',
    'Hard Capsule': '硬胶囊',
    'Hard Capsules': '硬胶囊',
    Tablet: '片剂',
    Tablets: '片剂',
    Powder: '粉剂',
    Powders: '粉剂',
    'Oral Liquid/Drops': '口服液/滴剂',
    'PET bottle / Custom': 'PET 瓶 / 定制包装',
    'Glass/PET bottle + dropper': '玻璃/PET 瓶 + 滴管',
    Custom: '可定制',
    '24 months': '24 个月'
  }
  return replacements[value] ?? value
}
</script>

<template>
  <div v-if="product" data-pagefind-body>
    <!-- 面包屑区（深色底，与透明导航栏协调，避免顶部留白无背景） -->
    <section class="border-b border-white/10 bg-navy pt-16 md:pt-20">
      <div class="wrap py-6">
        <nav class="flex items-center gap-2 text-xs text-white/60" data-pagefind-ignore>
          <NuxtLink :to="localePath('/')" class="transition-colors hover:text-gold-light">{{ isZh ? '首页' : 'Home' }}</NuxtLink>
          <UiAppIcon name="chevron-right" :size="12" class="opacity-50" />
          <NuxtLink :to="localePath('/products')" class="transition-colors hover:text-gold-light">{{ isZh ? '产品中心' : 'Products' }}</NuxtLink>
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
            <UiLazyImage :src="gallery[activeImg]" :alt="(isZh ? product.nameZh : product.name) ?? product.name" ratio="aspect-square" eager />
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
              <UiLazyImage :src="img" :alt="`${isZh ? product.nameZh ?? product.name : product.name} ${i + 1}`" ratio="aspect-square" class="transition-transform duration-500 hover:scale-105" />
            </button>
          </div>
        </div>

        <!-- 右侧：产品信息 -->
        <div class="reveal" style="transition-delay: 120ms">
          <span
            v-if="category"
            class="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark"
          >
            {{ isZh ? category.shortZh : category.short }}
          </span>
          <h1 class="mt-4 text-3xl font-bold leading-tight md:text-4xl">{{ isZh ? product.nameZh ?? product.name : product.name }}</h1>
          <p class="mt-4 text-base leading-relaxed text-navy/70">{{ isZh ? product.shortDescZh ?? product.shortDesc : product.shortDesc }}</p>

          <!-- 特性勾选列表 -->
          <ul class="mt-6 grid gap-3 sm:grid-cols-2">
            <li v-for="(f, i) in (isZh ? product.featuresZh ?? product.features : product.features)" :key="i" class="flex items-start gap-2.5 text-sm text-navy/80">
              <UiAppIcon name="check" :size="16" class="mt-0.5 shrink-0 text-leaf" />
              {{ f }}
            </li>
          </ul>

          <!-- MOQ + 咨询定制 -->
          <div class="mt-7 flex flex-wrap items-center gap-4 rounded-xl bg-mist p-5 ring-1 ring-mist-border">
            <div>
              <p class="text-xs text-navy/50">{{ t('detail.moq') }}</p>
              <p class="text-xl font-bold text-navy-500">{{ isZh ? '' : 'from ' }}{{ formatMoq(product.moq) }}</p>
            </div>
            <UiAppButton :to="localePath('/contact')" variant="primary" size="lg" icon="send" class="ml-auto">
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
                    v-for="(spec, i) in (isZh ? product.specsZh ?? product.specs : product.specs)"
                    :key="i"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-mist'"
                  >
                    <th scope="row" class="w-2/5 px-4 py-3 text-left font-medium text-navy/60">
                      {{ spec.label }}
                    </th>
                    <td class="px-4 py-3 font-semibold text-navy">{{ formatSpecValue(spec.value) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 返回列表 -->
          <div class="mt-8">
            <NuxtLink :to="localePath('/products')" class="link-underline">
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
        <p class="reveal mt-6 text-base leading-relaxed text-navy/75">{{ isZh ? product.descriptionZh ?? product.description : product.description }}</p>
        <!-- SEO 正文：补充关键词密度，利于产品页排名 -->
        <p class="reveal mt-4 text-sm leading-relaxed text-navy/60">{{ seoParagraph }}</p>
      </div>
    </section>

    <!-- FAQ（询盘常见问题，结构化数据同步输出） -->
    <section class="section bg-white pt-0 md:pt-0">
      <div class="wrap max-w-4xl">
        <UiSectionHeading
          :eyebrow="isZh ? '常见问题' : 'FAQ'"
          :title="isZh ? '关于这款产品的常见问题' : `Frequently Asked Questions`"
          align="left"
        />
        <div class="mt-8 space-y-4">
          <details class="reveal group rounded-xl border border-mist-border bg-mist/30 p-5 [&_summary]:cursor-pointer">
            <summary class="flex items-center justify-between font-semibold text-navy">
              <span>{{ isZh ? `最小起订量是多少?` : `What is the MOQ?` }}</span>
              <UiAppIcon name="chevron-down" :size="18" class="transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-navy/70">{{ isZh ? `最小起订量 ${formatMoq(product.moq)},我们也为新合作伙伴提供试单。` : `The MOQ is ${product.moq}. We also support trial orders for new partners.` }}</p>
          </details>
          <details class="reveal group rounded-xl border border-mist-border bg-mist/30 p-5 [&_summary]:cursor-pointer">
            <summary class="flex items-center justify-between font-semibold text-navy">
              <span>{{ isZh ? `可以定制配方和包装吗?` : `Can I customize the formula and packaging?` }}</span>
              <UiAppIcon name="chevron-down" :size="18" class="transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-navy/70">{{ isZh ? `可以。作为 OEM/ODM 制造商,我们提供${category?.nameZh ?? '补充剂'}的全面定制——活性成分剂量、口味、形状、标签设计和结构化包装。` : `Yes. As an OEM/ODM manufacturer we offer full customization — active dosage, flavor, shape, label artwork and structural packaging.` }}</p>
          </details>
          <details class="reveal group rounded-xl border border-mist-border bg-mist/30 p-5 [&_summary]:cursor-pointer">
            <summary class="flex items-center justify-between font-semibold text-navy">
              <span>{{ isZh ? `交期多久?` : `What is the lead time?` }}</span>
              <UiAppIcon name="chevron-down" :size="18" class="transition-transform group-open:rotate-180" />
            </summary>
            <p class="mt-3 text-sm leading-relaxed text-navy/70">{{ isZh ? `确认包装设计和订单后,常规生产交期 7–14 个工作日,样品通常 7–15 天内完成。` : `Typical lead time is 7–14 working days after order confirmation; samples within 7–15 days.` }}</p>
          </details>
        </div>
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
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
