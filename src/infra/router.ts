import { createRouter, createWebHistory } from 'vue-router'

import { routes } from '@/routes'

const routers = createRouter({
  history: createWebHistory(),
  routes
})

export default routers
