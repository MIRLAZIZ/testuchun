<script setup>
import { useRouter } from "vue-router";
function navigateToScience(id) {
  router.push(`/science/Scientific/inneer/${id}`);
}
const router = useRouter();
const props = defineProps({
  data: {
    type: Array || null,
    required: true,
    default: () => [] || null,
  },
});
</script>
<template>
  <div class="main_branch">

    <div
      class="2xl:w-[1052px] grid 2xl:grid-cols-3 2xl:gap-4 xl:w-[900px] xl:grid xl:grid-cols-2 xl:gap-4 xl:justify-center lg:w-[650px] lg:grid lg:grid-cols-2 lg:gap-3 lg:justify-center md:w-[600px] md:justify-around md:gap-2 sm:w-[300px] md:grid md:grid-cols-2 sm:gap-2 sm:justify-center main_box"
    >
      <div
        class="w-[340px] bg-white rounded-xl 2xl:px-6 2xl:pt-6 2xl:pb-5 h-[146px] flex flex-col justify-between xl:w-[100%] xl:px-4 xl:pb-4 xl:pt-4 lg:w-[100%] lg:px-3 lg:pb-3 lg:pt-3 md:w-[100%] md:px-3 md:pb-3 md:pt-3 sm:w-[300px] sm:pb-3 sm:pt-3 sm:px-3 main_box_wrapper"
        v-for="item in props.data"
        :key="item.id"
        @click="navigateToScience(item.id)"
      >
        <div class="flex items-start">
          <p class="font-medium text-base">{{ item.title }}</p>
        </div>

        <hr class="border border-[#DCE5F5]" />

        <div class="flex justify-between">
          <div class="flex gap-2 items-center">
            <img
              class="w-5 h-5"
              src="../../assets/imgs/talim/Calender.png"
              alt=""
            />
            <p class="font-normal text-base text-[#5D5D5F]">
              {{ item.date.slice(0, 10) }}
            </p>
          </div>
          <img src="../../assets/imgs/talim/Download.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.wrapper_bot:hover {
  color: #f7483b;
}
@media (max-width: 1024px) {
  .main_branch {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 640px) {
  .main_box {
    width: 300px;
    gap: 2em;
    display: grid;
    justify-content: center;
  }
  .main_box_wrapper {
    width: 300px;
    padding: 2em;
  }
}
</style>