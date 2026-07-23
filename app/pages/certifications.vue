<script setup lang="ts">
import { certifications } from '~/data/certifications'

useSeoMeta({
  title: 'Certifications — GMP, FDA, BRC, HALAL Certified',
  description:
    'MILDY holds GMP, FDA, NSF, BRC, HALAL, ISO 22000, ISO 9001 and Kosher certifications. Our facilities meet the strictest global quality and food-safety standards.',
  keywords: 'GMP certification, FDA registered facility, NSF GMP, BRC food safety, HALAL certified supplement, ISO 22000, Kosher certification'
})

const { t, isZh } = useLocale()

const categories = ['All', 'Quality', 'Food Safety', 'Market Access'] as const
const categoryLabels: Record<string, string> = {
  All: '全部',
  Quality: '质量',
  'Food Safety': '食品安全',
  'Market Access': '市场准入'
}
const active = ref<(typeof categories)[number]>('All')

const filtered = computed(() => {
  const list = active.value === 'All' ? certifications : certifications.filter((c) => c.category === active.value)
  return list.map((c) => ({
    ...c,
    name: isZh.value ? c.nameZh : c.name,
    issuer: isZh.value ? c.issuerZh : c.issuer,
    desc: isZh.value ? c.descZh : c.desc,
    category: isZh.value ? c.categoryZh : c.category
  }))
})

const { open } = useLightbox()
const openCert = (item: (typeof certifications)[number]) =>
  open(
    certifications.map((c) => ({
      src: c.image,
      alt: `${c.code} - ${isZh.value ? c.nameZh : c.name}`,
      caption: `${isZh.value ? c.nameZh : c.name} — ${isZh.value ? c.issuerZh : c.issuer}`
    })),
    certifications.findIndex((c) => c.code === item.code)
  )
</script>

<template>
  <div>
    <PageHero
      :eyebrow="isZh ? '资质认证' : 'Certifications'"
      :title="isZh ? '可验证的认证品质' : 'Certified Quality You Can Verify'"
      :subtitle="isZh ? '下方每一张证书,都体现我们对生产符合世界最严标准的营养补充剂的承诺。' : `Every certificate below reflects our commitment to producing supplements that meet the world's strictest standards.`"
      image="https://picsum.photos/seed/mildy-cert-hero/1920/700"
      :breadcrumb="[{ label: isZh ? '首页' : 'Home', to: '/' }, { label: isZh ? '资质认证' : 'Certifications' }]"
    />

    <!-- 分类筛选 + 证书网格 -->
    <section class="section bg-white">
      <div class="wrap">
        <div class="flex flex-wrap justify-center gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            class="rounded-full px-5 py-2 text-sm font-medium transition-colors"
            :class="active === cat ? 'bg-navy text-white' : 'bg-mist text-navy/60 hover:bg-mist-dark'"
            @click="active = cat"
          >
            {{ isZh ? categoryLabels[cat] : cat }}
          </button>
        </div>

        <TransitionGroup name="list" tag="div" class="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          <CertificationCard
            v-for="(item, i) in filtered"
            :key="item.code"
            :item="item"
            :index="i"
            @click="openCert(item)"
          />
        </TransitionGroup>
      </div>
    </section>

    <!-- 质量承诺 -->
    <section class="section bg-mist">
      <div class="wrap grid items-center gap-12 lg:grid-cols-2">
        <div class="reveal">
          <span class="eyebrow"><span class="h-px w-6 bg-gold" />{{ isZh ? '质量承诺' : 'Quality Promise' }}</span>
          <h2 class="mt-3 text-3xl font-bold md:text-4xl">{{ isZh ? '不止是墙上的一张证书' : 'More Than a Certificate on the Wall' }}</h2>
          <p class="mt-5 leading-relaxed text-navy/70">
            <template v-if="isZh">
              认证只是起点。我们的质量体系全年 365 天运转——配备成文 SOP、环境监测、批次可追溯,以及专门的质检实验室,对每一批次在出货前进行检测。
            </template>
            <template v-else>
              Certifications are just the starting point. Our quality system operates 365 days a year —
              with documented SOPs, environmental monitoring, batch traceability and a dedicated QC lab
              testing every single lot before it ships.
            </template>
          </p>
          <ul class="mt-6 space-y-3">
            <li class="flex items-start gap-3 text-sm text-navy/75">
              <UiAppIcon name="check" :size="18" class="mt-0.5 text-leaf" />
              <span><strong class="text-navy">{{ isZh ? '100% 批次检测' : '100% batch testing' }}</strong> — {{ isZh ? '没有产品不带检验报告(COA)出厂。' : 'no product leaves without a Certificate of Analysis.' }}</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-navy/75">
              <UiAppIcon name="check" :size="18" class="mt-0.5 text-leaf" />
              <span><strong class="text-navy">{{ isZh ? '完整可追溯' : 'Full traceability' }}</strong> — {{ isZh ? '每种原料从供应商到成品全程跟踪。' : 'every raw material tracked from supplier to finished goods.' }}</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-navy/75">
              <UiAppIcon name="check" :size="18" class="mt-0.5 text-leaf" />
              <span><strong class="text-navy">{{ isZh ? '年度第三方审核' : 'Annual third-party audits' }}</strong> {{ isZh ? '——由国际认证机构执行。' : 'by international certification bodies.' }}</span>
            </li>
            <li class="flex items-start gap-3 text-sm text-navy/75">
              <UiAppIcon name="check" :size="18" class="mt-0.5 text-leaf" />
              <span><strong class="text-navy">{{ isZh ? '稳定性监测计划' : 'Stability programs' }}</strong> {{ isZh ? '——贯穿保质期的留样监测。' : 'monitoring retained samples across shelf life.' }}</span>
            </li>
          </ul>
          <UiAppButton to="/manufacturing" variant="navy" icon-right="arrow-right" class="mt-8">{{ isZh ? '查看我们的质检流程' : 'See Our QC Process' }}</UiAppButton>
        </div>
        <div class="reveal grid grid-cols-2 gap-4" :style="`transition-delay:120ms`">
          <img src="https://picsum.photos/seed/mildy-qc-1/500/600" :alt="isZh ? '质检实验室' : 'Quality lab'" class="rounded-xl object-cover shadow-card" loading="lazy" />
          <img src="https://picsum.photos/seed/mildy-qc-2/500/600" :alt="isZh ? '检测设备' : 'Testing equipment'" class="mt-8 rounded-xl object-cover shadow-card" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-navy">
      <div class="wrap reveal text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ isZh ? '需要您目标市场的认证文件?' : 'Need Documentation for Your Market?' }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-white/75">{{ isZh ? '我们提供所有必需的证书和注册文件,确保顺利清关。' : 'We provide all required certificates and registration documents for smooth customs clearance.' }}</p>
        <UiAppButton to="/contact" variant="primary" size="lg" icon="send" class="mt-8">{{ isZh ? '索取文件' : 'Request Documents' }}</UiAppButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
