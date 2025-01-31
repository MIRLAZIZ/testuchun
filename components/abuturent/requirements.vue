<template>
    <div class="w-full">
        <div class="bg-white  rounded-lg p-8 w-full flex justify-center">

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
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const requirements = computed(() => [
    store.dataTranslate["contract.o'qish"],
   store.dataTranslate["contract.imtihonlar"],
   store.dataTranslate["contract.tugash"],
   store.dataTranslate["contract.abuterint"],
   store.dataTranslate["contract.test"],


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