<template>
  <div class="p-5 flex justify-center -translate-y-2/4">
    <!-- {{ props.data || "Ma’lumot yo‘q" }} -->

    <div
      class="2xl:w-[1440px] h-[165px]  w-full bg-white text-black grid lg:grid-cols-5 sm:grid-cols-2 p-5 gap-6 justify-center rounded-xl items-center"
    >
      <div
        class=" w-full h-[101px] p-3 border-[1px] border-[#E6EDFA] rounded-lg"
        v-for="item in datatype"
        :key="item.id"
      >
        <div
          class="p-[15px 16px] rounded-lg h-[100%] flex flex-col justify-around"
        >
          <div class="flex gap-2">
            <img :src="item.img " alt="" class="w-5 h-5"/>
            <p class="font-normal text-[#868587] text-lg">{{ item.type }}</p>
          </div>
          <div class="flex flex-col justify-center">
            <p class="">{{ item.name }}</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import globe from "~/assets/imgs/home/globe.png";
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
    img: globe,
    type: store.dataTranslate["footer.educational_period"],
    name: props.data?.form_education || "Kunduzgi 5-yil",
  },
  {
    id: 2,
    img: globe,
    type: store.dataTranslate["home.language"],
    name: props.data?.lang,
    description: "",
  },
  {
    id: 3,
    img: globe,
    type: store.dataTranslate["home.address"],
    name: "Toshkent Shahri",
    description: "",
  },
  {
    id: 4,
    img: globe,
    type: store.dataTranslate["footer.start_date"],
    name: "01 aprel , 2024",
    description: "",
  },
  {
    id: 5,
    img: globe,
    type: store.dataTranslate["footer.type"],
    name: props.data?.form_education || "Kunduzgi 5-yil",
    description: "Sirtqi 4-yil",
  },
]);
</script>
  
  <style scoped></style>
  