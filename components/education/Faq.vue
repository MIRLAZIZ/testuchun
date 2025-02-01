<script setup>
import { useHomeStore } from '~/store/home'
const sum = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

let onchange = ref(false)
let onchange1 = ref(false)
const store = useHomeStore()
const filter = ref([])


filter.value = store.menus[1]




const items = ref(null)

const activeIndex = ref(null);

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};


onMounted(() => {
  store.getFaq().then((res) => {
    items.value = res.data
  })
})


</script>
<template>
    <div>
   
        <div class="mb-10 main_branch" v-if="items">
            <p class="text-[28px] font-medium mt-36 mb-10 text-[#06203D] ">{{ store.dataTranslate["footer.faq"] }}</p>

            <div class="bg-white w-[1052px] rounded-xl mb-4  min-h-[76px] flex justify-between items-center border-[1px] border-[#E6EDFA]  lg:w-[666px] md:w-[600px] sm:w-[600px] wrapper_li" v-for="(item, index) in items.data" :key="index">
                <div class="p-4 w-[100%]">
                    <div class="flex flex-col  gap-3">
                        <div class=" pl-2 flex items-center   justify-between cursor-pointer " @click="toggleItem(index)">
                            <p class="text-[#06203D] font-medium text-xl">{{ item.question }}</p>
                            <div class="" >
                                <img class="duration " v-if="activeIndex === index" src="../../assets/imgs/talim/Minus.svg" alt="Minus" />
                                <img class="duration" v-else src="../../assets/imgs/talim/Add.svg" alt="Add" />
                                
                            </div>
                        </div>
                        <div :style="{ display: activeIndex === index ? 'block' : 'none' }" class="pl-2 duration">
                            <p class="text-[#000000] font-normal text-base duration" v-html="item.answer"></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>


<style scoped>
.duration{
  transition: all 0.7s ease;

}
@media (max-width:640px){
  .wrapper_li{
    width:440px;
  }
}
@media (max-width:450px){
  .wrapper_li{
    width:350px;
  }
}
@media (max-width:1024px){
  .main_branch{
    
    justify-content:center;
    display:flex;
    flex-direction: column;
    align-items:center
  }
}
</style>