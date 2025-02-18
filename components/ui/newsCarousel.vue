<!-- <template>
  <div class="flex justify-center mb-[104px] w-full overflow-hidden">
    <div class="w-full">
      <h1 class="font-Halvar font-medium text-[28px]">{{ props.title }}</h1>

      <div class="relative mt-6 w-full">
        <UCarousel v-slot="{ item }" :items="props?.items" ref="carousel" class="flex justify-center items-center overflow-hidden">
          <div
            class="w-[348px] rounded-xl p-3 flex flex-col bg-white mr-4 cursor-pointer"
            @click="store.getNewsOne(item?.slug), $router.replace(`/news-inner/${item.slug}`)"
          >
            <img
              width="320"
              height="200"
              :src="item?.images[0][store.currentImage]"
              class="w-[324px] h-[200px] mb-4 rounded-lg"
            />
a
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
            <h1 class="font-medium text-xl mt-3">
              {{
                item?.title?.length > 50
                  ? item?.title?.substring(0, 50) + "..."
                  : item?.title
              }}
            </h1>
          </div>
        </UCarousel>

        <div
          class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer xl:translate-x-16"
        >
          <UIcon
            name="i-heroicons-chevron-right"
            class="w-9 h-16 text-[#72705F]"
            @click="goToNext"
          />
        </div>

        <div
          class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer xl:-translate-x-16"
        >
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
    default: [],
  },
  title: {
    type: String,
    require: true,
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
</script>

<style scoped></style> -->


<script setup >
import { useHomeStore } from "~/store/home";

const items = [
  "https://picsum.photos/600/800?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/600/800?random=3",
  "https://picsum.photos/600/800?random=4",
  "https://picsum.photos/600/800?random=5",
  "https://picsum.photos/600/800?random=6",
];
const store = useHomeStore();
const props = defineProps({
  items: {
    type: Array,
    require: true,
    default: [],
  },
  title: {
    type: String,
    require: true,
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
</script>

<template>
  <div class="relative mt-6">
    <UCarousel v-slot="{ item }" :items="props?.items" ref="carousel">
      <div class="rounded-lg p-3 flex flex-col bg-white mr-4 cursor-pointer w-[324px]">
        <img 
      :src="item?.images[0][store.currentImage]"
       width="300" height="200" draggable="true" 
        class="w-full h-[200px] mb-4 "/>
  
        <!-- <div class="flex gap-2">
                <img
                  class="w-5 h-5"
                  src="/assets/imgs/talim/Calender.png"
                  alt=""
                />
                <p class="font-normal text-base text-[#5D5D5F] ">
                  {{ item?.date?.substring(0, 10) }}
                </p>
              </div>
              <h1 class="font-medium text-xl mt-3">
                {{
                  item?.title?.length > 50
                    ? item?.title?.substring(0, 50) + "..."
                    : item?.title
                }}
              </h1> -->
      </div>
     
    </UCarousel>


    <!-- <div
          class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer xl:-translate-x-16"
        >
          <UIcon
            name="i-heroicons-chevron-left"
            class="w-9 h-16 text-[#72705F]"
            @click="goToPrev"
          />
        </div>

        <div
          class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer xl:translate-x-16"
        >
          <UIcon
            name="i-heroicons-chevron-right"
            class="w-9 h-16 text-[#72705F]"
            @click="goToNext"
          />
        </div> -->

  </div>
</template>

