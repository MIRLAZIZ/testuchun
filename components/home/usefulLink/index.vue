<template>
  <div class="flex justify-center">
    <ClientOnly>
      <div data-aos="fade-up" class="mainContainer h-[249px] my-[52px]">
        <h1 class="font-Halvar font-medium text-black sm:text-[28px] text-xl">
          {{ store.dataTranslate[props.title] }}
        </h1>
        <div class="relative mt-8">
          <UCarousel
            v-slot="{ item }"
            :items="props.items"
            class=""
            ref="carousel"
          >
            <a :href="item?.link" target="_blank">
              <div
                class="w-[343px] min-h-[183px] h-full rounded-xl px-8 py-6 flex flex-col justify-between bg-white mr-4"
              >
                <div class="w-[284px] h-[89px] overflow-hidden mb-3">
                  <img
                    :src="item?.photo[store.currentImage]"
                    class="w-full h-full object-contain"
                    v-if="item?.photo"
                  />
                   
                </div>
                <div>
                  <hr />
                  <p class="text-center mt-3">{{ item.title }}</p>
                </div>
               
              </div>
            </a>
          </UCarousel>
          <!-- arrow right  -->
          <div
            class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer translate-x-16 abs_right"
          >
            <!-- <img src=" /assets/imgs/home/angle-right.png" alt="" @click="$emit('right')"> -->
            <UIcon
              name="i-heroicons-chevron-right"
              class="w-9 h-16 text-[#72705F]"
              @click="goToNext"
            />
          </div>

          <!-- arrow left  -->
          <div
            class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer -translate-x-16 abs_left"
          >
            <!-- <img                src="/assets//imgs/home/angle-left.png" alt="" @click="$emit('left')"> -->
            <UIcon
              name="i-heroicons-chevron-left"
              class="w-9 h-16 text-[#72705F]"
              @click="goToPrev"
            />
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const props = defineProps({
  items: {
    type: Array,
    require: true,
    default: () => [],
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

const interval = ref(null); // Intervalni saqlash uchun ref

watch(
  () => props.items,
  (newValue) => {
    if (!newValue || newValue.length === 0) return;

    // Eski intervalni tozalash
    if (interval.value) {
      clearInterval(interval.value);
    }

    // Yangi interval yaratish
    interval.value = setInterval(() => {
      if (!carousel.value) return;
      if (carousel.value.page === carousel.value.pages) {
        carousel.value.select(0);
      } else {
        carousel.value.next();
      }
    }, 5000);
  },
  { deep: true, immediate: true }
);

// ✅ `setup()` ichida `onUnmounted` dan foydalanish
onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
});

</script>

<style scoped>
@media (max-width: 1600px) {
  .abs_right {
    right: 4em;
  }
  .abs_left {
    left: 4em;
  }
}
</style>