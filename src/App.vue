<script setup lang="ts">

import { AUTH_KEY } from '@/constants'
import { getStorage } from '@/utils/storage'
import { ThemeConfig } from 'ant-design-vue/es/config-provider/context'

const layout = ref()

const theme : ThemeConfig = reactive({
  token: {
    colorPrimary: '#00b96b'
  }
})

watchEffect(async () => {
  const user = getStorage(AUTH_KEY)
  layout.value = user ?  markRaw((await import('@/layouts/default.vue')).default) :  markRaw((await import('@/layouts/auth.vue')).default)
})
</script>

<template>
  <a-config-provider :theme="theme">
    <component :is="layout"> <router-view /> </component>
  </a-config-provider>
</template>

