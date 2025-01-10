<script setup>
import student from '~/assets/imgs/home/student.png'
const items = [
  {
    id: 1, img: student, fullname: "MUSIRMANOVA DILVAR",
    data: "Mening ismim Musirmanova Dilbar va men Toshkent menejment va iqtisodiyot instituti talabasiman. Mening tanlovim ushbu institutga tasodifan tushmadi: bu erda men izlayotgan narsamni aniq topdim — sifatli ta'lim, o'qitishga zamonaviy yondashuv va kasbiy va shaxsiy rivojlanish uchun imkoniyatlar."
  },
  {
    id: 1, img: student, fullname: "MUSIRMANOVA DILVAR",
    data: "Mening ismim Musirmanova Dilbar va men Toshkent menejment va iqtisodiyot instituti talabasiman. Mening tanlovim ushbu institutga tasodifan tushmadi: bu erda men izlayotgan narsamni aniq topdim — sifatli ta'lim, o'qitishga zamonaviy yondashuv va kasbiy va shaxsiy rivojlanish uchun imkoniyatlar."
  },
  {
    id: 1, img: student, fullname: "MUSIRMANOVA DILVAR",
    data: "Mening ismim Musirmanova Dilbar va men Toshkent menejment va iqtisodiyot instituti talabasiman. Mening tanlovim ushbu institutga tasodifan tushmadi: bu erda men izlayotgan narsamni aniq topdim — sifatli ta'lim, o'qitishga zamonaviy yondashuv va kasbiy va shaxsiy rivojlanish uchun imkoniyatlar."
  }
]
const carousel = ref(null)
// Function to go to the previous slide
const goToPrev = () => {
  console.log('ishladi');

  if (carousel.value) {
    carousel.value.prev(); // UCarouselning prev() funksiyasi
  }
};

// Function to go to the next slide
const goToNext = () => {
  if (carousel.value) {
    carousel.value.next(); // UCarouselning next() funksiyasi
  }
};




</script>

<template>
  <div class="px-[240px] mt-[101px]">
    <UCarousel ref="carousel" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden">

      <div class="container py-10 p-[96px] flex justify-between w-full relative">
           
        
        <!-- student  -->
        <div class="w-[793px]  ">
          <div class="flex items-center ">
            <img src="/assets/imgs/home/Rectangle 16.png" alt="">
            <h1 class="font-normal text-white ml-2">Talabalar bilan tanishuv </h1>
          </div>


          <img src="/assets/imgs/home/“.png" alt="" class="imgTranstion">

          <div class="flex flex-col h-[293px]  justify-between ">

            <div>
              <h1 class="text-[28px] text-white mt-9 relative z-10">{{ item.fullname }}</h1>
              <p class="text-[#88929D] text-[20px] leading-7 mt-6">
                {{ item.data }}

              </p>
            </div>

            <UButton class="bg-[#F7483B] w-[156px] h-[48px] flex justify-center">
              Batafsil
              <UIcon name="i-heroicons-arrow-long-right" class=" ml-2 w-6 h-6"  />
            </UButton>




          </div>
        </div>



        <div class="studentsImg">
          <img :src="item.img" alt="" class="studentsImg">


          <!-- carousel button  -->
        </div>
        <!-- arrow right  -->
        <div class="absolute right-9 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <!-- <img src=" /assets/imgs/home/angle-right.png" alt="" @click="$emit('right')"> -->
          <UIcon name="i-heroicons-chevron-right" class="w-9 h-16 text-[#72705F]" @click="goToNext" />
        </div>

        <!-- arrow left  -->
        <div class="absolute left-9 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <!-- <img                src="/assets//imgs/home/angle-left.png" alt="" @click="$emit('left')"> -->
          <UIcon name="i-heroicons-chevron-left" class="w-9 h-16 text-[#72705F]" @click="goToPrev" />

        </div>




      </div>

    </UCarousel>


  </div>
</template>


<style scoped>
.container {
  /* width: 1440px; */
  height: 532px;
  border-radius: 12px;
  background: #06203D;
}

.imgTranstion {
  width: 149px;
  height: 134px;
  translate: -17px 100px;
  position: relative;
  z-index: 1;

}

.studentsImg {
  width: 352px;
  height: 452px;
  border-radius: 12px;

}
</style>