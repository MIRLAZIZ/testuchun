<script setup>
import { useHomeStore } from '~/store/home'
const sum = ref([1, 2, 3, 4, 5,6,7,8,9,10,11,12])

let onchange = ref(false)
let onchange1 = ref(false)
const store = useHomeStore()
const filter = ref([])


filter.value = store.menus[1]
console.log(store.menus.map(item => item.id));
console.log('store',filter.value)



const items = ref([
  {
    title: "TMII litsensiyasiga egami",
    description:
      "O'qish kontract to'lov miqdori nechi pul? Bakalavr dasturlari uchun: - Kundzgi : 19 500 000 so'm - Sirtqi 13 500 000 so'm",
  },
  {
    title: "Ikkinchi savol",
    description: "Bu savolning javobi ikkinchi blokda.",
  },
  {
    title: "Uchinchi savol",
    description: "Bu savolning javobi uchinchi blokda.",
  },
   {
    title: "Ikkinchi savol",
    description: "Bu savolning javobi ikkinchi blokda.",
  },
  {
    title: "Uchinchi savol",
    description: "Bu savolning javobi uchinchi blokda.",
  },
   {
    title: "Ikkinchi savol",
    description: "Bu savolning javobi ikkinchi blokda.",
  },
  {
    title: "Uchinchi savol",
    description: "Bu savolning javobi uchinchi blokda.",
  },
]);

const activeIndex = ref(null);

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};



</script>
<template>
    <div class="" >
        <div class="bg-white text-slate-900 flex flex-col justify-center items-center py-7 ">
                <h1 class="text-3xl font-medium"> BAKALAVR </h1>
                <div class="pt-3">
                    <span>Asosiy/Bakalavr</span>
                </div>
        </div>
        <div class="flex px-[240px] gap-8" style="margin-top:40px;">
           
           <UiInformation />

           <div class="w-[364px] flex justify-center">
                <UiSidebar :data="filter.value" />
           </div>

        </div>
       
        <div class="px-[240px] mb-10" >
                <p class="text-2xl font-medium mt-36 mb-10">KO'P BERILADIGAN SAVOLLAR</p>
                <!-- <div class="bg-white w-[1052px]  rounded-xl mb-4 " >
                    <div class="  p-4">
                        <div class="flex flex-col gap-3">
                            <div class="bg-white pl-2 flex justify-between"  @click="onchange = !onchange" >
                                <p class="text-slate-800 font-medium text-base">TMII litsensiyasiga egami</p>
                                   <div>
                                        <img v-if="onchange" src="../../assets/imgs/talim/Minus.svg" alt="">
                                        <img v-else src="../../assets/imgs/talim/Add.svg" alt="">

                                    </div>
                            </div>
                            <div :style="{ display: onchange ? 'block' : 'none' }" class="pl-2">
                                <p class="text-slate-800 font-normal text-sm">O'qish kontract to'lov miqdori nechi pul? Bakalavr dasturlari uchun : - Kundzgi : 19500 000 so'm -Sirtqi 13 500 00 so'm</p>
                            </div>
                        </div>
                     
                    </div>
                 
                   

                </div> -->


                <!-- <div class="bg-white w-[1052px]  rounded-xl mb-4" >
                    <div class="  p-4">
                        <div class="flex flex-col gap-3">
                            <div class="bg-white pl-2 flex justify-between"  @click="onchange1 = !onchange1" >
                                <p class="text-slate-800 font-medium text-base">TMII litsensiyasiga egami</p>
                                   <div>
                                        <img v-if="onchange1" src="../../assets/imgs/talim/Minus.svg" alt="">
                                        <img v-else src="../../assets/imgs/talim/Add.svg" alt="">

                                    </div>
                            </div>
                            <div :style="{ display: onchange1 ? 'block' : 'none' }" class="pl-2">
                                <p class="text-slate-800 font-normal text-sm">O'qish kontract to'lov miqdori nechi pul? Bakalavr dasturlari uchun : - Kundzgi : 19500 000 so'm -Sirtqi 13 500 00 so'm</p>
                            </div>
                        </div>
                    </div>
                </div> -->




                   <!-- <div class="bg-white w-[1052px]  rounded-xl mb-4" >
                    <div class="  p-4">
                        <div class="flex flex-col gap-3">
                            <div class="bg-white pl-2 flex justify-between"  @click="onchange1 = !onchange1" >
                                <p class="text-slate-800 font-medium text-base">TMII litsensiyasiga egami</p>
                                   <div>
                                        <img v-if="onchange1" src="../../assets/imgs/talim/Minus.svg" alt="">
                                        <img v-else src="../../assets/imgs/talim/Add.svg" alt="">

                                    </div>
                            </div>
                            <div :style="{ display: onchange1 ? 'block' : 'none' }" class="pl-2">
                                <p class="text-slate-800 font-normal text-sm">O'qish kontract to'lov miqdori nechi pul? Bakalavr dasturlari uchun : - Kundzgi : 19500 000 so'm -Sirtqi 13 500 00 so'm</p>
                            </div>
                        </div>
                    </div>
                </div> -->

                


                   <!-- <div class="bg-white w-[1052px]  rounded-xl mb-4" >
                    <div class="  p-4">
                        <div class="flex flex-col gap-3">
                            <div class="bg-white pl-2 flex justify-between"  @click="onchange1 = !onchange1" >
                                <p class="text-slate-800 font-medium text-base">TMII litsensiyasiga egami</p>
                                   <div>
                                        <img v-if="onchange1" src="../../assets/imgs/talim/Minus.svg" alt="">
                                        <img v-else src="../../assets/imgs/talim/Add.svg" alt="">

                                    </div>
                            </div>
                            <div :style="{ display: onchange1 ? 'block' : 'none' }" class="pl-2">
                                <p class="text-slate-800 font-normal text-sm">O'qish kontract to'lov miqdori nechi pul? Bakalavr dasturlari uchun : - Kundzgi : 19500 000 so'm -Sirtqi 13 500 00 so'm</p>
                            </div>
                        </div>
                    </div>
                </div>

                 -->


<div class="bg-white w-[1052px] rounded-xl mb-4" v-for="(item, index) in items" :key="index">
    <div class="p-4">
      <div class="flex flex-col gap-3">
        <div
          class="bg-white pl-2 flex justify-between cursor-pointer"
          @click="toggleItem(index)"
        >
          <p class="text-slate-800 font-medium text-base">{{ item.title }}</p>
          <div>
            <img
              v-if="activeIndex === index"
              src="../../assets/imgs/talim/Minus.svg"
              alt="Minus"
            />
            <img
              v-else
              src="../../assets/imgs/talim/Add.svg"
              alt="Add"
            />
          </div>
        </div>
        <div
          :style="{ display: activeIndex === index ? 'block' : 'none' }"
          class="pl-2"
        >
          <p class="text-slate-800 font-normal text-sm">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>










           </div>


   
  
    </div>
</template>
<style lang="" scoped>
    
</style>