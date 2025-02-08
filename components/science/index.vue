<script setup>
import { useRouter } from "vue-router";
function navigateToScience(id) {
  router.push(`/science/inneer/${id}`);
}
const router = useRouter();
const props = defineProps({
  data: {
    type: Array || null,
    required: true,
    
  },
});
</script>
<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full">
      <div
        class="bg-white rounded-xl flex flex-col justify-between h-[140px] p-6 pb-5 w-full cursor-pointer"
        v-for="item in props.data"
        :key="item.id"
        @click="$router.push(`/science/inneer/${item.slug}`)"
      >
        <div class="flex items-start">
          <p>{{ item.title }}</p>
          
        </div>

        <div>
          <hr class="border mb-4 border-[#DCE5F5]" />

          <div class="flex justify-between">
            <div class="flex items-center">
              <img
                class="object-contain"
                src="/assets/imgs/talim/Calender.png"
                alt=""
              />
              <p class="text-[#5D5D5F] ml-2">
                {{ item.date.slice(0, 10) }}
              </p>
            </div>
            <img
              src="/assets/imgs/talim/Download.png"
              alt=""
              class="object-contain"
            />
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
