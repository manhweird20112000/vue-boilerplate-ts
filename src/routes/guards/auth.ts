import { type Router } from 'vue-router'

import { AUTH_KEY } from '@/constants'
import { getStorage } from '@/utils/storage.ts'

export default function setupAuth (router: Router){
  router.beforeEach((to, from, next) => {
    console.log({ to, from })
    const AUTH_ROUTE = 'auth'
    const user = getStorage(AUTH_KEY)
    if(user){
      next()
    }else{
      if(to.name === AUTH_ROUTE){
        next()
      }else{
        next({ name: AUTH_ROUTE })
      }
    }
  })
}
