<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const items = ref([]);
const route = useRoute();
const loading = ref(true);

onMounted(() => {
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);

  if (store.menus) {
    localStorage.setItem("facultet", JSON.stringify(store.menuShow));
  }
  store
    .getFacultet()
    .then((res) => {
      items.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
});
</script>

<template>
  <div>
    <LoadingPage v-if="loading" />
    <div class="flex justify-center items-center " v-else>
    <div
      class=" grid girid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full"
      v-if="items.length"
    >
      <div
        class="w-full bg-white rounded-xl p-6 pb-5 flex flex-col  "
        v-for="item in items"
        :key="item.id"
      >
        <div class="flex items-start">
          <img :src="item?.icon" alt="" />
          <p class="font-medium ">{{ item.name[$i18n.locale] }}</p>

        </div>
        <div class="flex-grow"></div>
        <hr class="border my-4 border-[#DCE5F5]" />

        <router-link
          class=" text-[#5D5D5F] wrapper_bot cursor-pointer flex justify-between items-center"
          :to="`/institute/details/faculties-inner/${item.slug}`"
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
    <div class="w-full flex justify-center font-Halvar" v-else>
      <p>{{ store.dataTranslate["header.do_not"] }}</p>
    </div>
  </div>
  </div>
</template>



