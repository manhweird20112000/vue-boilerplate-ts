<script setup lang="ts">


import { index } from '@/infra/api'

onMounted(async () => {
  console.log(await index({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos/1' }))
})

</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>
