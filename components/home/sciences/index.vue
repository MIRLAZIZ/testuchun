<template>
    <div class="px-[240px]">
      <div class="grid grid-cols-3 gap-6 bg-white rounded-lg shadow-md  h-[258px] translate-y-[-50%]">


        <!-- First Column -->
        <div class="border-r">
          <ul class="flex flex-col justify-between p-[55px] h-full">
            <hr class="bg-[#ECF1FB]">
            <li v-for="(item, index) in firstColumn" :key="index" class="flex ">

              <span class="text-gray-800">{{ item }}</span>
              <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
            </li>
          </ul>
        </div>


  
        <!-- Second Column -->
        <div class="border-r">
          <ul class="flex flex-col justify-between p-[55px] h-full">
            <hr class="bg-[#ECF1FB]">
            <li v-for="(item, index) in secondColumn" :key="index" class="flex">
              <span class="text-gray-800">{{ item }}</span>
              <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
            </li>
          </ul>
        </div>


  
        <!-- Third Column -->
        <div class="">
          <ul class="flex flex-col justify-between h-full p-[55px]">
            <hr class="bg-[#ECF1FB]">
            <li v-for="(item, index) in thirdColumn" :key="index" class="flex">
              <span class="text-gray-800">{{ item }}</span>
              <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Ro'yxatlar uchun ma'lumotlar
  const firstColumn = ['Химия', 'Центр карьеры', 'Вакансии'];
  const secondColumn = ['Расписание', 'Британский совет', 'Тендер'];
  const thirdColumn = ['Maps', 'Календарь событий', 'Контакты'];
  </script>
  
  <style scoped>
  /* Qo'shimcha uslublarni shu yerga qo'shishingiz mumkin */
  </style>
  