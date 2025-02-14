<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const router = useRoute();

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full">
      <div
        class="h-[146px] rounded-lg bg-white flex flex-col justify-between p-6 w-full"
        v-for="item in props.data?.children"
        :key="item.id"
      >
        <div class="flex gap-2">
          <img :src="item.icon" alt="" class="w-[20px] h-[20px] object-cover" v-if="item.icon" />
          <p class="font-medium">{{ item.name }}</p>
        </div>

        <hr class="border border-[#DCE5F5]" />

        <router-link
          class="font-normal text-base text-[#5D5D5F] cursor-pointer flex justify-between"
          :to="`/education-inner/${item.slug}`"
        >
          <p class="text-[#5D5D5F] cursor-pointer">
            {{ store.dataTranslate["home.more_details"] }}
          </p>

          <UIcon
            name="i-heroicons-arrow-up-right"
            class="w-4 h-4 bg-[#F7483B]"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper_bot:hover {
  color: #f7483b;
}
</style>