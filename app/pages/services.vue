<script setup lang="ts">
import { cooperationModes } from '~/data/cases'

useSeoMeta({
  title: 'Services — OEM White Label & ODM Custom Manufacturing',
  description:
    'MILDY offers one-stop OEM/ODM services: white-label fast-launch with low MOQ, and deep-customization ODM with full R&D. Formulation, packaging, registration and export.',
  keywords: 'OEM white label supplement, ODM custom manufacturing, private label service, supplement contract manufacturing, turnkey supplement production'
})

const oneStopServices = [
  { icon: 'chat', title: 'Consultation & Market Insight', titleZh: '咨询与市场洞察', desc: 'We advise on trending formulations, popular dosage forms and competitive positioning for your target market.', descZh: '我们为您的目标市场提供热门配方、流行剂型和竞争定位建议。' },
  { icon: 'flask', title: 'R&D Formulation', titleZh: '研发配方', desc: 'Our lab develops or refines your recipe — selecting actives, excipients, flavors and delivery systems.', descZh: '我们的实验室开发或优化您的配方——筛选有效成分、辅料、口味和递送系统。' },
  { icon: 'box', title: 'Packaging & Artwork', titleZh: '包装与设计', desc: 'Bottle, blister, pouch or box — we design structural packaging and compliant label artwork.', descZh: '瓶装、泡罩、袋装或盒装——我们设计结构性包装和合规的标签设计。' },
  { icon: 'shield-check', title: 'Registration & Documentation', titleZh: '备案与单证', desc: 'COA, COO, FSC, nutritional analysis and market-specific regulatory documents for smooth import.', descZh: 'COA、COO、FSC、营养分析和市场专项法规文件,确保顺利清关。' },
  { icon: 'gear', title: 'Production & QC', titleZh: '生产与质检', desc: 'GMP-controlled mass production with full in-process and finished-product quality testing.', descZh: 'GMP 管控的批量生产,全过程及成品质量检测全覆盖。' },
  { icon: 'ship', title: 'Export & Logistics', titleZh: '出口与物流', desc: 'Container loading, sea freight booking and complete export documentation — door to port or door to door.', descZh: '装柜、海运订舱和完整出口单证——港到港或门到门。' }
]

const compareRows = [
  { label: 'Best For', labelZh: '最适合', wl: 'New brands, fast launches', wlZh: '新品牌、快速上市', odm: 'Established brands, unique IP', odmZh: '成熟品牌、独特 IP' },
  { label: 'Formulation', labelZh: '配方', wl: 'Choose from mature formulas', wlZh: '从成熟配方中选择', odm: 'Bespoke R&D development', odmZh: '定制研发' },
  { label: 'MOQ', labelZh: '起订量', wl: 'From 30,000 units', wlZh: '3 万件起', odm: 'From 100,000 units', odmZh: '10 万件起' },
  { label: 'Lead Time', labelZh: '交期', wl: '25–35 days', wlZh: '25–35 天', odm: '45–75 days', odmZh: '45–75 天' },
  { label: 'Customization', labelZh: '定制程度', wl: 'Brand & label only', wlZh: '仅品牌与标签', odm: 'Full custom (shape, flavor, formula)', odmZh: '全面定制(形状、口味、配方)' },
  { label: 'Upfront Cost', labelZh: '前期投入', wl: 'Low', wlZh: '低', odm: 'Higher (R&D investment)', odmZh: '较高(含研发投入)' },
  { label: 'IP Ownership', labelZh: '知识产权', wl: 'Shared formula', wlZh: '共享配方', odm: 'You own the formula', odmZh: '配方归您所有' }
]

const { t, isZh } = useLocale()
</script>

