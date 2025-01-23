<template>
    <div class="bg-white  rounded-lg p-8 w-full flex justify-center">

        <div class="w-[676px]">
            <h2 class="text-center text-2xl font-bold text-gray-800 mb-6">
                RO‘YXATDAN O‘TISH TALABLARI
            </h2>
            <ul class="space-y-4">
                <li v-for="(item, index) in requirements" :key="index" class="flex items-center space-x-4">
                    <span
                        class="bg-[#F4F6FA] text-lg font-medium rounded-full w-12 h-12 flex items-center justify-center font-Halvar">
                        {{ index + 1 }}
                    </span>
                    <p class="bg-[#F4F6FA] py-4 px-5 rounded-xl font-medium w-[612px]">
                        {{ item }}
                    </p>
                </li>
            </ul>

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

<style></style>