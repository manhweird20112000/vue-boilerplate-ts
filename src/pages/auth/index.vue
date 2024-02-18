<script setup lang="ts">
import { ref, type Ref } from 'vue'

import { request } from '@/infra/request'

const name : Ref<string> = ref('')

onMounted(async () => {
  console.log(await request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos/1' }))
})

</script>

<template>
  <div>
    {{name}}
<!--    <el-form :model="form" ref="formRef" :rules="rules">-->
<!--      <field v-model:data="name" form-ref=""  name="name" label="NAME" />-->
<!--    </el-form>-->
    <a-input type="text" />
    <empty />

  </div>
</template>

<style scoped>

</style>
