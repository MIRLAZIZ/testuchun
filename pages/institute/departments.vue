<template>
  <div>
  <LoadingPage v-if="loading"/>
  <div class="w-full" v-else>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full" v-if="data">
      <div
        class="bg-white rounded-xl p-5 flex flex-col 2xl:flex-row gap-6 w-full"
        v-for="item in data"
        :key="item"
      >




        <div
          class="h-[271px] 2xl:w-[213px] w-full flex justify-center flex-shrink-0"
        >
          <img
            :src="item[store?.currentImage2]"
            alt=""
            class="imgs h-full  sm:w-[213px] object-cover rounded-lg"
          />
        </div>

        <div class="flex flex-col justify-between h-full">
          <div class="mb-4">
            <h1 class="text-xl font-medium">
              {{ item?.last_name[store.language] }}
              {{ item?.first_name[store.language] }}
              {{ item?.surname[store.language] }}
            </h1>
            <p class="mt-2 text-[#88929D]">
              {{ item?.employ_meta?.employ_type?.name[store.language] }}
            </p>
          </div>

          <button
            @click="
              $router.push(
                `/institute/details/departament/${item.employ_meta.department.slug }`
              )
            "
            class="border border-[#F7483B] w-[155px] rounded-lg h-9 2xl:h-[48px] text-[#F7483B] flex justify-center items-center"
          >
            {{ store.dataTranslate["home.more_details"] }}
            <UIcon name="i-heroicons-arrow-long-right" class="ml-6 w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center font-Halvar" v-else>
      <p>{{ store.dataTranslate["header.do_not"] }}</p>
    </div>
  </div>  </div>
   
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const loading = ref(true);


const route = useRoute();

const data = ref(null);
onMounted(() => {
  store.getDepartament().then((res) => {
    data.value = res.data;
    loading.value = false;
  }).catch(() => {
    loading.value = false;
  })
  const prentPageOne = `/${route.fullPath.split('/')[1]}`
  store.getMenuStatick(prentPageOne, route.fullPath)
  if(store.menus){
    localStorage.setItem('departments', JSON.stringify(store.menuShow));
  }

});
</script>

<style scoped>
</style>