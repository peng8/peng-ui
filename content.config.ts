// @nuxt/content v3 集合定义 —— 博客文章
// 文章存 content/blog/*.md，frontmatter 字段见下方 schema。
// type: 'page' 表示文章是独立页面，path 由文件名自动生成（/blog/<slug>）。
// 中文版复用同一份 Markdown，仅通过 titleZh/descriptionZh 提供本地化 meta 覆盖。
// 注意：v3.15 的 schema 用 zod 风格（z.object / z.string），不是旧版 valibot 的 s.object。
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.string(),
        tags: z.array(z.string()),
        cover: z.string(),
        // 可选的中文 meta 覆盖（无则回退英文 title/description）
        titleZh: z.optional(z.string()),
        descriptionZh: z.optional(z.string())
      })
    })
  }
})
