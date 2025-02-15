<template>
  <div class="mt-[64px]">
    <LoadingPage v-if="loading" />
    <div v-else>
      <!-- Tabs -->
      <div class="flex space-x-8 cursor-pointer text-sm text-[#010101]">
        <div
          class="pb-3 font-manrope"
          :class="{ 'border-b-2 border-[#F7483B]': showModal === 1 }"
          @click="showModal = 1"
        >
          {{ store.dataTranslate["home.bachelor"] }}
        </div>

        <div
          class="pb-3 font-manrope"
          @click="showModal = 0"
          :class="{ 'border-b-2 border-[#F7483B]': showModal === 0 }"
        >
          {{ store.dataTranslate["header.magistr"] }}
        </div>
      </div>
      <hr />

      <!-- Grid Cards -->
      <div
        v-if="store.educationData"
        class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 cursor-pointer gap-6 mt-6"
      >
        <div
          v-for="card in store.educationData[showModal]?.children"
          :key="card.id"
          class="bg-white shadow-md rounded-xl p-6 pb-5"
          @click="$router.push(`/education-inner/${card.slug}`)"
        >
        
          <h3
            v-if="showModal == 1"
            class="text-[#2E4259] mb-2 sm:text-base text-sm"
          >
            {{ store.dataTranslate["home.bachelor"] }}
          </h3>

          <h3 v-else class="text-[#2E4259] mb-2 sm:text-base text-sm">
            {{ store.dataTranslate["header.magistr"] }}
          </h3>

          <p class="font-medium sm:text-base text-sm">{{ card.name }}</p>

          <hr class="my-4" />

          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex">
                <img
                  src="@/assets/imgs/kampus/Card 2.png"
                  alt=""
                  class="w-5 h-5"
                />
                <span class="text-[#5D5D5F] ml-2 sm:text-base text-sm">{{
                  store.dataTranslate["header.daytime"]
                }}</span>
              </div>
              <span class="font-medium text-[#06203D] sm:text-base text-sm">{{
                card.daytime
              }}</span>
            </div>
            <div
              v-if="showModal == 1"
              class="flex items-center justify-between"
            >
              <div class="flex">
                <img
                  src="@/assets/imgs/kampus/Card 2.png"
                  alt=""
                  class="w-5 h-5"
                />
                <span class="text-[#5D5D5F] ml-2 sm:text-base text-sm">{{
                  store.dataTranslate["header.surface"]
                }}</span>
              </div>
              <span class="font-medium text-[#06203D] sm:text-base text-sm">{{
                card.part_time
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useHomeStore } from "~/store/home";
const store = useHomeStore();
const loading = ref(true);
onMounted(() => {
  store
    .getEducation()
    .then(() => {
      showModal.value = 1;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
});
const showModal = ref(null);
</script>

<style>
</style>