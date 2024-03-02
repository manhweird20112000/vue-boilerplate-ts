<script setup lang="ts">
interface Props{
  label: string,
  charRequired: string,
  showLabelRequired: boolean
}
withDefaults(defineProps<Props>(), {
  label: '',
  charRequired: '*',
  showLabelRequired: false
})

</script>

<template>
  <div>
    <div v-if="label" class="tw-mb-1 tw-flex tw-items-center tw-justify-start">
      <label class="tw-text-sm tw-text-gray-600">{{label}}</label>
      <span v-if="showLabelRequired" class="text-xs tw-ml-1 tw-text-[#ff4d4f]">{{charRequired}}</span>
    </div>
  </div>
</template>
