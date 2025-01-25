<template>
  <div class=" flex justify-center">
    <div class="sm:grid sm:grid-cols-3 sm:gap-6 bg-white rounded-lg shadow-md  mainContainer h-[258px] translate-y-[-50%] box_wrapper_li">


      <!-- First Column -->
      <div class="sm:border-r">
        <ul class="flex flex-col justify-between p-[55px] h-full wrapper_ul">
          <hr class="bg-[#ECF1FB] wrapper_hidden">
          <li v-for="(item, index) in firstColumn" :key="index" class="flex ">

            <span class="text-gray-800">{{ store.dataTranslate[item] }}</span>
            <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
          </li>
        </ul>
      </div>



      <!-- Second Column -->
      <div class="sm:border-r">
        <ul class="flex flex-col justify-between p-[55px] h-full wrapper_ul">
          <hr class="bg-[#ECF1FB] wrapper_hidden">
          <li v-for="(item, index) in secondColumn" :key="index" class="flex">
            <span class="text-gray-800">{{ store.dataTranslate[item] }}</span>
            <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
          </li>
        </ul>
      </div>



      <!-- Third Column -->
      <div class="">
        <ul class="flex flex-col justify-between h-full p-[55px] wrapper_ul ">
          <hr class="bg-[#ECF1FB] wrapper_hidden">
          <li v-for="(item, index) in thirdColumn" :key="index" class="flex">
            <span class="text-gray-800">{{ store.dataTranslate[item] }}</span>
            <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from '~/store/home';
const store = useHomeStore();
// Ro'yxatlar uchun ma'lumotlar
const firstColumn = ['home.chemistry', 'home.career_center', 'home.vacancies'];
const secondColumn = ['home.schedule', 'home.british_council', 'home.tender'];
const thirdColumn = ['home.maps', 'home.events_calendar', 'home.contacts'];
</script>

<style scoped>
@media (max-width:800px){
  .wrapper_ul{
    padding:51px 10px;
    gap:20px;
  }
}
@media (max-width:640px){
  .box_wrapper_li {
    display: flex;
    flex-direction: column;
    height: auto;
    width:345px;
  }
  .wrapper_hidden{
    display: none;
  }
  .wrapper_ul{
    padding:10px !important;
    gap:20px;
  }
}
</style>