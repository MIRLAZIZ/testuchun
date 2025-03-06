<script setup>
import { computed } from "vue";
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const route = useRoute();

onMounted(() => {
  const parentPage = `/${route.fullPath.split("/")[1]}`;
  store.menuFind(parentPage, route.fullPath);
});

// Ma'lumotlarni yagona massivga keltirami
const processedMenus = computed(() => {
  let data = store.menuShow?.dinamikMenus?.flatMap((item) =>
    Object.entries(item.forms).flatMap(([, formArray]) => formArray)
  );
  if (data) {
    data.sort((a, b) => Number(a.order) - Number(b.order));
  }

  return data || [];
});
</script>

<template>
  <div class="lg:max-w-[calc(100%-348px)] w-full">
    <loading-page v-if="store.dinamiMenuLoading" />

    <div>
      <div v-if="processedMenus && processedMenus.length">
        <div
          v-for="(data, index) in processedMenus"
          :key="data.id"
          class="w-full"
          :class="{ 'mt-10': index !== 0 && data.type !== 'formmenu3' }"
        >
          <!-- formmmenu1 -->
          <div v-if="data.type === 'formmenu'" class="bg-white rounded-xl p-8">
            <UiCarousel :data="data.photo" />
            <h1 class="text-[28px] box_text text-[#06203D] font-medium mb-6 mt-8">
              {{ data?.title }}
            </h1>
            <div class="mt-8 2xl:pr-16 containerText" v-html="data.text"></div>

            <button
              v-if="store.menuShow?.dinamikMenus[0]?.file"
              @click="
                store.downloadFile(
                  store.menuShow?.dinamikMenus[0]?.file,
                  store.menuShow?.dinamikMenus[0]?.title
                )
              "
              class="bg-[#F7483B] mt-4 sm:w-[194px] w-[160px] no-print h-[48px] flex justify-center items-center font-medium rounded-lg text-white"
            >
              {{ store.dataTranslate["header.download"] }}
              <img
                src="/assets/imgs/kampus/Download.png"
                alt=""
                class="w-5 h-5 ml-4 object-cover"
              />
            </button>
          </div>

          <div v-else-if="data.type === 'formmenu1'">

         <SciencePost :data="data.categories" v-if="$route.fullPath === '/science/seminars'"/>
          
           <HomeUsefulLinkCarusel
            v-else
            :items="data.categories"
            :title="data.title"
          />
          </div>
         

          <!-- fomrmenu3  -->
          <UiPositionCard v-else-if="data.type === 'formmenu3'" :data="data" />
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

<style scoped>
.containerText ::v-deep(p) {
  font-size: 20px !important;
}
</style>