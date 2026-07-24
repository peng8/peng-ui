<script setup lang="ts">
// 询价表单 —— 通过 Web3Forms 接收并转发到邮箱
// access_key 配置在 nuxt.config.ts 的 runtimeConfig.public.web3formsAccessKey
// 该 key 设计为前端可见（类似 reCAPTCHA site key），可公开
import { productCategories } from '~/data/products'

withDefaults(defineProps<{ variant?: 'light' | 'dark' }>(), { variant: 'light' })

const { public: { web3formsAccessKey = '' } } = useRuntimeConfig()

interface FormState {
  name: string
  email: string
  whatsapp: string
  company: string
  country: string
  productType: string
  message: string
}

const form = reactive<FormState>({
  name: '',
  email: '',
  whatsapp: '',
  company: '',
  country: '',
  productType: '',
  message: ''
})

const errors = reactive<Record<keyof FormState, string>>({
  name: '',
  email: '',
  whatsapp: '',
  company: '',
  country: '',
  productType: '',
  message: ''
})

const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const errorMsg = ref('')

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// WhatsApp 号码：允许 +、数字、空格、-，至少 6 位数字
const whatsappRe = /^\+?[\d\s\-]{6,20}$/

const validate = (): boolean => {
  let ok = true
  const set = (k: keyof FormState, msg: string) => {
    errors[k] = msg
    if (msg) ok = false
  }
  // 仅 4 项必填：Name、Email、WhatsApp、Project Details
  set('name', form.name.trim() ? '' : 'Please enter your name')
  set('email', !form.email.trim() ? 'Please enter your email' : !emailRe.test(form.email) ? 'Please enter a valid email' : '')
  set('whatsapp', !form.whatsapp.trim() ? 'Please enter your WhatsApp number' : !whatsappRe.test(form.whatsapp.trim()) ? 'Please enter a valid WhatsApp number' : '')
  set('message', form.message.trim().length >= 10 ? '' : 'Please describe your needs (at least 10 characters)')
  // 其余字段（company/country/productType）选填，不做校验
  errors.company = ''
  errors.country = ''
  errors.productType = ''
  return ok
}

const submit = async () => {
  if (!validate()) return
  status.value = 'submitting'
  errorMsg.value = ''

  // 未配置 access_key 时给出明确提示（开发期防呆）
  if (!web3formsAccessKey) {
    status.value = 'error'
    errorMsg.value = 'Form service not configured. Please set web3formsAccessKey in nuxt.config.ts'
    return
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: web3formsAccessKey,
        subject: `New Inquiry from ${form.name}${form.company ? ` — ${form.company}` : ''}`,
        from_name: 'MILDY Health Website',
        name: form.name,
        email: form.email,
        whatsapp: form.whatsapp,
        company: form.company || 'Not specified',
        country: form.country || 'Not specified',
        product_type: form.productType || 'Not specified',
        message: form.message
      })
    })
    const data = await res.json().catch(() => ({}))
    if (res.ok && data.success) {
      status.value = 'success'
      // 重置表单
      Object.assign(form, {
        name: '',
        email: '',
        whatsapp: '',
        company: '',
        country: '',
        productType: '',
        message: ''
      })
      // 6秒后回到可再次填写状态
      setTimeout(() => (status.value = 'idle'), 6000)
    } else {
      status.value = 'error'
      errorMsg.value = data.message || 'Submission failed. Please try again or email us directly.'
    }
  } catch (e) {
    status.value = 'error'
    errorMsg.value = 'Network error. Please check your connection and try again.'
  }
}
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
      <!-- 错误提示条：保留表单内容，让用户可修改后重试 -->
      <div
        v-if="status === 'error'"
        class="mb-4 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
      >
        <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
          <UiAppIcon name="close" :size="12" />
        </span>
        <span>{{ errorMsg }}</span>
      </div>
      <div class="grid gap-4 sm:grid-cols-2">
        <!-- Name（必填） -->
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
        <!-- Email（必填） -->
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
        <!-- WhatsApp（必填） -->
        <div>
          <label class="mb-1.5 block text-sm font-medium text-navy">WhatsApp <span class="text-gold">*</span></label>
          <input
            v-model="form.whatsapp"
            type="tel"
            placeholder="+1 555 123 4567"
            class="form-input"
            :class="errors.whatsapp ? 'input-error' : ''"
          />
          <p v-if="errors.whatsapp" class="mt-1 text-xs text-red-500">{{ errors.whatsapp }}</p>
        </div>
        <!-- Company（选填） -->
        <div>
          <label class="mb-1.5 block text-sm font-medium text-navy">Company</label>
          <input
            v-model="form.company"
            type="text"
            placeholder="Your Company Ltd."
            class="form-input"
          />
        </div>
        <!-- Country（选填） -->
        <div>
          <label class="mb-1.5 block text-sm font-medium text-navy">Country</label>
          <input
            v-model="form.country"
            type="text"
            placeholder="United States"
            class="form-input"
          />
        </div>
        <!-- Product Type（选填） -->
        <div>
          <label class="mb-1.5 block text-sm font-medium text-navy">Product Type</label>
          <select v-model="form.productType" class="form-input">
            <option value="" disabled>Select dosage form</option>
            <option v-for="p in productCategories" :key="p.slug" :value="p.name">{{ p.name }}</option>
            <option value="Other">Other / Multiple</option>
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
