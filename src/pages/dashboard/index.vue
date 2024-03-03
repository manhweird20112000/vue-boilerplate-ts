<script setup lang="ts">

import { type Rule } from 'ant-design-vue/es/form'

import { useValidateField } from '@/composables/use-validate-field'
import { request } from '@/infra/api'

const { clearValidateField } = useValidateField()
const formRef = ref()
const form = ref({
  name: ''
})

const rules: Record<string, Rule[]> = {
  name: [
    { required: true, message: 'REQUIRED', trigger: 'blur' }
  ]
}

onMounted(async () => {
  console.log(formRef)
  console.log(  await request({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET'
  }))
})
</script>

<template>
<div>
  {{form}}
  <a-form ref="formRef" :model="form" @finish="() => {console.log('finish')}" @finish-failed="() => console.log('finish-failed')" :rules="rules">
   <common-field v-model:data="form.name" name="name" type="textarea"  />
  </a-form>
</div>
</template>

<style scoped>

</style>
