<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const router = useRoute();

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
<template>
  <div class="flex justify-center items-center main_branch">

    <div
      class="2xl:w-[1052px] grid 2xl:grid-cols-3  2xl:gap-4 xl:w-[900px] xl:grid xl:grid-cols-2  xl:gap-4 xl:justify-center lg:w-[650px] lg:grid lg:grid-cols-2  lg:gap-3 lg:justify-center md:w-[700px] md:justify-around md:gap-2 md:grid md:grid-cols-2  sm:w-[600px] sm:gap-2 sm:justify-center sm:grid  sm:grid-cols-2 main_box"
    >
      <div
        class="w-[340px] bg-white rounded-xl 2xl:px-6 2xl:pt-6 2xl:pb-5 h-[146px] flex flex-col justify-between xl:w-[100%] xl:px-4 xl:pb-4 xl:pt-4 lg:w-[100%] lg:px-3 lg:pb-3 lg:pt-3 md:w-[100%] md:px-3 md:pb-3 md:pt-3 sm:w-[300px] sm:pb-3 sm:pt-3 sm:px-3 main_box_wrapper"
        v-for="item in props.data"
        :key="item.id"
      >
        <div class="flex items-start">
          <img :src="item?.icon" alt="" />
          <p class="font-medium ml-3">{{ item.name[$i18n.locale] }}</p>
        </div>
        <hr class="border border-[#DCE5F5]" />
        <router-link
          class="font-normal text-base text-[#5D5D5F] wrapper_bot cursor-pointer flex justify-between"
          :to="
            $route.path === '/institute/faculties'
              ? `/institute/details/faculties-inner/${item.id}`
              : `/institute/kafedralar-inner/${item.id}`
          "
        >
          <p
            class="font-normal text-base text-[#5D5D5F] wrapper_bot cursor-pointer"
          >
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

@media (max-width: 1024px) {
  .main_branch {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 639px) {
  .main_box {
    width: 300px;
    gap: 2em;
    display: grid;
    justify-content: center;
  }

  .main_box_wrapper {
    width: 440px;
    padding: 2em;
  }
}

@media (max-width: 450px) {
  .main_box_wrapper {
    width: 300px;
    padding: 2em;
  }
}
</style>