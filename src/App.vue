<script setup lang="ts">
import { AUTH_KEY } from '@/constants'
import { theme } from '@/infra/ui/theme'
import { getStorage, setStorage } from '@/utils/storage'

const route = useRoute()

const layout = ref()



watchEffect(async () => {
  console.log(route)
  setStorage(AUTH_KEY, '1')
  const user = getStorage(AUTH_KEY)
  layout.value = user ?  markRaw((await import('@/layouts/default.vue')).default) :  markRaw((await import('@/layouts/auth.vue')).default)
})
</script>

<template>
  <a-config-provider :theme="theme">
    <component :is="layout"> <router-view /> </component>
  </a-config-provider>
</template>

