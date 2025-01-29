<script setup>
import toshkentImg from '~/assets/imgs/kampus/image (1).png'
import fargonaImg from '~/assets/imgs/kampus/image.png'


const items = [
    {
        id: 1, city: 'Toshkent',
        img: toshkentImg,
        description: "Bugungi kunga qadar institut O‘zbekiston va xorijdagi xalqaro universitetlar va ta’lim tashkilotlari bilan hamkorlik qilib, bakalavriat va magistratura yo‘nalishlari bo‘yicha ta’lim dasturlari bor."
    },
    {
        id: 2, city: 'Farg\'ona',
        img: fargonaImg,
        description: "Bugungi kunga qadar institut O‘zbekiston va xorijdagi xalqaro universitetlar va ta’lim tashkilotlari bilan hamkorlaik qilib, bakalavriat va magistratura yo‘nalishlari bo‘yicha ta’lim dasturlari bor."
    },
]

</script>
<template>
    <div class="w-full">
        <div>

            <UiBreadcrumb />
        </div>
        <div class="w-full flex justify-center ">
            <div class="mainContainer flex  gap-4  flex-col lg:flex-row lg:justify-between   mt-10 mb-[144px] ">
                <div class="2xl:w-[712px]  lg:w-full md:w-full  rounded-xl h-[594px] p-6 bg-white  flex flex-col justify-between "
                    v-for="item in items" :key="item.id">
                    <img :src="item.img" alt="" class="w-full h-[343px] object-cover ">
                    <div class="mt-3">
                        <h1 class="text-[24px] font-medium "> {{ item.city }} </h1>
                        <p class="mt-2  text-xl"> {{ item.description }}</p>
                    </div>
                    <hr class="my-2">
                    <div class="flex justify-between  items-center cursor-pointer" @click="$router.push(`/kampus/${item.city}`)">
                        <span class="text-[#5D5D5F]"> Batafsil</span>
                        <UIcon name="i-heroicons-arrow-up-right" class="text-[#F7483B] ml-2" />
                    </div>
                </div>




            </div>



        </div>



    </div>
</template>


<style scoped></style>