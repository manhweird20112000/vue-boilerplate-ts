<script setup lang="ts">
import { type IPagination } from '@/infra/ui/common/types.ts'

interface Props {
  title: string
}

withDefaults(defineProps<Props>(), {})

const slots = useSlots()

const paginate = ref<IPagination>({
  page: 1,
  per_page: 10,
  total: 0
})
</script>

<template>
<section class="relative tw-p-6">
  <a-row>
    <a-col :span="6">
      <h1 class="tw-mb-0 tw-text-2xl tw-font-bold">{{title}}</h1>
    </a-col>
    <a-col :span="18">
      <slot name="action" />
    </a-col>
  </a-row>
  <a-row v-if="slots['filters']" class="tw-mt-4">
    <slot name="filters" />
  </a-row>
  <a-row>

  </a-row>
  <div class="tw-fixed tw-bottom-0 tw-right-0 tw-w-[calc(100vw_-_var(--width-sidebar))] tw-border-t tw-px-4 tw-py-3">
    <a-row>
      <a-col :span="18">
        <a-pagination v-model:current="paginate.page"  size="large" show-size-changer show-quick-jumper :total="paginate.total" />
      </a-col>
      <a-col :span="6">
        <slot name="action-bottom" />
      </a-col>
    </a-row>
  </div>
</section>
</template>
