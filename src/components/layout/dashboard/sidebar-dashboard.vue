<script setup lang="ts">
import { type ItemType } from 'ant-design-vue'

const activeMenu = ref<string[]>(['1'])
const openSubMenus = ref<string[]>(['1'])

const items = ref<ItemType[]>([
  { label: 'Dashboard', key: '1' }
])
</script>

<template>
  <div class="tw-fixed tw-inset-y-0 tw-w-[var(--width-sidebar)] tw-border-r tw-border-gray-200 tw-bg-white">
    <a-menu
      :items="items"
      v-model:open-keys="openSubMenus"
      v-model:selected-keys="activeMenu"
      :mode="'inline'" />
  </div>
</template>

<style scoped>

</style>
