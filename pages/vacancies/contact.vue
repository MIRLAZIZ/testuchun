<template>
  <div class="bg-gray-100 min-h-screen py-10 vacancy-container">
    <div class="container mx-auto px-4">
      <!-- Sarlavha -->
      <h1 class="text-base font-normal text-gray-800 mb-6">KONTAKT</h1>

      <!-- Kontaktlar grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Telefon raqam -->
        <div class="bg-white p-4 rounded-lg border-[#E6EDFA]-1 flex flex-col gap-4">
          <div>
          <h2 class="text-lg font-medium mb-2 flex items-center gap-1">
           <img src="/assets/imgs/vacansiec/Call.png" alt=""> Telefon raqam
          </h2>
          <hr>
          </div>
          <div>
              <p class="text-gray-700">+998 99 200 02 02</p>
          <p class="text-gray-700">+998 99 200 02 02</p>
          </div>
         
        
        </div>

        <!-- Manzil -->
        <div class="bg-white p-4 rounded-lg flex flex-col gap-4 ">
          <div>
           <h2 class="text-base font-medium mb-2 flex items-center gap-1 ">
            <img src="/assets/imgs/vacansiec/Location.png" alt=""> Manzil
          </h2>
          <hr>
          </div>
         
          <p class="text-gray-700">
            Toshkent, Yakkasaroy tumani, Shota Rustaveli ko‘chasi, 114
          </p>
        </div>

        <!-- Pochta manzili -->
        <div class="bg-white p-4 rounded-lg flex flex-col gap-4 ">
          <div>
            <h2 class="text-base font-medium mb-2 flex items-center gap-1 ">
              <img src="/assets/imgs/vacansiec/Work.png" alt="">  Pochta manzili
            </h2>
            <hr>
          </div>
         
          <p class="text-gray-700">info@timeedu.uz</p>
        </div>

        <!-- Ijtimoiy tarmoqlar -->
        <div class="bg-white p-4 rounded-lg flex flex-col gap-4 ">
          <div>
            <h2 class="text-base font-medium mb-2 flex items-center gap-1">
              <img src="/assets/imgs/vacansiec/Add.png" alt=""> Ijtimoiy tarmoqlar
            </h2>
            <hr>
          </div>
         
          <div class="flex space-x-4 text-red-500">
            <img src="/assets/imgs/vacansiec/Social.png" alt="">
            <img src="/assets/imgs/vacansiec/youtube.png" alt="">
            <img src="/assets/imgs/vacansiec/instagram.png" alt="">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const items =[
//   {id:1,name:"Telifon raqam", description:"9992342332",description1:"122221221",}
// ]
</script>

<style>
/* Minimal styling uchun container */
.container {
   max-width: 1052px;
  margin: 0 auto;
  padding: 16px;
}
.vacancy-container{
   max-width: 1052px;
  margin: 0 auto;
  padding: 16px;
}
.container p{
  font-size: 20px;
  font-weight: 500;
}
.container h1{
  font-size: 24px;
  font-weight: 500;
}
.container h2{
  font-size: 16px;
  font-weight: 400;
}
@media (max-width:600px){
  .container p{
    font-size: 18px;
    font-weight: 500;
  }
  .container h1{
    font-size: 22px;
    font-weight: 500;
  }
  .container h2{
    font-size: 14px;
    font-weight: 400;
  }
}

</style>
