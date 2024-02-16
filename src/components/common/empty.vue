<script setup lang="ts">
import { translate } from '@/utils/translate'

interface IEmptyProps {
  type?: 'normal' | 'filter'
}

withDefaults(defineProps<IEmptyProps>(), { type: 'normal' })

const empty = reactive(
  {
    'normal': translate('common.empty'),
    'filter': translate('common.empty-filter')
  }
)

</script>

<template>
<p class="text-center"> {{empty[type]}} </p>
</template>

