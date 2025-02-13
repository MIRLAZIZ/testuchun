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
    class="grid lg:grid-cols-2 mainContainer lg:px-56 md:mt-[50px]"
    style="grid-template-columns: 65% 35%"
  >
    <!-- caption  -->

    <div
      class="lg:h-[500px] h-full 2xl:w-[90%] home_wrapper flex flex-col lg:justify-between justify-center"
      @click="goToExtraLink(props?.activeItem?.url)"
    >
      <div v-if="props?.activeItem?.action == 0">
        <h1 class="caption mt-[60px]">
          {{ props?.activeItem?.title }}
        </h1>
      </div>
      <div class="Carusel_button" v-if="props?.activeItem?.action == 0">
        <button
          @click="openModal"
          class="sm:mt-10 text-white md:text-base text-[12px] bg-[#F7483B] md:w-[216px] w-[180px] h-[48px]  font-medium rounded-lg flex justify-center items-center"
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
      class="flex justify-end boder box_img_hidden"
      @click="goToExtraLink(props?.activeItem?.url)"
    >
      <img
        src="/assets/imgs/home/Group 1.png"
        alt=""
        class="w-[509px] h-[497px]"
      />
    </div>
    <!-- left arrow -->
    <div
      class="absolute home_left 2xl:left-24 left-1 top-1/2 transform -translate-y-1/2 cursor-pointer h-[150px] w-[150px] flex items-center"
      @click="$emit('left')"
    >
      <UIcon name="i-heroicons-chevron-left" class="w-8 h-28 text-white" />
    </div>

    <!-- arrow right  -->
    <div
      class="absolute home_right 2xl:right-24 right-1 top-1/2 transform -translate-y-1/2 cursor-pointer h-[150px] w-[150px] flex items-center justify-end"
      @click="$emit('right')"
    >
      <UIcon name="i-heroicons-chevron-right" class="w-8 h-28 text-white" />
    </div>

    <Modal :isOpen="modalVisible" @close="closeModal" />
  </div>
</template>


<style scoped>
/* .home_wrapper{
    margin-left:9em;
} */
.caption {
  font-family: "Halvar Breitschrift";
  font-size: 64px;
  font-weight: 500;
  line-height: 76.8px;
  /* margin-left:5em; */
  color: #ffffff;
}
@media (max-width: 1024px) {
  .caption {
    font-family: "Halvar Breitschrift";
    font-size: 40px;
    font-weight: 500;
    width: 500px;
  }
}

@media (max-width: 1500px) {
  .caption {
    font-family: "Halvar Breitschrift";
    font-size: 52px;
    font-weight: 500;
    width: 730px;
    line-height: 64px;
  }
}
@media (max-width: 1200px) {
  .box_img_hidden {
    display: none;
  }
  .mainContainer {
    display: flex;
    grid-template-columns: 1fr;
  }
  .caption {
    text-align: center;
    width: 95%;
  }
  .home_wrapper {
    text-align: center;
  }
  .Carusel_button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 800px) {
  .home_wrapper {
    display: flex;
    /* justify-content: flex-end; */
    /* margin-left: 3em; */
    justify-content: flex-start;
  }
  .caption {
    font-family: "Halvar Breitschrift";
    font-size: 24px;
    font-weight: 500;
    width: 330px;
    line-height: 55px;
  }
}

@media (max-width: 640px) {
  .home_left {
    position: absolute;
    left: 12px;
  }
  .home_right {
    position: absolute;
    right: 12px;
  }
  .Carusel_button {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .caption {
    font-family: "Halvar Breitschrift";
    font-size: 28px;
    font-weight: 500;
    width: 84%;
    text-align: left;
  }
  .home_wrapper {
    text-align: flex-start;
  }
}
</style>