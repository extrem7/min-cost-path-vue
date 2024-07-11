import type { RouteRecordInfo } from 'vue-router'

export interface RouteNamedMap {
  dashboard: RouteRecordInfo<
    'dashboard',
    '/',
    Record<never, never>,
    Record<never, never>
  >
}

declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
