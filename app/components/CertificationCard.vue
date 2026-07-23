<script setup lang="ts">
import type { Certification } from '~/data/certifications'

const props = defineProps<{ item: Certification; index?: number }>()

const { openOne } = useLightbox()

const preview = () =>
  openOne({
    src: props.item.image,
    alt: `${props.item.code} - ${props.item.name}`,
    caption: `${props.item.name} — Issued by ${props.item.issuer}`
  })
</script>

<template>
  <button
    type="button"
    class="reveal group flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-card ring-1 ring-mist-border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    :style="index !== undefined ? `transition-delay: ${index * 60}ms` : ''"
    @click="preview"
  >
    <!-- 证书缩略图 -->
    <div class="relative w-full overflow-hidden rounded-lg bg-mist-dark">
      <UiLazyImage :src="item.image" :alt="item.name" ratio="aspect-[3/4]" class="transition-transform duration-500 group-hover:scale-105" />
      <!-- 放大提示 -->
      <div class="absolute inset-0 flex items-center justify-center bg-navy-900/0 transition-colors group-hover:bg-navy-900/30">
        <span class="flex h-10 w-10 scale-50 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <UiAppIcon name="plus" :size="20" />
        </span>
      </div>
    </div>
    <span class="mt-4 text-lg font-extrabold tracking-wide text-navy">{{ item.code }}</span>
    <span class="mt-1 text-xs text-navy/55">{{ item.name }}</span>
  </button>
</template>
