// 一次性脚本：下载 yfisher 产品图到本地，并把 products.ts 里的外链替换为本地路径
// 用法: node scripts/localize-product-images.mjs
import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dataFile = path.join(root, 'app/data/products.ts')
const outDir = path.join(root, 'public/images/products')
const SRC_DOMAIN = 'https://img.yfisher.com/'

fs.mkdirSync(outDir, { recursive: true })

const src = fs.readFileSync(dataFile, 'utf8')
const urls = [...new Set(src.match(/https:\/\/img\.yfisher\.com\/[^"' )]+/g))]
console.log(`唯一图片 URL 数: ${urls.length}`)

// URL -> 安全本地文件名（路径分隔符转下划线）
const localName = (url) => url.slice(SRC_DOMAIN.length).replace(/\//g, '_')

// 下载单个文件（带重试）
function download(url, dest, retries = 3) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return resolve({ url, ok: true, cached: true })
    const file = fs.createWriteStream(dest)
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
        file.close(); fs.unlink(dest, () => {})
        if (retries > 0) return setTimeout(() => resolve(download(url, dest, retries - 1)), 800)
        return resolve({ url, ok: false, status: res.statusCode })
      }
      res.pipe(file)
      file.on('finish', () => file.close(() => resolve({ url, ok: true })))
    }).on('error', () => {
      file.close(); fs.unlink(dest, () => {})
      if (retries > 0) return setTimeout(() => resolve(download(url, dest, retries - 1)), 800)
      resolve({ url, ok: false })
    })
  })
}

// 简单并发池
async function runPool(items, worker, size = 8) {
  const results = []
  let i = 0
  async function next() {
    while (i < items.length) {
      const idx = i++
      results[idx] = await worker(items[idx])
      if ((idx + 1) % 25 === 0) console.log(`  进度 ${idx + 1}/${items.length}`)
    }
  }
  await Promise.all(Array.from({ length: size }, next))
  return results
}

const results = await runPool(urls, (u) => download(u, path.join(outDir, localName(u))), 8)
const ok = results.filter((r) => r.ok).length
const failed = results.filter((r) => !r.ok)
console.log(`下载完成: 成功 ${ok}/${urls.length}`)
if (failed.length) {
  console.log('失败列表:', failed.map((f) => `${f.url}${f.status ? ' (HTTP ' + f.status + ')' : ''}`))
}

// 替换 products.ts 里的域名为本地路径（只替换成功下载的）
let out = src
let replaced = 0
for (const u of urls) {
  const dest = path.join(outDir, localName(u))
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    const local = '/images/products/' + localName(u)
    // 全局替换该 URL 的所有出现
    const before = out.length
    out = out.split(u).join(local)
    if (out.length !== before) replaced++
  }
}
fs.writeFileSync(dataFile, out)
console.log(`products.ts 已更新，替换 ${replaced} 个图片引用为本地路径`)
console.log('完成 ✔')
