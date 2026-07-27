<script setup lang="ts">
// 首页 —— 11 模块严格按需求布局
useSeoMeta({
  title: 'OEM/ODM Nutritional Supplement Manufacturer',
  description:
    'MILDY Health is a GMP-certified Chinese supplement manufacturer. OEM/ODM private-label gummies, softgels, tablets, capsules, powders & drops — FDA, BRC, HALAL. MOQ 500 bottles, serving 80+ countries.'
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