<template>
  <div>
    <PageHero
      :eyebrow="isZh ? '我们的服务' : 'Our Services'"
      :title="isZh ? '一站式 OEM/ODM 解决方案' : 'One-Stop OEM/ODM Solutions'"
      :subtitle="isZh ? '从最初的创意到装柜出货——在一个屋檐下,启动您的营养补充剂品牌所需的一切。' : 'From first idea to container on the water — everything you need to launch your supplement brand, under one roof.'"
      image="/images/services/hero.jpg"
      :breadcrumb="[{ label: isZh ? '首页' : 'Home', to: '/' }, { label: isZh ? '服务' : 'Services' }]"
    />

    <!-- 两大模式 -->
    <section class="section bg-white">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="isZh ? '合作模式' : 'Cooperation Models'"
          :title="isZh ? '选择您的上市路径' : 'Choose Your Path to Market'"
          :subtitle="isZh ? '两种灵活模式,适配品牌不同发展阶段。' : 'Two flexible models designed for different stages of brand growth.'"
        />
        <div class="mt-12 grid gap-8 lg:grid-cols-2">
          <div
            v-for="(mode, i) in cooperationModes"
            :key="mode.key"
            class="reveal group overflow-hidden rounded-2xl bg-mist shadow-card ring-1 ring-mist-border"
            :style="`transition-delay: ${i * 120}ms`"
            :class="mode.key === 'odm' ? 'ring-2 ring-gold/40' : ''"
          >
            <div class="relative aspect-[16/9] overflow-hidden">
              <UiLazyImage :src="mode.image" :alt="mode.name" class="h-full transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-navy-900/85 to-transparent" />
              <div class="absolute bottom-0 left-0 p-6">
                <span v-if="mode.key === 'odm'" class="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">{{ isZh ? '推荐' : 'Recommended' }}</span>
                <h3 class="mt-2 text-2xl font-bold text-white">{{ isZh ? mode.nameZh : mode.name }}</h3>
                <p class="text-sm text-white/80">{{ isZh ? mode.subtitleZh : mode.subtitle }}</p>
              </div>
            </div>
            <div class="p-6 md:p-8">
              <p class="text-sm leading-relaxed text-navy/70">{{ isZh ? mode.descZh : mode.desc }}</p>
              <p class="mt-4 rounded-lg bg-navy/5 px-4 py-3 text-xs font-medium text-navy/70">🎯 {{ isZh ? mode.bestZh : mode.best }}</p>
              <ul class="mt-5 grid gap-2.5">
                <li v-for="(f, fi) in mode.features" :key="f" class="flex items-start gap-2.5 text-sm text-navy/75">
                  <UiAppIcon name="check" :size="16" class="mt-0.5 text-leaf" />{{ isZh ? mode.featuresZh[fi] : f }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 模式对比表 -->
    <section class="section bg-mist">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="isZh ? '对比' : 'Comparison'"
          :title="isZh ? '白标 vs ODM' : 'White Label vs ODM'"
          :subtitle="isZh ? '并排对比,助您做出选择。' : 'A side-by-side look to help you decide.'"
        />
        <div class="reveal mt-12 overflow-hidden rounded-2xl border border-mist-border bg-white shadow-card">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-navy text-white">
                <th class="px-5 py-4 text-left font-semibold">{{ isZh ? '对比项' : 'Feature' }}</th>
                <th class="px-5 py-4 text-left font-semibold">{{ isZh ? '白标定制' : 'White Label' }}</th>
                <th class="px-5 py-4 text-left font-semibold text-gold-light">{{ isZh ? 'ODM 定制' : 'ODM Custom' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in compareRows"
                :key="row.label"
                :class="i % 2 === 0 ? 'bg-white' : 'bg-mist/50'"
              >
                <td class="px-5 py-3.5 font-semibold text-navy">{{ isZh ? row.labelZh : row.label }}</td>
                <td class="px-5 py-3.5 text-navy/70">{{ isZh ? row.wlZh : row.wl }}</td>
                <td class="px-5 py-3.5 text-navy/70">{{ isZh ? row.odmZh : row.odm }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 一站式服务流程 -->
    <section class="section bg-white">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="isZh ? '一站式服务' : 'One-Stop Service'"
          :title="isZh ? '一切尽在一处' : 'Everything Under One Roof'"
          :subtitle="isZh ? '六大一体化服务支柱,覆盖产品全生命周期。' : 'Six integrated service pillars that cover your entire product lifecycle.'"
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(s, i) in oneStopServices"
            :key="s.title"
            class="reveal card group p-7 hover:-translate-y-1 hover:shadow-card-hover"
            :style="`transition-delay: ${i * 70}ms`"
          >
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-gold">
                <UiAppIcon :name="s.icon" :size="24" />
              </div>
              <span class="text-2xl font-extrabold text-navy/10">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <h3 class="mt-4 text-lg font-bold text-navy">{{ isZh ? s.titleZh : s.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-navy/60">{{ isZh ? s.descZh : s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-navy">
      <div class="wrap reveal text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ isZh ? '不确定哪种模式更适合?' : 'Not Sure Which Model Fits?' }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-white/75">{{ isZh ? '告诉我们您的目标,我们的团队会为您的品牌推荐最佳方案。' : 'Tell us your goals and our team will recommend the best approach for your brand.' }}</p>
        <UiAppButton to="/contact" variant="primary" size="lg" icon="send" class="mt-8">{{ isZh ? '免费咨询' : 'Get Free Consultation' }}</UiAppButton>
      </div>
    </section>
  </div>
</template>
