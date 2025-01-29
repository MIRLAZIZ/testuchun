<template>
  <div>
    <div class="flex gap-6 w-[952px]">
        <!-- {{ props.data.activity }} -->
      <div
        class="rounded-xl w-[464px] flex flex-col justify-center"
        style="border: 1px solid #e6edfa; padding: 15px"
      >
        <p class="font-medium text-2xl mb-6">{{ props.data?.activity?.title }}</p>

        <div style="width: 416px">
          <p  v-html="props.data?.activity?.dec"></p>
        </div>
      </div>
      <div class="w-[464px] h-[416]">
        <NuxtImg :src="props.data?.activity?.photo[store.currentImage]" alt="" class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<style  scoped>
</style>