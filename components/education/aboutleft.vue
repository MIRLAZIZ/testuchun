<template>
  <div class="w-full">
    <div class="flex gap-6  flex-col-reverse lg:flex-row  w-full " v-if="props.data?.activity">
      <div
        class="rounded-xl lg:w-2/4 w-full flex flex-col  p-4 border border-[#e6edfa]"
      >
        <p class="font-medium text-2xl xl:mt-16 mb-6">{{ props.data?.activity?.title }}</p>

        <div >
          <p  v-html="props.data?.activity?.dec"></p>
        </div>
      </div>
      <div class="lg:w-2/4 h-[272px]  md:h-[416px] w-full">
        <NuxtImg :src="props.data?.activity?.photo[store.currentImage]" alt="" class="w-full h-full rounded-xl object-cover"  />
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

