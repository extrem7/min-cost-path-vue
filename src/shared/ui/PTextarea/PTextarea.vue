<script setup lang="ts">
import { type TextareaHTMLAttributes, computed, toRefs } from 'vue'
import { syncRef, useTextareaAutosize } from '@vueuse/core'

import { type ClassValue, cn } from '@/shared/lib/style'

export interface Props extends /* @vue-ignore */ TextareaHTMLAttributes {
  class?: ClassValue
  modelValue?: string | null
}

export type Emits = {
  'update:modelValue': [value: string | null]
}

const props = defineProps<Props>()

const emits = defineEmits<Emits>()
const { modelValue } = toRefs(props)

const vModel = computed({
  get: () => modelValue.value ?? '',
  set: value => emits('update:modelValue', value !== '' ? value : null),
})

const { textarea, input } = useTextareaAutosize()

syncRef(vModel, input, { direction: 'ltr' })
</script>

<template>
  <textarea
    ref="textarea"
    v-model="vModel"
    :class="cn(
      `block w-full rounded-md border-gray-200 border shadow-sm p-2
       focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`,
      props.class,
    )"
  />
</template>

<style scoped>
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>
