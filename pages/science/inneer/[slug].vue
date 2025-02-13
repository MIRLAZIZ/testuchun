<script setup>
import { computed } from "vue";
import { useHomeStore } from "~/store/home";
import { useContactStore } from "~/store/contact";

const storeContact = useContactStore();

const store = useHomeStore();
const route = useRoute();
const data = ref(null);
const loading = ref(true);

onMounted(() => {
  storeContact
    .getJurnalOne(route.params.slug)
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
  <div class="2xl:w-[1076px] w-full">
    <LoadingPage v-if="loading" />

    <div v-else>
      <div v-if="data">
        <div class="w-full">
          <div class="bg-white rounded-xl p-8">
            <UiCarousel :data="[data.photo]"  v-if="data.photo[store.currentImage]"/>

            <h1 class="text-[28px] box_text text-[#06203D] font-medium mb-6">
              {{ data?.title }}
            </h1>
            <div class="mt-8 2xl:pr-16 containerText" v-html="data.desc"></div>
          </div>
        </div>
      </div>
      <div v-else>
        <h1 class="text-center font-Halvar text-3xl">
          {{ store.dataTranslate["error.not_found"] }}
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