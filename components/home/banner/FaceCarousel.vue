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
    const fullUrl = url.startsWith("http") ? url : `https://${url}`;
    window.open(fullUrl, "_blank", "noopener,noreferrer");
  }
};


</script>
<template>
  <div class="flex  h-full">
    <div
      class="grid mainContainer w-full grid-cols-1 gridImg sm:mt-[50px] h-full lg:h-auto relative "
    >
      <!-- caption  -->

      <div
        class="h-full flex flex-col justify-center items-center lg:items-start xl:pr-10  lg:px-0 w-full  "
        @click="goToExtraLink(props?.activeItem?.url)"
      >
        <div v-show="props?.activeItem?.action == 1" class="  flex  w-full justify-center   items-center">
       
          <h1
            class="font-Halvar 2xl:text-[64px] 2xl:pr-[100px]  lg:text-[52px] font-medium text-white 2xl:leading-[76.8px] w-[75%] lg:w-full text-[32px]"
          >
            {{ props?.activeItem?.title }}
          </h1>
       
         
        </div>

        <div class="mt-7 w-[75%]" v-show="props?.activeItem?.action == 1">
          <button
            @click.stop="store.gotoRegister"
            class="text-white  py-3 bg-[#F7483B] md:w-[216px] w-[180px] font-medim rounded-lg flex justify-center items-center 2xl:text-[22px]"
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
        class="justify-end  hidden  lg:flex"
        @click="goToExtraLink(props?.activeItem?.url)"
      >
        <img
          src="/assets/imgs/home/Group 1.png"
          alt=""
          class="w-[509px] h-[497px] object-cover"
        />
      </div>
     

    </div>

    <!-- left arrow -->
    <div
      class="absolute left-0  top-1/2 transform -translate-y-1/2 2xl:right-16 cursor-pointer z-30 flex items-center translate-x-5"
      @click="$emit('left')"
    >
      <UIcon name="i-heroicons-chevron-left" class="w-12 h-20 text-white" />
    </div>

    <!-- arrow right  -->
    <div
      class="absolute  right-0 2xl:right-16 top-1/2 transform -translate-y-1/2 cursor-pointer flex items-center z-30 justify-end -translate-x-5"
      @click="$emit('right')"
    >
      <UIcon name="i-heroicons-chevron-right" class="w-12 h-20 text-white" />
    </div>
    <!-- <Modal :isOpen="modalVisible" @close="closeModal" class="z-50" /> -->

  </div>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  .gridImg {
    grid-template-columns: auto 509px;
  }
}
</style>




