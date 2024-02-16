import { type RouteRecordRaw } from 'vue-router'

export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () => import('@/pages/errors/404.vue')
}
