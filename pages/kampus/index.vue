<script setup>
import { useHomeStore } from "~/store/home";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
const store = useHomeStore();
const route = useRoute();
// console.log(useI18n().locale.value);

const items = ref(null);
const kampus = ref({
  uz: "Kampuslar",
  ru: "Kampusy",
  en: "Campuses",
});
const loading = ref(true);
const { locale } = useI18n();

let data = ref({
  title: kampus.value[locale.value],
  slugText: "",
  path: "/kampus",
});

onMounted(() => {
  store.menuShow = null;
  store.slugData = data;

  store
    .getKampus()
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
  <div class="w-full">
    <div>
      <UiBreadcrumb />
    </div>

    <LoadingPage v-if="loading" />
    <div class="w-full flex justify-center">
      <div
        v-if="items && items.data"
        class="mainContainer grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-[144px]"
      >
        <div
          class="w-full rounded-xl p-6 bg-white flex flex-col justify-between"
          v-for="item in items.data"
          :key="item.id"
        >
      
          <img 
          v-if="item.images && item.images[0]"
            :src="item.images[0][store.currentImage]"
            alt=""
            class="w-full h-[343px] object-cover rounded-xl"
          />
          <div>
            <h1 class="text-[24px] font-medium mt-6">{{ item.name }}</h1>
            <p class="mt-2 text-xl" v-html="item.first_description"></p>
          </div>
          <div>
            <hr class="my-4" />

            <div
              class="flex justify-between items-center cursor-pointer"
              @click="$router.push(`/kampus/${item.slug}`)"
            >
            
              <span class="text-[#5D5D5F]">
                {{ store.dataTranslate["home.more_details"] }}</span
              >
              <UIcon
                name="i-heroicons-arrow-up-right"
                class="text-[#F7483B] ml-2"
              />
            </div>

          </div>
        </div>
      </div>

      <div v-else>
        <h1 class="text-center font-Halvar text-3xl">
          {{ store.dataTranslate["header.do_not"] }}
        </h1>
      </div>
    </div>
  </div>
</template>


