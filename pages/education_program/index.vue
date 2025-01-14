<script setup>
// import { computed } from 'vue';
import { useHomeStore } from '~/store/home'

let onchange = ref(false)
const store = useHomeStore()
const filter = ref([])


// filter.value = store.menus[1]

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
           
           <UiInformation />

           <div class="w-[364px]">
            
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