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
 
## 🌐 部署

### GitHub Pages（当前）
推送到 `master` 分支自动触发 GitHub Actions：
1. `npm ci` → `npm run generate`
2. 部署 `.output/public` 到 `gh-pages` 分支
3. CNAME: `www.mildy-health.com`

### Linux 服务器（未来）
```bash
# 构建
npm run build

# PM2 启动
pm2 start ecosystem.config.js

# Nginx 反向代理 → localhost:3000
```

## 📄 License

Private — All rights reserved.
