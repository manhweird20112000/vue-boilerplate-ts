<script setup lang="ts">
import { DownOutlined } from '@ant-design/icons-vue'
</script>

<template>
<header class="tw-flex tw-h-[var(--height-header)] tw-items-center tw-justify-end tw-bg-white tw-border-b tw-px-6 tw-border-gray-200">
  <a-dropdown>
    <div class="tw-flex tw-cursor-pointer tw-items-center tw-gap-x-3">
      <span>HUSTLANG</span>
     <down-outlined />
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item>Logout</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</header>
</template>

<style scoped>

</style>
