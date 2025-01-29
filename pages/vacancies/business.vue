// nuxt3-dagi loyiha
<template>
  <div class=" min-h-screen vacancy-container   ">
    <div class="container mx-auto ">
      <!-- Sarlavha -->
      <div class="bg-white w-full py-6 mb-6 h-[124px]">
          <h1 class="text-3xl font-medium text-center mb-4">SOTUV MENEJERI</h1>
          <div class="flex items-center justify-center mb-4 w-full gap-6">
              <div class="flex items-center gap-2 text-gray-500">
                <img src="/assets/imgs/vacansiec/Calender.png" alt="">
                <span  class="font-normal text-base">Dushanba - Juma</span>
              </div>
              <div class="flex items-center gap-2 text-gray-500">
                <img src="/assets/imgs/vacansiec/Time.png" alt="">
                <span class="font-normal text-base">11 11 2024</span>
              </div>
            </div>
      </div>

      <!-- Ma'lumotlar -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        

        <!-- Tajriba haqida -->
        <section v-for="item in 3" :key="item.id">
          <h2 class="text-lg font-medium  mb-2">Tajribalari:</h2>
          <p class="text-gray-700 mb-4 text-base font-normal">
            Toshkent menejment va iqtisodiyot instituti xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injineringi, dasturiy injiniring...
          </p>
        </section>

    

     
      
      </div>
      <div class="flex items-center justify-center mt-10">
          <button
            class=" bg-red-500 text-white py-2 px-4 font-medium text-sm rounded-lg hover:bg-red-600"
          >
            Resume jo'natish
          </button>
      </div>
       
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.vacancy-container {
  max-width: 1052px;
  margin: 0 auto;
  padding: 16px;
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
  button {
    font-weight: 500;
    font-size: 14px;
  }
}
/* .container {
  max-width: 1052px;
} */
</style>
