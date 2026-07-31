# MILDY Health — 外贸官网

> 迈德健康 / MILDY — 膳食营养补充剂 OEM/ODM 贴牌代工生产厂家官网

## 🏭 项目简介

面向海外 B 端采购商（品牌商、跨境卖家、经销商）的英文外贸获客网站。
纯展示 + 询盘获客，不做 C 端零售。

**技术栈：**
- [Nuxt 4](https://nuxt.com/) (Vue 3) — SSG 全静态生成
- [Tailwind CSS](https://tailwindcss.com/) via `@nuxtjs/tailwindcss`
- [Nuxt Image](https://image.nuxt.com/) (图片懒加载 + IPX WebP/AVIF 预渲染)
- [@nuxtjs/i18n](https://i18n.nuxtjs.org/) (中英双语，英文裸路径 / 中文 `/zh` 前缀)
- [@nuxtjs/sitemap](https://nuxtseo.com/sitemap) (自动 sitemap + hreflang)
- [Pagefind](https://pagefind.app/) (静态站内搜索)
- 产品数据通过 Nitro server API 提供，完整产品库不进入客户端包

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 本地开发（SSR 动态运行）
npm run dev

# 生成全静态站点（输出到 .output/public，并构建 Pagefind 搜索索引）
npm run generate

# 预览生成结果
npm run preview
```
 
## 🌐 部署

### GitHub Pages（当前）
推送到 `master` 分支自动触发 GitHub Actions：
1. `npm ci` → `npm run generate`
2. 通过 `actions/deploy-pages` 部署 `.output/public` 到 GitHub Pages（非 `gh-pages` 分支）
3. CNAME: `www.mildy-health.com`

### Linux 服务器（未来）
```bash
# 构建
npm run build

# 启动（PM2 / systemd 等进程管理）
node .output/server/index.mjs

# Nginx 反向代理 → localhost:3000
```

## 🔧 环境变量

通过环境变量覆盖默认配置（CI/CD 中用 GitHub Secrets 注入）：

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms 询盘表单 key | 内置公开 key |
| `NUXT_PUBLIC_GA_ID` | Google Analytics 4 衡量 ID | `G-16K2YJ87K0` |
| `NUXT_PUBLIC_PRODUCT_IMAGE_BASE_URL` | 产品图片 CDN 地址 | `https://img.mildy-health.com` |

## 📄 License

Private — All rights reserved.
