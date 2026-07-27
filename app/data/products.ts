// 产品数据 —— 抓取自 honglanhealth.com（真实产品图片 + 描述）
// 6 大剂型分类 + 66 个具体产品（含真实图片、描述、特性）

// ---------- 类型定义 ----------
export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  slug: string
  name: string
  /** 所属剂型 slug，对应 productCategories.slug */
  category: string
  /** 封面大图（列表卡片 + 详情页主图默认） */
  cover: string
  /** 详情页缩略图画廊（点击切换主图） */
  gallery: string[]
  /** 列表卡片上的简短一句话 */
  shortDesc: string
  /** 详情页正文描述 */
  description: string
  /** 卖点特性（勾选列表） */
  features: string[]
  /** 规格参数表（键值对） */
  specs: ProductSpec[]
  /** 起订量 */
  moq: string
}

export interface ProductCategory {
  slug: string
  name: string
  nameZh: string
  short: string
  desc: string
  descZh: string
  image: string
  features: string[]
  moq: string
  examples: { name: string; image: string }[]
}

// ---------- 6 大剂型分类 ----------
export const productCategories: ProductCategory[] = [
  {
    slug: 'gummies',
    name: 'Gummies',
    nameZh: '软糖',
    short: 'Functional Gummies',
    desc: 'Pectin & gelatin based functional gummies in custom shapes, flavors and active ingredients. The most popular format for modern wellness brands.',
    descZh: '果胶与明胶基功能软糖,可定制形状、口味与活性成分。现代健康品牌最受欢迎的剂型。',
    image: '/images/products/m43182_1782872439842-42.jpg',
    features: ['Pectin / Gelatin / Vegan', 'Sugar-free options', 'Custom shapes & colors', 'Multivitamin, Omega-3, Biotin'],
    moq: '500 bottles',
    examples: [
      { name: 'Apple Cider Vinegar Gummies', image: '/images/products/m43182_1782872439842-42.jpg' },
      { name: 'Boosts muscle strength High-Potency Creatine Monohydrate Gummies', image: '/images/products/m43182_1781746241583-15.jpg' },
      { name: 'Cortisol Health Gummies', image: '/images/products/m43182_1782872448286-47.jpg' },
    ]
  },
  {
    slug: 'softgels',
    name: 'Softgels',
    nameZh: '软胶囊',
    short: 'Softgel Capsules',
    desc: 'Advanced softgel encapsulation for oils and liquids — fish oil, CoQ10, vitamin E and custom lipid formulations with excellent bioavailability.',
    descZh: '先进的软胶囊包埋工艺,适用于鱼油、辅酶 Q10、维生素 E 及定制脂质配方,生物利用度出色。',
    image: '/images/products/m0_mr_x3mrofkgwbc3a6fxekyni95g.jpg',
    features: ['Fish oil / Plant oil', 'Enteric coating', 'Sustained release', 'High bioavailability'],
    moq: '500 bottles',
    examples: [
      { name: 'Adult Vegan D3+K2 Coconut Softgels - Bone & Immune', image: '/images/products/m0_mr_x3mrofkgwbc3a6fxekyni95g.jpg' },
      { name: 'DHA Fish Oil Vegetarian Capsules 200ct 3x Enteric-Coated', image: '/images/products/m0_o9_wuo9887ajnqmfi4aa9ai0ro5.jpg' },
      { name: 'Herbal Softgels GABA/L-Theanine/Vit, Sleep+Immune, 280pc', image: '/images/products/m0_jg_xgjgpustxj7ccyap6ypsb46j.jpg' },
    ]
  },
  {
    slug: 'tablets',
    name: 'Tablets',
    nameZh: '片剂',
    short: 'Compressed Tablets',
    desc: 'High-speed tablet pressing for multivitamins, minerals and herbal blends — including coated, chewable and effervescent formats.',
    descZh: '高速压片工艺,适用于复合维生素、矿物质及草本复方——含包衣片、咀嚼片与泡腾片。',
    image: '/images/products/m0_fc_3ofc52fdgwjb63qbe6hejlys.png',
    features: ['Film / Sugar coating', 'Chewable & effervescent', 'High-precision dosing', '24-station rotary press'],
    moq: '500 bottles',
    examples: [
      { name: 'China OEM Vitamin D3 K2 Tablets 365ct - Adults Immunity 24M', image: '/images/products/m0_fc_3ofc52fdgwjb63qbe6hejlys.png' },
      { name: 'PL Bone&Muscle Mg Citrate 500mg Tablets Kids&Adults', image: '/images/products/m0_sn_dksni502k50mxg3489rckzjn.jpg' },
      { name: 'Pure Himalayan Shilajit Resin Fulvic 50%', image: '/images/products/m0_7i_767iq7i7ml9luppxt6p3mhzm.jpg' },
    ]
  },
  {
    slug: 'hard-capsules',
    name: 'Hard Capsules',
    nameZh: '硬胶囊',
    short: 'Hard Shell Capsules',
    desc: 'Automatic hard capsule filling for powders, granules and pellets. Vegetarian (HPMC) and gelatin shell options available.',
    descZh: '全自动硬胶囊灌装,适用于粉剂、颗粒与微丸。可选植物(HPMC)与明胶胶囊壳。',
    image: '/images/products/m0_wj_r0wj4jw9yjqexhj9acgq2g62.png',
    features: ['Gelatin / HPMC vegan', 'Probiotics & enzymes', 'Delayed release', 'Plant extract blends'],
    moq: '500 bottles',
    examples: [
      { name: 'Cinnamon Capsules - Dietary Supp: Energy & Immune', image: '/images/products/m0_wj_r0wj4jw9yjqexhj9acgq2g62.png' },
      { name: 'D3 K2 Capsules 60 for Adults - Immune & Bone Support', image: '/images/products/m0_4c_tg4ck84dkcflw8lka541ay4z.png' },
      { name: 'Hair Growth Accelerator - 3wk: Mixed-Berry Chews & Clin Caps', image: '/images/products/m0_8c_818ci45y2f07992v1xa2u61l.jpg' },
    ]
  },
  {
    slug: 'powders',
    name: 'Powders',
    nameZh: '粉剂',
    short: 'Powder & Sticks',
    desc: 'Powder blending, granulation and stick-pack filling — perfect for protein, collagen, greens and electrolyte drink mixes.',
    descZh: '粉剂混合、制粒与条包灌装——蛋白、胶原蛋白、绿粉及电解质冲剂的理想之选。',
    image: '/images/products/m0_ht_a7htd0actxoxfxttxb4wwedz.jpg',
    features: ['Stick packs & tubs', 'Instant dissolution', 'Collagen & protein', 'Custom flavor systems'],
    moq: '500 bottles',
    examples: [
      { name: 'All-Natural Probiotic Prebiotic Ice Lemonade Powder 20B CFU', image: '/images/products/m0_ht_a7htd0actxoxfxttxb4wwedz.jpg' },
      { name: 'Cotton Candy Electrolyte Powder - 8 Vitamins Sachets', image: '/images/products/m0_1f_w61fzrlt3bkh49b6roj7tevu.jpg' },
      { name: 'Creatine Gummies Adult Supplement - Energy Management', image: '/images/products/m0_cx_xucx8gnvn9hxa5bg1sgsa9yz.png' },
    ]
  },
  {
    slug: 'liquid-drops',
    name: 'Liquid Drops',
    nameZh: '口服液',
    short: 'Liquid & Oral Drops',
    desc: 'Liquid filling for oral drops, tinctures and sprays — including vitamin D3 drops, melatonin and herbal liquid extracts.',
    descZh: '口服液、酊剂与喷雾的液体灌装——包括维生素 D3 滴剂、褪黑素及草本提取液。',
    image: '/images/products/m0_xo_wuxou4yvvflxv6xw7c0jcbjh.jpg',
    features: ['Glass / PET bottles', 'Dropper & spray', 'Oil & water base', 'Kids & infant formats'],
    moq: '500 bottles',
    examples: [
      { name: '1000mg NAD+ Liquid Supplement with PQQ - Cellular Energy', image: '/images/products/m0_xo_wuxou4yvvflxv6xw7c0jcbjh.jpg' },
      { name: 'Active Whale NAD+ 60ml Drops Resveratrol Taurine Immune GMP', image: '/images/products/m0_0x_q40xqnjvcveim3mlite11b7q.png' },
      { name: 'ARK Drops Shilajit Booster 30/60ml - MOQ500 Custom Sample', image: '/images/products/m0_ba_xabauo9fnuhiyojwr51kb4lm.png' },
    ]
  },
]

