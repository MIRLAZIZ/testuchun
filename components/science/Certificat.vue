<template>
    <div>
<div class="main_branch">
        <div class="2xl:w-[1076px] grid 2xl:grid-cols-3  2xl:gap-6 xl:w-[900px] xl:gap-2 xl:justify-center xl:grid xl:grid-cols-3 lg:w-[650px]  md:w-[600px] lg:grid-cols-2  lg:gap-2 sm:w-[600px]  sm:grid-cols-2 sm:gap-4 main_box">
            <div class="2xl:w-[348px] rounded-xl p-3 border-[#E6EDFA] border bg-[#FFFFFF] xl:w-[300px] main_box_wrapper " v-for="item in props.data" :key="item.id" @click="navigateToPage(item)">
                <div class="2xl:w-[324px] h-[200px] mb-4 xl:w-[100%] lg:w-[100%]">
                    <!-- <img src="../../assets/imgs/talim/instetut.svg" alt=""> -->
                    <img :src="item.img1" alt="">

                </div>
                <div>
                    <div class="flex gap-2">
                        <img v-if="item.date" class="w-5 h-5" src="../../assets/imgs/talim/Calender.png" alt="">
                        <p class="font-normal text-base text-[#5D5D5F] wrapper_bot">{{item.date ? item.date : ''}}</p>
                    </div>
                    <div>
                        <!-- <p class="font-medium text-xl text-[#000000]">Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi</p> -->
                        <p class="font-medium text-xl text-[#000000]">{{item.name ? item.name : ''}}</p>
                   
                    </div>
                </div>
            
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router';

// Routerni chaqirish
const router = useRouter();

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
});

// Itemni bosganda sahifaga o'tish funksiyasi
const navigateToPage = (item) => {
  router.push({ 
    name: item.routerlink, 
    params: { id: item.id } 
  });
};


</script>

<style scoped>
@media (max-width:1024px){
    .main_branch{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
@media (max-width:640px){
    .main_box{
    width:300px;
    gap:2em;
    display: grid;
    justify-content:center
    }
    .main_box_wrapper{
        width:300px;
        padding:2em
    }
}
</style>