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

    <div class="flex justify-center items-start main_branch">
        <!-- <div class="grid grid-cols-3 gap-4 h-[470px]  "> -->
<div class=" 2xl:w-[1052px]  grid    2xl:grid-cols-3 2xl:grid-rows-3  2xl:gap-4         xl:w-[900px]  xl:grid    xl:grid-cols-2 xl:grid-rows-2  xl:gap-4 xl:justify-center   lg:w-[650px]  lg:grid    lg:grid-cols-2 lg:grid-rows-2  lg:gap-3 lg:justify-center  md:w-[600px] md:justify-around md:gap-2 sm:w-[300px] md:grid md:grid-cols-2 md:grid-rows-2 sm:gap-2 sm:justify-center main_box">
            
            <!-- <div v-for="item in items" :key="item.id" :ref_key="item.id"    class="w-[340px] h-[146px] rounded-xl px-6 pt-6 pb-5 bg-white flex flex-col justify-between"> -->
            <div v-for="item in items" :key="item.id" :ref_key="item.id"   class=" w-[340px] bg-white rounded-xl 2xl:px-6 2xl:pt-6 2xl:pb-5   h-[146px] flex flex-col justify-between xl:w-[100%]  xl:px-4 xl:pb-4  xl:pt-4 lg:w-[100%] lg:px-3 lg:pb-3 lg:pt-3 md:w-[100%] md:px-3 md:pb-3 md:pt-3 sm:w-[300px] sm:pb-3 sm:pt-3 sm:px-3 main_box_wrapper"  >

                <h1 class="font-medium">{{ item.description.length > 60 ? item.description.substring(0, 60) + '...' : item.description }}</h1>

                <hr class="border border-[#DCE5F5]">

                <div class="bg-white w-full text-[#5D5D5F]  flex justify-between items-center hover:bg-white text-base ">
                    Batafsil
                    <UIcon name="i-heroicons-arrow-up-right"  class=" ml-6 w-5 h-5 text-[#F7483B]" />
                </div>

            </div>

            

        </div>
    </div>
</template>


<style lang="css" scoped>
@media (max-width:1024px){
    .main_branch{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
@media (max-width:640px){
    .main_box{
    width:300px;
    gap:2em;
    display: grid;
    justify-content:center
    }
    .main_box_wrapper{
        width:300px;
        padding:2em
    }
}</style>