// ---------- 66 个具体产品（抓取自 honglanhealth.com） ----------
export const products: Product[] = [

  // ===== Gummies =====
  {
    slug: 'apple-cider-vinegar-gummies',
    name: 'Apple Cider Vinegar Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782872439842-42.jpg',
    gallery: [],
    shortDesc: 'Digestive Health & Weight Management Support',
    description: 'Digestive Health & Weight Management Support',
    features: ['Acetic Acid Digestive Support', 'Balance Gut & Ease Bloating', 'Metabolism & Weight Support', 'Sugar-Free Mild Apple Flavor', 'Gold-Standard Apple Cider Vinegar Formula for Digestive & Metabolic Health', 'Flexible Customization for Premium Health & Wellness Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Apple Cider Vinegar' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'boosts-muscle-strength-high-potency-creatine-monohydrate-gummies',
    name: 'High-Potency Creatine Monohydrate Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1781746241583-15.jpg',
    gallery: [],
    shortDesc: 'High-potency creatine monohydrate gummies for muscle strength and performance. OEM/private-label formula, custom dosage and flavors.',
    description: 'High-potency creatine monohydrate gummies for muscle strength and performance. OEM/private-label formula, custom dosage and flavors.',
    features: ['Premium Creatine for Professional Athletes', 'Custom Formulation Creatine Supplement OEM', 'Certified Creatine Powder for Global Distribution', 'Premium Strength & Performance Formula', 'Flexible Customization for Premium Positioning', 'Reliable Quality for Athletes'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Boosts muscle strength High-Potency Creatine Monohydrate' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'cortisol-health-gummies',
    name: 'Cortisol Health Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782872448286-47.jpg',
    gallery: [],
    shortDesc: 'Cortisol balance gummies for stress management and calm focus. Adaptogenic OEM formula, private-label customization available.',
    description: 'Cortisol balance gummies for stress management and calm focus. Adaptogenic OEM formula, private-label customization available.',
    features: ['Adaptogens Balance Cortisol Levels', 'Improve Restful Night Sleep', 'Calming Amino Acids for Focus', 'Support Adrenal Stress Resilience', 'Sugar-Free Apple Calm Gummies', 'Premium Cortisol Management Formula for Global Stress Relief Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Cortisol Health' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'cutting-and-fat-burn-gummies',
    name: 'Cutting & Fat Burn Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782872434839-40.jpg',
    gallery: [],
    shortDesc: 'Thermogenic Weight Management & Energy Boost',
    description: 'Thermogenic Weight Management & Energy Boost',
    features: ['Thermogenic Fat Burning Complex', 'Natural Appetite Control Blend', 'Sustained Energy & Focus Support', 'Preserve Lean Muscle Mass', 'Gold-Standard Cutting Formula for Fitness Enthusiasts & Bodybuilders', 'Flexible Customization for Premium Sports & Fitness Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Cutting & Fat Burn' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'daily-tanning-gummies',
    name: 'Daily Tanning Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782872430674-37.jpg',
    gallery: [],
    shortDesc: 'Natural Sunless Tan Boost & Skin Hydration',
    description: 'Natural Sunless Tan Boost & Skin Hydration',
    features: ['Natural Sunless Tan Support', 'Antioxidant Skin Protection', 'Boost Radiant Skin Glow', 'Clean Fruit-Flavored Formula', 'Gold-Standard Tanning Formula for a Natural, Healthy Glow', 'Flexible Customization for Premium Beauty & Skincare Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Daily Tanning' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'hair-growth-accelerator-gummies',
    name: 'Hair Growth Accelerator Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782872442976-43-1.jpg',
    gallery: [],
    shortDesc: 'Hair growth gummies with biotin and active nutrients for stronger, healthier hair. OEM/private-label custom formulation.',
    description: 'Hair growth gummies with biotin and active nutrients for stronger, healthier hair. OEM/private-label custom formulation.',
    features: ['High Strength Biotin for Hair Growth', 'Multi-Vitamins Nourish Hair Roots', 'Herbal DHT Blocker for Scalp', 'Sugar-Free Berry Hair Gummies', 'Gold-Standard Hair Growth Formula for Global Hair Care Brands', 'Flexible Customization for Premium Hair Care Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Hair Growth Accelerator' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'kids-super-vitamin-gummies',
    name: 'Kids Super Vitamin Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782813986533-34.jpg',
    gallery: [],
    shortDesc: 'Complete Multivitamin for Children\'s Growth, Immune Support & Brain Development',
    description: 'Complete Multivitamin for Children\'s Growth, Immune Support & Brain Development',
    features: ['Complete 15-in-1 multivitamin formula', 'Supports healthy growth and development', 'Boosts immune system health', 'Supports brain health and cognitive function', 'Kid-friendly formula', 'Full formula customization'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Kids Super Vitamin' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'organic-beetroot-gummies',
    name: 'Organic Beetroot Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782813986677-35.jpg',
    gallery: [],
    shortDesc: 'Nitric Oxide Boost & Energy Support',
    description: 'Nitric Oxide Boost & Energy Support',
    features: ['High-Potency Organic Beetroot Extract for Better Workout Performance', 'Plant-Based Support for Heart & Healthy Blood Pressure', 'Antioxidant-Rich Formula for Liver Detox & Sustained Natural Energy', 'Sugar-Free Natural Beet Taste, No Artificial Additives', 'Gold-Standard Beetroot Formula for Health & Fitness Enthusiasts', 'Flexible Customization for Premium Health & Sports Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Organic Beetroot' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'shilajit-gummies',
    name: 'Shilajit Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782872438816-41-1.jpg',
    gallery: [],
    shortDesc: 'Organic Fulvic Acid & Mineral Support',
    description: 'Organic Fulvic Acid & Mineral Support',
    features: ['Fulvic Acid Shilajit Antioxidant Support', '85+ Trace Mineral Complex', 'Sharpen Focus & Brain Clarity', 'Boost Energy & Physical Endurance', 'Gold-Standard Shilajit Formula for Natural Vitality & Health', 'Flexible Customization for Premium Health & Wellness Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Shilajit' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'skin-whitening-gummies',
    name: 'Skin Whitening Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782872433796-39.jpg',
    gallery: [],
    shortDesc: 'Natural Brightening & Dark Spot Reduction',
    description: 'Natural Brightening & Dark Spot Reduction',
    features: ['High-Potency Skin Brightening Glutathione', 'Vitamin C for Radiant Collagen Boost', 'Collagen Smooths Youthful Complexion', 'Clean Natural Fruit-Flavored Formula', 'Gold-Standard Skin Whitening Formula for a Bright, Youthful Complexion', 'Flexible Customization for Premium Beauty & Skincare Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Skin Whitening' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'slippery-elm-bark-gummies',
    name: 'Slippery Elm Bark Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782872444116-44.jpg',
    gallery: [],
    shortDesc: 'Slippery elm bark gummies for digestive soothing and throat support. Natural OEM formula, private-label customization.',
    description: 'Slippery elm bark gummies for digestive soothing and throat support. Natural OEM formula, private-label customization.',
    features: ['Slippery Elm Soothes Gut Irritation', 'Ease Bloating & Stomach Discomfort', 'Prebiotics Balance Gut Microbiome', 'Mint Gummies for Sensitive Stomachs', 'Premium Gut Health Formula for Global Digestive Supplement Brands', 'Flexible Customization for Premium Health Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Slippery Elm Bark' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'supports-muscle-recovery-blueberry-creatine-monohydrate-gummies',
    name: 'Blueberry Creatine Monohydrate Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1781746242163-16-1.jpg',
    gallery: [],
    shortDesc: 'Blueberry creatine monohydrate gummies for muscle recovery and energy. OEM/private-label, custom flavor and dosage.',
    description: 'Blueberry creatine monohydrate gummies for muscle recovery and energy. OEM/private-label, custom flavor and dosage.',
    features: ['Blueberry Flavor Micronized Creatine Blend', 'Custom Formulation Unique Sports Nutrition Line', 'Certified Creatine Powder for Worldwide Distribution', 'Delicious, No-Hassle Creatine Formula', 'Custom Flavor & Branding for Market Appeal', 'Compliance & Quality for Sports Nutrition Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Supports muscle recovery Blueberry Creatine Monohydrate' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'women-s-feminine-balance-gummies',
    name: 'Women\'s Feminine Balance Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782813986381-33.jpg',
    gallery: [],
    shortDesc: 'Hormone Support, PMS Relief & Reproductive Health Supplement',
    description: 'Hormone Support, PMS Relief & Reproductive Health Supplement',
    features: ['Premium women-specific formula', 'Supports healthy hormone balance', 'Promotes reproductive health', 'All-Natural Clean Vegan Formula for Women', 'Full formula customization', 'Custom packaging & branding'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Women\'s Feminine Balance' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'women-s-probiotic-gummies',
    name: 'Women\'s Probiotic Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1782874820282-45-1.jpg',
    gallery: [],
    shortDesc: 'Women\'s probiotic gummies for gut health, digestion and vaginal flora balance. OEM/private-label custom formulation.',
    description: 'Women\'s probiotic gummies for gut health, digestion and vaginal flora balance. OEM/private-label custom formulation.',
    features: ['50B CFU Women\'s Probiotic Blend', 'Balance Vaginal pH Naturally', 'Improve Gut & Immune Wellness', 'Cranberry Support for Urinary Tract', 'Sugar-Free Strawberry Gummies', 'Gold-Standard Women\'s Probiotic Formula for Global Health Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Gummy' },
      { label: 'Active Ingredients', value: 'Women\'s Probiotic' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle / Custom' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },

  // ===== Softgels =====
  {
    slug: 'adult-vegan-d3-k2-coconut-softgels-bone-and-immune',
    name: 'Adult Vegan D3+K2 Coconut Softgels - Bone & Immune',
    category: 'softgels',
    cover: '/images/products/m0_mr_x3mrofkgwbc3a6fxekyni95g.jpg',
    gallery: [],
    shortDesc: 'Picture a sunlit morning: palm shadows on the counter and golden softgels catching the light like little suns—each one a plant-powered promi...',
    description: 'Picture a sunlit morning: palm shadows on the counter and golden softgels catching the light like little suns—each one a plant-powered promi...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Adult Vegan D3+K2 Coconut - Bone & Immune' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'dha-fish-oil-vegetarian-capsules-200ct-3x-enteric-coated',
    name: 'DHA Fish Oil Vegetarian Capsules 200ct 3x Enteric-Coated',
    category: 'softgels',
    cover: '/images/products/m0_o9_wuo9887ajnqmfi4aa9ai0ro5.jpg',
    gallery: [],
    shortDesc: 'DHA Fish Oil Vegetarian Capsules 200ct 3x Enteric-Coated is a high‑count bottle of DHA-rich fish oil in vegetarian capsule shells. Each caps...',
    description: 'DHA Fish Oil Vegetarian Capsules 200ct 3x Enteric-Coated is a high‑count bottle of DHA-rich fish oil in vegetarian capsule shells. Each caps...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'DHA Fish Oil Vegetarian 3x Enteric-Coated' },
      { label: 'Net Count', value: '200 ct' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'herbal-softgels-gaba-l-theanine-vit-sleep-immune-280pc',
    name: 'Herbal Softgels GABA/L-Theanine/Vit, Sleep+Immune, 280pc',
    category: 'softgels',
    cover: '/images/products/m0_jg_xgjgpustxj7ccyap6ypsb46j.jpg',
    gallery: [],
    shortDesc: 'As dusk drapes the room in warm light, a smooth softgel rests in your hand -- a tiny blend of GABA, L‑theanine and gentle vitamins. Tuc...',
    description: 'As dusk drapes the room in warm light, a smooth softgel rests in your hand -- a tiny blend of GABA, L‑theanine and gentle vitamins. Tuc...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Herbal GABA/L-Theanine/Vit, Sleep+Immune' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'omega-3-fish-oil-vegan-60ct-700-500mg-epa-dha',
    name: 'Omega-3 Fish Oil Vegan 60ct 700/500mg EPA/DHA',
    category: 'softgels',
    cover: '/images/products/m0_hi_s2hijv25h4l8qdv8m1zas1jj.jpg',
    gallery: [],
    shortDesc: 'A high‑potency, algae‑derived omega‑3 supplement in a convenient 60‑capsule bottle, labeled to deliver concentrated EPA and DHA (700/500 mg)...',
    description: 'A high‑potency, algae‑derived omega‑3 supplement in a convenient 60‑capsule bottle, labeled to deliver concentrated EPA and DHA (700/500 mg)...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Omega-3 Fish Oil Vegan 700/ EPA/DHA' },
      { label: 'Net Count', value: '60 ct' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'oregano-and-black-seed-oil-softgels-300-dietary-supplement',
    name: 'Oregano & Black Seed Oil Softgels 300 - Dietary Supplement',
    category: 'softgels',
    cover: '/images/products/m0_jx_hbjxe6ue5ujcmkauepj0jklh.jpg',
    gallery: [],
    shortDesc: 'Oregano & Black Seed Oil Softgels 300 is a simple plant-based supplement. Each softgel puts oregano oil and black seed oil into an easy-to-s...',
    description: 'Oregano & Black Seed Oil Softgels 300 is a simple plant-based supplement. Each softgel puts oregano oil and black seed oil into an easy-to-s...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Oregano & Black Seed Oil 300 - Dietary Supplement' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'oregano-and-black-seed-oil-softgels-300ct',
    name: 'Oregano & Black Seed Oil Softgels 300ct',
    category: 'softgels',
    cover: '/images/products/m0_y1_xty1507nkase5z6xsf015r1y.jpg',
    gallery: [],
    shortDesc: 'Oregano & Black Seed Oil Softgels 300 ct — concentrated botanical oils in convenient, easy-to-swallow softgels. OEM-made with custom flavor...',
    description: 'Oregano & Black Seed Oil Softgels 300 ct — concentrated botanical oils in convenient, easy-to-swallow softgels. OEM-made with custom flavor...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Oregano & Black Seed Oil' },
      { label: 'Net Count', value: '300 ct' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'oregano-and-black-seed-oil-softgels-300ct-2-serving-softgel',
    name: 'Oregano & Black Seed Oil Softgels 300ct, 2/serving, Softgel',
    category: 'softgels',
    cover: '/images/products/m0_4i_3b4ief330tsbxc19h7eikf19.jpg',
    gallery: [],
    shortDesc: 'Oregano & Black Seed Oil Softgels are plant oil capsules in a 300-count bottle. Each serving is 2 softgels. The blend of oregano and black s...',
    description: 'Oregano & Black Seed Oil Softgels are plant oil capsules in a 300-count bottle. Each serving is 2 softgels. The blend of oregano and black s...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Oregano & Black Seed Oil , 2/serving' },
      { label: 'Net Count', value: '300 ct' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'oregano-black-seed-oil-softgels-300ct-immune-support',
    name: 'Oregano + Black Seed Oil Softgels 300ct - Immune Support',
    category: 'softgels',
    cover: '/images/products/m0_x6_lrx6hhgz0j8o9vcsorwjso10.jpg',
    gallery: [],
    shortDesc: 'OEM Oregano + Black Seed Oil Softgels 300ct are softgel capsules combining oregano oil and black seed oil to support immune health and overa...',
    description: 'OEM Oregano + Black Seed Oil Softgels 300ct are softgel capsules combining oregano oil and black seed oil to support immune health and overa...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Oregano + Black Seed Oil - Immune Support' },
      { label: 'Net Count', value: '300 ct' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'oregano-oil-capsules',
    name: 'Oregano Oil Capsules',
    category: 'softgels',
    cover: '/images/products/m0_qq_62qqrld0rdcx9yr4r3qbi3qs.png',
    gallery: [],
    shortDesc: 'In sunlit fields and a bright lab, we press sun‑kissed oregano into pure, golden oil capsules that whisper of health. As a trusted OEM/ODM w...',
    description: 'In sunlit fields and a bright lab, we press sun‑kissed oregano into pure, golden oil capsules that whisper of health. As a trusted OEM/ODM w...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Oregano Oil' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'pumpkin-seed-oil-softgels-300ct-china-immune-support',
    name: 'Pumpkin Seed Oil Softgels 300ct China - Immune Support',
    category: 'softgels',
    cover: '/images/products/m0_lf_9dlfdso8zjwv1i4yf3iwgcyu.jpg',
    gallery: [],
    shortDesc: 'OEM Pumpkin Seed Oil Softgels 300ct China - Immune Support is a simple, high-count dietary supplement made for private labels. Each softgel...',
    description: 'OEM Pumpkin Seed Oil Softgels 300ct China - Immune Support is a simple, high-count dietary supplement made for private labels. Each softgel...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Pumpkin Seed Oil China - Immune Support' },
      { label: 'Net Count', value: '300 ct' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'saw-palmetto-herbal-capsules-for-men-60-softgels-dose-2',
    name: 'Saw Palmetto Herbal Capsules for Men 60 Softgels Dose 2',
    category: 'softgels',
    cover: '/images/products/m0_mi_1ami36mwzjo706h9pedfz0b0.png',
    gallery: [],
    shortDesc: 'OEM Saw Palmetto Herbal Capsules for Men 60 Softgels Dose 2 is a concentrated saw palmetto supplement formulated for men\'s wellness. Each bo...',
    description: 'OEM Saw Palmetto Herbal Capsules for Men 60 Softgels Dose 2 is a concentrated saw palmetto supplement formulated for men\'s wellness. Each bo...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Saw Palmetto Herbal for Men 60 Dose 2' },
      { label: 'Net Count', value: '60 Softgels' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'vitamin-d3-10000-iu-k2-mk-7-200mcg-120-softgels-vco',
    name: 'Vitamin D3 10000 IU + K2 MK-7 200mcg, 120 Softgels (VCO)',
    category: 'softgels',
    cover: '/images/products/m0_hw_lhhwdoc9xyfsjd3zdllsmqlx.png',
    gallery: [],
    shortDesc: 'Vitamin D3 10,000 IU + K2 MK-7 200 mcg, 120 softgels (VCO) pairs high-strength vitamin D3 with K2 (MK‑7) in a virgin coconut oil base for be...',
    description: 'Vitamin D3 10,000 IU + K2 MK-7 200 mcg, 120 softgels (VCO) pairs high-strength vitamin D3 with K2 (MK‑7) in a virgin coconut oil base for be...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Softgel Capsule' },
      { label: 'Active Ingredients', value: 'Vitamin D3 + K2 MK-7 , 120 (VCO)' },
      { label: 'Net Count', value: '120 Softgels' },
      { label: 'Packaging', value: 'PET bottle + tamper seal' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },

  // ===== Tablets =====
  {
    slug: 'china-oem-vitamin-d3-k2-tablets-365ct-adults-immunity-24m',
    name: 'China OEM Vitamin D3 K2 Tablets 365ct - Adults Immunity 24M',
    category: 'tablets',
    cover: '/images/products/m0_fc_3ofc52fdgwjb63qbe6hejlys.png',
    gallery: [],
    shortDesc: 'China OEM Vitamin D3 K2 Tablets 365ct - Adults Immunity 24M is a one‑year supply of D3 and K2 made for private‑label brands. The D3+K2 mix h...',
    description: 'China OEM Vitamin D3 K2 Tablets 365ct - Adults Immunity 24M is a one‑year supply of D3 and K2 made for private‑label brands. The D3+K2 mix h...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Tablet' },
      { label: 'Active Ingredients', value: 'China OEM Vitamin D3 K2 - Adults Immunity 24M' },
      { label: 'Net Count', value: '2 Tablets' },
      { label: 'Packaging', value: 'PET bottle or tube' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'pl-boneandmuscle-mg-citrate-500mg-tablets-kidsandadults',
    name: 'PL Bone&Muscle Mg Citrate 500mg Tablets Kids&Adults',
    category: 'tablets',
    cover: '/images/products/m0_sn_dksni502k50mxg3489rckzjn.jpg',
    gallery: [],
    shortDesc: 'PL Bone&Muscle Mg Citrate 500mg Tablets (Kids & Adults) are a convenient daily magnesium supplement formulated to support healthy bone and m...',
    description: 'PL Bone&Muscle Mg Citrate 500mg Tablets (Kids & Adults) are a convenient daily magnesium supplement formulated to support healthy bone and m...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Tablet' },
      { label: 'Active Ingredients', value: 'PL Bone&Muscle Mg Citrate Kids&Adults' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle or tube' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'pure-himalayan-shilajit-resin-fulvic-50',
    name: 'Pure Himalayan Shilajit Resin Fulvic 50%',
    category: 'tablets',
    cover: '/images/products/m0_7i_767iq7i7ml9luppxt6p3mhzm.jpg',
    gallery: [],
    shortDesc: 'Wholesale 100% Pure Himalayan Shilajit Resin Fulvic 50% is a dark, natural resin collected from high-altitude Himalayan rocks. It is concent...',
    description: 'Wholesale 100% Pure Himalayan Shilajit Resin Fulvic 50% is a dark, natural resin collected from high-altitude Himalayan rocks. It is concent...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Tablet' },
      { label: 'Active Ingredients', value: 'Pure Himalayan Shilajit Fulvic 50%' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle or tube' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },

  // ===== Hard Capsules =====
  {
    slug: 'cinnamon-capsules-dietary-supp-energy-and-immune',
    name: 'Cinnamon Capsules - Dietary Supp: Energy & Immune',
    category: 'hard-capsules',
    cover: '/images/products/m0_wj_r0wj4jw9yjqexhj9acgq2g62.png',
    gallery: [],
    shortDesc: 'OEM/ODM Cinnamon Capsules are a natural dietary supplement in easy-to-swallow capsules, formulated to support energy and immune health with...',
    description: 'OEM/ODM Cinnamon Capsules are a natural dietary supplement in easy-to-swallow capsules, formulated to support energy and immune health with...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'Cinnamon - Dietary Supp: Energy & Immune' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'd3-k2-capsules-60-for-adults-immune-and-bone-support',
    name: 'D3 K2 Capsules 60 for Adults - Immune & Bone Support',
    category: 'hard-capsules',
    cover: '/images/products/m0_4c_tg4ck84dkcflw8lka541ay4z.png',
    gallery: [],
    shortDesc: 'Sunlight spills across the table as you take a slow breath and feel ready for the day ahead. These D3 + K2 capsules (60 easy-to-swallow pill...',
    description: 'Sunlight spills across the table as you take a slow breath and feel ready for the day ahead. These D3 + K2 capsules (60 easy-to-swallow pill...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'D3 K2 60 for Adults - Immune & Bone Support' },
      { label: 'Net Count', value: '2 Capsules' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'hair-growth-accelerator-3wk-mixed-berry-chews-and-clin-caps',
    name: 'Hair Growth Accelerator - 3wk: Mixed-Berry Chews & Clin Caps',
    category: 'hard-capsules',
    cover: '/images/products/m0_8c_818ci45y2f07992v1xa2u61l.jpg',
    gallery: [],
    shortDesc: 'Picture the sun at your sink: mixed-berry chews and a bottle of Clin Caps, a small, bright start to your day.',
    description: 'Picture the sun at your sink: mixed-berry chews and a bottle of Clin Caps, a small, bright start to your day.',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'Hair Growth Accelerator - 3wk: Mixed-Berry Chews & Clin' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'jbhk-nad-vegan-caps-for-men-energy-and-longevity',
    name: 'JBHK NAD+ Vegan Caps for Men - Energy & Longevity',
    category: 'hard-capsules',
    cover: '/images/products/m0_4k_nj4kwinrecv8ehkqf6rinsl1.jpg',
    gallery: [],
    shortDesc: 'Sunlight hits the gym bag as he slips a sleek bottle of OEM/ODM JBHK NAD+ Vegan Caps into the side pocket—small, plant-based, ready for the...',
    description: 'Sunlight hits the gym bag as he slips a sleek bottle of OEM/ODM JBHK NAD+ Vegan Caps into the side pocket—small, plant-based, ready for the...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'JBHK NAD+ Vegan for Men - Energy & Longevity' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'led-oem-odm-kingmaker-120ct-13-in-1-men-muscle-black-maca-energy',
    name: 'LED. OEM/ODM KingMaker 120ct 13-in-1 Men Muscle Black Maca Energy',
    category: 'hard-capsules',
    cover: '/images/products/m0_zk_mbzkycpduhfea6dbrpv5qn49.png',
    gallery: [],
    shortDesc: 'Meet LED. OEM/ODM KingMaker 120ct 13-in-1 Men Muscle Black Maca Energy — a sleek, powerhouse supplement crafted with Black Maca and a refine...',
    description: 'Meet LED. OEM/ODM KingMaker 120ct 13-in-1 Men Muscle Black Maca Energy — a sleek, powerhouse supplement crafted with Black Maca and a refine...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'LED. OEM/ODM KingMaker 13-in-1 Men Muscle Black Maca Energy' },
      { label: 'Net Count', value: '120 ct' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'led-oem-odm-moringa-extract-softgels-for-adult-energy-and-immune',
    name: 'LED. OEM/ODM Moringa Extract Softgels for Adult Energy & Immune',
    category: 'hard-capsules',
    cover: '/images/products/m0_nz_tznz72x4b063namnysu229d9.jpg',
    gallery: [],
    shortDesc: 'As the morning sun pours through your window, a single golden LED. OEM/ODM Moringa Extract Softgel feels like a pocket of fresh green sunlig...',
    description: 'As the morning sun pours through your window, a single golden LED. OEM/ODM Moringa Extract Softgel feels like a pocket of fresh green sunlig...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'LED. OEM/ODM Moringa Extract for Adult Energy & Immune' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'maca-capsule-for-men-energy-60ct-custom-color-shape-taste',
    name: 'Maca Capsule for Men, Energy, 60ct, Custom Color/Shape/Taste',
    category: 'hard-capsules',
    cover: '/images/products/m0_50_xn50sb2c3063s8ibsg15tg61.jpg',
    gallery: [],
    shortDesc: 'Maca Capsule for Men, Energy, 60ct is a natural maca root supplement in easy-to-swallow capsules made to support male energy, stamina, and v...',
    description: 'Maca Capsule for Men, Energy, 60ct is a natural maca root supplement in easy-to-swallow capsules made to support male energy, stamina, and v...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'Maca for Men, Energy, , Custom Color/Shape/Taste' },
      { label: 'Net Count', value: '60 ct' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'magnesium-glycinate-500mg-120-vegan-caps-hi-absorb-nongmo-gf',
    name: 'Magnesium Glycinate 500mg 120 Vegan Caps Hi-Absorb NonGMO GF',
    category: 'hard-capsules',
    cover: '/images/products/m0_qo_h9qo1u6kyg4c0stm8e91lbt3.jpg',
    gallery: [],
    shortDesc: 'Picture a quiet evening--soft light, a slow breath--and one vegan capsule of Magnesium Glycinate 500 mg helps you unwind with gent...',
    description: 'Picture a quiet evening--soft light, a slow breath--and one vegan capsule of Magnesium Glycinate 500 mg helps you unwind with gent...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'Magnesium Glycinate 120 Vegan Hi-Absorb NonGMO GF' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'magnesium-glycinate-capsules',
    name: 'Magnesium Glycinate Capsules',
    category: 'hard-capsules',
    cover: '/images/products/m43182_1782872428486-36.jpg',
    gallery: [],
    shortDesc: 'High Absorption Bone & Muscle Support',
    description: 'High Absorption Bone & Muscle Support',
    features: ['High Absorption Magnesium Glycinate', 'Maintain Strong Bone Health', 'Relieve Muscle Cramps & Soreness', 'Calm Nerves & Boost Sleep', 'Gold-Standard Magnesium Formula for Bone & Muscle Health', 'Flexible Customization for Premium Health Brands'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'Magnesium Glycinate' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'men-s-daily-multi-caps-22-minerals-energy-immunity-and-memory',
    name: 'Men\'s Daily Multi Caps 22 Minerals Energy Immunity & Memory',
    category: 'hard-capsules',
    cover: '/images/products/m0_zt_goztte3hxzktfbyflf50awna.png',
    gallery: [],
    shortDesc: 'As dawn paints the city, make Men\'s Daily Multi Caps your quick morning ritual to kickstart the day. Packed with 22 essential minerals and b...',
    description: 'As dawn paints the city, make Men\'s Daily Multi Caps your quick morning ritual to kickstart the day. Packed with 22 essential minerals and b...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'Men\'s Daily Multi 22 Minerals Energy Immunity & Memory' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'private-label-sea-moss-capsules-60ct-custom-moq3',
    name: 'Private Label Sea Moss Capsules 60ct - Custom, MOQ3',
    category: 'hard-capsules',
    cover: '/images/products/m0_zl_fnzl1ppoe3ak2bmt5q25nqkz.jpg',
    gallery: [],
    shortDesc: 'OEM Private Label Sea Moss Capsules 60ct - Custom, MOQ3: 60 easy-to-swallow capsules made from natural sea moss, ready for private label and...',
    description: 'OEM Private Label Sea Moss Capsules 60ct - Custom, MOQ3: 60 easy-to-swallow capsules made from natural sea moss, ready for private label and...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'Private Label Sea Moss - Custom, MOQ3' },
      { label: 'Net Count', value: '60 ct' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'women-s-all-in-one-multivitamin-and-minerals-hard-gelatin',
    name: 'Women\'s All-in-One Multivitamin & Minerals Hard Gelatin',
    category: 'hard-capsules',
    cover: '/images/products/m0_00_8p00s4hvy7jsfqamtsqzv282.png',
    gallery: [],
    shortDesc: 'The Women\'s All-in-One Multivitamin & Minerals Hard Gelatin slips into her palm at dawn like a tiny sun—one smooth hard-gel capsule that ble...',
    description: 'The Women\'s All-in-One Multivitamin & Minerals Hard Gelatin slips into her palm at dawn like a tiny sun—one smooth hard-gel capsule that ble...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'Women\'s All-in-One Multivitamin & Minerals Hard Gelatin' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'zinc-liver-protect-and-detox-dietary-caps-pregnant-and-adult',
    name: 'Zinc Liver Protect & Detox Dietary Caps - Pregnant & Adult',
    category: 'hard-capsules',
    cover: '/images/products/m0_s1_gls1sp50mchgae4sm8qolqlt.jpg',
    gallery: [],
    shortDesc: 'Picture soft morning light as you reach for a single, sleek capsule—tiny armor that quietly cares for your liver as you move through the day...',
    description: 'Picture soft morning light as you reach for a single, sleek capsule—tiny armor that quietly cares for your liver as you move through the day...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Hard Capsule' },
      { label: 'Active Ingredients', value: 'Zinc Liver Protect & Detox Dietary - Pregnant & Adult' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'PET bottle + desiccant' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },

  // ===== Powders =====
  {
    slug: 'all-natural-probiotic-prebiotic-ice-lemonade-powder-20b-cfu',
    name: 'All-Natural Probiotic Prebiotic Ice Lemonade Powder 20B CFU',
    category: 'powders',
    cover: '/images/products/m0_ht_a7htd0actxoxfxttxb4wwedz.jpg',
    gallery: [],
    shortDesc: 'Short product description:',
    description: 'Short product description:',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'All-Natural Probiotic Prebiotic Ice Lemonade 20B CFU' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'cotton-candy-electrolyte-powder-8-vitamins-sachets',
    name: 'Cotton Candy Electrolyte Powder - 8 Vitamins Sachets',
    category: 'powders',
    cover: '/images/products/m0_1f_w61fzrlt3bkh49b6roj7tevu.jpg',
    gallery: [],
    shortDesc: 'Imagine a sunlit fair, sticky fingers and laughter — now bottle that first bite of cotton candy. One tiny sachet turns plain water into a pi...',
    description: 'Imagine a sunlit fair, sticky fingers and laughter — now bottle that first bite of cotton candy. One tiny sachet turns plain water into a pi...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Cotton Candy Electrolyte - 8 Vitamins' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'creatine-gummies-adult-supplement-energy-management',
    name: 'Creatine Gummies Adult Supplement - Energy Management',
    category: 'powders',
    cover: '/images/products/m0_cx_xucx8gnvn9hxa5bg1sgsa9yz.png',
    gallery: [],
    shortDesc: 'Tasty chewable creatine for adults to help manage energy and support workouts.',
    description: 'Tasty chewable creatine for adults to help manage energy and support workouts.',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Creatine Adult Supplement - Energy Management' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'creatine-monohydrate-gummies-adult-energy-supp-0g-protein',
    name: 'Creatine Monohydrate Gummies, Adult Energy Supp, 0g Protein',
    category: 'powders',
    cover: '/images/products/m0_60_rg60f9ckwi0is02ibami2v3p.png',
    gallery: [],
    shortDesc: 'Chewy creatine monohydrate gummies made for adults to support short bursts of high‑intensity energy and power. Each serving has 0 g protein,...',
    description: 'Chewy creatine monohydrate gummies made for adults to support short bursts of high‑intensity energy and power. Each serving has 0 g protein,...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Creatine Monohydrate , Adult Energy Supp, Protein' },
      { label: 'Net g', value: '0g' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'electrolyte-energy-powder-2g-zero-sugar-muscle-support',
    name: 'Electrolyte Energy Powder 2g Zero-Sugar Muscle Support',
    category: 'powders',
    cover: '/images/products/m0_4w_lm4wiu9yi3q7303ob89zfuay.jpg',
    gallery: [],
    shortDesc: 'OEM Electrolyte Energy Powder 2g Zero-Sugar Muscle Support is a compact, sugar-free drink mix made to hydrate and help muscles recover. Each...',
    description: 'OEM Electrolyte Energy Powder 2g Zero-Sugar Muscle Support is a compact, sugar-free drink mix made to hydrate and help muscles recover. Each...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Electrolyte Energy Zero-Sugar Muscle Support' },
      { label: 'Net g', value: '2g' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'nootropic-l-tyrosine-energy-pouches-15g-wintergreen-focus',
    name: 'Nootropic L-Tyrosine Energy Pouches 15g Wintergreen Focus',
    category: 'powders',
    cover: '/images/products/m0_3o_po3ollshpeou9fxviswpfvod.jpg',
    gallery: [],
    shortDesc: 'Picture a crisp morning commute—pop a Nootropic L‑Tyrosine Energy Pouch 15g Wintergreen Focus and let cool wintergreen spark your senses. Li...',
    description: 'Picture a crisp morning commute—pop a Nootropic L‑Tyrosine Energy Pouch 15g Wintergreen Focus and let cool wintergreen spark your senses. Li...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Nootropic L-Tyrosine Energy Pouches Wintergreen Focus' },
      { label: 'Net g', value: '15g' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'pre-workout-300g-whey-gainer-w-creatine-mono-and-b-vitamins',
    name: 'Pre-Workout 300g Whey Gainer w/ Creatine Mono & B-Vitamins',
    category: 'powders',
    cover: '/images/products/m0_xk_43xkwhw2ops7dekuev97s8e5.jpg',
    gallery: [],
    shortDesc: 'At sunrise you scoop a creamy measure of Pre-Workout 300g Whey Gainer w/ Creatine Mono & B‑Vitamins into your shaker — the rich, velvety ble...',
    description: 'At sunrise you scoop a creamy measure of Pre-Workout 300g Whey Gainer w/ Creatine Mono & B‑Vitamins into your shaker — the rich, velvety ble...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Pre-Workout Whey Gainer w/ Creatine Mono & B-Vitamins' },
      { label: 'Net g', value: '300g' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'private-label-himalayan-shilajit-honey-sticks-sleep-aid',
    name: 'Private Label Himalayan Shilajit Honey Sticks Sleep Aid',
    category: 'powders',
    cover: '/images/products/m0_4p_ad4pijg6czu5o2lkar5tgw90.png',
    gallery: [],
    shortDesc: 'Himalayan Shilajit Honey Sticks Sleep Aid are single‑serve honey sticks blended with premium Himalayan shilajit for a soothing, easy bedtime...',
    description: 'Himalayan Shilajit Honey Sticks Sleep Aid are single‑serve honey sticks blended with premium Himalayan shilajit for a soothing, easy bedtime...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Private Label Himalayan Shilajit Honey Sleep Aid' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'probiotic-chicory-fiber-powder-for-adult-digestion-and-weight',
    name: 'Probiotic Chicory Fiber Powder for Adult Digestion & Weight',
    category: 'powders',
    cover: '/images/products/m0_ot_xsotjpziog0plhz2ty1m0nyu.jpg',
    gallery: [],
    shortDesc: 'Probiotic Chicory Fiber Powder is a blend of chicory inulin and live probiotics made to help adult digestion and weight control. Key perks:...',
    description: 'Probiotic Chicory Fiber Powder is a blend of chicory inulin and live probiotics made to help adult digestion and weight control. Key perks:...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Probiotic Chicory Fiber for Adult Digestion & Weight' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'whey-protein-creatine-4-8lb-muscle-gainer-pre-workout',
    name: 'Whey Protein + Creatine 4.8lb Muscle Gainer Pre-Workout',
    category: 'powders',
    cover: '/images/products/m0_lh_r7lhji8yb8omuvwyvmqubsvi.png',
    gallery: [],
    shortDesc: 'OEM Whey Protein + Creatine 4.8lb Muscle Gainer Pre-Workout is a blended supplement that pairs fast-absorbing whey protein with creatine in...',
    description: 'OEM Whey Protein + Creatine 4.8lb Muscle Gainer Pre-Workout is a blended supplement that pairs fast-absorbing whey protein with creatine in...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Whey Protein + Creatine 4. Muscle Gainer Pre-Workout' },
      { label: 'Net lb', value: '8lb' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'whey-protein-isolate-mass-gainer-bulk',
    name: 'Whey Protein Isolate Mass Gainer Bulk',
    category: 'powders',
    cover: '/images/products/m0_zw_9xzweu0ono5lcqpn0yh7jyq2.jpg',
    gallery: [],
    shortDesc: 'Whey Protein Isolate Mass Gainer Bulk - OEM Private Label is a high-quality, fast-absorbing whey isolate-based formula designed to deliver c...',
    description: 'Whey Protein Isolate Mass Gainer Bulk - OEM Private Label is a high-quality, fast-absorbing whey isolate-based formula designed to deliver c...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Whey Protein Isolate Mass Gainer Bulk' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'whey-protein-vanilla-strawberry-plastic-shaker',
    name: 'Whey Protein Vanilla/Strawberry Plastic Shaker',
    category: 'powders',
    cover: '/images/products/m0_fw_b4fwkynbpxux9auj8vssextq.jpg',
    gallery: [],
    shortDesc: '100% Whey Protein Vanilla/Strawberry Plastic Shaker OEM/ODM is a simple, clean product that pairs high-quality whey protein in two popular f...',
    description: '100% Whey Protein Vanilla/Strawberry Plastic Shaker OEM/ODM is a simple, clean product that pairs high-quality whey protein in two popular f...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Powder' },
      { label: 'Active Ingredients', value: 'Whey Protein Vanilla/Strawberry Plastic Shaker' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Sachet / Tub / Stick pack' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },

  // ===== Liquid Drops =====
  {
    slug: '1000mg-nad-liquid-supplement-with-pqq-cellular-energy',
    name: '1000mg NAD+ Liquid Supplement with PQQ - Cellular Energy',
    category: 'liquid-drops',
    cover: '/images/products/m0_xo_wuxou4yvvflxv6xw7c0jcbjh.jpg',
    gallery: [],
    shortDesc: 'This is a 1000 mg NAD+ liquid with PQQ made to boost cellular energy. The liquid form is easy to take and absorbs fast, while PQQ supports m...',
    description: 'This is a 1000 mg NAD+ liquid with PQQ made to boost cellular energy. The liquid form is easy to take and absorbs fast, while PQQ supports m...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'NAD+ Supplement with PQQ - Cellular Energy' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'active-whale-nad-60ml-drops-resveratrol-taurine-immune-gmp',
    name: 'Active Whale NAD+ 60ml Drops Resveratrol Taurine Immune GMP',
    category: 'liquid-drops',
    cover: '/images/products/m0_0x_q40xqnjvcveim3mlite11b7q.png',
    gallery: [],
    shortDesc: 'Active Whale NAD+ 60ml Drops blend NAD+ with resveratrol and taurine in a liquid dropper bottle. The formula aims to support cellular energy...',
    description: 'Active Whale NAD+ 60ml Drops blend NAD+ with resveratrol and taurine in a liquid dropper bottle. The formula aims to support cellular energy...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'Active Whale NAD+ Resveratrol Taurine Immune GMP' },
      { label: 'Net ml', value: '60ml' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'ark-drops-shilajit-booster-30-60ml-moq500-custom-sample',
    name: 'ARK Drops Shilajit Booster 30/60ml - MOQ500 Custom Sample',
    category: 'liquid-drops',
    cover: '/images/products/m0_ba_xabauo9fnuhiyojwr51kb4lm.png',
    gallery: [],
    shortDesc: 'ARK Drops Shilajit Booster is a concentrated shilajit extract in 30ml and 60ml dropper bottles. Sold as a custom sample with a minimum order...',
    description: 'ARK Drops Shilajit Booster is a concentrated shilajit extract in 30ml and 60ml dropper bottles. Sold as a custom sample with a minimum order...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'ARK Shilajit Booster 30/ - MOQ500 Custom Sample' },
      { label: 'Net ml', value: '60ml' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'cayenne-liquid-60ml-hawthorn-d3-k2-beet-and-turmeric',
    name: 'Cayenne Liquid 60ml – Hawthorn, D3 K2, Beet & Turmeric',
    category: 'liquid-drops',
    cover: '/images/products/m0_ru_m8ru8kwz4c4oi1ypcld61h9q.png',
    gallery: [],
    shortDesc: 'OEM Cayenne Liquid 60ml is a concentrated liquid supplement blending cayenne with hawthorn, beet, turmeric and vitamins D3 and K2 in a handy...',
    description: 'OEM Cayenne Liquid 60ml is a concentrated liquid supplement blending cayenne with hawthorn, beet, turmeric and vitamins D3 and K2 in a handy...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'Cayenne – Hawthorn, D3 K2, Beet & Turmeric' },
      { label: 'Net ml', value: '60ml' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'children-s-liquid-multivitamin-1-fl-oz-30-immune-and-bone',
    name: 'Children\'s Liquid Multivitamin 1 fl oz (30) / Immune & Bone',
    category: 'liquid-drops',
    cover: '/images/products/m0_v3_sgv3y9vvrajubepuqcnslq7t.png',
    gallery: [],
    shortDesc: 'Children\'s Liquid Multivitamin 1 fl oz (30) / Immune & Bone is a concentrated, easy-to-give liquid designed to support kids\' immune health a...',
    description: 'Children\'s Liquid Multivitamin 1 fl oz (30) / Immune & Bone is a concentrated, easy-to-give liquid designed to support kids\' immune health a...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'Children\'s Multivitamin (30) / Immune & Bone' },
      { label: 'Net fl oz', value: '1fl oz' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'kids-liquid-immune-w-zeolite-me-b12-and-d3-30ml',
    name: 'Kids Liquid Immune w/ Zeolite, Me-B12 & D3 30ml',
    category: 'liquid-drops',
    cover: '/images/products/m0_ud_aludx2eamaizuhf67trtde44.jpg',
    gallery: [],
    shortDesc: 'OEM/ODM Kids Liquid Immune w/ Zeolite, Me-B12 & D3 30ml is a kid-friendly liquid supplement combining natural zeolite, methylcobalamin (Me‑B...',
    description: 'OEM/ODM Kids Liquid Immune w/ Zeolite, Me-B12 & D3 30ml is a kid-friendly liquid supplement combining natural zeolite, methylcobalamin (Me‑B...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'Kids Immune w/ Zeolite, Me-B12 & D3' },
      { label: 'Net ml', value: '30ml' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'kids-rhodiola-drops-attention-and-energy-gmp',
    name: 'Kids Rhodiola Drops - Attention & Energy, GMP',
    category: 'liquid-drops',
    cover: '/images/products/m0_pt_ccptf3vhfozgrqjp0ithipku.jpg',
    gallery: [],
    shortDesc: 'OEM/ODM Kids Rhodiola Drops are a child-friendly liquid supplement featuring rhodiola, a well‑researched adaptogen to help support attention...',
    description: 'OEM/ODM Kids Rhodiola Drops are a child-friendly liquid supplement featuring rhodiola, a well‑researched adaptogen to help support attention...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'Kids Rhodiola - Attention & Energy, GMP' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'lion-s-mane-drops-100-natural-cognitive-and-immune',
    name: 'Lion\'s Mane Drops 100% Natural - Cognitive & Immune',
    category: 'liquid-drops',
    cover: '/images/products/m0_tt_xottm1qr1r2y3az4v1uwj6yo.jpg',
    gallery: [],
    shortDesc: 'OEM Lion\'s Mane Drops 100% Natural - Cognitive & Immune is a liquid lion\'s mane extract designed to support cognitive function and imm...',
    description: 'OEM Lion\'s Mane Drops 100% Natural - Cognitive & Immune is a liquid lion\'s mane extract designed to support cognitive function and imm...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'Lion\'s Mane 100% Natural - Cognitive & Immune' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'moringa-ashwagandha-ginger-oral-drops',
    name: 'Moringa Ashwagandha Ginger Oral Drops',
    category: 'liquid-drops',
    cover: '/images/products/m0_xa_p1xa9602dbal5wzq3jlck4mr.jpg',
    gallery: [],
    shortDesc: 'Short product description:',
    description: 'Short product description:',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'Moringa Ashwagandha Ginger Oral' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'shilajit-drops-oral-liquid-tonify-qi-and-immunity-moq-500',
    name: 'Shilajit Drops Oral Liquid - Tonify Qi & Immunity, MOQ 500',
    category: 'liquid-drops',
    cover: '/images/products/m0_jj_wkjjchl7r1f68fl32lu3rtk4.jpg',
    gallery: [],
    shortDesc: 'Short product description (3 sentences):',
    description: 'Short product description (3 sentences):',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'Shilajit Oral - Tonify Qi & Immunity, MOQ 500' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'vitamin-d3-k2-mct-oil-eggplant-60ml-gmp-bone-support',
    name: 'Vitamin D3 K2 MCT Oil Eggplant 60ml GMP Bone Support',
    category: 'liquid-drops',
    cover: '/images/products/m0_w8_9kw842qckxvf9z0t7qr42o5v.jpg',
    gallery: [],
    shortDesc: 'Short article (simple words):',
    description: 'Short article (simple words):',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'Vitamin D3 K2 MCT Oil Eggplant GMP Bone Support' },
      { label: 'Net ml', value: '60ml' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
  {
    slug: 'vitamin-d3-liquid-immune-support-for-women-prickly-and-lychee',
    name: 'Vitamin D3 Liquid Immune Support for Women, Prickly & Lychee',
    category: 'liquid-drops',
    cover: '/images/products/m0_vh_kkvhzswbz6zx8m0iijoly22a.jpg',
    gallery: [],
    shortDesc: 'Vitamin D3 Liquid Immune Support for Women is a tasty liquid supplement in prickly pear & lychee flavor, made for easy daily use. Its liquid...',
    description: 'Vitamin D3 Liquid Immune Support for Women is a tasty liquid supplement in prickly pear & lychee flavor, made for easy daily use. Its liquid...',
    features: ['Custom OEM/ODM formulation', 'GMP-certified manufacturing', 'Flexible packaging options'],
    specs: [
      { label: 'Dosage Form', value: 'Oral Liquid/Drops' },
      { label: 'Active Ingredients', value: 'Vitamin D3 Immune Support for Women, Prickly & Lychee' },
      { label: 'Net Count', value: 'Custom' },
      { label: 'Packaging', value: 'Glass/PET bottle + dropper' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    moq: '500 bottles'
  },
]

// ---------- 查询辅助函数 ----------
/** 取所有产品（按数据顺序） */
export function getAllProducts(): Product[] {
  return products
}

/** 按 slug 查单个产品 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

/** 取同剂型其他产品（排除自己，默认返回前 N 个） */
export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const current = getProductBySlug(slug)
  if (!current) return []
  return products
    .filter((p) => p.category === current.category && p.slug !== slug)
    .slice(0, limit)
}

/** 按 slug 查剂型分类（用于详情页角标文案） */
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug)
}

