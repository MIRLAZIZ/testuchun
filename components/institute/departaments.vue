<template>
  <div class="w-full">
    <div class="grid grid-cols-2 gap-4 w-full" v-if="props.data">
      <div
        class="bg-white rounded-xl p-5 flex flex-col xl:flex-row gap-6 w-full"
        v-for="item in props.data"
        :key="item"
      >
        <div
          class="h-[271px] xl:w-[157px] w-full flex justify-center flex-shrink-0"
        >
          <img
            :src="item?.store?.currentImage2"
            alt=""
            class="imgs h-full w-full sm:w-[157px] object-cover rounded-lg"
          />
        </div>

        <div class="flex flex-col justify-between">
          <div class="mb-4">
            <h1 class="text-xl font-medium">
              {{ item?.first_name[$i18n.locale] }}
              {{ item?.last_name[$i18n.locale] }}
              {{ item?.surname[$i18n.locale] }}
            </h1>
            <p class="mt-2 text-[#88929D]">
              {{ item?.employ_meta?.position?.name[$i18n.locale] }}
            </p>
          </div>

          <button
            @click="
              $router.push(
                `/institute/details/departament/${item?.employ_meta?.department_id}`
              )
            "
            class="border border-[#F7483B] w-[124px] rounded-lg h-9 2xl:h-[48px] text-[#F7483B] flex justify-center items-center"
          >
            {{ store.dataTranslate["home.more_details"] }}
            <UIcon name="i-heroicons-arrow-long-right" class="ml-6 w-6 h-6" />
          </button>
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
    default: () => ({} || null),
  },
});
</script>


