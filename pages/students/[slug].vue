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
          <h1 class="sm:text-[28px] text-base box_text text-[#06203D] font-medium mb-6">
            {{ data?.title }}
          </h1>
          <div class="mt-8 2xl:pr-16  sm:text-xl text-sm" v-html="data.text"></div>
        </div>

        <!-- formmenu2 -->
        <HomeUsefulLinkCarusel
          v-else-if="data.type === 'formmenu1'"
          :items="data.categories"
          :title="data.title"
        />

        <!-- fomrmenu3  -->
        <UiPositionCard v-else-if="data.type === 'formmenu3'" :data="data" />
      </div>
    </div>
    <div v-else>
      <h1 class="text-center font-Halvar sm:text-3xltext-lg">Ma'lumotlar mavjud emas</h1>
    </div>
  </div>
</template>

