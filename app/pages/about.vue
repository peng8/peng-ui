<script setup lang="ts">
import { site } from '~/data/site'
import { milestones, team } from '~/data/cases'

useSeoMeta({
  title: 'About Us — Supplement Manufacturer Since 2016',
  description:
    'Founded in 2016, MILDY Health is a 20,000 m² nutritional supplement manufacturer serving 80+ countries. Learn about our history, team and world-class facility.',
  keywords: 'supplement manufacturer China, OEM factory history, MILDY Health, nutritional supplement company'
})

const values = [
  { icon: 'shield-check', title: 'Quality First', titleZh: '质量优先', desc: 'Every batch tested, every process documented — quality is non-negotiable.', descZh: '每批必检,每步有据——质量不容妥协。' },
  { icon: 'flask', title: 'Innovation Driven', titleZh: '创新驱动', desc: '30+ new formulas developed annually by our in-house R&D team.', descZh: '内部研发团队每年开发 30+ 款新配方。' },
  { icon: 'globe', title: 'Global Mindset', titleZh: '全球视野', desc: 'Built for export — compliant with EU, US and SEA market regulations.', descZh: '为出口而生——符合欧盟、美国和东南亚市场法规。' },
  { icon: 'users', title: 'Partnership Focused', titleZh: '合作为本', desc: 'We grow when our partners grow. Long-term relationships over one-off deals.', descZh: '合作伙伴成长,我们才成长。重视长期关系,而非一锤子买卖。' }
]

const { openOne } = useLightbox()
const campusGallery = [
  { src: 'https://picsum.photos/seed/mildy-campus-1/800/600', caption: 'Main production building', captionZh: '主生产车间' },
  { src: 'https://picsum.photos/seed/mildy-campus-2/800/600', caption: 'R&D center', captionZh: '研发中心' },
  { src: 'https://picsum.photos/seed/mildy-campus-3/800/600', caption: 'Employee recreation area', captionZh: '员工休闲区' },
  { src: 'https://picsum.photos/seed/mildy-campus-4/800/600', caption: 'Logistics & warehouse', captionZh: '物流仓储' }
]

const { t, isZh } = useLocale()
</script>

