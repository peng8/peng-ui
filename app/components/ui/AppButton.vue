<script setup lang="ts">
// 统一按钮组件：支持 NuxtLink 路由 / 普通 a / button
type Variant = 'primary' | 'navy' | 'outline' | 'ghost' | 'light'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    to?: string
    href?: string
    icon?: string
    iconRight?: boolean | string
    block?: boolean
    disabled?: boolean
    target?: string
    rel?: string
  }>(),
  { variant: 'primary', size: 'md', iconRight: false, block: false, disabled: false }
)

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  navy: 'btn-navy',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  light: 'btn bg-white text-navy hover:bg-mist shadow-sm hover:shadow-md'
}
const sizeClass: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base'
}

const classes = computed(() => [
  variantClass[props.variant],
  sizeClass[props.size],
  props.block ? 'w-full' : '',
  props.disabled ? 'pointer-events-none opacity-60' : ''
])

// NuxtLink 只需 resolve 一次，避免每次渲染重复查找
const NuxtLinkComp = resolveComponent('NuxtLink')
const is = computed(() => {
  if (props.to) return NuxtLinkComp
  if (props.href) return 'a'
  return 'button'
})

const leftIcon = computed(() => (props.iconRight ? '' : props.icon))
const rightIcon = computed(() => {
  if (typeof props.iconRight === 'string') return props.iconRight
  return props.iconRight ? props.icon : ''
})
</script>

<template>
  <component
    :is="is"
    :to="to"
    :href="href"
    :disabled="is === 'button' ? disabled : undefined"
    :aria-disabled="is !== 'button' && disabled ? 'true' : undefined"
    :target="href ? target : undefined"
    :rel="href ? rel : undefined"
    class="transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    :class="classes"
  >
    <UiAppIcon v-if="leftIcon" :name="leftIcon" :size="size === 'lg' ? 18 : 16" />
    <span><slot /></span>
    <UiAppIcon v-if="rightIcon" :name="rightIcon" :size="size === 'lg' ? 18 : 16" />
  </component>
</template>
