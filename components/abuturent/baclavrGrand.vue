<template>
  <div class="mt-[64px]">
    <!-- Tabs -->
    <div class="flex space-x-8 text-sm text-[#010101]">
      <button
        class="pb-3 font-manrope "
        :class="{'border-b-2 border-[#F7483B]': showModal === 1}"
        @click="showModal = 1"
      >
        Bakalavr
      </button>

      <button class="pb-3 font-manrope" @click="showModal = 0"         :class="{'border-b-2 border-[#F7483B]': showModal === 0}">
        Magistratura
      </button>
    </div>
    <hr  />


    <!-- Grid Cards -->
    <div
      v-if="store.educationData"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6"
    >
      <div
        v-for="card in store.educationData[showModal]?.children"
        :key="card.id"
        class="bg-white shadow-md rounded-xl p-6 pb-5"
      >
        <h3 v-if="showModal == 1" class="text-[#2E4259] mb-2">Bakalavr</h3>
        <h3 v-else class="text-[#2E4259] mb-2">Magistratura</h3>

        <p class="font-medium">{{ card.name }}</p>

        <hr class="my-4" />

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <div class="flex">
              <img
                src="@/assets/imgs/kampus/Card 2.png"
                alt=""
                class="w-5 h-5"
              />
              <span class="text-[#5D5D5F] ml-2">Kunduzgi:</span>
            </div>
            <span class="font-medium text-[#06203D]">{{ card.daytime }}</span>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex">
              <img
                src="@/assets/imgs/kampus/Card 2.png"
                alt=""
                class="w-5 h-5"
              />
              <span class="text-[#5D5D5F] ml-2">Sirtqi:</span>
            </div>
            <span class="font-medium text-[#06203D]">{{ card.part_time }}</span>
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
onMounted(() => {
  store.getEducation().then(() => {
    showModal.value = 1;
  });
  // console.log()
});
const showModal = ref(null);

// const safeChildren = computed(() => {
//   return store.educationData.length > 0 ? store.educationData[0]?.children || [] : [];
// });

const cards = [
  {
    id: 1,
    code: "6040100",
    name: "Iqtisodiyot",
    dayPrice: "19 500 000 UZS",
    eveningPrice: "19 500 000 UZS",
  },
  {
    id: 2,
    code: "6040100",
    name: "Iqtisodiyot",
    dayPrice: "19 500 000 UZS",
    eveningPrice: "19 500 000 UZS",
  },
  {
    id: 3,
    code: "6040100",
    name: "Iqtisodiyot",
    dayPrice: "19 500 000 UZS",
    eveningPrice: "19 500 000 UZS",
  },
  {
    id: 4,
    code: "6040100",
    name: "Iqtisodiyot",
    dayPrice: "19 500 000 UZS",
    eveningPrice: "19 500 000 UZS",
  },
  {
    id: 5,
    code: "6040100",
    name: "Iqtisodiyot",
    dayPrice: "19 500 000 UZS",
    eveningPrice: "19 500 000 UZS",
  },
  {
    id: 6,
    code: "6040100",
    name: "Iqtisodiyot",
    dayPrice: "19 500 000 UZS",
    eveningPrice: "19 500 000 UZS",
  },
];
</script>

<style>
</style>