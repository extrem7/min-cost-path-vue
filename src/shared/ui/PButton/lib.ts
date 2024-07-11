import { cva } from 'cva'
import type { ClassRecord } from '@/shared/lib/style'
import type { Size, Variant } from './types'

export const button = cva(
  `
  rounded-md border border-transparent text-sm font-semibold shadow-sm 
  transition-colors disabled:bg-blue-300
  `,
  {
    variants: {
      variant: {
        primary: `bg-blue-500 text-white focus-visible:outline hover:bg-blue-600`,
      } satisfies ClassRecord<Variant>,
      size: {
        base: 'px-2.5 py-1.5',
      } satisfies ClassRecord<Size>,
    },

    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  },
)
