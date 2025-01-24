<template>
  <div class=" flex justify-center">
    <div class="grid grid-cols-3 gap-6 bg-white rounded-lg shadow-md  mainContainer h-[258px] translate-y-[-50%]">

      <!-- fristColumn -->
      <div class="border-r">
        <ul class="flex flex-col justify-between p-[55px] h-full">
          <hr class="bg-[#ECF1FB]">
          <li v-for="item in firstColumn" :key="item.id" class="flex ">

            <a :href="store.dataTranslate[item.link]" target="_blank">
              <span class="text-gray-800">{{ store.dataTranslate[item.name] }}</span>
              <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
            </a>


          </li>
        </ul>
      </div>



      <!-- Second Column -->
      <div class="border-r">
        <ul class="flex flex-col justify-between p-[55px] h-full">
          <hr class="bg-[#ECF1FB]">
          <li v-for="item in secondColumn" :key="item.id" class="flex cursor-pointer"
            @click="$router.push(item.link)">
            <span class="text-gray-800">{{ store.dataTranslate[item.name] }}</span>
            <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
          </li>
        </ul>
      </div>



      <!-- Third Column -->
      <div class="">
        <ul class="flex flex-col justify-between h-full p-[55px]">
          <hr class="bg-[#ECF1FB]">
          <li v-for="item in thirdColumn" :key="item.id" class="flex cursor-pointer"
            @click="$router.push(item.link)">
            <span class="text-gray-800">{{ store.dataTranslate[item.name] }}</span>
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
// const firstColumn = ['home.chemistry', 'home.schedule', 'home.maps', ];
// const secondColumn = [ 'home.career_center', 'home.british_council', 'home.events_calendar', ];
// const thirdColumn = ['home.vacancies', 'home.tender', 'home.contacts'];

const firstColumn = [
  { id: 1, name: 'home.chemistry', link: 'header.hemis_link' },
  { id: 2, name: 'home.schedule', link: 'header.table_link' },
  { id: 3, name: 'home.maps', link: 'header.map_link' }
];

const secondColumn = [
  { id: 4, name: 'home.career_center', link: '/career_center' },
  { id: 5, name: 'home.british_council', link: '/british_council' },
  { id: 6, name: 'home.events_calendar', link: '/events_calendar' }
];

const thirdColumn = [
  { id: 7, name: 'home.vacancies', link: '' },
  { id: 8, name: 'home.tender', link: '' },
  { id: 9, name: 'home.contacts', link: '' }
];



</script>

<style scoped></style>А