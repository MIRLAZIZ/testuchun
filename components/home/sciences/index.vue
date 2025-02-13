<template>
  <div class=" w-full flex justify-center">
    <div class="   mainContainer sm:block   flex justify-center ">
      <div class="bg-white  rounded-lg sm:grid sm:grid-cols-3 shadow-md   h-[258px] 2xl:translate-y-[-180%] xl:translate-y-[-140%] lg:translate-y-[-120%]  md:translate-y-[-90%] sm:translate-y-[-70%] translate-y-[-10%] box_wrapper_li">

     
      <!-- fristColumn -->
      <div class="sm:border-r">
        <ul class="flex flex-col justify-between p-[55px] h-full wrapper_ul">
          <hr class="bg-[#ECF1FB] wrapper_hidden">
          <li v-for="item in firstColumn" :key="item.id" class="flex ">
            <a :href="store.dataTranslate[item.link]" target="_blank">
              <span class="text-gray-800">{{ store.dataTranslate[item.name] }}</span>
              <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
            </a>
          </li>
        </ul>
      </div>



      <!-- Second Column -->
      <div class="sm:border-r">
        <ul class="flex flex-col justify-between p-[55px] h-full wrapper_ul">
          <hr class="bg-[#ECF1FB] wrapper_hidden">
          <li v-for="item in secondColumn" :key="item.id" class="flex cursor-pointer"
            @click="$router.push(item.link)">
            <span class="text-gray-800">{{ store.dataTranslate[item.name] }}</span>
            <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
          </li>
        </ul>
      </div>



      <!-- Third Column -->
      <div class="">
        <ul class="flex flex-col justify-between h-full p-[55px] wrapper_ul ">
          <hr class="bg-[#ECF1FB] wrapper_hidden">
          <li v-for="item in thirdColumn" :key="item.id" class="flex cursor-pointer"
            @click="$router.push(item.link)">
            <span class="text-gray-800">{{ store.dataTranslate[item.name] }}</span>
            <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
          </li>
        </ul>
      </div>
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
  { id: 4, name: 'home.career_center', link: '/page/career_center' },
  { id: 5, name: 'home.british_council', link: '/page/british_council' },
  { id: 6, name: 'home.events_calendar', link: '/page/events_calendar' }
];

const thirdColumn = [
  { id: 7, name: 'home.vacancies', link: '/vacancies' },
  { id: 8, name: 'home.tender', link: '/news/tender' },
  { id: 9, name: 'home.contacts', link: '/vacancies/contact' }
];



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
    /* width:345px; */
    width:100%;
  }
  .just_content{
    display: flex;
    justify-content: center;
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