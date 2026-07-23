# MILDY Health — 外贸官网

> 迈德健康 / MILDY — 膳食营养补充剂 OEM/ODM 贴牌代工生产厂家官网

## 🏭 项目简介

面向海外 B 端采购商（品牌商、跨境卖家、经销商）的英文外贸获客网站。
纯展示 + 询盘获客，不做 C 端零售。

**技术栈：**
- [Nuxt 4](https://nuxt.com/) (Vue 3)
- [Tailwind CSS](https://tailwindcss.com/) via `@nuxtjs/tailwindcss`
- [Nuxt Image](https://image.nuxt.com/) (图片懒加载)
- 纯前端，无后端依赖

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 本地开发（SSR 动态运行）
npm run dev

# 生成全静态站点（输出到 .output/public）
npm run generate

# 预览生成结果
npm run preview
```

## 📁 项目结构

```
app/
├── app.vue                  # 根组件（全局 SEO + 结构化数据）
├── layouts/default.vue      # 统一布局（Header + Footer + 悬浮按钮 + Lightbox）
├── pages/                   # 8 个业务页面 + 2 个法律页面
│   ├── index.vue            # 首页（11 模块）
│   ├── about.vue            # 关于我们
│   ├── products.vue         # 产品中心
│   ├── services.vue         # 服务业务（OEM/ODM）
│   ├── certifications.vue    # 资质认证
│   ├── manufacturing.vue    # 生产实力
│   ├── how-it-works.vue     # 合作流程
│   ├── contact.vue          # 联系我们
│   ├── privacy.vue          # 隐私政策
│   └── terms.vue            # 服务条款
├── components/              # 组件
│   ├── layout/              # 布局组件（Header/Footer/Floating/Lightbox）
│   ├── home/                # 首页专用模块
│   ├── ui/                  # 通用 UI 组件
│   └── *.vue                # 业务卡片组件
├── composables/             # 组合式函数
├── data/                    # 假数据（集中管理，便于后续替换真实内容）
└── assets/css/main.css      # 全局样式 + Tailwind + 动画
```

## 🎨 设计系统

| 角色 | 色值 | 用途 |
|------|------|------|
| 主色深蓝 | `#0A2540` | 导航栏、标题、深色背景 |
| 辅助蓝 | `#1B4F8C` | 链接、强调文本 |
| 浅金 | `#C9A961` | CTA 按钮、标签、装饰 |
| 浅绿 | `#4CAF82` | 成功状态、标签 |
| 浅灰 | `#F5F7FA` | 交替背景、卡片 |

## 🌐 部署

### GitHub Pages（当前）
推送到 `master` 分支自动触发 GitHub Actions：
1. `npm ci` → `npm run generate`
2. 部署 `.output/public` 到 `gh-pages` 分支
3. CNAME: `www.peng8.cn`

### Linux 服务器（未来）
```bash
# 构建
npm run build

# PM2 启动
pm2 start ecosystem.config.js

# Nginx 反向代理 → localhost:3000
```

## 📝 数据替换

所有假数据集中在 `app/data/` 目录下：
- `site.ts` — 企业信息、联系方式
- `products.ts` — 产品分类与示例
- `certifications.ts` — 资质证书
- `advantages.ts` — 核心优势
- `process.ts` — 合作流程
- `cases.ts` — 客户案例、合作模式、团队、设施

替换为真实数据后，图片替换为实际拍摄照片即可。

## 📄 License

Private — All rights reserved.
