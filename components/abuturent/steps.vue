<template>

    <div class="bg-white p-8 rounded-lg w-full mt-16">
        <h2 class="text-center text-lg  mb-6 font-medium font-Halvar">
            RO'YHATDAN O'TISH BOSQICHLARI
        </h2>
        <div class="grid 2xl:grid-cols-3 xl:grid-cols-2 gap-y-16 gap-x-8  relative">
            <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center space-y-2 " ref="stepsContainer">
                <div
                    class="flex items-center justify-center w-10 h-10 rounded-full border bg-white text-[#F7483B] font-bold relative z-10">
                    {{ step.id }}
                </div>
                <div class="bg-[#F4F6FA] p-3 rounded-md text-center  font-medium mt-4">
                    {{ step.text }}
                </div>
            </div>

            <!-- Chiziq -->
            <div
            
                class="absolute border-dashed border-2 border-gray-300 w-[84%] steps  right-0  rounded-xl  top-5 z-0 border-l-0" 
                :style="{ height: `${offsetHeightDiv}px` }">
            </div>
        </div>
    </div>

</template>

<script setup>


const steps = [
    {
        id: 1,

        text: "Aloqa markazi bilan bog'lanish (ma'lumot olish)",
    },
    {
        id: 2,
        text: "Ariza topshirish va shaxsiy ma'lumotlar anketasini to'ldirish",
    },
    {
        id: 3,
        text: "Imtihon sanasi va vaqtini bilish",
    },
    {
        id: 6,
        text: "Shartnomani olish",
    },
    {
        id: 5,
        text: "Imtihon muvaffaqiyatli topshirilgandan so‘ng, barcha kerakli hujjatlarni taqdim etish",
    },
    {
        id: 4,
        text: "Ro‘yhatdan o‘tish uchun to‘lovni amalga oshirish",
    },


]
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
</style>