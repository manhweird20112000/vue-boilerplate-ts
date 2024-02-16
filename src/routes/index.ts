import type { RouteRecordRaw } from 'vue-router'

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    component: async () => await import('@/pages/auth/index.vue')
  }
]
