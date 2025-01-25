<script setup>

import imgcarousel from '~/assets/imgs/kampus/carousel.png'
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

    <div class="relative  " v-if="props.data">
        <UCarousel ref="carousel" :items="props.data" :ui="{
            item: 'basis-full',
            container: 'rounded-lg',
            indicators: {
                wrapper: 'relative bottom-0 flex overflow-x-auto   [scrollbar-width:none] mt-3 '

            }
        }" indicators class="rounded-lg" >
            <template #default="{ item }">
                <img :src="item[store.currentImage]" class="w-full h-[566px] object-cover " draggable="false">
            </template>

            <template #indicator="{ onClick, page, active }">
                <div class=" rounded-xl cursor-pointer" @click="onClick(page)"
                    :class="[{ 'ml-3': page === 1 }, { 'border-2 border-[#06203D]': active }]">
                    <!-- {{ props.data[page - 1][store.currentImage] }} -->
                    <img :src="props.data[page - 1][store.currentImage]" alt="" class="min-w-[160px] h-[90px] rounded-xl object-cover">

                </div>
            </template>
        </UCarousel>



     
          <div class="absolute right-9 top-[37%]  cursor-pointer">
           
            <UIcon name="i-heroicons-chevron-right" class="w-9 h-16 text-white font-fol" @click="goToNext" />
          </div>

      
          <div class="absolute left-9 top-[37%]  cursor-pointer">
            <UIcon name="i-heroicons-chevron-left" class="w-8 h-14 text-white font-bold" @click="goToPrev" />

          </div>

    </div>

</template>