<template>
  <div>
    <PageHero
      :eyebrow="isZh ? '关于 MILDY' : 'About MILDY Health'"
      :title="isZh ? '10 年营养补充剂制造卓越之路' : '10 Years of Supplement Manufacturing Excellence'"
      :subtitle="isZh ? '从广州的车间到 20,000 平方米的全球出口工厂——80+ 国家信赖品牌背后的故事。' : 'From a Guangzhou workshop to a 20,000 m² global export powerhouse — the story behind the brand trusted by 80+ countries.'"
      image="/images/about/hero.jpg"
      :breadcrumb="[{ label: isZh ? '首页' : 'Home', to: '/' }, { label: isZh ? '关于我们' : 'About Us' }]"
    />

    <!-- 公司简介 -->
    <section class="section bg-white">
      <div class="wrap grid items-center gap-12 lg:grid-cols-2">
        <div class="reveal">
          <span class="eyebrow"><span class="h-px w-6 bg-gold" />{{ isZh ? '关于我们' : 'Who We Are' }}</span>
          <h2 class="mt-3 text-3xl font-bold md:text-4xl">{{ isZh ? '营养制造领域值得信赖之名' : 'A Trusted Name in Nutritional Manufacturing' }}</h2>
          <p class="mt-5 leading-relaxed text-navy/70">
            <template v-if="isZh">
              {{ site.name }}（{{ site.nameCn }}）是中国广州领先的膳食补充剂代工制造商。自 {{ site.founded }} 年起,我们专注于 OEM 和 ODM 自有品牌生产,覆盖所有主要剂型——软糖、软胶囊、片剂、硬胶囊、粉剂和口服液。
            </template>
            <template v-else>
              {{ site.name }} ({{ site.nameCn }}) is a leading dietary supplement contract manufacturer based in
              Guangzhou, China. Since {{ site.founded }}, we have specialized in OEM and ODM private-label
              production across all major dosage forms — gummies, softgels, tablets, hard capsules, powders and liquid drops.
            </template>
          </p>
          <p class="mt-4 leading-relaxed text-navy/70">
            <template v-if="isZh">
              今天,我们 20,000 平方米的高科技工厂在严格的 GMP 管控下运行 8 条自动化产线,服务 80+ 国家的品牌方、跨境卖家和经销商。我们持有 GMP、FDA、NSF、BRC、HALAL 和 ISO 认证——这是我们对质量不懈承诺的体现。
            </template>
            <template v-else>
              Today, our 20,000 m² high-tech facility operates 8 automated production lines under strict GMP controls,
              serving brand owners, cross-border sellers and distributors across 80+ countries. We are proud to hold
              GMP, FDA, NSF, BRC, HALAL and ISO certifications — a reflection of our uncompromising commitment to quality.
            </template>
          </p>
          <div class="mt-7 grid grid-cols-2 gap-5">
            <div v-for="s in site.stats.slice(0,4)" :key="s.label">
              <UiStatCounter :value="s.value" />
              <p class="mt-1 text-xs text-navy/55">{{ s.label }}</p>
            </div>
          </div>
        </div>
        <div class="reveal grid grid-cols-2 gap-4" :style="`transition-delay:120ms`">
          <button v-for="(g, i) in campusGallery" :key="i" class="group overflow-hidden rounded-xl" @click="openOne({ src: g.src, caption: isZh ? g.captionZh : g.caption })">
            <UiLazyImage :src="g.src" :alt="isZh ? g.captionZh : g.caption" :ratio="i === 0 ? 'aspect-[3/4]' : 'aspect-square'" class="h-full transition-transform duration-700 group-hover:scale-105" :class="i === 0 ? 'row-span-2' : ''" />
          </button>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="section bg-mist">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="isZh ? '发展历程' : 'Our Journey'"
          :title="isZh ? '二十载成长' : 'Two Decades of Growth'"
          :subtitle="isZh ? '塑造 MILDY 成为全球制造合作伙伴的关键里程碑。' : 'Key milestones that shaped MILDY into a global manufacturing partner.'"
        />
        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(m, i) in milestones"
            :key="m.year"
            class="reveal card relative overflow-hidden p-7"
            :style="`transition-delay: ${i * 70}ms`"
          >
            <span class="absolute -right-2 -top-3 text-6xl font-extrabold text-navy/5">{{ m.year }}</span>
            <span class="relative text-sm font-bold text-gold">{{ m.year }}</span>
            <h3 class="relative mt-2 text-lg font-bold text-navy">{{ isZh ? m.titleZh : m.title }}</h3>
            <p class="relative mt-2 text-sm leading-relaxed text-navy/60">{{ isZh ? m.descZh : m.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心价值观 -->
    <section class="section bg-white">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="isZh ? '核心价值观' : 'Our Values'"
          :title="isZh ? '驱动我们前行' : 'What Drives Us Forward'"
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(v, i) in values"
            :key="v.title"
            class="reveal text-center"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy/5 text-navy">
              <UiAppIcon :name="v.icon" :size="30" />
            </div>
            <h3 class="mt-5 text-lg font-bold text-navy">{{ isZh ? v.titleZh : v.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-navy/60">{{ isZh ? v.descZh : v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队 -->
    <section class="section bg-mist">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="isZh ? '我们的团队' : 'Our Team'"
          :title="isZh ? '走近 MILDY 背后的人' : 'Meet the People Behind MILDY'"
          :subtitle="isZh ? '致力于将您的产品推向世界的资深专业团队。' : 'Experienced professionals dedicated to delivering your product to the world.'"
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(member, i) in team"
            :key="member.name"
            class="reveal card overflow-hidden"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <UiLazyImage :src="member.avatar" :alt="member.name" ratio="aspect-square" />
            <div class="p-5 text-center">
              <h3 class="text-base font-bold text-navy">{{ member.name }}</h3>
              <p class="mt-1 text-xs text-navy/55">{{ isZh ? member.roleZh : member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-navy">
      <div class="wrap reveal text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ isZh ? '携手共建卓越' : "Let's Build Something Great Together" }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-white/75">{{ isZh ? '加入 80+ 信赖 MILDY 产品的全球品牌。' : 'Join 80+ global brands who trust MILDY with their products.' }}</p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <UiAppButton to="/contact" variant="primary" size="lg" icon="send">{{ isZh ? '联系我们' : 'Get In Touch' }}</UiAppButton>
          <UiAppButton to="/manufacturing" variant="outline" size="lg" icon-right="arrow-right">{{ isZh ? '参观工厂' : 'Tour Our Factory' }}</UiAppButton>
        </div>
      </div>
    </section>
  </div>
</template>
