<script setup lang="ts">

import { type Ref } from 'vue'

import { type FormInstance } from 'element-plus'

import { useValidateField } from '@/composables/use-validate-field'


interface IFieldProps{
  placeholder?: string,
  data?: string,
  name: string,
  formRef: FormInstance | undefined,
  label?: string,
  required?: boolean,
  type?: 'text' | 'textarea' | 'password' | 'button' | 'checkbox' | 'file'| 'number'| 'radio',
  disabled?: boolean,
  clearable?: boolean,
  autosize?: boolean | {minRows?: number, maxRows?: number},
  maxLength?: number,
  rows?: number,
}

const props = withDefaults(defineProps<IFieldProps>(), {
  required: false,
  type: 'text',
  disabled: false,
  clearable: false,
  maxLength: 64
})

const inputRef = ref()
const inputValue : Ref<string> = ref(props.data || '')

const emits = defineEmits(['update:data', 'change'])
const { resetField, validateField } = useValidateField()

watch(inputValue, (value) => {
  emits('update:data', value)
})
</script>

<template>
<el-form-item :prop="name" ref="inputRef">
  <div v-if="label">
    <label>
      <span>{{label}}</span>
      <span v-if="required">*</span>
    </label>
  </div>
  <el-input
      v-model="inputValue"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :clearable="clearable"
      :maxlength="maxLength"
      :autosize="autosize"
      :rows="rows"
      :name="name"
      @blur="formRef ? validateField(formRef, name) : () => {}"
      @focus="formRef ? resetField(formRef, name): {}"
      @change="emits('change')"
  />
</el-form-item>
</template>
