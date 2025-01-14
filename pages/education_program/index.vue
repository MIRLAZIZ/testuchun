<script setup>
const sum = ref([1, 2, 3, 4, 5,6,7,8,9,10,11,12])
let onchange = ref(false)
</script>
<template>
    <div class="" >
        <div class="bg-white text-slate-900 flex flex-col justify-center items-center py-7 ">
                <h1 class="text-3xl font-medium"> BAKALAVR </h1>
                <div class="pt-3">
                    <span>Asosiy/Bakalavr</span>
                </div>
        </div>
        <div class="flex px-[240px]">
            <div class="w-[75%] flex-wrap  flex ">
                 <div class="p-3  w-[33%]" v-for="(item, index) in  sum" :key="index">
                    <div class="bg-white text-slate-900 px-3 rounded-xl  ">
                        <div class="flex border-b-2 p-5 gap-5">
                            <img src="../../assets/imgs/talim/car.svg" alt="">
                            <p >Iqtisodiyot Dasturiy Taminot Muhandisligi</p>
                        </div>
                        <div class="flex justify-between p-5">
                            <p class="">Batafsil</p>

                            <img src="../../assets/imgs/talim/arrow.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
           

           <div class="w-[25%]">
                <UiSidebar />
           </div>

        </div>
       
        <div class="px-[240px] mb-10" >
                <p>Ko'p beriladigan savollar</p>
                <div class="bg-white">
                    <div class="bg-white" @click="onchange = !onchange">
                        <p class="text-slate-800">TMII litsensiyasiga egami</p>
                    </div>
                    <div :style="{ display: onchange ? 'block' : 'none' }">
                        <p class="text-slate-800">O'qish kontract to'lov miqdori nechi pul? Bakalavr dasturlari uchun : - Kundzgi : 19500 000 so'm -Sirtqi 13 500 00 so'm</p>
                    </div>

                </div>
           </div>


   
  
    </div>
</template>
<style lang="" scoped>
    
</style>