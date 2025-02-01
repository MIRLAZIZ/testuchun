<template>
  <div class="main_branch" v-if="props.data">
   

    <div
      class="grid xl:grid-cols-2 gap-4 mt-10 lg:grid-cols-1 sm:grid-cols-2 sm:items-center sm:justify-around 2xl:w-[1052px] xl:w-[900px] md:w-[650px] sm:w-[600px] main_box"
    >
      <div
        class="w-[530px] h-[240px] rounded-xl p-5 flex  box_wrapper xl:w-[430px] xl:h-[300px] xl:justify-center xl:items-center sm:items-center sm:w-[100%] justify-between main_box_wrapper"
        v-for="item in props.data"
        :key="item"
        @click="$router.push(`/institute/details/departament/${item?.employ_meta?.department_id}`)"
      >
        <div class="  h-[200px] w-[157px]">
          
         
        <img
          :src="item?.store?.currentImage2"
          alt=""
          class="imgs h-full w-full object-cover rounded-lg"
        />
        </div>

        <div class="flex box_wrapper_pad flex-col justify-center pl-6">
          <h1 class="text-xl font-medium ">
            {{
              item?.first_name[$i18n.locale]
               
            }}
          </h1>
          <p class="mt-2 text-[#88929D]">
            {{
            item?.employ_meta?.position?.name[$i18n.locale]
            }}
          </p>
          <hr class="border border-[#DCE5F5] my-6" />
          <UButton
            class="bg-[#F7483B] w-[164px] h-[48px] flex justify-center hover:bg-[#F7483B] text-base"
          >
            {{ store.dataTranslate["home.more_details"] }}
            <UIcon name="i-heroicons-arrow-long-right" class="ml-6 w-6 h-6" />
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";
import management from "/assets/imgs/kampus/menagement.png";
import img2 from "/assets/imgs/kampus/image2.png";
import img3 from "/assets/imgs/kampus/image3.png";
import img4 from "/assets/imgs/kampus/image4.png";
import img5 from "/assets/imgs/kampus/image5.png";
import img6 from "/assets/imgs/kampus/image6.png";

const store = useHomeStore();

const props = defineProps({
  data: {
    type: Object,
    requered: true,
    default: () =>({}) || null,
  },
})
</script>

<style  scoped>
@media (max-width: 440px) {
  .main_box {
    gap: 5px !important;
  }
  .main_box_wrapper {
    padding: 5px !important;
  }
}
@media (max-width: 640px) {
  .box_wrapper_pad {
    padding: 2px;
  }
  .img {
    width: 100%;
  }
  .main_box {
    width: 300px;
    gap: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;

    justify-content: center;
  }
  .main_box_wrapper {
    width: 180px;
    padding: 10px;
  }
}
@media (max-width: 1024px) {
  .box_wrapper {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .main_branch {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>