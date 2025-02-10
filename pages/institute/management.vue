<script setup>
import management from "/assets/imgs/kampus/menagement.png";
import img2 from "/assets/imgs/kampus/image2.png";
import img3 from "/assets/imgs/kampus/image3.png";
import img4 from "/assets/imgs/kampus/image4.png";
import img5 from "/assets/imgs/kampus/image5.png";
import img6 from "/assets/imgs/kampus/image6.png";
import { useHomeStore } from "~/store/home";

const route = useRoute();
const store = useHomeStore();

const data = ref([]);

onMounted(() => {
  if (store.menus) {
    localStorage.setItem("management", JSON.stringify(store.menuShow));
  }

  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);

  store.getLeaderShips().then((res) => {
    data.value = res.data;
  });
});
</script>

<template>
  <div>
    <div
      class="flex 2xl:w-[1076px] gap-8 h-[632] bg-[#06203D] p-8 rounded-xl border-[#E6EDFA]-1 flex-col-reverse md:flex-row"
      v-if="data.length"
    >
    
      <div class="h-[433px] md:w-[288px] w-full flex-shrink-0" >
        <NuxtImg
          :src="data[0]?.professor_employ[0]?.photo"
          alt=""
          class=" h-full w-full rounded-xl  object-cover"
        />
      </div>

      <div class="flex flex-col justify-center pl-6">
        <h1 class="text-[32px] font-medium text-white">
          {{ data[0]?.professor_employ[0].first_name }}
          {{ data[0]?.professor_employ[0].last_name }}
          {{ data[0]?.professor_employ[0].surname }}
        </h1>
        <p class="text-lg mt-2 text-[#88929D]">
          {{ data[0]?.professor_employ[0]?.position?.name[$i18n.locale] }}
        </p>

        <hr class="border border-[#19314C] my-6" />
        <UButton
          class="bg-[#F7483B] w-[164px] h-[48px] flex justify-center hover:bg-[#F7483B] text-base"
          @click="
            $router.push(
              `/institute/details/management/${data[0]?.professor_employ[0]?.id}`
            )
          "
        >
          {{ store.dataTranslate["home.more_details"] }}
          <UIcon name="i-heroicons-arrow-long-right" class="ml-6 w-6 h-6" />
        </UButton>
      </div>
    </div>

    <!-- xodimlar  -->

    <div class="main_branch" v-if="data && data[0]?.manage_employ">
      <!-- title  -->
      <h1 class="font-Halvar font-medium text-[28px] my-6 mt-20">
        {{ store.dataTranslate["contract.employees"] }}
      </h1>

      <div
        class="grid xl:grid-cols-2 gap-4 mt-10     2xl:w-[1052px] grid-cols-1"
      >
        <div
          class="w-full rounded-xl p-5 flex flex-col md:flex-row bg-white gap-6 "
          v-for="item in data[0]?.manage_employ"
          :key="item"
          @click="$router.push(`/institute/details/management/${item?.id}`)"
        >
          <div class="h-[200px] w-[157px] flex-shrink-0">
            <NuxtImg
              :src="item?.photo"
              alt=""
              class=" h-full w-full object-cover rounded-lg"
            />
          </div>

          <div class="flex  flex-col ">
            <h1 class="text-xl font-medium text-black">
              {{ item?.first_name }}
              {{ item?.last_name }}
              {{ item?.surname }}
            </h1>
            <p class="mt-2 text-[#88929D]">{{ item?.employ_type }}</p>
            <hr class="border border-[#DCE5F5] my-6" />
            <UButton
              class="bg-[#F7483B] w-[164px] h-[48px] flex justify-center hover:bg-[#F7483B] text-base"
              @click="$router.push(`/institute/details/${item?.id}`)"
            >
              {{ store.dataTranslate["home.more_details"] }}
              <UIcon name="i-heroicons-arrow-long-right" class="ml-6 w-6 h-6" />
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style  scoped>



</style>
