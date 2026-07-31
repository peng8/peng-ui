<script setup lang="ts">
// 全站搜索弹窗 —— 基于 Pagefind 静态索引
// 索引由 Pagefind 在构建时扫描 .output/public 生成，运行时纯客户端搜索
// 用法：<PagefindSearch v-model:open="open" />
const open = defineModel<boolean>('open', { default: false })

const { isZh } = useLocale()

interface PagefindResult {
  id: string
  data: () => Promise<{
    url: string
    excerpt: string
    meta: { title?: string; description?: string }
  }>
}

interface PagefindModule {
  options: (options: Record<string, unknown>) => Promise<void>
  init: () => Promise<void>
  search: (query: string) => Promise<{ results: PagefindResult[] }>
}

const query = ref('')
const results = ref<Array<{ url: string; excerpt: string; title: string }>>([])
const loading = ref(false)
const searched = ref(false)
const inputEl = ref<HTMLInputElement | null>(null)

// 按需加载 Pagefind 的 search 入口
// 路径 /pagefind/pagefind.js 由 Pagefind 构建时生成,开发环境不存在
// 用运行时拼接路径,避免 Vite 静态分析尝试解析(dev 模式下文件不存在会报错)
let pagefind: PagefindModule | null = null
const loadPagefind = async () => {
  if (pagefind) return pagefind
  try {
    const pagefindUrl = '/pagefind/' + 'pagefind.js'
    const importRuntime = new Function('path', 'return import(path)') as (path: string) => Promise<PagefindModule>
    pagefind = await importRuntime(pagefindUrl)
    await pagefind.options({})
    await pagefind.init()
  } catch (e) {
    pagefind = null
  }
  return pagefind
}

const sanitizeExcerpt = (html: string) =>
  html
    .replace(/<(?!\/?mark\b)[^>]*>/gi, '')
    .replace(/<mark\b[^>]*>/gi, '<mark class="mark">')

// 防抖搜索
let timer: ReturnType<typeof setTimeout> | null = null
const onInput = () => {
  if (timer) clearTimeout(timer)
  if (!query.value.trim()) {
    results.value = []
    searched.value = false
    return
  }
  loading.value = true
  timer = setTimeout(runSearch, 220)
}

const runSearch = async () => {
  const q = query.value.trim()
  if (!q) {
    results.value = []
    searched.value = false
    loading.value = false
    return
  }
  const pf = await loadPagefind()
  if (!pf) {
    loading.value = false
    searched.value = true
    return
  }
  try {
    const search = await pf.search(q)
    const top = await Promise.all(search.results.slice(0, 8).map((r: PagefindResult) => r.data()))
    results.value = top.map((d) => ({
      url: d.url,
      title: d.meta?.title || d.url,
      excerpt: sanitizeExcerpt(d.excerpt)
    }))
  } catch (e) {
    results.value = []
  }
  searched.value = true
  loading.value = false
}

// ESC 关闭 / 清空
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    if (query.value) {
      query.value = ''
      results.value = []
      searched.value = false
    } else {
      close()
    }
  }
}

const close = () => {
  open.value = false
  query.value = ''
  results.value = []
  searched.value = false
}

// 打开时自动聚焦输入框
watch(open, async (v) => {
  if (v) {
    await nextTick()
    inputEl.value?.focus()
    document.body.style.overflow = 'hidden'
    // 预加载 Pagefind
    loadPagefind()
  } else {
    document.body.style.overflow = ''
  }
})

// 路由变化时关闭
const route = useRoute()
watch(() => route.fullPath, () => close())
</script>

<template>
  <Teleport to="body">
    <Transition name="search-fade">
      <div
        v-if="open"
        class="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[10vh]"
        @click.self="close"
      >
        <!-- 遮罩 -->
        <div class="absolute inset-0 bg-navy/60 backdrop-blur-sm" />

        <!-- 弹窗主体 -->
        <div
          class="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          data-pagefind-ignore
        >
          <!-- 输入栏 -->
          <div class="flex items-center gap-3 border-b border-mist-border px-5 py-4">
            <UiAppIcon name="search" :size="20" class="text-navy/40" />
            <input
              ref="inputEl"
              v-model="query"
              type="text"
              :placeholder="isZh ? '搜索产品、剂型、服务…' : 'Search products, services…'"
              class="flex-1 bg-transparent text-base text-navy placeholder:text-navy/40 focus:outline-none"
              @input="onInput"
              @keydown="onKeydown"
            >
            <button
              class="rounded-md px-2 py-1 text-xs font-medium text-navy/50 hover:bg-mist hover:text-navy"
              @click="close"
            >
              ESC
            </button>
          </div>

          <!-- 结果区 -->
          <div class="max-h-[60vh] overflow-y-auto p-2">
            <!-- 初始状态 -->
            <div v-if="!searched && !loading" class="px-3 py-12 text-center">
              <p class="text-sm text-navy/50">
                {{ isZh ? '输入关键词搜索全站内容' : 'Type to search across the entire site' }}
              </p>
            </div>

            <!-- 加载中 -->
            <div v-else-if="loading" class="px-3 py-12 text-center">
              <p class="text-sm text-navy/50">{{ isZh ? '搜索中…' : 'Searching…' }}</p>
            </div>

            <!-- 无结果 -->
            <div v-else-if="results.length === 0" class="px-3 py-12 text-center">
              <p class="text-sm text-navy/50">
                {{ isZh ? `未找到与 "${query}" 相关的结果` : `No results for "${query}"` }}
              </p>
            </div>

            <!-- 结果列表 -->
            <ul v-else class="space-y-1">
              <li v-for="r in results" :key="r.url">
                <a
                  :href="r.url"
                  class="block rounded-lg px-3 py-3 transition-colors hover:bg-mist"
                  @click="close"
                >
                  <div class="text-sm font-semibold text-navy">{{ r.title }}</div>
                  <div
                    class="mt-1 line-clamp-2 text-xs leading-relaxed text-navy/60"
                    v-html="r.excerpt"
                  />
                </a>
              </li>
            </ul>
          </div>

          <!-- 底部提示 -->
          <div class="border-t border-mist-border bg-mist/40 px-5 py-2.5 text-center">
            <p class="text-[11px] text-navy/50">
              {{ isZh ? '由 Pagefind 提供搜索 · 仅索引本站内容' : 'Powered by Pagefind · Site content only' }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.search-fade-enter-active,
.search-fade-leave-active {
  transition: opacity 0.2s ease;
}
.search-fade-enter-from,
.search-fade-leave-to {
  opacity: 0;
}
/* Pagefind excerpt 内的关键词高亮 */
:deep(.mark) {
  background-color: rgba(213, 175, 71, 0.28); /* gold/28 */
  color: #061730; /* navy */
  padding: 0 2px;
  border-radius: 2px;
  font-weight: 600;
}
</style>
