<script setup lang="ts">
import { site } from '~/data/site'
import { milestones, team } from '~/data/cases'
import { promoVideos } from '~/data/videos'

const { t, isZh, localePath } = useLocale()
const { open: openVideo } = useVideoLightbox()

useSeoMeta({
  title: () => isZh.value ? '关于我们 — 自 2020 年的补充剂制造商' : 'About Us — Supplement Manufacturer Since 2020',
  description: () => isZh.value
    ? 'MILDY Health 成立于 2020 年,是占地 20,000 平方米的营养补充剂制造商,服务 30+ 国家。了解我们的历史、团队与世界级工厂。'
    : 'Founded in 2020, MILDY Health is a 20,000 m² nutritional supplement manufacturer serving 30+ countries. Learn about our history, team and world-class facility.'
})

const values = [
  { icon: 'shield-check', title: 'Quality First', titleZh: '质量优先', desc: 'Every batch tested, every process documented — quality is non-negotiable.', descZh: '每批必检,每步有据——质量不容妥协。' },
  { icon: 'flask', title: 'Innovation Driven', titleZh: '创新驱动', desc: '30+ new formulas developed annually by our in-house R&D team.', descZh: '内部研发团队每年开发 30+ 款新配方。' },
  { icon: 'globe', title: 'Global Mindset', titleZh: '全球视野', desc: 'Built for export — compliant with EU, US and SEA market regulations.', descZh: '为出口而生——符合欧盟、美国和东南亚市场法规。' },
  { icon: 'users', title: 'Partnership Focused', titleZh: '合作为本', desc: 'We grow when our partners grow. Long-term relationships over one-off deals.', descZh: '合作伙伴成长,我们才成长。重视长期关系,而非一锤子买卖。' }
]

// 视频矩阵：第一排 2 个竖向 3/4，第二排 2 个横向 16:9
const videoItems = promoVideos.map((v, i) => ({
  src: v.src,
  title: () => t(v.captionKey),
  // 第 0/1 个竖向，第 2/3 个横向
  ratio: i < 2 ? 'aspect-[3/4]' : 'aspect-video'
}))

const onOpenVideo = (i: number) => {
  openVideo(
    videoItems.map((it) => ({ src: it.src, title: it.title() })),
    i
  )
}
</script>

<template>
  <div>
    <PageHero
      :eyebrow="t('about.hero.eyebrow')"
      :title="t('about.hero.title')"
      :subtitle="t('about.hero.subtitle')"
      image="/images/about/hero.jpg"
      :breadcrumb="[{ label: t('nav.home'), to: localePath('/') }, { label: t('nav.about') }]"
    />

    <!-- 公司简介 -->
    <section class="section bg-white">
      <div class="wrap grid items-center gap-12 lg:grid-cols-2">
        <div class="reveal">
          <span class="eyebrow"><span class="h-px w-6 bg-gold" />{{ t('about.intro.eyebrow') }}</span>
          <h2 class="mt-3 text-3xl font-bold md:text-4xl">{{ t('about.intro.title') }}</h2>
          <p class="mt-5 leading-relaxed text-navy/70">
            {{ t('about.intro.p1', { name: site.name, nameCn: site.nameCn, founded: site.founded }) }}
          </p>
          <p class="mt-4 leading-relaxed text-navy/70">
            {{ t('about.intro.p2') }}
          </p>
          <div class="mt-7 grid grid-cols-2 gap-5">
            <div v-for="(s, idx) in site.stats.slice(0,4)" :key="s.label">
              <UiStatCounter :value="s.value" />
              <p class="mt-1 text-xs text-navy/55">{{ t(`site.stats.${idx + 1}.label`) }}</p>
            </div>
          </div>
        </div>
        <div class="reveal grid grid-cols-2 gap-4" :style="`transition-delay:120ms`">
          <UiVideoCard
            v-for="(v, i) in videoItems"
            :key="i"
            :src="v.src"
            :title="v.title()"
            :ratio="v.ratio"
            @open="onOpenVideo(i)"
          />
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="section bg-mist">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="t('about.journey.eyebrow')"
          :title="t('about.journey.title')"
          :subtitle="t('about.journey.subtitle')"
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
            <h3 class="relative mt-2 text-lg font-bold text-navy">{{ t(`about.milestone.${i + 1}.title`) }}</h3>
            <p class="relative mt-2 text-sm leading-relaxed text-navy/60">{{ t(`about.milestone.${i + 1}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心价值观 -->
    <section class="section bg-white">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="t('about.values.eyebrow')"
          :title="t('about.values.title')"
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
            <h3 class="mt-5 text-lg font-bold text-navy">{{ t(`about.values.${i + 1}.title`) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-navy/60">{{ t(`about.values.${i + 1}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队 -->
    <section class="section bg-mist">
      <div class="wrap">
        <UiSectionHeading
          :eyebrow="t('about.team.eyebrow')"
          :title="t('about.team.title')"
          :subtitle="t('about.team.subtitle')"
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(member, i) in team"
            :key="member.name"
            class="reveal card overflow-hidden"
            :style="`transition-delay: ${i * 80}ms`"
          >
            <!-- 有真实头像则显示图片，否则用首字母缩写头像（避免无意义占位人像） -->
            <UiLazyImage v-if="member.avatar" :src="member.avatar" :alt="member.name" ratio="aspect-square" />
            <div v-else class="flex aspect-square items-center justify-center bg-gradient-to-br from-navy to-navy-700">
              <span class="text-4xl font-bold tracking-wide text-gold-light">
                {{ member.name.replace(/^Dr\.\s*/, '').split(' ').map(w => w[0]).join('').toUpperCase() }}
              </span>
            </div>
            <div class="p-5 text-center">
              <h3 class="text-base font-bold text-navy">{{ member.name }}</h3>
              <p class="mt-1 text-xs text-navy/55">{{ t(`about.team.${i + 1}.role`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-navy">
      <div class="wrap reveal text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">{{ t('about.cta.title') }}</h2>
        <p class="mx-auto mt-4 max-w-xl text-white/75">{{ t('about.cta.subtitle') }}</p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <UiAppButton :to="localePath('/contact')" variant="primary" size="lg" icon="send">{{ t('about.cta.contact') }}</UiAppButton>
          <UiAppButton :to="localePath('/manufacturing')" variant="outline" size="lg" icon-right="arrow-right">{{ t('about.cta.tour') }}</UiAppButton>
        </div>
      </div>
    </section>
  </div>
</template>
