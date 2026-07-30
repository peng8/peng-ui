<script setup lang="ts">
// 询价表单 —— 通过 Web3Forms 接收并转发到邮箱
// access_key 配置在 nuxt.config.ts 的 runtimeConfig.public.web3formsAccessKey
// 该 key 设计为前端可见（类似 reCAPTCHA site key），可公开
import { productCategories } from '~/data/products'

withDefaults(defineProps<{ variant?: 'light' | 'dark' }>(), { variant: 'light' })

const { public: { web3formsAccessKey = '' } } = useRuntimeConfig()
const { isZh } = useLocale()

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

const copy = computed(() => ({
  nameRequired: isZh.value ? '请输入您的姓名' : 'Please enter your name',
  emailRequired: isZh.value ? '请输入您的邮箱' : 'Please enter your email',
  emailInvalid: isZh.value ? '请输入有效的邮箱地址' : 'Please enter a valid email',
  whatsappRequired: isZh.value ? '请输入您的 WhatsApp 号码' : 'Please enter your WhatsApp number',
  whatsappInvalid: isZh.value ? '请输入有效的 WhatsApp 号码' : 'Please enter a valid WhatsApp number',
  messageRequired: isZh.value ? '请至少用 10 个字符描述您的需求' : 'Please describe your needs (at least 10 characters)',
  formNotConfigured: isZh.value
    ? '表单服务尚未配置,请在 nuxt.config.ts 中设置 web3formsAccessKey'
    : 'Form service not configured. Please set web3formsAccessKey in nuxt.config.ts',
  submissionFailed: isZh.value ? '提交失败,请重试或直接发送邮件联系我们。' : 'Submission failed. Please try again or email us directly.',
  networkError: isZh.value ? '网络错误,请检查连接后重试。' : 'Network error. Please check your connection and try again.',
  successTitle: isZh.value ? '提交成功' : 'Thank You!',
  successText: isZh.value ? '我们已收到您的询盘,团队将在 24 小时内与您联系。' : 'Your inquiry has been received. Our team will contact you within 24 hours.',
  name: isZh.value ? '姓名' : 'Name',
  email: 'Email',
  whatsapp: 'WhatsApp',
  company: isZh.value ? '公司' : 'Company',
  country: isZh.value ? '国家/地区' : 'Country',
  productType: isZh.value ? '产品剂型' : 'Product Type',
  projectDetails: isZh.value ? '项目需求' : 'Project Details',
  namePlaceholder: isZh.value ? '张先生' : 'John Smith',
  companyPlaceholder: isZh.value ? '您的公司名称' : 'Your Company Ltd.',
  countryPlaceholder: isZh.value ? '美国 / 中国 / 德国' : 'United States',
  productPlaceholder: isZh.value ? '选择剂型' : 'Select dosage form',
  otherProduct: isZh.value ? '其他 / 多种剂型' : 'Other / Multiple',
  messagePlaceholder: isZh.value
    ? '请描述配方方向、目标市场、包装需求、时间计划等。'
    : 'Tell us about your formula, target market, packaging requirements, timeline, etc.',
  privacy: isZh.value ? '您的信息将被保密,仅用于本次询盘沟通。' : 'Your information is confidential and used only for this inquiry.',
  sending: isZh.value ? '提交中...' : 'Sending...',
  submit: isZh.value ? '提交询盘' : 'Submit Inquiry'
}))

const validate = (): boolean => {
  let ok = true
  const set = (k: keyof FormState, msg: string) => {
    errors[k] = msg
    if (msg) ok = false
  }
  // 仅 4 项必填：Name、Email、WhatsApp、Project Details
  set('name', form.name.trim() ? '' : copy.value.nameRequired)
  set('email', !form.email.trim() ? copy.value.emailRequired : !emailRe.test(form.email) ? copy.value.emailInvalid : '')
  set('whatsapp', !form.whatsapp.trim() ? copy.value.whatsappRequired : !whatsappRe.test(form.whatsapp.trim()) ? copy.value.whatsappInvalid : '')
  set('message', form.message.trim().length >= 10 ? '' : copy.value.messageRequired)
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
    errorMsg.value = copy.value.formNotConfigured
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
      errorMsg.value = data.message || copy.value.submissionFailed
    }
  } catch (e) {
    status.value = 'error'
    errorMsg.value = copy.value.networkError
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
      <h4 class="mt-4 text-xl font-bold text-navy">{{ copy.successTitle }}</h4>
      <p class="mt-2 text-sm text-navy/60">
        {{ copy.successText }}
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
          <label for="qf-name" class="mb-1.5 block text-sm font-medium text-navy">{{ copy.name }} <span class="text-gold">*</span></label>
          <input
            id="qf-name"
            v-model="form.name"
            type="text"
            :placeholder="copy.namePlaceholder"
            class="form-input"
            :class="errors.name ? 'input-error' : ''"
          />
          <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
        </div>
        <!-- Email（必填） -->
        <div>
          <label for="qf-email" class="mb-1.5 block text-sm font-medium text-navy">{{ copy.email }} <span class="text-gold">*</span></label>
          <input
            id="qf-email"
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
          <label for="qf-whatsapp" class="mb-1.5 block text-sm font-medium text-navy">{{ copy.whatsapp }} <span class="text-gold">*</span></label>
          <input
            id="qf-whatsapp"
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
          <label for="qf-company" class="mb-1.5 block text-sm font-medium text-navy">{{ copy.company }}</label>
          <input
            id="qf-company"
            v-model="form.company"
            type="text"
            :placeholder="copy.companyPlaceholder"
            class="form-input"
          />
        </div>
        <!-- Country（选填） -->
        <div>
          <label for="qf-country" class="mb-1.5 block text-sm font-medium text-navy">{{ copy.country }}</label>
          <input
            id="qf-country"
            v-model="form.country"
            type="text"
            :placeholder="copy.countryPlaceholder"
            class="form-input"
          />
        </div>
        <!-- Product Type（选填） -->
        <div>
          <label for="qf-product-type" class="mb-1.5 block text-sm font-medium text-navy">{{ copy.productType }}</label>
          <select id="qf-product-type" v-model="form.productType" class="form-input">
            <option value="" disabled>{{ copy.productPlaceholder }}</option>
            <option v-for="p in productCategories" :key="p.slug" :value="p.name">{{ isZh ? p.nameZh : p.name }}</option>
            <option value="Other">{{ copy.otherProduct }}</option>
          </select>
        </div>
      </div>

      <!-- Message -->
      <div class="mt-4">
        <label for="qf-message" class="mb-1.5 block text-sm font-medium text-navy">{{ copy.projectDetails }} <span class="text-gold">*</span></label>
        <textarea
          id="qf-message"
          v-model="form.message"
          rows="4"
          :placeholder="copy.messagePlaceholder"
          class="form-input resize-none"
          :class="errors.message ? 'input-error' : ''"
        />
        <p v-if="errors.message" class="mt-1 text-xs text-red-500">{{ errors.message }}</p>
      </div>

      <div class="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p class="text-xs text-navy/50">
          {{ copy.privacy }}
        </p>
        <UiAppButton
          variant="primary"
          size="lg"
          icon="send"
          :block="true"
          class="sm:w-auto"
          :class="status === 'submitting' ? 'pointer-events-none opacity-70' : ''"
        >
          <span v-if="status === 'submitting'">{{ copy.sending }}</span>
          <span v-else>{{ copy.submit }}</span>
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
