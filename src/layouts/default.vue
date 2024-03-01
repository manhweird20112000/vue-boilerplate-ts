<script setup lang="ts">

</script>

<template>
<div id="admin" class=" tw-relative tw-min-h-screen">
  <sidebar-dashboard />
 <div class="tw-relative tw-my-0 tw-ml-auto tw-mr-0 tw-h-full tw-w-[calc(100vw_-_var(--width-sidebar))]">
   <header-dashboard />
   <router-view />
 </div>
</div>
</template>

<style scoped>

</style>
