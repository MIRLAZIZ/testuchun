<script setup>
import { useHomeStore } from "~/store/home";

const route = useRoute();
const store = useHomeStore();

const data = ref([]);
const loading = ref(true);
onMounted(() => {
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);
  if (store.menus) {
    localStorage.setItem("management", JSON.stringify(store.menuShow));
  }

  store
    .getLeaderShips()
    .then((res) => {
      data.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
});
</script>

<template>
  <div>
    <loading-page v-if="loading" />
    <div v-else>
      <div v-if="data.length">


        <div
          class="flex gap-8 h-[632] bg-[#06203D] p-8 rounded-xl border-[#E6EDFA]-1 flex-col-reverse md:flex-row"
        >
          <div class="h-[433px] md:w-[288px] w-full flex-shrink-0">
            <img
              :src="data[0]?.professor_employ[0]?.photo"
              alt=""
              class="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div class="flex flex-col justify-center pl-6">
            <h1 class="text-[32px] font-medium text-white">
              {{ data[0]?.professor_employ[0].last_name }}
              {{ data[0]?.professor_employ[0].first_name }}
              {{ data[0]?.professor_employ[0].surname }}
            </h1>
            <p class="text-lg mt-2 text-[#88929D]">
              {{ data[0]?.professor_employ[0]?.employ_type}}
            </p>

            <hr class="border border-[#19314C] my-6" />
            <button
              class="bg-[#F7483B] w-[164px] h-[48px] flex justify-center items-center text-white rounded-lg"
              @click="
                $router.push(
                  `/institute/details/management/${data[0]?.professor_employ[0]?.slug}`
                )
              "
            >
              {{ store.dataTranslate["home.more_details"] }}
              <UIcon name="i-heroicons-arrow-long-right" class="ml-6 w-6 h-6" />
            </button>
          </div>
        </div>

        <!-- xodimlar  -->

        <div class="mt-20" v-if="data && data[0]?.manage_employ">
          <!-- title  -->
          <!-- <h1 class="font-Halvar font-medium text-[28px] my-6 mt-20">
            {{ store.dataTranslate["contract.employees"] }}
          </h1> -->

          <div class="grid xl:grid-cols-2 gap-4 mt-10 grid-cols-1">
            <div
              class="w-full rounded-xl p-5 flex flex-col md:flex-row bg-white gap-6"
              v-for="item in data[0]?.manage_employ"
              :key="item"
            >
              <div class="h-[200px] w-[157px] flex-shrink-0">
                <img
                  :src="item?.photo"
                  alt=""
                  class="h-full w-full object-cover rounded-lg"
                />
              </div>

              <div class="flex flex-col justify-between">
                <h1 class="text-xl font-medium">
                  {{ item?.last_name }}
                  {{ item?.first_name }}
                  {{ item?.surname }}
                </h1>
                <p class="mt-2 text-[#88929D]">
                  {{ item.employ_type }}
                </p>
                <hr class="border border-[#DCE5F5] my-6" />
                <button
                  class="bg-[#F7483B] 2xl:w-[164px] h-[48px] flex justify-center items-center text-white rounded-lg"
                  @click="
                    $router.push(`/institute/details/management/${item?.slug}`)
                  "
                >
                  {{ store.dataTranslate["home.more_details"] }}
                  <UIcon
                    name="i-heroicons-arrow-long-right"
                    class="ml-6 w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center font-Halvar" v-else>
        <p>{{ store.dataTranslate["header.do_not"] }}</p>
      </div>
    </div>
  </div>
</template>
<style  scoped>
</style>
