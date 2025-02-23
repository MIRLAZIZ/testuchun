<template>
  <div class=" min-h-screen vacancy-container   ">
    <div class="container mx-auto ">
      <!-- Sarlavha -->
      <div class="bg-white  w-full p-6 mb-6  mt-10 rounded-xl">
          <h1 class="text-3xl font-medium text-center mb-4">{{store.vacansiecId?.title}}</h1>
          <div class="flex items-center justify-center mb-4 w-full gap-6">
              <div class="flex items-center gap-2 text-gray-500">
                <img src="/assets/imgs/vacansiec/Calender.png" alt="">
                <span  class="font-normal text-base">{{store.vacansiecId?.week}}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-500">
                <img src="/assets/imgs/vacansiec/Time.png" alt="">
                <span class="font-normal text-base">{{store.vacansiecId?.date}}</span>
              </div>
            </div>
      </div>
      <!-- {{id}} -->

      <!-- Ma'lumotlar -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        

        <!-- Tajriba haqida -->
        <section >
          <!-- <h2 class="text-lg font-medium  mb-2">Tajribalari:</h2> -->
          <p class="text-gray-700 mb-4 text-base font-normal" v-html="store.vacansiecId?.desc">
          </p>
          <!-- {{store.vacansiecId?.id}} -->
        </section>  
    
      </div>
      <!-- {{store.siteInfo?.data?.telegram}} -->
      <div class="flex items-center justify-center mt-10 mb-[104px]">
          <a :href="store1?.dataTranslate['resume.telegram']" target="_blank"
            class=" bg-red-500 text-white py-2 px-4 font-medium text-sm rounded-lg cursor-pointer hover:bg-red-600"
          >
          {{ store1.dataTranslate["contract.resume"] }}
          </a>
      </div>
       
    </div>
  </div>
</template>

<script setup>
import { onMounted,  watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useContactStore } from '~/store/contact';
import { useHomeStore } from '~/store/home'

const store1 = useHomeStore();

const store = useContactStore();
const vacansiec1 = ref(null);
const route = useRoute();

onMounted(() => {
   store.getVacansiecId(route.params.id)
   
  
});


</script>

<style>
.vacancy-container {
  max-width: 1052px;
  margin: 0 auto;
}
@media (max-width:600px){
  .vacancy-container h1{
    font-size: 20px;
    font-weight: 500;
  }
  .vacancy-container span{
    font-size: 16px;
    font-weight: 400;
  }
  .vacancy-container h2{
    font-size: 16px;
    font-weight: 500;
  }
  .vacancy-container p{
    font-size: 12px;
    font-weight: 400;
  }
  a {
    font-weight: 500;
    font-size: 14px;
  }
}
/* .container {
  max-width: 1052px;
} */
</style>
