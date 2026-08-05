<script setup lang="ts">
// 首页 —— 11 模块严格按需求布局
const { isZh } = useLocale()

useSeoMeta({
  title: () => isZh.value
    ? '营养补充剂 OEM/ODM 制造商'
    : 'OEM/ODM Nutritional Supplement Manufacturer',
  description: () => isZh.value
    ? 'MILDY Health 是 GMP 认证的中国营养补充剂制造商。OEM/ODM 白标软糖、软胶囊、片剂、胶囊、粉剂与口服液——FDA、BRC、HALAL 认证。起订量 500 瓶,服务 30+ 国家。'
    : 'MILDY Health is a GMP-certified Chinese supplement manufacturer. OEM/ODM private-label gummies, softgels, tablets, capsules, powders & drops — FDA, BRC, HALAL. MOQ 500 bottles, serving 30+ countries.'
})
</script>

<template>
  <div>
    <!-- 2. 首屏大图 Banner -->
    <HomeHeroBanner />

    <!-- 3. 企业优势板块 -->
    <HomeAdvantages />

    <!-- 4. 产品剂型分类板块 -->
    <HomeProductCategories />

    <!-- 5. 两大合作模式板块 -->
    <HomeCooperationModes />

    <!-- 6. 工厂实力展示板块 -->
    <HomeFactoryShowcase />

    <!-- 8. 合作流程时间线 -->
    <HomeProcessTimeline />

    <!-- 10. 底部询价转化 -->
    <HomeQuoteCTA />
  </div>
</template>
