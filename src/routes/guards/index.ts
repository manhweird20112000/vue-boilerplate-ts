import { type Router } from 'vue-router'

import setupAuth from '@/routes/guards/auth.ts'

export default function createRouteAuthGuards (route: Router) {
  setupAuth(route)
}
