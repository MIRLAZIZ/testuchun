<script setup>

import { useHomeStore } from '~/store/home'

const store = useHomeStore()
const props = defineProps({   
    data: {
        type: Array,
        require: true
    }
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
    <!-- <div class="2xl:w-[1000px] xl:w-[800px] lg:w-[620px] md:w-full sm:w-full box_wrapper "> -->
    <div class="w-full">
    <div class="relative w-full  " v-if="props.data">
        <UCarousel ref="carousel" :items="props.data" :ui="{
            item: 'basis-full',
            container: 'w-full rounded-lg ',
            indicators: {
                wrapper: 'relative bottom-0 flex overflow-x-auto  flex justify-start  [scrollbar-width:none] mt-3 '

            }
        }" indicators class="rounded-lg" >
            <template #default="{ item }">
                <img :src="item[store.currentImage]" class="w-full object-contain  " draggable="false" :class="{'cursor-zoom-in ': $route.fullPath === '/institute/structures'}">

                
            


            </template>



            <template #indicator="{ onClick, page, active }">
                <div class=" rounded-xl cursor-pointer" @click="onClick(page)"
                    :class="[ { 'border-2 border-[#06203D]': active }]">
                    <!-- {{ props.data[page - 1][store.currentImage] }} -->
                    <img :src="props?.data[page - 1][store?.currentImage]" alt="" class="min-w-[80px] h-[45px]   md:min-w-[160px] md:h-[90px] rounded-xl object-cover">



                </div>
            </template>
        </UCarousel>



     
          <div class="absolute right-9 top-[37%]  cursor-pointer" v-if="props.data.length > 1">
           
            <UIcon name="i-heroicons-chevron-right" class="w-9 h-16 text-white font-fol" @click="goToNext" />
          </div>

      
          <div class="absolute left-9 top-[37%]  cursor-pointer" v-if="props.data.length > 1">
            <UIcon name="i-heroicons-chevron-left" class="w-8 h-14 text-white font-bold" @click="goToPrev" />

          </div>

    </div>
</div>
</template>
<style  scoped>
    @media (max-width:640px){
    .box_wrapper{
        width:100%;
    }
    .box_wrapper_padding{
        padding:10px
    }
    .div_wrapper_flex{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      
    }
}
.snap-mandatory {
    gap: 16px;
}
</style>