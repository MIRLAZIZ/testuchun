<template>
<div class="w-full">


    <div class="bg-white 2xl:w-[1076px]  rounded-lg p-8 w-full flex justify-center">

        <div class="md:w-[576px] w-full">
            <h2 class="text-center text-2xl h2_title font-bold text-gray-800 mb-6">
                RO‘YXATDAN O‘TISH TALABLARI
            </h2>
            <ul class="space-y-4">
                <li v-for="(item, index) in requirements" :key="index" class="flex items-center space-x-4">
                    <span
                        class="bg-[#F4F6FA] text-lg font-medium rounded-full md:w-12 w-8  md:h-12 h-8 flex items-center justify-center font-Halvar li_id">
                        {{ index + 1 }}
                    </span>
                    <p class="bg-[#F4F6FA] py-4 px-5 rounded-xl font-medium md:w-[612px] w-full li_title">
                        {{ item }}
                    </p>
                </li>
            </ul>

        </div>

    </div>
    </div>
</template>

<script setup>
const requirements = ref([
    "O‘qishga qabul qilinishi uchun abiturient tegishli fanlar bo‘yicha asosiy bilimlarga ega bo‘lishi kerak",
    "Imtihonlar test sinovlari orqali o‘tkaziladi",
    "Imtihonlar tugagach, o‘tish bali aniqlanadi. Eng yuqori natija ko‘rsatgan abituriyentlarga institut jamg‘armalaridan grant ajratiladi",
    "Abiturientda imtihon shaklini tanlash imkoni mavjud, onlayn yoki oflayn",
    "Har bir fan blokida 30 tadan test savol bo‘ladi",
]);


</script>

<style>
@media (max-width:600px){
    .h2_title{
        font-weight: 500;
        font-size: 16px;
    }
    .li_title{
        font-weight: 500;
        font-size: 14px; 
    }
    .li_id{
        font-weight: 500;
        font-size: 14px; 
    }
}
</style>