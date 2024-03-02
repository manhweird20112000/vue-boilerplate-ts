<script setup lang="ts">
withDefaults(defineProps<ICommonLabel>(), {
  label: '',
  charRequired: '*',
  showLabelRequired: false
})
</script>

<template>
<div>
  <div v-if="label" class="tw-flex tw-items-center tw-justify-start">
    <label>{{label}}</label>
    <span>{{charRequired}}</span>
  </div>
</div>
</template>
