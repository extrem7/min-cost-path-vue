import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export type { VariantProps } from 'cva'
export type { ClassValue }

export type ClassRecord<T extends string> = Record<T, ClassValue>

export type ArrayToUnion<T extends Record<number, unknown>> = T[number]

export type AsTag =
  | 'a'
  | 'button'
  | 'div'
  | 'form'
  | 'h2'
  | 'h3'
  | 'img'
  | 'input'
  | 'label'
  | 'li'
  | 'nav'
  | 'ol'
  | 'p'
  | 'span'
  | 'svg'
  | 'ul'
  | 'template'
  | (object & string) // any other string

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
