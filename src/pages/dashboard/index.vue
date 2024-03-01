<script setup lang="ts">

const formRef = ref()
const form = ref({
  name: ''
})

const rules = {
  name: [
    { required: true, message: 'REQUIRED', trigger: 'blur' }
  ]
}

onMounted(() => {
  console.log(formRef)
})
</script>

<template>
<div>
  {{form}}
  <a-form ref="formRef" :model="form" @finish="() => {console.log('finish')}" @finish-failed="() => console.log('finish-failed')" :rules="rules">
    <a-form-item name="name">
      <a-input size="large" v-model:value="form.name"/>
    </a-form-item>
  </a-form>
</div>
</template>

<style scoped>

</style>
