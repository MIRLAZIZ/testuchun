<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()

const students = ref(null)
onMounted(() => {
  store.getStudents()
    .then(res => {
      students.value = res.data
    })
})
const carousel = ref(null)
const goToPrev = () => {
  if (carousel.value) {
    carousel.value.prev();
  }
};

const goToNext = () => {
  if (carousel.value) {
    carousel.value.next();
  }
};

</script>

<template>
  <div class="flex justify-center" >
    <div class="mainContainer  mt-[101px]">
      <UCarousel ref="carousel" v-slot="{ item }" :items="students?.data" :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden ">

        <div class="bg-[#06203D] container_wrap gap-4 sm:py-10 sm:p-[96px] px-[20px] py-[30px]  flex lg:justify-between justify-center w-full relative">
          <div data-aos="zoom-in" class="sm:w-[70%] w-full ">
            <div class="flex items-center ">
              <img src="/assets/imgs/home/Rectangle 16.png" alt="">
              <h1 class="font-normal text-white ml-2">{{ store?.dataTranslate['home.acquaintance'] }} </h1>
            </div>

             <img src="/assets/imgs/home/“.png" alt="" class="imgTranstion">
            <div class="flex flex-col  justify-between  gap-2">
          
              <div>
                <h1 class="text-[28px] text-white mt-9 relative z-10">{{ item?.name }}</h1>
                <p class="text-[#88929D] text-[20px] leading-7 mt-6" v-html="item?.dec?.length > 290 ? item.dec?.substring(0, 200) + '...' : item?.dec"></p>

              </div>
              <div class="flex justify-between items-center">
                      <button class="bg-[#F7483B] w-[156px]  h-[48px] flex justify-center rounded-lg items-center text-white " 
                        @click="$router.push(`students/student-inner/${item.id}`)">
                          {{ store?.dataTranslate['home.more_details'] }}
                          <UIcon name="i-heroicons-arrow-long-right" class=" ml-2 w-6 h-6" />
                        </button>
                        <div class=" student_block hidden  ">
                           <div class="flex pr-8 items-center gap-4">
                              <div class=" cursor-pointer ">
                                <UIcon name="i-heroicons-chevron-left" class="w-9 h-16 text-[#72705F] " @click="goToPrev" />
                              </div>
                              <div class="  cursor-pointer ">
                                <UIcon name="i-heroicons-chevron-right" class="w-9 h-16 text-[#72705F] " @click="goToNext" />
                              </div>
                           </div>
                        </div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in-up" class="studentsImg">
            <img :src="item?.photo[store.currentImage]" alt="" class="studentsImg ">

            <!-- carousel button  -->
          </div>
          <!-- arrow right  -->
          <div class="student_none ">
               <div class="absolute right-9 top-1/2 student_top transform -translate-y-1/2 cursor-pointer ">
                <UIcon name="i-heroicons-chevron-right" class="w-9 h-16 text-[#72705F] student_right" @click="goToNext" />
              </div>

              <!-- arrow left  -->
              <div class="absolute left-9 top-1/2 student_top transform -translate-y-1/2 cursor-pointer ">
                <UIcon name="i-heroicons-chevron-left" class="w-9 h-16 text-[#72705F] student_left" @click="goToPrev" />
              </div>
          </div>
         
        </div>
      </UCarousel>
    </div>
  </div>

</template>


<style scoped>
/* @media (max-width:1080px){
  .container_wrap {
      width: 750px !important;    
  }
} */
/* @media (min-width:1440px){
    .container_wrap{    
      width:1200px !important;
  }
} */
/* @media (max-width:1440px){
  .container_wrap {
    width: 1000px;
    margin:0px 5px;    
  }
} */
@media (max-width:600px){
    .studentsImg {
      width: 390px !important;
      height: 452px;
      border-radius: 12px;
      object-fit: fill;

    }
}
@media (max-width:450px){
    .studentsImg {
      width: 300px !important;
      height: 452px;
      border-radius: 12px;
      object-fit: fill;

    }
     
}
@media (max-width:800px){
    .container_wrap{
      /* display:flex; */
      flex-direction: column;
      align-items: center;
      gap: 32px;
      height:100% !important;
      width:100% !important;
    }
    .student_block{
      display: block ;
    }
     .student_none{
      display: none ;
    }
    .student_right{
      position: absolute;
      right: 20px;
      top:43%;
    }
    .student_left{
      position: absolute;
      right:140px;

    }
    .student_top{
      top:43%;

    }
}
.student_Container{
  width:1200px
}
/* .container_wrap {

  height: 532px;
  border-radius: 12px;
  background: #06203D;
} */

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
  object-fit: cover;
}
</style>