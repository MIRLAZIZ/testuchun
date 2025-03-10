<template>
  <div
    class=""
    :class="{ 'xl:-translate-y-2/4  -translate-y-[82px]': store.bgImg, 'mt-10 mb-[104px]': !store.bgImg }"
  >
    <div
      class="  w-full bg-white grid lg:grid-cols-5 sm:grid-cols-2 p-8 gap-6  rounded-xl "
    >
      <div
        class="w-full   p-3 border border-[#E6EDFA] rounded-lg"
        v-for="item in datatype"
        :key="item.id"
      >
        <div
          class="p-[15px 16px] rounded-lg h-[100%] flex flex-col justify-around"
        >
          <div class="flex justify-center gap-2 ">
            <img :src="item.img" alt="" class="w-5 h-5" />
            <p class="font-normal text-[#868587] ">{{ item.type }}</p>
          </div>

          <div class="flex flex-col items-center justify-center  ">
            <p class="text-[#06203D] text-lg " v-html="item.name"></p>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import globe from "~/assets/imgs/home/globe.png";
import img1 from "~/assets/imgs/talim/Pie.png"
import img2 from "~/assets/imgs/talim/Location.png"
import img3 from "~/assets/imgs/talim/Calender5.png"

import maps from "~/assets/imgs/home/location.png";
import { useHomeStore } from "~/store/home";

const store = useHomeStore();

const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const datatype = computed(() => [
  {
    id: 1,
    img: img1,
    type: store.dataTranslate["footer.educational_period"],
    name: props.data?.education_years?.replace(/\//g, "<br>") ,
  },
  {
    id: 2,
    img: globe,
    type: store.dataTranslate["home.language"],
    name: props.data?.lang?.replace(/\//g, "<br>"),
  },
  {
    id: 3,
    img: img2,
    type: store.dataTranslate["home.address"],
    name: props.data?.map?.replace(/\//g, "<br>"),
  },
  {
    id: 4,
    img: img3,
    type: store.dataTranslate["footer.start_date"],
    name: props.data?.kundizgi_date?.replace(/\//g, "<br>"),
  },
  {
    id: 5,
    img: img1,
    type: store.dataTranslate["footer.type"],
    name: props.data?.form_education?.replace(/\//g, "<br>") ,
  },
]);
</script>
  
  <style scoped>
</style>
  