// 合作流程 —— 首页模块9 / How It Works 页
export interface ProcessStep {
  step: string
  title: string
  titleZh: string
  desc: string
  descZh: string
  duration: string
  durationZh: string
  icon: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Inquiry & Consultation',
    titleZh: '询盘咨询',
    desc: 'Share your product idea, target market, dosage form and budget. Our team responds within 24 hours with a tailored proposal.',
    descZh: '告诉我们您的产品想法、目标市场、剂型和预算。我们的团队将在 24 小时内回复定制方案。',
    duration: 'Day 1',
    durationZh: '第 1 天',
    icon: 'chat'
  },
  {
    step: '02',
    title: 'Formula & Sampling',
    titleZh: '配方打样',
    desc: 'Our R&D lab formulates or adapts a recipe to your requirements and produces samples for your evaluation and approval.',
    descZh: '我们的研发实验室按您的要求开发或调整配方,并制作样品供您评估确认。',
    duration: '7–15 days',
    durationZh: '7–15 天',
    icon: 'flask'
  },
  {
    step: '03',
    title: 'Artwork & Packaging',
    titleZh: '包装设计',
    desc: 'We design custom labels, boxes and packaging in line with your brand identity and target-market regulations.',
    descZh: '我们按您的品牌标识和目标市场法规设计定制标签、彩盒和包装。',
    duration: '3–7 days',
    durationZh: '3–7 天',
    icon: 'box'
  },
  {
    step: '04',
    title: 'Order Confirmation',
    titleZh: '订单确认',
    desc: 'Sign the PI, finalize MOQ and deposit. Production is scheduled and raw materials are procured.',
    descZh: '签订 PI、确认起订量和定金。安排生产计划并采购原料。',
    duration: 'Day 1',
    durationZh: '第 1 天',
    icon: 'check'
  },
  {
    step: '05',
    title: 'Production & QC',
    titleZh: '生产质检',
    desc: 'Mass production under GMP controls with in-process and finished-product testing in our QC laboratory.',
    descZh: 'GMP 管控下批量生产,过程检测和成品检测均在我们的质检实验室完成。',
    duration: '20–35 days',
    durationZh: '20–35 天',
    icon: 'gear'
  },
  {
    step: '06',
    title: 'Shipping & Export',
    titleZh: '出货出口',
    desc: 'Packing, container loading and sea freight export with full documentation (COA, COO, commercial invoice).',
    descZh: '装箱、装柜和海运出口,提供完整单证(COA、COO、商业发票)。',
    duration: '15–30 days',
    durationZh: '15–30 天',
    icon: 'ship'
  }
]
