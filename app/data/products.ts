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
    moq: '50,000 bottles',
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
    moq: '100,000 bottles',
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
    moq: '100,000 bottles',
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
    moq: '100,000 bottles',
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
    moq: '50,000 units',
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
    moq: '30,000 bottles',
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
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. Acetic Acid Digestive Support: 500mg organic apple cider vinegar per serving, standardized to 5% acetic acid, which helps support healthy digestion, stimulate stomach acid production, and improve nutrient absorption from food. Balance Gut & Ease Bloating: Supports healthy gut microbiome balance, helps promote the growth of beneficial gut bacteria, reduce bloating, gas, and indigestion, and support overall gut health and regularity. Metabolism & Weight Support: Boosts metabolism and supports healthy weight management, helps increase fat oxidation, reduce appetite...',
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
    name: 'Boosts muscle strength High-Potency Creatine Monohydrate Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1781746241583-15.jpg',
    gallery: [],
    shortDesc: 'Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation:',
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. Premium Creatine for Professional Athletes: High-potency creatine monohydrate formula boosts muscle strength, power, and recovery, targeting serious fitness enthusiasts and athletes. Custom Formulation Creatine Supplement OEM: Full customization available on creatine dosage, flavor, complementary ingredients, packaging, and branding to build your premium sports nutrition product. Certified Creatine Powder for Global Distribution: Manufactured under strict quality standards, complete compliance documents provided for global market sales. Premium Strength & Perform...',
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
    shortDesc: 'Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation:',
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. Adaptogens Balance Cortisol Levels: Blended with clinically-proven adaptogenic herbs including ashwagandha, rhodiola rosea, and holy basil, regulating the body\'s stress response, balancing cortisol levels, and reducing feelings of stress and anxiety. Improve Restful Night Sleep: Supports healthy sleep-wake cycle by regulating cortisol production rhythm, improving sleep quality, reducing nighttime awakenings, and helping users fall asleep faster and wake up refreshed. Calming Amino Acids for Focus: Added with L-theanine and GABA, natural calming amino acids, prom...',
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
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. Thermogenic Fat Burning Complex: Infused with 200mg caffeine and 500mg L-carnitine per serving, a powerful thermogenic combination that helps boost metabolism, increase fat oxidation, and support the body\'s ability to burn stored fat for energy. Natural Appetite Control Blend: Contains green tea extract and garcinia cambogia, natural ingredients that help suppress appetite, reduce cravings, and support healthy weight management by inhibiting fat production and storage. Sustained Energy & Focus Support: Boosts natural energy levels and focus, helping to combat fa...',
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
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. Natural Sunless Tan Support: 10,000IU beta-carotene per serving, a natural precursor to vitamin A that helps stimulate melanin production, supporting a gradual, natural sunless tan without the need for harmful UV exposure. Antioxidant Skin Protection: Infused with lycopene, vitamin C, and vitamin E, powerful antioxidants that help protect the skin from free radical damage, reduce UV-induced skin aging, and maintain skin elasticity and hydration. Boost Radiant Skin Glow: Supports overall skin health, helps improve skin texture, reduce dryness and dullness, and enh...',
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
    shortDesc: 'Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation:',
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. High Strength Biotin for Hair Growth: Infused with 10,000mcg clinical-grade biotin per serving, the core nutrient for hair follicle health, supporting natural hair growth cycle and reducing hair breakage. Multi-Vitamins Nourish Hair Roots: Blended with multi-vitamins (A, C, D, E) & essential minerals (zinc, selenium), nourishing hair follicles from the root, improving hair elasticity and preventing split ends. Herbal DHT Blocker for Scalp: Added with natural herbal extracts like saw palmetto and horsetail, blocking DHT production, reducing scalp inflammation, and...',
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
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Solutions for Global Children\'s Health Brands Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. Complete 15-in-1 multivitamin formula: Contains all essential vitamins (A, B-complex, C, D3, E, K) and key minerals (zinc, iodine, selenium, magnesium) that growing children need, filling nutritional gaps in their daily diet. Supports healthy growth and development: Vitamin D3, calcium, and magnesium support strong bones and teeth; B-complex vitamins support healthy growth, energy production, and nervous system development. Boosts immune system health: Vitamin C, zinc, and elderberry extract work together to support the body\'s natural immune defens...',
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
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. High-Potency Organic Beetroot Extract for Better Workout Performance: 500mg organic beetroot extract per serving, clinically shown to boost nitric oxide levels, improve blood flow, and enhance exercise endurance and performance. Plant-Based Support for Heart & Healthy Blood Pressure: Supports healthy blood pressure levels and cardiovascular function, promoting overall heart health with natural plant-based ingredients. Antioxidant-Rich Formula for Liver Detox & Sustained Natural Energy: Rich in antioxidants and phytonutrients, helps reduce oxidative stress, suppor...',
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
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. Fulvic Acid Shilajit Antioxidant Support: 500mg organic shilajit extract per serving, standardized to 50% fulvic acid, a powerful natural compound that helps enhance nutrient absorption, boost cellular energy production, and reduce oxidative stress. 85+ Trace Mineral Complex: Contains over 85 naturally occurring trace minerals, including iron, zinc, magnesium, and potassium, which support healthy bone function, nerve transmission, immune system health, and overall bodily function. Sharpen Focus & Brain Clarity: Supports cognitive function and mental clarity, help...',
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
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. High-Potency Skin Brightening Glutathione: 500mg reduced glutathione per serving, a master antioxidant that helps inhibit melanin production, reduce dark spots, freckles, and hyperpigmentation, and promote overall skin brightening and whitening. Vitamin C for Radiant Collagen Boost: Infused with 1000mg vitamin C, a powerful antioxidant that helps boost collagen production, protect the skin from free radical damage, reduce UV-induced skin darkening, and enhance skin glow and elasticity. Collagen Smooths Youthful Complexion: Contains hydrolyzed collagen, which help...',
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
    shortDesc: 'Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation:',
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. Slippery Elm Soothes Gut Irritation: Made with 1000mg standardized slippery elm bark extract per serving, rich in mucilage, forming a protective layer on the gastrointestinal tract, soothing irritation and reducing inflammation. Ease Bloating & Stomach Discomfort: Supports healthy digestion by promoting the production of digestive enzymes, improving nutrient absorption, and relieving common digestive issues like bloating, gas, and stomach discomfort. Prebiotics Balance Gut Microbiome: Blended with prebiotic fibers, feeding the beneficial gut bacteria, balancing g...',
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
    name: 'Supports muscle recovery Blueberry Creatine Monohydrate Gummies',
    category: 'gummies',
    cover: '/images/products/m43182_1781746242163-16-1.jpg',
    gallery: [],
    shortDesc: 'Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation:',
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. Blueberry Flavor Micronized Creatine Blend: Micronized creatine monohydrate formula supports muscle recovery, endurance, and strength, with a delicious blueberry flavor that makes daily supplementation easy. Custom Formulation Unique Sports Nutrition Line: Full customization available on creatine dosage, flavor profiles, complementary ingredients, packaging, and branding to build your unique sports nutrition product. Certified Creatine Powder for Worldwide Distribution: Manufactured under strict quality standards, complete compliance documents provided for global...',
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
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Tailored Customization for Global Women\'s Health Brands Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. Premium women-specific formula: Contains standardized extracts of chasteberry (Vitex agnus-castus), dong quai, red raspberry leaf, black cohosh, and other traditional women\'s health herbs, delivering targeted support for feminine balance. Supports healthy hormone balance: Helps regulate estrogen and progesterone levels, reduces PMS symptoms including mood swings, bloating, cramps, and breast tenderness, and supports regular menstrual cycles. Promotes reproductive health: Supports ovarian and uterine health, improves cervical mucus quality, and h...',
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
    shortDesc: 'Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation:',
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. 50B CFU Women\'s Probiotic Blend: Formulated with 50 billion CFU per serving of 12 clinically-proven probiotic strains, including Lactobacillus and Bifidobacterium, specifically selected for women\'s health needs, balancing vaginal and gut microbiome. Balance Vaginal pH Naturally: Supports vaginal health by maintaining healthy pH levels, inhibiting the growth of harmful bacteria, and reducing the risk of vaginal infections, providing natural intimate care for women. Improve Gut & Immune Wellness: Enhances gut health and nutrient absorption, relieves bloating and...',
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
    description: 'Picture a sunlit morning: palm shadows on the counter and golden softgels catching the light like little suns—each one a plant-powered promise. These OEM/ODM Adult Vegan D3+K2 Coconut Softgels blend plant-derived Vitamin D3 and K2, nestled in silky coconut oil for a gentle, tropical touch tailored to your brand. A simple daily ritual of vegan support for bone and immune wellness that feels like a small, indulgent moment your customers will love. no product data. Custom Vegan D3+K2 Softgels Vegan coconut D3+K2 softgels for adults deliver targeted bone and immune support in a smooth, easy-to-swallow format. Softgels OEM/ODM services let you customize formula, label, logo and capacity with sample support, free packaging design and flexible MOQs to match your brand needs. Premium GMP manufacturing ensures consistent quality, attractive bottle or blister packaging, compact softgel shape and coconut flavor, with fast 7–14 day lead times and multiple shipping options. Our vegan D3+K2 coconut softgels deliver fat‑soluble vitamin synergy for bone and immune support in a plant‑based, easily absorbed softgel format designed for adults (men and women) and not intended for pregnant women, newborns or children. Available as Softgels OEM/ODM with custom logo, label, flavor and formula options, the encapsulated coconut oil matrix and plant‑derived shell ensure stability, palatability and convenient dosing. Manufactured in Guangzhou with a usual MOQ of 500 pieces, sample support, 7–14 working day lead time, free packaging design and flexible payment/shipping terms, this offering emphasizes...',
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
    description: 'DHA Fish Oil Vegetarian Capsules 200ct 3x Enteric-Coated is a high‑count bottle of DHA-rich fish oil in vegetarian capsule shells. Each capsule has a triple enteric coating to cut fishy aftertaste and help the oil pass to the gut for better comfort and absorption. It’s meant as a daily omega-3 supplement to support brain, eye, and heart wellness. Key points: - 200 softgels — long supply. - DHA from fish oil; shell is vegetarian (product is not vegan/vegetarian due to fish oil). - Triple enteric coating reduces burps and odor. - Simple daily use; follow label or a healthcare pro. Usage scenarios (about 3 sentences): - Take one daily as a simple, long‑lasting way to add DHA to your routine for general brain and eye support. - Use if you want fish oil benefits but dislike fishy burps, since the 3x enteric coat helps prevent aftertaste. - Good for people who travel or have busy weeks and want a big, easy supply of omega‑3s — but check with a doctor if pregnant, nursing, on meds, or if you have health issues. no product data. 200-Count Enteric-Coated Vegetarian DHA DHA Fish Oil Vegetarian Capsules 200ct 3x Enteric-Coated provide immune support, antioxidant benefits and help support bone density in an easy daily softgel. Each 200-capsule bottle uses vegetarian, triple enteric-coated softgels with a 24-month shelf life, clear 3-capsule daily dosing and cool, dry storage—not suitable for pregnant women or newborns. Manufactured in Guangdong to GMP/HACCP/QS/ISO standards and available as Softgels OEM/ODM, they deliver reliable quality, custom labeling and packaging options for retai...',
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
    description: 'As dusk drapes the room in warm light, a smooth softgel rests in your hand -- a tiny blend of GABA, L‑theanine and gentle vitamins. Tucked into your wind‑down routine, it helps hush the noise and cradle you toward a calm night. 280 softgels in a neat bottle, ready to join your ritual for softer evenings and brighter mornings. no product data. Restful Sleep, Immune Support Softgels OEM/ODM deliver a targeted blend of GABA, L-Theanine and vitamins to help adults enjoy deeper, more restorative sleep while supporting immune health. Packaged as 280pcs in an airtight, tamper-evident bottle, each smooth oval softgel offers precise dosing, a compact style for daily convenience, and a 24-month shelf life when kept dry and cool. Made in China to rigorous OEM quality standards with flexible ODM customization, this herbal supplement emphasizes premium sourcing, clear labeling and manufacturing controls to meet safety and performance expectations. This Softgels OEM/ODM herbal supplement, manufactured in China under OEM branding, contains 280 softgels of GABA/L‑Theanine and vitamins in a softgel dosage form for adults (not suitable for pregnant women), with a 24‑month shelf life when stored dry and cool. From a value and product function perspective it supports sleep and immune health by combining calming GABA and L‑Theanine with immune‑supporting vitamins to deliver daily relaxation and resilience. The softgel structure provides convenient swallowing, improved ingredient stability and absorption, while OEM/ODM manufacturing flexibility enables custom formulation, labeling and packaging...',
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
    description: 'A high‑potency, algae‑derived omega‑3 supplement in a convenient 60‑capsule bottle, labeled to deliver concentrated EPA and DHA (700/500 mg) per serving. Selling points: strong EPA/DHA levels for effective daily support, certified vegan/fish‑free source (algae), and OEM/ODM manufacturing options for private‑label customization. Compact 60‑count format is ideal for heart and brain support routines and scalable production makes it easy for brands to launch or expand product lines. no product data. Custom Vegan Softgel Purity High‑potency vegan omega‑3 softgels (60ct, 700/500mg EPA/DHA) deliver concentrated EPA/DHA for daily wellness in a convenient, easy‑to‑swallow format. Available as customizable Softgels OEM/ODM with oval softgel shape, smooth texture, high‑purity algal oil and airtight, tamper‑evident bottles or blister packaging to protect potency and enhance shelf appeal. Factory‑direct services include sample support, low MOQ (typically 500 pcs), free packaging design, custom logos/formulas and 7–14 day lead times for fast, flexible fulfillment. Softgels OEM/ODM options are available for this Omega-3 Vegan 60-count formula, delivered as easy-to-swallow softgel capsules that provide concentrated EPA/DHA (up to 700/500 mg) from vegan sources and can be tailored with custom flavor, logo, label and capacity. Core attributes include adult suitability for men and women (not for pregnant women, newborns or children), a nutrient-stable softgel structure for oxidation resistance and convenient daily dosing, while functional value lies in supporting cardiovascular and cognitive...',
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
    description: 'Oregano & Black Seed Oil Softgels 300 is a simple plant-based supplement. Each softgel puts oregano oil and black seed oil into an easy-to-swallow capsule. These oils are rich in natural plant compounds and antioxidants to support daily wellness. They are made for regular use as part of a healthy lifestyle. Usage scenarios (about 3 sentences): Take a softgel daily as part of your routine to support general wellbeing and antioxidant intake. Use them when traveling or during seasonal change to help maintain immune and respiratory comfort. Busy people, athletes, or anyone who wants extra plant-based support can add these softgels to their diet. no product data. Potent Support Easy-Absorb Softgels Oregano & Black Seed Oil Softgels 300 provide a convenient, easy-to-swallow daily dose of natural botanical support for adult wellness, presented as smooth soft capsules (not suitable for pregnant women, newborns, or children). We offer Softgels OEM/ODM services with customizable logo, label, formula, flavor and capacity, plus free packaging design and sample support to tailor the product to your brand. As a Guangzhou manufacturer we ensure high-quality production, low MOQ (usually 500), fast 7–14 business day lead times and flexible shipping/payment options for reliable, scalable supply. Oregano & Black Seed Oil Softgels 300 is a dietary supplement combining concentrated oregano and nigella sativa oils in easy-to-swallow soft capsules, formulated for adult men and women with flavor and dosage options available original or customized. Built for flexibility and brand partners, the prod...',
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
    description: 'Description: Oregano & Black Seed Oil Softgels 300 ct — concentrated botanical oils in convenient, easy-to-swallow softgels. OEM-made with custom flavor and private-label options so brands can tailor taste and packaging. A value-size, clean-label choice for customers who like natural botanical supplements. Selling points: - Dual botanical blend (oregano + black seed) for broad consumer appeal - Large 300-count bottle = better value and longer supply - OEM & custom flavoring/private-label ready — ideal for branding - Easy-to-swallow softgels hide oil taste and make dosing simple - Clean, concentrated formulation with minimal excipients - Scalable, retail-ready production suitable for wholesale and retail markets no product data. Immune Support, Tailored Softgels Support immune health with Oregano & Black Seed Oil softgels in a convenient 300-count bottle, formulated to boost immunity for adults, teens, children, men and seniors (not suitable for pregnant women or newborns). Softgels OEM/ODM capabilities offer custom flavors, private-label packaging and retail-ready 300ct bottles with a 24-month shelf life and simple "store cool and dry" care. Made in Guangdong under GMP, HACCP, QS and ISO standards, the easy-to-swallow softgel form and consistent quality deliver the reliable immune support customers need. Oregano & Black Seed Oil Softgels 300ct pack concentrated oregano and black seed oils into 300 easy-to-swallow softgel capsules, manufactured in Guangdong with GMP, HACCP, QS and ISO certifications and a 24-month shelf life. Designed as a fish-oil type softgel formulation,...',
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
    description: 'Oregano & Black Seed Oil Softgels are plant oil capsules in a 300-count bottle. Each serving is 2 softgels. The blend of oregano and black seed oil offers natural antioxidant and immune-supporting properties in an easy-to-swallow form. Usage scenarios: - Take daily as part of a simple wellness routine to help support immune health. - Use during cold and flu season or when you feel run down for extra natural support. - Take while traveling or after heavy meals to help with respiratory comfort and digestive ease. no product data. Immune Support 300-Count Softgels Oregano & Black Seed Oil softgels deliver a concentrated, energy-supporting health-care blend in an easy-to-swallow softgel form, with a recommended dose of 2 softgels per serving for adults (not suitable for children or newborns). Packaged as 300 softgels per bottle with smooth, uniform softgel shape and premium oil quality, the bottle format ensures convenient daily dosing and a long-lasting supply. Flexible Softgels OEM/ODM options are available with per-bottle quotations and customization of formulation, labeling and packaging to meet retail or private-label needs. Oregano & Black Seed Oil Softgels come in a 300-count bottle with a softgel dosage form that encapsulates concentrated botanical oils for easy swallowing and stable delivery. With a recommended serving of 2 softgels per serving, this blend is formulated to support energy and general health care needs through the complementary actions of oregano and black seed oils. Available as OEM/300 softgels per bottle and customizable through Softgels OEM/ODM optio...',
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
    description: 'OEM Oregano + Black Seed Oil Softgels 300ct are softgel capsules combining oregano oil and black seed oil to support immune health and overall wellness. Selling points: a potent, natural combo known for antioxidant and antimicrobial-supporting properties, in easy-to-swallow, tasteless softgels. The 300-count bottle gives long-term value for daily use, making it a convenient choice for routine immune support. no product data. Pure Immunity, 300ct Softgels Powerful immune support from oregano and black seed oil comes in easy-to-swallow softgels that suit adults and children (not for pregnant women or newborns), providing a convenient daily defense. Softgels OEM/ODM production guarantees GMP/HACCP/QS/ISO-backed quality in a 300ct sealed bottle of smooth, uniform capsules with a 24-month shelf life and cool, dry storage instructions. Bulk-ready packaging and customizable OEM/ODM options from Guangdong deliver dependable supply, professional quality control, and a user-friendly format for long-term regimen adherence. Softgels OEM/ODM 300-count bottles combine oregano and black seed oil sourced from Guangdong, China and are produced under GMP/HACCP/QS/ISO standards for private-label manufacturing. Designed as a daily immune-support supplement for adults, teenagers and most family members (not suitable for pregnant women or newborns), it helps boost and improve overall immune system function. The oil-filled softgel structure ensures easy swallowing, improved bioavailability and stability, with a 24-month shelf life when stored in a cool, dry place. Natural Oregano Blackseed Suppor...',
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
    description: 'In sunlit fields and a bright lab, we press sun‑kissed oregano into pure, golden oil capsules that whisper of health. As a trusted OEM/ODM wholesale partner, we craft custom formulas, labels, and sizes with strict testing and care. Fast lead times, low minimums, and white‑glove service mean your brand gets a premium product that wins hearts on the shelf. no product data. Custom Packaging, Premium Potency Our Softgels OEM/ODM service produces premium oregano oil capsules tailored to your brand, offering customizable packaging (neutral white or authorized branded boxes), precise softgel shapes and modern styles to boost shelf appeal. Rigorous quality control, including 100% testing and sample runs produced to your specifications, guarantees consistent potency and safety. Transparent lead times (typically 25–40 days), clear payment terms and reliable packing and shipping ensure dependable fulfillment from first order to delivery. These Oregano Oil Capsules come in liquid-filled softgel form that locks in natural oregano oil potency with stable encapsulation for controlled release and easy swallowing, and can be offered with gelatin or vegetable shells to meet dietary preferences. As Softgels OEM/ODM they support custom formulations, labeling and branded packaging, deliver concentrated antimicrobial and immune-supporting benefits for daily wellness, and accommodate sample requests and production by customer samples. Wholesale manufacturing provides competitive pricing, strict 100% pre-shipment testing, and flexible packaging options (neutral or authorized branded boxes) with ty...',
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
    description: 'OEM Pumpkin Seed Oil Softgels 300ct China - Immune Support is a simple, high-count dietary supplement made for private labels. Each softgel contains concentrated pumpkin seed oil with plant-based nutrients and antioxidants that may help support immune health and overall wellness. The 300-count bottle offers value and convenience for daily use and bulk stocking, manufactured to OEM standards in China. Usage scenarios: Take one softgel daily with a meal as part of a regular wellness routine to support general immune health. Use during seasonal shifts or busy times when you want extra nutritional support. Retailers and brands can stock the 300ct bottles for resale, subscription boxes, or bulk customer supply. no product data. Premium Sealed Softgels, Immunity Jiabei Health pumpkin seed oil softgels deliver concentrated, easy-to-swallow doses designed to boost and improve the immune system for adults, teens, children and older adults. Packaged as 300 softgels per bottle with a 24-month shelf life, GMP/HACCP/QS/ISO-certified quality, smooth uniform softgel shape and secure compact bottles for cool, dry storage ensure consistent daily use. Offered with flexible Softgels OEM/ODM services from Guangdong, China to support branding and customization, the product is not intended for pregnant women or newborns. Softgels OEM/ODM Jiabei Health pumpkin seed oil is supplied in 300 softgels per bottle made in Guangdong, China, carrying GMP/HACCP/QS/ISO certifications and a 24-month shelf life for reliable OEM service. Formulated to boost and improve immune system function for adults, teens...',
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
    description: 'OEM Saw Palmetto Herbal Capsules for Men 60 Softgels Dose 2 is a concentrated saw palmetto supplement formulated for men\'s wellness. Each bottle contains 60 easy-to-swallow softgels with a suggested dose of two softgels per day (about a 30-day supply). The product is positioned as a convenient, private-label (OEM) herbal option for retailers and consumers. Selling points: - Natural saw palmetto herbal extract tailored for men. - 60 softgels with a 2-softgel daily dose — convenient one-month supply. - Softgel format for easy swallowing and improved bioavailability. - OEM/private-label ready for custom branding and packaging. - Consistent, concentrated dosing for dependable use. no product data. Prostate Support, Premium Softgels Softgels OEM/ODM Saw Palmetto Herbal Capsules for Men deliver targeted prostate and urinary support in easy-to-swallow, oil-filled softgels standardized to Dose 2 potency. Compact, sealed 60-softgel bottles or blister packs protect freshness and simplify daily or travel use. Custom labeling options, smooth capsule shape, modern styling, and stringent quality controls from a trusted OEM partner ensure consistent efficacy and a brand-ready presentation customers rely on. This Saw Palmetto herbal supplement for men comes as 60 softgels with Dose 2 (two softgels per serving), in easy-to-swallow softgel capsules and offers Softgels OEM/ODM customization. The core and extended attributes combine standardized saw palmetto extract, precise dosing and premium excipients to support prostate health, urinary comfort and hormonal balance, delivering clear value...',
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
    description: 'Vitamin D3 10,000 IU + K2 MK-7 200 mcg, 120 softgels (VCO) pairs high-strength vitamin D3 with K2 (MK‑7) in a virgin coconut oil base for better absorption. D3 helps bone health and immune function; K2 guides calcium into bones and away from arteries. Each softgel delivers a potent daily dose in a small, easy-to-swallow form. Check with your doctor before using high-dose vitamin D, especially if pregnant, nursing, or on medication. Usage scenarios (three short sentences): - For people with little sun exposure or who live in northern climates needing a strong vitamin D boost. - For older adults or anyone worried about bone density who want K2 to help direct calcium to bones. - For those seeking extra immune support during winter, travel, or heavy training periods. no product data. Potent D3+K2 VCO Softgels High-potency Vitamin D3 (10,000 IU) with K2 MK-7 (200 mcg) in each softgel delivers targeted immune support, antioxidant protection, and helps increase bone density for adults and aging users. Packaged as 120 easy-to-swallow softgels per bottle with a 24-month shelf life, GMP/HACCP/ISO-certified quality, and clear cool, dry storage guidance for reliable daily use. Available with Softgels OEM/ODM services for private-label or customized formulations, made in Guangdong and suitable for adults and teens (not for pregnant women or newborns). This Vitamin D3 10,000 IU plus K2 MK-7 200 mcg formula comes as 120 VCO-based softgels per bottle, using an oil-encapsulated softgel structure for enhanced bioavailability and a 24-month shelf life when stored cool and dry. Designed to sup...',
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
    description: 'China OEM Vitamin D3 K2 Tablets 365ct - Adults Immunity 24M is a one‑year supply of D3 and K2 made for private‑label brands. The D3+K2 mix helps support adult bone health and immune function. Packaged for easy daily use with a 24‑month shelf life. Usage scenarios: - Use daily if you get little sun (office workers, city dwellers, or winter months) to keep vitamin D levels steady. - Good for older adults or anyone worried about bone strength and calcium support. - Handy for people on restricted diets, frequent travelers, or those who want simple year‑round immune support. no product data. 365-Count Premium Immunity Support These Tablets provide targeted immune support for adults in an easy-to-swallow tablet form and come as a convenient 365-count supply to simplify daily wellness. Manufactured as an OEM herbal supplement in China with consistent quality control, each compact, uniformly shaped tablet stays potent for up to 24 months when stored dry and cool. Practical packaging and a year-long dose help busy adults maintain routine supplementation safely (not recommended for pregnant women). These China OEM Vitamin D3 K2 Tablets deliver a concentrated D3-K2 formula in a 365-count pack, offered as an OEM herbal supplement made for adult use with a 24-month shelf life. Designed for immune support and healthy calcium metabolism, the product provides clear value as a year-long daily regimen while noting it is not intended for pregnant women. The tablet form and compact packaging make storage in dry, cool conditions simple and convenient, reflecting the product’s structure and orig...',
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
    description: 'PL Bone&Muscle Mg Citrate 500mg Tablets (Kids & Adults) are a convenient daily magnesium supplement formulated to support healthy bone and muscle function. Each tablet provides 500 mg of magnesium in citrate form, which is generally easier to absorb than some other mineral forms. Key selling points: high 500 mg dose, citrate for better absorption, family-friendly (suitable for kids and adults), and easy-to-take tablets for everyday use. no product data. Fast-Absorbing Family Bone-Muscle Support PL Bone&Muscle Mg Citrate 500mg Tablets for kids and adults deliver targeted magnesium citrate with added zinc, calcium and vitamin B6 to support bone, muscle and immune health in a simple daily regimen. Convenient, easy-to-swallow Tablets come as a 60-count bottle (2 tablets per serving, 30 servings) with a 2-year shelf life and customizable flavors and packaging—neutral white boxes by default or brand-labeled boxes for private-label orders. Manufactured under OEM/ODM with free private-label options (MOQ 500 bottles), full quality testing before shipment, sample availability and typical 25–40 day delivery ensures reliable quality and service for retailers and consumers. PL Bone&Muscle Mg Citrate 500mg Tablets for Kids & Adults are compact Tablets delivering a core 500mg magnesium citrate dose per serving with complementary zinc, calcium and vitamin B6 to support bone, muscle and immune wellness. Extended attributes include customizable flavor, free private label and OEM service (MOQ 500 bottles), 30 servings per container (2 tablets per serving) and a 2-year shelf life for dependabl...',
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
    description: 'Short description: Wholesale 100% Pure Himalayan Shilajit Resin Fulvic 50% is a dark, natural resin collected from high-altitude Himalayan rocks. It is concentrated to about 50% fulvic acid and contains trace minerals. Supplied in bulk for retailers and manufacturers, the product is purified and lab-checked for quality. Ideal for those sourcing authentic shilajit in large quantities. Usage scenarios (3 sentences): Users can dissolve a pea-sized amount of the resin in warm water, milk, or tea and include it in a daily supplement routine. Manufacturers and supplement brands can use the resin to produce capsules, tablets, tinctures, or blended powders. Retailers, health stores, and Ayurvedic practitioners can buy wholesale stock for resale or clinic use. no product data. Lab-Tested Potency, Secure Packaging Wholesale 100% Pure Himalayan Shilajit Resin with 50% fulvic acid delivers potent, food-grade immune support and natural vitality for health foods and supplements. Solvent-extracted black resin can be vacuum-packed in bottles, mason jars, drums or glass/plastic containers and formulated into precise Tablets or other delivery styles for easy dosing and a stable two-year shelf life. Sourced from Shaanxi, China and certified ISO9001/Halal/Kosher, Fruiterco’s Shilajit Resin (MOQ 2 bottles) offers manufacturers consistent quality and straightforward storage in a cool, dry place. Wholesale 100% pure Himalayan Shilajit resin (Fulvic Acid 50%) is a black, food-grade herbal extract sourced from Shaanxi, China and produced via solvent extraction, supplied in bottles, cans, drums or v...',
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
    description: 'OEM/ODM Cinnamon Capsules are a natural dietary supplement in easy-to-swallow capsules, formulated to support energy and immune health with concentrated cinnamon extract. Selling points: antioxidant-rich cinnamon to help support healthy metabolism and sustained energy, clean-label formula with no artificial fillers, and convenient daily dosing. Perfect for brands -- available as private-label/OEM with GMP manufacturing, batch testing, and flexible packaging and formulation options. no product data. Tailored Packaging, Potent Immunity CAPSULE OEM/ODM offers tailored cinnamon dietary capsules to boost energy and support immunity for adults, with customizable formulas and flavors to fit your brand. Choose custom packaging, capsule shape, style and dosing capacity with free structural and graphic box design, fast 7–14 working-day production and low MOQs (typically 500) to bring products to market quickly. As a Guangzhou-based manufacturer we provide free samples (freight charged), strict quality control and flexible shipping/payment options for reliable, brand-ready supplements. CAPSULE OEM/ODM cinnamon dietary supplement is designed for adults to support energy and immune health in a convenient, easy-to-swallow capsule format, with flavor and formula options original or customized. As a customizable OEM/ODM product, it offers value through custom logo, label, formula and capacity, sample support and flexible minimum orders (typically 500 pieces) while noting it is not suitable for pregnant women, newborns or children. Manufactured in Guangzhou, the capsule structure provides p...',
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
    description: 'Sunlight spills across the table as you take a slow breath and feel ready for the day ahead. These D3 + K2 capsules (60 easy-to-swallow pills) blend the sunshine vitamin with K2 to support bone strength and healthy immune function in a simple daily step. Made for adults, pure and lab-tested, this sleek formula brings calm confidence -- with OEM/ODM options for brands that want the same glow. no product data. Custom Softgels, Lab-Tested Purity CAPSULE OEM/ODM D3 K2 Capsules (60) provide targeted immune and bone support for adults with a balanced D3 and K2 herbal supplement formula. Smooth, easy-to-swallow capsules come in a compact, clearly labeled bottle style with a 24-month shelf life and dry, cool storage for convenient daily use. Customizable OEM/ODM manufacturing and strict quality control deliver reliable, high-quality production suitable for adult consumers (not for pregnant women). The CAPSULE OEM/ODM D3 K2 Capsules 60 for Adults are herbal supplement capsules produced in China under OEM branding, offered as a 60-count dosage form with a 24-month shelf life and a storage recommendation to keep dry and cool; they are intended for adult use and are not suitable for pregnant women. They combine vitamin D3 and K2 to support immune and bone health, providing convenient daily dosing and clear consumer value for wellness-focused customers. The compact capsule structure, stable formulation and OEM/ODM manufacturing flexibility enable private-label customization, consistent quality control and easy administration. Immune and Bone Support CAPSULE OEM/ODM D3 K2 Capsules 60 for...',
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
    description: 'Picture the sun at your sink: mixed-berry chews and a bottle of Clin Caps, a small, bright start to your day. Each tangy chew and calm cap works in tune — three weeks of easy care to help feed your hair’s natural shine. Make it a short ritual of strength and glow, and step out with soft bounce and quiet pride. no product data. Fast Growth, Tasty, Travel-Friendly Get thicker, fuller hair in as little as 3 weeks with Hair Growth Accelerator’s clinically backed dual formulas that target every growth stage—mixed-berry soft chews for tasty daily support and clinical-strength vegetable capsules for concentrated nutrient delivery. Available for private labeling with CAPSULE OEM/ODM, the smooth, easy-to-swallow capsule shape comes in a tamper-evident 90-count bottle while the 60-count chews arrive in resealable, travel-friendly packs—both made with premium, gluten- and GMO-free ingredients. Choose the chew style for convenient, flavorful dosing or the capsule style for potent, professional results; both styles feature thoughtful packaging, high-quality sourcing, and consistent dosing to restore confidence and long-term hair strength. This Hair Growth Accelerator line offers two core formats—a delicious mixed-berry soft chew and clinical-strength vegetable capsules—formulated to deliver clinically backed results in as little as 3 weeks and available for flexible manufacturing like CAPSULE OEM/ODM. Value-driven benefits include fast, visible improvements in thickness and fullness, multi-stage support for the hair growth cycle, and convenient daily dosing (2 chews or 3 capsules) that...',
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
    description: 'Sunlight hits the gym bag as he slips a sleek bottle of OEM/ODM JBHK NAD+ Vegan Caps into the side pocket—small, plant-based, ready for the day’s climb. Each capsule whispers of clean, science-minded craftsmanship designed to support cellular energy and a long-lived rhythm. Carry confidence in your pocket: a vegan boost that feels like steady momentum, helping you meet every moment with clarity and calm. no product data. Premium Vegan NAD+ Capsules Our CAPSULE OEM/ODM service delivers vegan NAD+ caps tailored for men\'s energy and longevity, with customizable formula, dose, shape and high-quality vegan excipients to enhance absorption and daily convenience. We offer custom logo, label and packaging options with free structural and graphic design, sample support, flexible MOQs (from 500) and fast 7–14 day production lead times so brands can launch quickly. Made in our Guangzhou factory under strict quality controls, these adult-only vegan capsules (not for pregnant women, newborns or children) combine reliable potency, sleek style and retail-ready packaging to support long-term vitality. The JBHK NAD+ Vegan Caps for Men are vegan oral capsules formulated to support cellular energy and longevity with adjustable NAD+ concentrations and capsule capacity, offered as CAPSULE OEM/ODM with options for custom flavor, formula, logo and label. Designed for adult men (not for pregnant women, newborns or children), these capsules help support metabolic energy and healthy aging pathways while providing OEM/ODM sample support and a negotiable MOQ (typically 500) for flexible private‑label...',
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
    description: 'Meet LED. OEM/ODM KingMaker 120ct 13-in-1 Men Muscle Black Maca Energy — a sleek, powerhouse supplement crafted with Black Maca and a refined 13-in-1 blend. Picture sunrise gym sessions and high-stakes evenings where every capsule feels like a charged moment, supporting energy, stamina, and the calm confidence to own the room. With 120 premium capsules, it’s your daily, pocket-sized ritual for sustained drive and a performance-ready presence. no product data. Energy, Muscle, Premium Packaging CAPSULE OEM/ODM KingMaker 120ct 13-in-1 Men Muscle Black Maca Energy blends concentrated black maca extract into easy-to-swallow capsules to boost energy and support muscle performance. Flexible OEM/ODM and private-label services, customizable flavours and a low MOQ of 500 bottles give brands fast, scalable sourcing tailored to customer needs. Premium 120-count bottles with sleek black styling, uniform capsule shape and certified quality controls deliver shelf-ready packaging, consistent potency and strong consumer appeal. KingMaker 120ct 13-in-1 Men Muscle Black Maca Energy is a concentrated capsule formula using black maca extract to boost energy and support male muscle performance, offered as CAPSULE OEM/ODM for flexible manufacturing. Its value attributes include OEM flavour customization, private-label OEM/ODM services, MOQ 500 bottles and applicable certifications to meet market and compliance needs. The product’s 13-in-1 multi-ingredient structure and capsule delivery ensure rapid absorption, sustained energy release and convenient daily dosing for active men seeking performance...',
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
    description: 'As the morning sun pours through your window, a single golden LED. OEM/ODM Moringa Extract Softgel feels like a pocket of fresh green sunlight--ready to power your day and quietly support your immune shield. Each smooth capsule carries concentrated, pure moringa vitality, a whisper of nature wrapped in easy, on-the-go convenience. Crafted with care and customizable OEM/ODM precision, these softgels blend trusted science and botanical grace for adults who want steady energy and calm confidence. no product data. Customized Softgels, Energize Immunity Moringa extract softgels provide concentrated, easy-to-swallow support for adult energy and immune health with a smooth oval shape for daily convenience. We offer CAPSULE OEM/ODM services with customizable formulas, labels, flavors, low MOQs and sample support plus fast 7–14 day lead times to accelerate your launch. Premium GMP-grade ingredients, tamper-evident bottles or blister packs, sleek brand-forward styling and flexible shipping/payment options ensure consistent quality and shelf-ready packaging. LED Moringa Extract Softgels are formulated as easy-to-swallow softgel capsules delivering moringa concentrate to support adult energy and immune wellness, with a softgel structure that promotes convenient dosing and enhanced bioavailability. Designed for flexibility, CAPSULE OEM/ODM services enable custom logo, label, formula, flavor and capacity so brands can tailor the product for men and women while excluding pregnant women, newborns and children. Manufactured in Guangzhou with a typically low MOQ (around 500 pieces, negotiabl...',
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
    description: 'Maca Capsule for Men, Energy, 60ct is a natural maca root supplement in easy-to-swallow capsules made to support male energy, stamina, and vitality. It comes in a 60-count bottle and offers customizable color, shape, and taste for branding or personal preference. Selling points: concentrated maca extract for energy and libido support, clean ingredient profile (no fillers), convenient daily dosing, third‑party quality testing, and customizable appearance to stand out. no product data. Customized Energy, Premium Packaging Boost daily vitality with our Maca Capsule for Men, delivering steady energy in a convenient 60-capsules-per-bottle format tailored to active lifestyles. Customizable color, shape and taste plus premium Maca and strict quality control ensure a safe, potent supplement that fits both routine and brand identity. We provide full CAPSULE OEM/ODM services for bespoke packaging, style and labeling so businesses can offer a trusted, high-quality energy solution that looks and performs exactly as promised. Maca Capsule for Men delivers a concentrated maca formula in a 60-capsule bottle with customizable color, shape and taste, and is available for CAPSULE OEM/ODM to meet private-label needs. Formulated to provide clean, daily energy support, these capsules offer convenient, measured dosing and portable packaging that fits into a busy lifestyle. The capsule delivery system stabilizes and protects the active maca extract for consistent dosing, and its customizable attributes enable flexible manufacturing options to match brand identity and consumer preferences. Customi...',
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
    description: 'Picture a quiet evening--soft light, a slow breath--and one vegan capsule of Magnesium Glycinate 500 mg helps you unwind with gentle, high-absorb care. This hi-absorb, clean formula (120 vegan caps) is non‑GMO and gluten‑free, made without harsh fillers. Perfect for winding down and supporting muscle and nerve function, it\'s a simple, soothing ritual to feel your best. no product data. Fast Absorption Vegan Capsules Magnesium Glycinate 500mg in easy-to-swallow vegan capsules provides highly absorbable, non-GMO, gluten-free support for muscle relaxation and restful sleep. The 120-count compact bottle, smooth oval capsule shape, and eco-friendly tamper-evident packaging deliver accurate dosing, long shelf stability, and travel-friendly convenience. We offer CAPSULE OEM/ODM with low MOQs from 500, free packaging design and sample options, and 7–14 day production lead times from our Guangzhou manufacturing facility for fast, customized delivery. Magnesium Glycinate 500mg in 120 vegan caps features a hi-absorb chelated glycinate form, Non-GMO and gluten-free (GF), formulated for adults to support muscle relaxation, nervous system function and restful sleep. Core attributes include precise 500mg dosing, easy-to-swallow vegan capsules and enhanced bioavailability with gentle gastrointestinal tolerance, while extended attributes cover purity testing, stable shelf life and clean labeling for consumer confidence. Manufactured in a GMP environment with flexible CAPSULE OEM/ODM services, custom labeling, formula options and sample/small-MOQ support, it’s tailored for private-label bra...',
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
    description: 'no product data. Product Advantages Unlike single-form magnesium supplements, DeepCalm delivers comprehensive support through multi-target formulation: Custom Formulation & Production Service Go beyond private label. We are your end-to-end custom supplement development partner, transforming your unique health concept into a market-ready, brand-defining product. From precision formulations to full-brand packaging, we provide the strategic flexibility and scientific expertise to make your vision a tangible reality. The Choice of Excellence When every milligram matters, trust isn\'t just claimed, it\'s proventhrough our rigorous standards and unwavering commitment. Quality You Can Trust DeepCalm is crafted with a clean, vegan formula, free from artificial colors, flavors, and preservatives, and made in a GMP-certified facility so you know exactly what you\'re putting into your body. Each bottle contains 60 gummies, a full month\'s supply, designed to fit seamlessly into your routine, no pills, no fuss, just pure calm. High Absorption Magnesium Glycinate: 500mg magnesium glycinate per serving, providing 125mg of elemental magnesium with superior bioavailability compared to other magnesium forms, ensuring optimal absorption and minimal gastrointestinal discomfort. Maintain Strong Bone Health: Supports healthy bone density and structure, working in tandem with calcium and vitamin D to promote bone mineralization and reduce the risk of age-related bone loss. Relieve Muscle Cramps & Soreness: Promotes muscle relaxation and recovery, helps reduce muscle cramps, spasms, and post-work...',
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
    description: 'As dawn paints the city, make Men\'s Daily Multi Caps your quick morning ritual to kickstart the day. Packed with 22 essential minerals and balanced nutrients, it helps support steady energy, strengthen immunity, and keep memory sharp from gym sets to boardroom calls. Carry a confident, clear-headed resilience with you--ready for every challenge and every quiet victory. no product data. Compact Potent Immunity Memory Men\'s Daily Multi Caps 22 Minerals Energy Immunity & Memory delivers balanced daily minerals in easy-to-swallow capsules to boost energy, strengthen immunity and sharpen memory for active men. Available as CAPSULE OEM/ODM with custom formulas, labeling, shapes and premium packaging (MOQ 500, 2-year shelf life) and supported by GMP/HACCP/ISO certificates to ensure consistent quality. Fast production (7–14 working days), free structural and graphic box design, and flexible shipping options make scaling your private label simple and reliable. Men\'s Daily Multi Caps 22 Minerals Energy Immunity & Memory is a daily capsule formula delivering 22 essential minerals and targeted vitamins to boost men\'s energy, support immune resilience, and promote memory and cognitive performance. Manufactured in GMP/HACCP/ISO9001-certified facilities with a two-year shelf life and high-volume capacity, it combines quality assurance and convenient dosing while offering private-label flexibility as CAPSULE OEM/ODM with MOQ 500 (stock-permitting 50 bottles) and customizable label, flavor, recipe and packaging. The capsule structure ensures easy swallowing and consistent bioavailabilit...',
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
    description: 'Product description: OEM Private Label Sea Moss Capsules 60ct - Custom, MOQ3: 60 easy-to-swallow capsules made from natural sea moss, ready for private label and custom packaging with a low minimum order quantity (MOQ 3). Rich in minerals, this product is designed for daily wellness and simple branding. Usage scenarios (3 sentences): Take one or two capsules daily as a quick way to add sea moss nutrients to your routine. Ideal for small brands and startups who want to launch a private-label supplement with a low MOQ for testing. Handy for busy people, travelers, or gym-goers who prefer a compact, no-fuss natural supplement. no product data. Low MOQ, Custom Packaging CAPSULE OEM/ODM sea moss capsules, 60-count, provide fast delivery and private-label flexibility with a low MOQ of 3 bottles to help brands enter the market quickly. Customized packaging, capsule shape, style, and high-quality formulation ensure a premium look and consumer-ready supplement. Samples are supported, custom logos are welcome, and 24-hour standby service plus over eight years of OEM experience deliver reliable production and peace of mind. Sea moss Capsules are supplied as 60-count bottles in capsule form with customizable packaging and a low MOQ of 3 bottles, and samples are available to support private label projects. CAPSULE OEM/ODM services enable custom logos and branding with short delivery times, 24-hour support and more than eight years of manufacturing experience. The gelatin capsule structure delivers precise, easy-to-swallow daily dosing for stable, convenient nutritional supplementation a...',
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
    description: 'The Women\'s All-in-One Multivitamin & Minerals Hard Gelatin slips into her palm at dawn like a tiny sun—one smooth hard-gel capsule that blends the key vitamins and minerals she needs. She takes it, steps into the rush, and carries a bright mind and steady glow through the day. At night she rests easy, happy with one chic, all-in-one ritual that cares for her busy life. no product data. Compact Women\'s Daily Support A women\'s all-in-one multivitamin and minerals hard-gelatin capsule delivers convenient daily support for energy, immunity, and overall wellness in a compact, easy-to-take form. CAPSULE OEM/ODM services let brands customize formula, shape, labeling and packaging (MOQ 500, samples available) while ensuring GMP/HACCP/ISO9001-certified quality. With 7–14 day lead times, 50,000 bottles/day capacity and a 2-year shelf life, you get fast, reliable supply and retail-ready presentation. This Women\'s All-in-One Multivitamin & Minerals Hard Gelatin delivers a comprehensive blend of vitamins and minerals in a stable hard-gelatin capsule, backed by GMP/HACCP/ISO9001 certifications, COA, a 2-year shelf life and robust quality control for consistent daily nutrition. We offer flexible CAPSULE OEM/ODM services with MOQ typically 500 pieces (stock permitting 50 bottles), custom formulas for orders over 500, and a production capacity of 50,000 bottles per day, plus custom label, flavor, recipe, packaging and specification options. Designed to provide convenient all-in-one nutritional support for women\'s health and energy, the product combines compact dosing, manufacturer dir...',
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
    description: 'Picture soft morning light as you reach for a single, sleek capsule—tiny armor that quietly cares for your liver as you move through the day. This zinc-rich Liver Protect & Detox formula is thoughtfully blended to support healthy liver function and the body\'s natural detox pathways for adults, with pregnant women in mind. Gentle, premium ingredients and careful manufacturing give you a reassuring daily ritual—please consult your healthcare provider before use during pregnancy or breastfeeding. no product data. Pregnancy Safe Liver Protection Zinc Liver Protect & Detox dietary capsules deliver targeted zinc support for adult liver health and gentle detoxification, helping users maintain everyday liver care and sustained energy. Available in smooth capsule form with high-quality manufacturing standards, the product supports full customization—CAPSULE OEM/ODM options for custom logos, labels, formulas, and capacities to match your brand. Flexible packaging and services include free structural and graphic box design, sample support (buyer covers freight), a negotiable MOQ (typically 500), and a fast 7–14 working day production timeline with multiple shipping and payment options. This zinc-enriched Liver Protect & Detox dietary product comes in easy-to-swallow capsules designed for accurate dosing and stable ingredient encapsulation, intended for adult men and women. CAPSULE OEM/ODM services are available—custom logos, labels, formulas and flavors are supported, with sample provision, free packaging structural/graphic design, typical MOQs from 500 pieces and lead times of about...',
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
    description: 'Short product description: All-Natural Probiotic Prebiotic Ice Lemonade Powder 20B CFU is a tangy lemon-flavored drink mix that delivers 20 billion CFU of friendly probiotic strains plus prebiotic fiber in every serving. Made with natural ingredients, it mixes easily into cold water or over ice for a refreshing, gut-supporting beverage. It may help support digestion and overall gut balance while tasting like a light lemonade. Usage scenarios (about 3 sentences): Use it daily—mix into your morning drink or with meals to support regular digestion and gut comfort. Take it on trips or busy days—stir into a bottle for travel, flights, or when your routine is off to help maintain gut balance. Enjoy it after heavy meals or workouts, or as a low-calorie, refreshing alternative to sugary drinks. no product data. Natural Probiotics, Portable Hydration All-Natural Probiotic Prebiotic Ice Lemonade Powder 20B CFU delivers a refreshing, tangy lemonade with 20B CFU of probiotics plus prebiotics to support daily digestive balance and immune resilience for adults. Packaged as shelf-stable single-serve sachets or resealable pouches with clean, customizable labeling and quality-tested natural ingredients, it mixes instantly for on-the-go hydration and gut support. As a manufacturer offering Powder OEM/ODM services with sample support, flexible MOQs and free packaging design, customers can order bespoke flavors, formulas, logos and fast lead times to match retail or private-label needs. All-Natural Probiotic Prebiotic Ice Lemonade Powder delivers 20B CFU in a clean-label, lemon-flavored instan...',
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
    description: 'Imagine a sunlit fair, sticky fingers and laughter — now bottle that first bite of cotton candy. One tiny sachet turns plain water into a pink, fizzy cloud with a gentle sweet kiss and 8 bright vitamins wrapped inside. Sip, smile, and skip away — a playful little treat to brighten your day anytime, anywhere. no product data. Portable Vitamin Hydration Sachets Cotton Candy Electrolyte Powder - 8 Vitamins Sachets provide fast hydration and vitamin replenishment for adults on the go (not suitable for pregnant women or children), combining balanced electrolytes and eight essential vitamins to restore energy and support recovery. Single-serve sachet packaging, a fine instant-mix powder, slim stick shape and playful cotton-candy styling deliver precise dosing, easy transport, appealing shelf presence and pharmaceutical-grade quality you can trust. We support Powder OEM/ODM with customizable flavor, formula, logo and capacity, low MOQ (~500), sample availability and 7–14 day lead times from our Guangzhou factory plus free packaging design for smooth private-label or retail launch. Cotton Candy Electrolyte Powder is presented in single-serve sachets, combining rapid-dissolve powder format with a pleasant cotton candy flavor and a balanced blend of 8 essential vitamins to support everyday hydration for adult men and women, with flavor and formula customizable. Functionally designed to replenish electrolytes and micronutrients on the go, it offers value through sample support, flexible MOQ terms (usually from 500 units), and tailored packaging and label options to accelerate private-...',
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
    description: 'Tasty chewable creatine for adults to help manage energy and support workouts. Selling points: 1) Convenient gummy form — no mixing, easy to take on the go. 2) Contains creatine, a well‑studied ingredient that supports energy management and exercise performance when combined with training. 3) Pleasant flavor and simple dosing make it an enjoyable, easy way to stay consistent with supplements. no product data. Muscle Power, Chewable Convenience Delicious creatine gummies for adults deliver quick, chewable energy and recovery support to power workouts and daily life. Customizable bottle sizes, gummy shapes, and stylish labels come with GMP/ISO/HACCP-certified quality and free packaging design to protect freshness and brand appeal. With low MOQs (50–500 pcs), fast lead times and Powder OEM/ODM services backed by COA and high daily capacity, you can easily launch private‑label energy supplements. This creatine gummies adult supplement is a creatine-based, chewable formula engineered for energy management and convenient daily dosing, with Powder OEM/ODM manufacturing available for custom flavors, labels and recipes. Functionally it supports short-term high-intensity performance and recovery by supplying bioavailable creatine while delivering value through factory-certified quality (GMP, HACCP, ISO9001), a two-year shelf life and scalable production capacity. The gummy matrix, compact packaging and optional low-MOQ private-label runs (from 50–500 bottles depending on stock) create structural advantages for dosing accuracy, transport and fast retail entry. Sustained Energy and Rec...',
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
    description: 'Chewy creatine monohydrate gummies made for adults to support short bursts of high‑intensity energy and power. Each serving has 0 g protein, so you get creatine without extra macronutrients. Tasty, travel‑friendly, and mess‑free — no scooping or shaking required. Selling points: - Creatine monohydrate in an easy-to-chew gummy (no powder or pills). - Supports ATP-related energy and performance during intense exercise. - 0 g protein per serving — ideal for precise macro control or pairing with other supplements. - Convenient, portable, and great tasting for on-the-go use. - Simple, pre-measured dosing for consistent daily use. no product data. Convenient Chewable Strength Boost Creatine monohydrate gummies provide zero‑protein, fast energy and muscle support for adults in a convenient chewable format. Available in customizable packaging, shapes and flavors with premium GMP/ISO production quality for consistent dosing and great taste. Powder OEM/ODM services with low MOQ, 2‑year shelf life, quick turnaround and free packaging design make it easy to launch your branded energy supplement. This Creatine Monohydrate Gummies adult energy supplement delivers a convenient, chewable 0g-protein dose in a stable gummy matrix designed for rapid uptake and a 2-year shelf life, and is available also via Powder OEM/ODM services for customers preferring powder formats. Core and extended attributes include quality certifications (COA, GMP, HACCP, ISO9001), customizable label, flavor, recipe, shape and packaging, with a low MOQ (500 pcs), sample provision, fast lead times (7–14 working days) a...',
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
    description: 'OEM Electrolyte Energy Powder 2g Zero-Sugar Muscle Support is a compact, sugar-free drink mix made to hydrate and help muscles recover. Each 2g serving supplies key electrolytes and a light energy boost without added sugar or calories. It\'s easy to mix in water and can be customized for private-label brands. Usage scenarios: - Mix before, during, or after workouts to help reduce cramps and support muscle performance. - Take on hot days, long trips, or outdoor work to stay hydrated and replace lost salts. - Use during fasting or low-carb diets, or anytime you want a quick, sugar-free energy and electrolyte refresh. no product data. Zero-Sugar Muscle Hydration Sticks Zero-sugar, 2g electrolyte energy powder delivers fast-absorbing hydration and targeted muscle support for active adults in a compact single-serve dose. Fine powder in sleek, single-use sachets blends instantly for on-the-go use, made with natural extracts and premium electrolytes, backed by a 24-month shelf life and clear storage guidance to preserve quality. Powder OEM/ODM services enable brand customization, promotional development, and flexible packaging and style options so businesses can offer a professional, ready-to-market product. This Powder OEM/ODM is a 2g zero-sugar electrolyte energy powder made in China, blended with natural extracts to support adult muscle recovery and rapid hydration. It delivers fast energy and electrolyte replenishment without added sugars, providing convenient single-serve dosing and quick absorption for on-the-go performance. Packaged as a fine, highly soluble powder with a 2...',
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
    description: 'Picture a crisp morning commute—pop a Nootropic L‑Tyrosine Energy Pouch 15g Wintergreen Focus and let cool wintergreen spark your senses. Like a clear trail through fog, the minty, smooth pouch brings a quiet lift of alert clarity without the mess of drinks. Compact and discreet, it’s the tiny ritual that turns scattered minutes into sharp, focused moments. no product data. Resealable Minty Focus Boost Stay sharp and energized with 15g wintergreen L-tyrosine energy pouches that deliver fast, portable cognitive support for focused work or workouts. Compact, resealable pouch packaging and consistent powder quality ensure precise dosing, a sleek on-the-go style and a 2-year shelf life backed by GMP, ISO and HACCP certifications. Available for Powder OEM/ODM with customizable formulas, labels and free packaging design from our Guangzhou factory (MOQ 500, 7–14 day lead time) to scale your brand quickly. Nootropic L-Tyrosine Energy Pouches 15g Wintergreen Focus are single-serve powder pouches formulated as a dietary supplement to deliver L‑Tyrosine for enhanced mental energy and focus, featuring an easy-dissolve powder matrix and refreshing wintergreen flavor for rapid uptake. Designed for Powder OEM/ODM and scalable manufacturing, the product supports custom formulas, labels, flavors and packaging, carries COA/GMP/HACCP/ISO9001 certifications, a typical 2‑year shelf life and a flexible MOQ around 500 pieces with sample availability. Value-wise it offers portability, dose consistency and convenience for on-the-go use, backed by short lead times (7–14 working days), high daily pro...',
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
    description: 'At sunrise you scoop a creamy measure of Pre-Workout 300g Whey Gainer w/ Creatine Mono & B‑Vitamins into your shaker — the rich, velvety blend kisses your nose as the lid clicks shut. Whey, creatine mono and energizing B‑vitamins weave together like a fired fuse, helping to fuel steady energy, sharper focus and fuller lifts. Shaker in hand, chalk on your palms and a barbell waiting, this is the ritual that primes you to own every set. no product data. Compact Power, Smooth Recovery This 300g pre-workout powder combines creatine monohydrate and B-vitamins to boost energy, strength and recovery for athletes who demand reliable performance. Housed in sturdy 300g bottles with a 24-month shelf life and flexible packing (45 bottles/carton or customized), the retail-ready shape and quality finish ensure easy storage and shelf appeal. Offered as Powder OEM/ODM with a 500-bottle MOQ and premium ingredient control, it empowers brands to tailor flavor, label and formulation to exact customer needs. The Pre-Workout 300g Whey Gainer w/ Creatine Mono & B-Vitamins is a concentrated 300g powder formula combining creatine monohydrate, vitamin D, B6, B12, pantothenic acid and whey-derived protein to support strength, energy and recovery. Available as Powder OEM/ODM with a MOQ of 500 bottles and flexible packing (45 bottles/carton or per customer demand), it delivers brandable, scalable supply-chain value for retailers and athletes. Its fine, fast-dissolving powder structure promotes rapid absorption for pre-workout performance, has a 24-month shelf life and should be stored in a cool, dry pl...',
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
    description: 'Himalayan Shilajit Honey Sticks Sleep Aid are single‑serve honey sticks blended with premium Himalayan shilajit for a soothing, easy bedtime treat. Key selling points: real honey plus mineral‑rich shilajit, pleasant taste, convenient no‑spill sticks, and a gentle sleep‑support ritual users can enjoy nightly. As an OEM private‑label product it’s fully customizable in formula, flavor, dosage and packaging so brands can launch a premium, natural sleep‑support item quickly. no product data. Compact Quality Sleep Solution Soothe sleepless nights with Himalayan Shilajit Honey sleep sticks — premium-quality, single-serve stick packaging in an elegant style that ensures easy dosing and a polished private-label presentation. We offer Powder OEM/ODM services including custom logo, label, formula and capacity, free structural and graphic packaging design, flexible MOQ (usually 500 pieces) and rapid production lead times of 7–14 working days. Samples (buyer covers freight), multiple shipping options (EXW/FOB/CIF) and our Guangzhou factory ensure reliable manufacturing, consistent quality and fast market launch. OEM private label Himalayan Shilajit Honey Sticks blend concentrated Himalayan shilajit with natural honey into single‑serve stick sachets, available in original or customized flavors and packaging with Powder OEM/ODM options for custom logo, label, formula and capacity. As a sleep aid designed for adult use (not suitable for pregnant women, newborns or children), the formula emphasizes fast absorption and gentle relaxation while offering sample support and negotiable minimum or...',
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
    description: 'Probiotic Chicory Fiber Powder is a blend of chicory inulin and live probiotics made to help adult digestion and weight control. Key perks: prebiotic fiber feeds good gut bugs, probiotics aid regular digestion, and the fiber can help you feel full to curb snacking. It stirs into drinks or food, is low in sugar, and is often vegan, gluten-free, and non‑GMO for clean use. no product data. Here are some 4-word subtitle options: This probiotic chicory fiber powder supports gentle adult digestion and healthy weight management, formulated specifically for men and women. Powder OEM/ODM services offer customizable flavor, formula, capacity, logo and label, with packaging options like single‑serve sachets, jars, or bulk tubs to suit retail or private‑label needs. Manufactured in Guangzhou with sample support, free packaging design and fast 7–14 day lead times, it delivers consistent quality and reliable supply for your brand. This Probiotic Chicory Fiber Powder for Adult Digestion & Weight pairs targeted probiotic strains with chicory-derived inulin to support adult gut flora balance, regularity and a natural feeling of satiety (not intended for pregnant women, newborns or children). Available as Powder OEM/ODM in a fine, soluble, easy-mix format with original or customized flavors, it delivers standardized daily doses, sample support, flexible MOQ (typically 500 pieces) and multiple payment and shipping options for strong value. Manufactured in Guangzhou with free packaging design, custom logos, formulas and capacities, and 7–14 working day lead times, the shelf-stable formulation...',
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
    description: 'OEM Whey Protein + Creatine 4.8lb Muscle Gainer Pre-Workout is a blended supplement that pairs fast-absorbing whey protein with creatine in a 4.8 lb tub to fuel muscle growth and workout performance. It supports more strength, better endurance, and quicker recovery while mixing easily and tasting good. Selling points: dual-action whey + creatine formula, large value size, built for pre-workout energy and post-workout recovery, easy mixability and great flavor, helps build lean muscle and boost strength. no product data. Fast Gains, Premium Packaging Powder OEM/ODM Whey protein plus creatine in a 4.8 lb (2.17 kg) formula delivers clean pre-workout energy and targeted muscle-gaining nutrition to help build lean, strong mass. Packaged in a customizable, sturdy bottle with professional labeling, premium powder texture and fast-mix quality (MSDS-certified) for rapid absorption and consistent performance. Fast delivery, 24/7 support, custom logo options and an MOQ of 500 bottles from a supplier with 8+ years\' experience ensure reliable service and scalable production. This OEM Whey Protein + Creatine 4.8lb Muscle Gainer Pre-Workout is a Powder OEM/ODM sports nutrition supplement that pairs high-quality whey protein with creatine to support lean muscle growth, weight gain and enhanced pre-workout performance. Value attributes include MSDS certification, short delivery times, customizable packaging and logos, a 500-bottle MOQ, 24-hour support and over 8 years of OEM/ODM experience to ensure reliable supply and branding flexibility. The fine powder matrix and balanced protein-to-cr...',
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
    description: 'Whey Protein Isolate Mass Gainer Bulk - OEM Private Label is a high-quality, fast-absorbing whey isolate-based formula designed to deliver concentrated protein with controlled carbohydrates and fats for clean mass gains. Supplied in bulk and available for OEM private labeling, it lets brands customize flavor, macronutrient profile, and packaging for retail or gym supply. Lab-tested and easy to mix, it’s ideal for athletes, bodybuilders, fitness studios, and nutrition retailers seeking a premium, brandable mass gainer. Usage scenarios: - Post-workout recovery: mix a serving after training to supply fast-digesting protein that helps support muscle repair and recovery. - Bulking and meal replacement: use between meals or as a calorie-dense shake for hard-gainers and anyone looking to increase daily calorie and protein intake. - Branded retail and gym supply: businesses can private-label bulk batches for sale under their own brand, for in-house use at training facilities, or as part of athlete nutrition programs. no product data. Customizable Premium Isolate Packaging Powder OEM/ODM offers high-purity whey isolate mass gainer for efficient muscle growth and clean energy, backed by 100% pre-delivery testing for consistent quality. Customized packaging, bottle colors, and private-label branding (MOQ 500 bottles) create a retail-ready appearance while supporting neutral or authorized branded boxes. Samples are available and typical lead times are 25–40 days, giving brands flexible production, reliable supply, and a smooth market launch. This Whey Protein Isolate Mass Gainer Bulk c...',
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
    description: '100% Whey Protein Vanilla/Strawberry Plastic Shaker OEM/ODM is a simple, clean product that pairs high-quality whey protein in two popular flavors with a sturdy plastic shaker. The shaker has a secure lid and mixing insert for smooth, lump-free shakes and can be customized with your brand through OEM/ODM services. Lightweight and made from food-grade plastic, it’s easy to carry, store, and use anywhere. Usage scenarios: - Mix a quick vanilla or strawberry shake right after gym workouts to refuel and restore energy. - Take it to work, school, or between errands for a fast protein snack to curb hunger. - Bring it on hikes, sports practice, or travel to make fresh shakes on the go. no product data. Pure Whey, Customizable Shaker Our 100% Whey Protein Vanilla/Strawberry plastic shaker supports Powder OEM/ODM services with customizable flavors, colors, logos and packaging sizes to meet your brand and consumer needs. Durable, ergonomically shaped shakers with stylish finishes ensure easy mixing, on-the-go convenience and premium quality that helps users build lean, strong muscles. Flexible OEM/ODM support includes packaging design, multiple payment and FOB/CNF/EXW terms and global market reach to streamline production and distribution. This 100% Whey Protein Vanilla/Strawberry Plastic Shaker is engineered as a lightweight, BPA-free mixing bottle tailored for flavored whey powders, offering customizable colors, shapes and logos to match brand identity. Designed to help users build lean, strong muscles, the shaker delivers quick, clump-free mixing with a secure screw cap and built-...',
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
    description: 'This is a 1000 mg NAD+ liquid with PQQ made to boost cellular energy. The liquid form is easy to take and absorbs fast, while PQQ supports mitochondrial function for better energy. High dose per serving, compact on‑the‑go bottle, and OEM/private‑label options make it appealing to both users and brands. no product data. Rapid Absorption, Premium Vials Liquid Drops OEM/ODM service delivers a 1000mg NAD+ with PQQ liquid supplement in sleek glass dropper bottles with tamper-evident caps and precise pipettes for easy, travel-friendly dosing and optimal stability. Customers receive manufacturer support—low MOQ from 500, sample availability, free packaging and label design, customizable formulas and flavors, plus GMP-level quality and fast 7–14 day production lead times. Adults seeking cellular energy and cognitive support benefit from concentrated, high-quality drops tailored to brand needs with flexible shipping and payment options for smooth market entry. OEM 1000mg NAD+ Liquid Supplement with PQQ - Cellular Energy delivers a potent 1000mg NAD+ formula combined with PQQ in a fast-absorbing liquid drops format for targeted cellular energy support and convenient, precise dosing. Liquid Drops OEM/ODM offers original or customized flavors, sample support, low MOQ (usually 500 negotiable), flexible OEM/ODM branding with custom logo, label, formula and capacity, and typical lead times of 7–14 working days to help brands launch quickly. Formulated for adults (men and women) and not suitable for pregnant women, newborns or children, this ready-to-pack supplement includes free basic pac...',
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
    description: 'Active Whale NAD+ 60ml Drops blend NAD+ with resveratrol and taurine in a liquid dropper bottle. The formula aims to support cellular energy, antioxidant balance, and immune wellness. Made in GMP-certified facilities for quality and easy daily use. Usage scenarios: - Take on busy workdays when you want a simple boost to energy and mental clarity. - Use after exercise or travel to help support recovery and muscle function. - Add to your daily wellness routine for extra antioxidant and immune support during seasonal changes. no product data. NAD+ Boost GMP Dropper Active Whale NAD+ 60ml Drops with resveratrol and taurine provide GMP-made liquid support for cellular energy and immune resilience in a compact dropper bottle for precise, on-the-go dosing. Liquid Drops OEM/ODM services let you customize formula, flavor, label and capacity with free structural packaging design, sample support and fast 7–14 day lead times to suit retail or clinical needs. Durable 60ml glass/dropper packaging, clear professional labeling and manufacturer-backed quality from our Guangzhou factory ensure shelf stability, dosing accuracy and a premium presentation for adults. Active Whale NAD+ 60ml Drops combine NAD+, resveratrol and taurine in a convenient 60 ml dropper format formulated for adult use with customizable flavor and labeling and support Liquid Drops OEM/ODM services for custom logo, formula and capacity. Core and value attributes deliver cellular energy and antioxidant support—NAD+ for metabolic function, resveratrol for free-radical defense and taurine for immune and circulatory support—...',
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
    description: 'Product description: ARK Drops Shilajit Booster is a concentrated shilajit extract in 30ml and 60ml dropper bottles. Sold as a custom sample with a minimum order quantity of 500 units (MOQ 500). Clean formula, easy to brand and package for resale. Usage scenarios (about 3 sentences): Use daily as a small, easy-to-take wellness drop in a morning or evening routine. Great for brands and retailers who need a private-label supplement to sell online or in stores. Ideal as a sample for product testing, subscription boxes, or bulk gifting for corporate partners. no product data. Potent Purity, Custom Packaging ARK Drops Shilajit Booster (30/60ml) powers your breath, sharpens focus, and uplifts your day naturally with a cool, refreshing taste. Available as Liquid Drops OEM/ODM with MOQ 500 boxes, customizable samples and premium 30ml or 60ml dropper bottles deliver precise dosing, sleek portable shape, and airtight, high-quality packaging to lock in potency. Tailored labeling and flexible style options ensure a clean, trusted product that helps brands meet customer demand for daily vitality. ARK Drops Shilajit Booster, available in 30ml and 60ml formats with MOQ 500 and customized sample options, is formulated as Liquid Drops OEM/ODM for flexible branding and private-label partnerships. Core attributes deliver natural energy support that can power your breath, sharpen your focus, and uplift your day, while value attributes emphasize a cool, refreshing taste and a clean ingredient profile for everyday use. The product’s dropper-delivery structure ensures precise dosing and rapid abs...',
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
    description: 'OEM Cayenne Liquid 60ml is a concentrated liquid supplement blending cayenne with hawthorn, beet, turmeric and vitamins D3 and K2 in a handy 60ml bottle. It delivers a potent botanical mix plus D3+K2 synergy for circulation, antioxidant support and better nutrient use, with the liquid form offering faster absorption and easy dosing. As an OEM product it’s ready for private-labeling, making it simple for brands to offer a natural, science-backed formula in a compact, consumer-friendly format. no product data. Cardio Support, Precision Dropper Liquid Drops OEM/ODM in a 60ml bottle blends cayenne with hawthorn, D3‑K2, beet and turmeric for convenient, precisely dosed daily use. Customizable OEM/ODM packaging, compact bottle shape and premium liquid formulation (Model 55678) deliver consistent quality, a 24‑month shelf life and simple storage in a cool, dry place. With a 500‑bottle MOQ, Guangdong manufacturing and compliance certifications, this Cayenne Pepper Drops Supplement Liquid is perfect for brands seeking turnkey private‑label solutions. This OEM Cayenne Liquid 60ml – Hawthorn, D3 K2, Beet & Turmeric is supplied as a 60ml bottled liquid supplement (model 55678) made in Guangdong, China with a 24‑month shelf life, cool and dry storage guidance, and available under Liquid Drops OEM/ODM terms with customizable packaging and a 500‑bottle MOQ. Core and extended attributes combine cayenne pepper with hawthorn, beet and turmeric plus vitamins D3 and K2 to provide antioxidant support, circulation-promoting properties and complementary bone‑support benefits in a concentrated liq...',
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
    description: 'Children\'s Liquid Multivitamin 1 fl oz (30) / Immune & Bone is a concentrated, easy-to-give liquid designed to support kids\' immune health and bone development. The compact 1 fl oz bottle delivers about 30 servings for simple daily use. Selling points: kid-friendly liquid form (no pills), targeted immune and bone support with key vitamins like C and D plus essential minerals, and a travel-friendly, single-bottle monthly supply. no product data. Delicious Portable Immune Bone Children\'s Liquid Multivitamin 1 fl oz (30) delivers concentrated immune and bone support in easy-to-administer drops, giving parents a simple daily way to help fill nutritional gaps. The child-friendly dropper bottle, compact 1 fl oz size, and pleasant flavor ensure accurate dosing, leak-proof portability, and minimal fuss at mealtime. Made to high-quality standards and available as Liquid Drops OEM/ODM for custom formulations, labels, and packaging, it meets caregiver needs and private-label requirements. This Children\'s Liquid Multivitamin 1 fl oz (30) for Immune & Bone is a concentrated liquid formula in a 1 fl oz dropper bottle, designed for precise, mess-free dosing and easy administration for kids. Formulated to support immune health and bone development, it delivers essential nutrients in a gentle, fast-absorbing liquid that helps ensure consistent daily intake and better compliance. Available for Liquid Drops OEM/ODM customization, the product supports flexible flavor, labeling, and packaging options to suit private-label needs while maintaining child-friendly taste and secure dispensing. C...',
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
    description: 'OEM/ODM Kids Liquid Immune w/ Zeolite, Me-B12 & D3 30ml is a kid-friendly liquid supplement combining natural zeolite, methylcobalamin (Me‑B12) and vitamin D3 in a compact 30ml bottle with an easy dropper for simple dosing. Formulated to support children\'s nutritional needs--Me‑B12 for healthy energy and nervous system function and D3 for bone and immune support--it\'s ideal for parents seeking an easy-to-give daily supplement. Offered as an OEM/ODM private‑label product, it can be customized in flavor, formula and packaging to match your brand. Key selling points: - Easy-dropper liquid: accurate, fuss-free dosing for toddlers and kids. - Methylcobalamin (Me‑B12): bioavailable B12 form geared for pediatric use. - Vitamin D3: supports healthy bone development and immune wellness. - Zeolite included: natural mineral component for gentle mineral support. - Compact 30ml size: travel-friendly and ideal for sampling. - OEM/ODM private-label ready: customizable formula, flavor and packaging options. - Quality and testing options available for branded formulations (manufacturing and QA support). no product data. Customizable Kids Immune Drops Liquid Drops OEM/ODM offer customizable immune-support formulas with Zeolite, Me-B12 and D3 in a convenient 30ml liquid format for easy dosing and consumer convenience. Packaged in a compact 30ml dropper bottle with options for custom logo, label, capacity and free structural/graphic box design, the professional styling and high-quality finish boost shelf appeal and user trust. As a Guangzhou manufacturer we support low MOQs, sample availabil...',
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
    description: 'OEM/ODM Kids Rhodiola Drops are a child-friendly liquid supplement featuring rhodiola, a well‑researched adaptogen to help support attention and steady energy. The tasty, easy-to-dose drops make daily use simple for parents and children, and the product is available for private-label customization (OEM/ODM). Selling points that impress: GMP-certified manufacturing for consistent quality, flexible formulation and labeling for brands, and a convenient, kid-appropriate delivery form that supports focus and vitality. no product data. GMP Child-Friendly Focus Drops Liquid Drops OEM/ODM Rhodiola for kids delivers gentle attention support and natural energy in a GMP-certified, parent-approved liquid format for safe, reliable daily use. Packaged in child-safe dropper bottles with customizable flavors, labels and compact designs, its easy-dose shape and smooth taste ensure simple, mess-free administration. Full OEM/ODM services — custom formulas, free packaging design, sample support, low MOQ and 7–14 day lead times with flexible shipping — make scaling your brand effortless. Liquid Drops OEM/ODM Rhodiola formulation tailored for children, manufactured in GMP-certified facilities with customizable flavor, formula, capacity, logo and label to fit brand needs. Designed to gently support attention and energy with a palatable, easy-to-administer dropper format, it delivers accurate dosing and daily convenience without complicated preparation. The product’s child-friendly dropper structure, leak-resistant amber bottles and optional free structural and graphic packaging design, combined w...',
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
    description: 'OEM Lion\'s Mane Drops 100% Natural - Cognitive & Immune is a liquid lion\'s mane extract designed to support cognitive function and immune health. It comes as easy-to-use, fast-absorbing drops for convenient daily dosing. Selling points: 100% natural formula, targeted cognitive and immune support, convenient dropper delivery, rapid absorption, and OEM/private-label options for branding. no product data. Natural Cognitive Immunity Drops Liquid Drops OEM/ODM Lion\'s Mane 100% Natural supports cognitive function and immune health—boosting memory, sharpening attention, and providing antioxidant, cholesterol-lowering and anti-aging benefits while nourishing the stomach. Packaged in premium healthcare-grade dropper bottles (100 per batch) with customizable color, compact shape and leakproof caps, the precise liquid format preserves potency and enables controlled dosing. Flexible Liquid Drops OEM/ODM services let private-label brands customize concentration, bottle style and labeling with MQA support for healthcare applications, delivering consistent quality that meets customers\' core needs. Liquid Drops OEM/ODM 100% natural formula delivers concentrated lion\'s mane in an easy-dropper liquid format with customizable color and packaging (available in 100-bottle MQA-ready batches) to suit flexible OEM/ODM needs. Its core and functional attributes focus on cognitive and immune support—helping memory and attention—while extended benefits include cholesterol-lowering, stomach-nourishing and anti-aging effects for everyday healthcare. Value attributes and product structure emphasize...',
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
    description: 'Short product description: Wholesale Moringa Ashwagandha Ginger Oral Drops OEM GMP are a concentrated, easy-to-use liquid supplement combining moringa leaf, ashwagandha root and ginger extract in a GMP-certified formula for reliable quality. Designed for OEM branding and private-label production, the drops offer a natural, fast-absorbing option for everyday nutritional support and calm energy. Packaged for convenience, they suit retailers and bulk buyers looking for a clean-label herbal blend in a dropper format. Usage scenarios (about 3 sentences): Use daily as a convenient morning or mid-day boost to support overall wellness and balanced energy throughout the day. Take during stressful periods or before busy workdays to promote calmness and resilience in a simple, portable form. Use after meals or while traveling to aid digestive comfort and maintain routine supplement intake on the go. no product data. Herbal Balance, GMP Dropper Premium Moringa-Ashwagandha-Ginger oral formula delivers concentrated wellness support for men and women in an easy-to-take liquid format for adults (not for pregnant women, newborns or children) and is available as Liquid Drops OEM/ODM. Customizable packaging, shape and style with bespoke logo, label, formula and capacity, plus free structural and graphic box design, GMP-quality manufacturing and sample support ensure a professional, high-quality product. Flexible MOQ (typically 500 pcs, negotiable), fast 7–14 working day lead times, multiple payment and shipping options, and direct factory service from our Guangzhou manufacturer make private-l...',
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
    description: 'Short product description (3 sentences): Shilajit Drops Oral Liquid is a concentrated, fulvic-rich extract formulated to tonify Qi and support overall immunity. The fast-absorbing oral drops deliver natural adaptogenic support for energy, mental clarity, and everyday vitality--packaged for easy use and bulk supply (MOQ 500). Ideal for retailers, wellness brands, and practitioners looking for a convenient, modern herbal tonic. Usage scenarios (about 3 sentences): Use as a daily morning tonic to boost energy and resilience during busy workdays or travel. Take after workouts or during recovery to help restore vitality and support immune readiness. Well suited for adults seeking natural adaptogenic support--good for health stores, wellness retreats, athletes, and older adults looking for gentle, convenient supplementation. no product data. Tonify Qi, Immunity-Boosting Dropper Shilajit Drops harness a fast-absorbing oral liquid formula to tonify qi, boost immunity, and quickly restore physical strength and mental clarity. Liquid Drops OEM/ODM options with a minimum order quantity of 500 boxes let wellness brands customize formulation and branding to meet customer needs. Packaged in dark amber dropper bottles with precise dosing, compact shape and GMP-grade sourcing, the design preserves potency, ensures safety and delivers convenient daily use. Shilajit Drops is a concentrated oral liquid that tonifies qi and supports the body\'s immunity and resistance, available as Liquid Drops OEM/ODM with a minimum order quantity of 500 boxes. Its value attributes include helping restore phy...',
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
    description: 'Short article (simple words): Vitamin D3 K2 MCT Oil Eggplant 60ml — Bone Support is a small liquid supplement made under GMP rules. It blends vitamin D3 and vitamin K2 in MCT oil for better absorption. D3 helps your body take up calcium, and K2 helps direct calcium to bones. The MCT oil base makes the vitamins easy to absorb and the 60ml dropper bottle is simple to use daily. Usage scenarios (about 3 sentences): Use it if you get little sun or live in winter months and want extra vitamin D. It is handy for older adults or anyone who wants simple daily support for bone health. Take with food to help the body absorb the vitamins. no product data. Bone Support, GMP Dropper This Vitamin D3 K2 MCT Oil delivers fast-absorbing bone support for adults in a GMP-certified, leakproof 60ml eggplant-shaped dropper bottle for precise, portable dosing. Liquid Drops OEM/ODM services let brands customize logo, label, formula and capacity with low MOQ, free packaging design and 7–14 day production lead times. Samples are supported (buyer covers freight), flavors can be original or customized, and the product is intended for men and women adults (not for pregnant women, newborns or children) with flexible shipping and payment options. Support bone health with fast-absorbing Vitamin D3 and K2 in MCT oil, provided as precise, easy-to-dose liquid drops tailored for adult daily use. Packaged in a GMP-made, leakproof 60ml eggplant-shaped dropper bottle for stable shelf life, portability and accurate dosing that enhances user experience and product integrity. Liquid Drops OEM/ODM services allow bra...',
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
    description: 'Vitamin D3 Liquid Immune Support for Women is a tasty liquid supplement in prickly pear & lychee flavor, made for easy daily use. Its liquid form allows fast absorption and simple, pill-free dosing--great for women who prefer a pleasant, convenient option. Key selling points: supports immune function and bone health, easy-to-take liquid format, and an appealing flavor that helps maintain consistency. no product data. Immune Boosting Lychee Dropper Fast-absorbing Vitamin D3 liquid immune support tailored for adult women (and men), offering precise dropper dosing for reliable daily defense—note: not intended for pregnant women, newborns or children. Available as Liquid Drops OEM/ODM in sleek, high-quality glass dropper bottles with customizable flavor, label, logo, formula and capacity, plus free structural and graphic packaging design to preserve potency and boost shelf appeal. Factory-direct service provides sample support, flexible MOQ (usually 500, negotiable), 7–14 working day lead times, and multiple payment and shipping options so you can launch a tailored product quickly and confidently. Vitamin D3 Liquid Immune Support for Women in prickly & lychee flavors offers a fast‑absorbing, accurately dosed liquid formula housed in dropper bottles with customizable capacity, designed for adult men and women (not for pregnant women, newborns, or children). Available as Liquid Drops OEM/ODM, the product supports custom logo, label, formula and flavor options, sample provision, typical MOQ of about 500 pieces and a 7–14 working day lead time from our Guangzhou manufacturing facil...',
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

