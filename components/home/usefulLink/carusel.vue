<template>
  <div class="flex justify-center">
    <!-- <div class="mainContainer  "> -->
    <div class="w-full">
      <h1 class="font-Halvar font-medium sm:text-[28px] text-[22px]">
        {{ props?.items[0]?.title }}
      </h1>

      <div class="relative mt-6">
        <UCarousel
          v-slot="{ item }"
          :items="props?.items[0]?.posts"
          ref="carousel"
          class=""
        >
          <div class="w-[348px] rounded-xl p-3 mr-6 flex flex-col bg-white">
            <img
              :src="item?.images[0][store.currentImage]"
              width="320"
              height="200"
              class="w-[324px] h-[200px] mb-4 rounded-lg"
            />

            <div class="flex gap-2">
              <img
                class="w-5 h-5"
                src="/assets/imgs/talim/Calender.png"
                alt=""
              />
              <p class="font-normal text-base text-[#5D5D5F] wrapper_bot">
                {{ item?.date?.substring(0, 10) }}
              </p>
            </div>
            <h1 class="font-medium sm:text-xl text-sm mt-3">
              {{ item?.title }}
            </h1>
          </div>
        </UCarousel>

        <!-- arrow right  -->
        <div class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer">
          <!-- <img src=" /assets/imgs/home/angle-right.png" alt="" @click="$emit('right')"> -->
          <UIcon
            name="i-heroicons-chevron-right"
            class="w-9 h-16 text-[#72705F]"
            @click="goToNext"
          />
        </div>

        <!-- arrow left  -->
        <div class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer">
          <!-- <img                src="/assets//imgs/home/angle-left.png" alt="" @click="$emit('left')"> -->
          <UIcon
            name="i-heroicons-chevron-left"
            class="w-9 h-16 text-[#72705F]"
            @click="goToPrev"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const props = defineProps({
  items: {
    type: Array,
    require: true,
    default: () => ([]),
  },
});

const carousel = ref(null);
// Function to go to the previous slide
const goToPrev = () => {
  if (carousel.value) {
    carousel.value.prev(); // UCarouselning prev() funksiyasi
  }
};

// Function to go to the next slide
const goToNext = () => {
  if (carousel.value) {
    carousel.value.next(); // UCarouselning next() funksiyasi
  }
};


onMounted(() => {
  setInterval(() => {
    if (!carousel.value) return;

    if (carousel.value.page === carousel.value.pages) {
      return carousel.value.select(0);
    }

    carousel.value.next();
  }, 3000);
});
</script>

<style scoped>
.snap-mandatory {
  gap: 16px;
}
</style>