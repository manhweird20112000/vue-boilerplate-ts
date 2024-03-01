<script setup lang="ts">
interface IDialogProps {
  title: string,
  open?: boolean,
  cancelText?: string
  okText?: string
}

const props = withDefaults(defineProps<IDialogProps>(), {
  cancelText: 'Return',
  okText: 'Submit'
})
const emits = defineEmits(['update:open', 'close', 'return', 'submit'])
const isOpen = ref<boolean>(props.open)


watch(() => props.open, (value) => {
  isOpen.value = value
})

watch(() => isOpen, (value) => {
  emits('update:open', value)
})
</script>

<template>
  <a-modal :open="isOpen" :title="title" @cancel="emits('close')">
    <slot name="content" />
    <template #footer>
      <a-button @click="emits('return')">{{cancelText}}</a-button>
      <a-button type="primary" @click="emits('submit')">{{okText}}</a-button>
    </template>
  </a-modal>
</template>
