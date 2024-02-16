<script setup lang="ts">

import { AUTH_KEY } from '@/constants'
import { getStorage } from '@/utils/storage'

const layout = ref()

watchEffect(async () => {
  const user = getStorage(AUTH_KEY)
  layout.value = user ?  markRaw((await import('@/layouts/default.vue')).default) :  markRaw((await import('@/layouts/auth.vue')).default)
})
</script>

<template>
  <component :is="layout"> <router-view /> </component>
</template>

