<script setup lang="ts">
// 询价表单 —— 纯前端演示：前端校验 + 成功提示（无网络请求）
import { productCategories } from '~/data/products'

withDefaults(defineProps<{ variant?: 'light' | 'dark' }>(), { variant: 'light' })

interface FormState {
  name: string
  company: string
  email: string
  country: string
  productType: string
  moq: string
  message: string
}

const form = reactive<FormState>({
  name: '',
  company: '',
  email: '',
  country: '',
  productType: '',
  moq: '',
  message: ''
})

const errors = reactive<Record<keyof FormState, string>>({
  name: '',
  company: '',
  email: '',
  country: '',
  productType: '',
  moq: '',
  message: ''
})

const status = ref<'idle' | 'submitting' | 'success'>('idle')

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = (): boolean => {
  let ok = true
  const set = (k: keyof FormState, msg: string) => {
    errors[k] = msg
    if (msg) ok = false
  }
  set('name', form.name.trim() ? '' : 'Please enter your name')
  set('company', form.company.trim() ? '' : 'Please enter your company name')
  set('email', !form.email.trim() ? 'Please enter your email' : !emailRe.test(form.email) ? 'Please enter a valid email' : '')
  set('country', form.country.trim() ? '' : 'Please enter your country')
  set('productType', form.productType ? '' : 'Please select a product type')
  set('message', form.message.trim().length >= 10 ? '' : 'Please describe your needs (at least 10 characters)')
  return ok
}

const submit = async () => {
  if (!validate()) return
  status.value = 'submitting'
  // 模拟提交延时
  await new Promise((r) => setTimeout(r, 900))
  status.value = 'success'
  // 重置表单
  Object.assign(form, {
    name: '',
    company: '',
    email: '',
    country: '',
    productType: '',
    moq: '',
    message: ''
  })
  // 5秒后回到可再次填写状态
  setTimeout(() => (status.value = 'idle'), 6000)
}

const moqOptions = [
  'Under 30,000 units',
  '30,000 – 100,000 units',
  '100,000 – 300,000 units',
  '300,000+ units',
  'Not sure yet'
]
</script>

<template>
  <form
    class="rounded-2xl p-6 md:p-8"
    :class="variant === 'dark' ? 'bg-navy-800/60 ring-1 ring-white/10' : 'bg-white shadow-card-hover ring-1 ring-mist-border'"
    @submit.prevent="submit"
  >
    <div v-if="status === 'success'" class="py-8 text-center">
      <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leaf/15 text-leaf">
        <UiAppIcon name="check" :size="28" />
      </div>
      <h4 class="mt-4 text-xl font-bold text-navy">Thank You!</h4>
      <p class="mt-2 text-sm text-navy/60">
        Your inquiry has been received. Our team will contact you within 24 hours.
      </p>
    </div>

    <template v-else>
      <div class="grid gap-4 sm:grid-cols-2">
        <!-- Name -->
        <div>
          <label class="mb-1.5 block text-sm font-medium text-navy">Name <span class="text-gold">*</span></label>
          <input
            v-model="form.name"
            type="text"
            placeholder="John Smith"
            class="form-input"
            :class="errors.name ? 'input-error' : ''"
          />
          <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
        </div>
        <!-- Company -->
        <div>
          <label class="mb-1.5 block text-sm font-medium text-navy">Company <span class="text-gold">*</span></label>
          <input
            v-model="form.company"
            type="text"
            placeholder="Your Company Ltd."
            class="form-input"
            :class="errors.company ? 'input-error' : ''"
          />
          <p v-if="errors.company" class="mt-1 text-xs text-red-500">{{ errors.company }}</p>
        </div>
        <!-- Email -->
        <div>
          <label class="mb-1.5 block text-sm font-medium text-navy">Email <span class="text-gold">*</span></label>
          <input
            v-model="form.email"
            type="email"
            placeholder="john@company.com"
            class="form-input"
            :class="errors.email ? 'input-error' : ''"
          />
          <p v-if="errors.email" class="mt-1 text-xs text-red-500">{{ errors.email }}</p>
        </div>
        <!-- Country -->
        <div>
          <label class="mb-1.5 block text-sm font-medium text-navy">Country <span class="text-gold">*</span></label>
          <input
            v-model="form.country"
            type="text"
            placeholder="United States"
            class="form-input"
            :class="errors.country ? 'input-error' : ''"
          />
          <p v-if="errors.country" class="mt-1 text-xs text-red-500">{{ errors.country }}</p>
        </div>
        <!-- Product Type -->
        <div>
          <label class="mb-1.5 block text-sm font-medium text-navy">Product Type <span class="text-gold">*</span></label>
          <select
            v-model="form.productType"
            class="form-input"
            :class="errors.productType ? 'input-error' : ''"
          >
            <option value="" disabled>Select dosage form</option>
            <option v-for="p in productCategories" :key="p.slug" :value="p.name">{{ p.name }}</option>
            <option value="Other">Other / Multiple</option>
          </select>
          <p v-if="errors.productType" class="mt-1 text-xs text-red-500">{{ errors.productType }}</p>
        </div>
        <!-- MOQ -->
        <div>
          <label class="mb-1.5 block text-sm font-medium text-navy">Estimated Quantity</label>
          <select v-model="form.moq" class="form-input">
            <option value="" disabled>Select quantity range</option>
            <option v-for="m in moqOptions" :key="m" :value="m">{{ m }}</option>
          </select>
        </div>
      </div>

      <!-- Message -->
      <div class="mt-4">
        <label class="mb-1.5 block text-sm font-medium text-navy">Project Details <span class="text-gold">*</span></label>
        <textarea
          v-model="form.message"
          rows="4"
          placeholder="Tell us about your formula, target market, packaging requirements, timeline, etc."
          class="form-input resize-none"
          :class="errors.message ? 'input-error' : ''"
        />
        <p v-if="errors.message" class="mt-1 text-xs text-red-500">{{ errors.message }}</p>
      </div>

      <div class="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p class="text-xs text-navy/50">
          🔒 Your information is confidential and used only for this inquiry.
        </p>
        <UiAppButton
          variant="primary"
          size="lg"
          icon="send"
          :block="true"
          class="sm:w-auto"
          :class="status === 'submitting' ? 'pointer-events-none opacity-70' : ''"
        >
          <span v-if="status === 'submitting'">Sending…</span>
          <span v-else>Submit Inquiry</span>
        </UiAppButton>
      </div>
    </template>
  </form>
</template>

<style scoped>
.form-input {
  @apply w-full rounded-lg border border-mist-border bg-white px-4 py-3 text-sm text-navy transition-colors placeholder:text-navy/35 focus:border-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-400/20;
}
.input-error {
  @apply border-red-400 focus:border-red-400 focus:ring-red-400/20;
}
</style>
