<script setup lang="ts">

import { type ICommonField } from '@/infra/ui/common/types.ts'

const props = withDefaults(defineProps<ICommonField>(), {
  disabled: false,
  allowClear: false,
  type: 'text',
  rows: 4
})


const emits = defineEmits(['update:data', 'change'])

const slots = useSlots()


const input = ref<string>(props.data)

watch(
  () => input.value,
  (value) => {
    emits('update:data', value)
  })
</script>

<template>
<a-form-item :name="name">
  <common-label :label="label" :show-label-required="showLabelRequired" :char-required="charRequired" />
  <a-textarea
      v-if="type === 'textarea'"
      v-model:value="input"
      :maxlength="maxlength"
      :rows="rows"
      :placeholder="placeholder"
      :show-count="showCount"
      :disabled="disabled"
      :allow-clear="allowClear"
  />
  <a-input
      v-else
      v-model:value="input"
      :maxlength="maxlength"
     :placeholder="placeholder"
      :type="type"
      :show-count="showCount"
      :disabled="disabled"
      :allow-clear="allowClear">
    <template v-if="slots['suffix']" #suffix>
      <slot name="suffix" />
    </template>
    <template #prefix v-if="slots['prefix']">
      <slot name="prefix" />
    </template>
  </a-input>
</a-form-item>
</template>
