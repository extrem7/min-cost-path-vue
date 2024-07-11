<script setup lang="ts">
import type { ButtonHTMLAttributes, Component } from 'vue'

import { type AsTag, type ClassValue, cn } from '@/shared/lib/style'

import type { Size, Variant } from './types'
import { button } from './lib'

export interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  class?: ClassValue
  as?: Component | AsTag
  type?: HTMLButtonElement['type']
  variant?: Variant
  size?: Size
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'primary',
  size: 'base',
})
</script>

<template>
  <component
    :is="as"
    :class="cn(
      button({
        variant,
        size,
      }),
      props.class ?? '',
    )"
  >
    <slot />
  </component>
</template>
