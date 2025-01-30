<script setup>
import student from '~/assets/imgs/home/student.png'
import { useHomeStore } from '~/store/home'

const store = useHomeStore()
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

const students = ref(null)


onMounted(() => {
  store.getStudents()
    .then(res => {

      students.value = res.data
    })
})
const carousel = ref(null)
// Function to go to the previous slide
const goToPrev = () => {

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
  <div class="flex justify-center" >



    <div class="mainContainer mt-[101px]">

      <UCarousel ref="carousel" v-slot="{ item }" :items="students?.data" :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden">

        <div class="container py-10 p-[96px] flex justify-between w-full relative">
 
          <!-- student  -->
          <div class="w-[793px] ">
            <div class="flex items-center ">
              <img src="/assets/imgs/home/Rectangle 16.png" alt="">
              <h1 class="font-normal text-white ml-2">{{ store?.dataTranslate['home.acquaintance'] }} </h1>
            </div>

             <img src="/assets/imgs/home/“.png" alt="" class="imgTranstion">
            <div class="flex flex-col h-[293px]  justify-between ">

              <div>
                <h1 class="text-[28px] text-white mt-9 relative z-10">{{ item?.name }}</h1>
                <p class="text-[#88929D] text-[20px] leading-7 mt-6">
                  {{ item?.position?.length > 290 ? item.position?.substring(0, 290) + '...' : item?.position }}

                </p>
              </div>

              <button class="bg-[#F7483B] w-[156px] h-[48px] flex justify-center rounded-lg items-center text-white " 
              @click="$router.push(`students/${item.id}`)">
                {{ store?.dataTranslate['home.more_details'] }}
                <UIcon name="i-heroicons-arrow-long-right" class=" ml-2 w-6 h-6" />
              </button>
            </div>
          </div>

          <div class="studentsImg">
            <img :src="item?.photo[store.currentImage]" alt="" class="studentsImg">

            <!-- carousel button  -->
          </div>
          <!-- arrow right  -->
          <div class="absolute right-9 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <UIcon name="i-heroicons-chevron-right" class="w-9 h-16 text-[#72705F]" @click="goToNext" />
          </div>

          <!-- arrow left  -->
          <div class="absolute left-9 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <UIcon name="i-heroicons-chevron-left" class="w-9 h-16 text-[#72705F]" @click="goToPrev" />
          </div>
        </div>
      </UCarousel>
    </div>
  </div>

</template>


<style scoped>
@media (max-width:1024px){
    .container{
      /* display:flex;
      flex-direction: column-reverse;
      height:100%; */

    }
}
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