<template>
    <div>
<div>
        <div class="w-[1076px] grid grid-cols-3 gap-6">
            <div class="w-[348px] rounded-xl p-3 border-[#E6EDFA] border bg-[#FFFFFF]" v-for="item in props.data" :key="item.id" @click="navigateToPage(item)">
                <div class="w-[324px] h-[200px] mb-4">
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
// import { useRouter } from 'vue-router';
// const router = useRouter()
// const props = defineProps({
//     data:{
//         type:Array,
//         require:true,
//         default: () => []
//     }
// })

// const routes = [
//   {
//     path: '/news-single',
//     name: 'news-single',
//     component: () => import('@/pages/news-single.vue'),
//   },
// ];
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

<style lang="scss" scoped>

</style>