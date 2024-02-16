<script setup lang="ts">

import { useContainer } from '@/stores/container.ts'
import { request } from '@/infra/request.ts'

const container = useContainer()
onMounted(async () => {
  console.log(await request({
    method: "GET",
    url: 'https://jsonplaceholder.typicode.com/todos/1'}))
})
</script>

<template>
<div class="bg-red-900" @click="container.setLoading(!container.loading)">
  Auth {{container.loading}}
</div>
</template>

<style scoped>

</style>
