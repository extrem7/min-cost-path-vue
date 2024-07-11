import type { ArrayToUnion } from '@/shared/lib/style'

export const Variant = ['primary'] as const
export type Variant = ArrayToUnion<typeof Variant>

export const Size = ['base'] as const
export type Size = ArrayToUnion<typeof Size>
