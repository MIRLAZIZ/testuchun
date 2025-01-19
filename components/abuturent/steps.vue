<template>

    <div class="bg-white p-8 rounded-lg w-full mt-16">
        <h2 class="text-center text-lg  mb-6 font-medium font-Halvar">
            RO'YHATDAN O'TISH BOSQICHLARI
        </h2>
        <div class="grid grid-cols-3 gap-y-4 gap-x-8  relative">
            <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center space-y-2" ref="stepsContainer">
                <div
                    class="flex items-center justify-center w-10 h-10 rounded-full border bg-white text-red-500 font-bold relative z-10">
                    {{ step.id }}
                </div>
                <div class="bg-gray-100 p-3 rounded-md text-center  font-medium mt-4">
                    {{ step.text }}
                </div>
            </div>

            <!-- Chiziq -->
            <div
                class="absolute border-dashed border-2 border-gray-300 w-[84%]  right-0  rounded-xl  top-5 z-0 border-l-0" :style="{height: offsetHeightDiv}">
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
    console.log(stepsContainer.value[0].offsetHeight);
    offsetHeightDiv.value = stepsContainer.value[0].offsetHeight
    
})

</script>

<style scoped></style>