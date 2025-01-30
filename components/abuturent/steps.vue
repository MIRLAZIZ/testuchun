<template>
     <div class="bg-white p-8 rounded-lg w-full mt-16 mb-16">
        <h2 class="text-center text-lg  mb-6 font-medium font-Halvar">
            RO'YHATDAN O'TISH BOSQICHLARI
        </h2>
        <div class="grid 2xl:grid-cols-3 xl:grid-cols-2 gap-y-16 gap-x-8  relative">
            <div v-for="(step, index) in steps" :key="index" class="flex xl:flex-col gap-2 xl:gap-0 items-center space-y-2 " ref="stepsContainer">
                <div
                    class="flex items-center justify-center xl:w-10 xl:h-10 w-[23px] h-[23px] rounded-full border bg-white text-[#F7483B] font-medium text-sm relative z-10">
                    {{ step.id }}
                </div>
                <div class="bg-[#F4F6FA] p-3 rounded-md text-center  w-full font-medium mt-4">
                    <p>
                    {{ step.text }}

                    </p>
                </div>
            </div>

            <!-- Chiziq -->
            <div
            
                class="absolute border-dashed border-2 border-gray-300 w-[84%] steps   right-0  rounded-xl  top-5 z-0 border-l-0" 
                :style="{ height: `${offsetHeightDiv}px` }">
            </div>
        </div>
    </div>

</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();


const steps = computed(() => [
    {
        id: 1,

        text: store.dataTranslate["contract.aloqa"],
    },
    {
        id: 2,
        text: store.dataTranslate["contract.ariza"]
    },
    {
        id: 3,
        text: store.dataTranslate["contract.imtihon"]
    },
    {
        id: 6,
       text: store.dataTranslate["contract.shartnoma"]
    },
    {
        id: 5,
        text: store.dataTranslate["contract.imtihon1"]
    },
    {
        id: 4,
        text: store.dataTranslate["contract.ro'yxat"]
    },


])
const stepsContainer = ref()
const offsetHeightDiv = ref(0)


onMounted(() => {
    const firstThreeElements = stepsContainer.value.slice(0, 3);

    firstThreeElements.forEach((element) => {
        offsetHeightDiv.value = Math.max(element.offsetHeight)+64;
    })

    
})

</script>

<style scoped>
@media (max-width:1536px){
    .steps{
        display: none;
    }
}
@media (max-width:600px){
    h2{
        font-weight: 500;
        font-size: 16px;
    }
    p{
        font-weight: 500;
        font-size: 14px;
    }
}
</style>