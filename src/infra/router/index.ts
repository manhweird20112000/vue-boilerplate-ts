import { createRouter, createWebHistory } from 'vue-router'


import { routes } from '@/routes'
import createRouteAuthGuards from '@/routes/guards'

const routers = createRouter({
  history: createWebHistory(),
  routes
})

createRouteAuthGuards(routers)

export default routers
