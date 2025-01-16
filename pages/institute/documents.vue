<script setup>
const items = [
        {id:1, description:"Toshkent menejment va iqtisodiyot instituti Ichki tartib qoydalari"},
        {id:2, description:"Ta’lim to‘g‘risida"},
        {id:3, description:"Maxsus elektron tizim orqali ayrim faoliyat turlarini litsenziyalash tartibi to‘g‘risidagi yagona nizomni tasdiqlash haqida"},
        {id:4, description: 'Toshkent menejment va iqtisodiyot instituti Ichki tartib qoydalari'},
        {id:5, description: 'Maxsus elektron tizim orqali ayrim faoliyat turlarini litsenziyalash tartibi to‘g‘risidagi yagona nizomni tasdiqlash haqida'},
        {id:6, description: 'Ta’lim to‘g‘risida'},
        {id:7, description: 'Toshkent menejment va iqtisodiyot instituti Ichki tartib qoydalari'},
        {id:8, description: 'Maxsus elektron tizim orqali ayrim faoliyat turlarini litsenziyalash tartibi to‘g‘risidagi yagona nizomni tasdiqlash haqida'},
        {id:9, description: 'Ta’lim to‘g‘risida'},
]
</script>
<template>


    <div class="grid grid-cols-3 gap-4 h-[470px]  ">
        



        <div v-for="item in items" :key="item.id" :ref_key="item.id"
        class="w-[340px] h-[146px] rounded-xl px-6 pt-6 pb-5 bg-white flex flex-col justify-between">

            <h1 class="font-medium">{{ item.description.length > 60 ? item.description.substring(0, 60) + '...' : item.description }}</h1>

            <hr class="border border-[#DCE5F5]">

            <div class="bg-white w-full text-[#5D5D5F]  flex justify-between items-center hover:bg-white text-base ">
                Batafsil
                <UIcon name="i-heroicons-arrow-up-right"  class=" ml-6 w-5 h-5 text-[#F7483B]" />
            </div>

        </div>

        

    </div>
    
</template>


<style scoped></style>