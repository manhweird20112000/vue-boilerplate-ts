import type { RouteRecordRaw } from 'vue-router'

import { ELayouts } from '@/constants'
import { NOT_FOUND_ROUTE } from '@/routes/not-found.ts'

export const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/login',
    component: async () => await import('@/pages/auth/index.vue'),
    name: 'auth',
    meta: {
      layout: ELayouts.public
    }
  },
  {
    path: '/',
    component: async () => await import('@/pages/dashboard/index.vue'),
    name: 'home',
    meta: {
      layout: ELayouts.private
    }
  },
  NOT_FOUND_ROUTE
]
