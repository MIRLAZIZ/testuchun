<script setup>
import { useHomeStore } from "~/store/home";
const modalVisible = ref(false);
const openModal = () => (modalVisible.value = true);
const closeModal = () => (modalVisible.value = false);

const props = defineProps({
  activeItem: {
    type: Object,
    required: true,
  },
});

const store = useHomeStore();
const goToExtraLink = (url) => {
  if (url) {
    window.open(url, "_blank");
  }
};
</script>
<template>
  <div
    class="grid mainContainer lg:px-56 mt-[50px] lg:grid-cols-[56%_44%] h-full lg:h-auto relative xl:grid-cols-[62%_38%]"
  >
    <!-- caption  -->

    <div
      class="h-full flex flex-col items-center lg:items-start lg:justify-between justify-center w-full"
      @click="goToExtraLink(props?.activeItem?.url)"
    >
      <div v-if="props?.activeItem?.action == 1">
        <h1
          class="font-Halvar 2xl:text-[64px] text-[52px] font-medium xl:mt-[60px] text-white leading-[76.8px] w-full"
        >
          {{ props?.activeItem?.title }}
        </h1>
      </div>

      <div class="" v-if="props?.activeItem?.action == 1">
        <button
          @click.stop="openModal"
          class="sm:mt-10 text-white md:text-base xl:text-[12px] py-3 bg-[#F7483B] md:w-[216px] w-[180px] font-medim rounded-lg flex justify-center items-center text-[18px]"
        >
          {{ store.dataTranslate["home.submit_application"] }}
          <UIcon
            name="i-heroicons-arrow-long-right"
            class="w-5 h-5 text-white ml-2"
          />
        </button>
      </div>
    </div>
    <!-- window img  -->
    <div
      class="justify-end hidden lg:flex"
      @click="goToExtraLink(props?.activeItem?.url)"
    >
      <img
        src="/assets/imgs/home/Group 1.png"
        alt=""
        class="w-[509px] h-[497px] object-cover"
      />
    </div>
    <!-- left arrow -->
    <div
      class="absolute left-0 2xl:-translate-x-28 lg:top-1/2  lg:transform lg:-translate-y-1/2 cursor-pointer h-[150px] w-[150px] flex items-center translate-x-16 md:translate-x-0  bottom-[20%] "
      @click="$emit('left')"
    >
      <UIcon name="i-heroicons-chevron-left" class="w-12 h-20 text-white" />
    </div>

    <!-- arrow right  -->
    <div
      class="absolute 2xl:translate-x-28 right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 cursor-pointer h-[150px] w-[150px] flex items-center justify-end  bottom-[20%] -translate-x-16 md:translate-x-0  "
      @click="$emit('right')"
    >
      <UIcon name="i-heroicons-chevron-right" class="w-12 h-20 text-white" />
    </div>

    <Modal :isOpen="modalVisible" @close="closeModal" class="z-50" />
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  
}

</style>


