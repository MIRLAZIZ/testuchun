<script setup>
const sum = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
const props = defineProps({
    data:{
        type:Array,
        required:true,
        default: () => [],

    }
})

</script>
<template>
<div>


   <!-- <div class="w-[1052px]  grid h-[632px]   grid-cols-3 grid-rows-3  gap-4  "> -->
<div class=" 2xl:w-[1052px]  grid    2xl:grid-cols-3 2xl:grid-rows-3  2xl:gap-4         xl:w-[900px]  xl:grid    xl:grid-cols-2 xl:grid-rows-2  xl:gap-4 xl:justify-center   lg:w-[650px]  lg:grid    lg:grid-cols-2 lg:grid-rows-2  lg:gap-3 lg:justify-center  md:w-[600px] md:justify-around md:gap-2 sm:w-[300px] md:grid md:grid-cols-2 md:grid-rows-2 sm:gap-2 sm:justify-center">

        <!-- <div class=" w-[340px] bg-white rounded-xl px-6 pt-6 pb-5   h-[140px] flex flex-col justify-between " v-for="item in props.data" -->       
        <div class=" w-[340px] bg-white rounded-xl 2xl:px-6 2xl:pt-6 2xl:pb-5   h-[146px] flex flex-col justify-between xl:w-[100%]  xl:px-4 xl:pb-4  xl:pt-4 lg:w-[100%] lg:px-3 lg:pb-3 lg:pt-3 md:w-[100%] md:px-3 md:pb-3 md:pt-3 sm:w-[300px] sm:pb-3 sm:pt-3 sm:px-3" v-for="item in props.data"
          
            :key="item.id">



            <div class="flex items-start">
                <p class="font-medium  text-base text[#000000]">{{item.name}}</p>
            </div>

            <hr class="border border-[#DCE5F5]">



            <div class="flex justify-between ">
                <div class="flex gap-2 items-center">
                    <img class="w-5 h-5" src="../../assets/imgs/talim/Calender.png" alt="">
                    <p class="font-normal text-base text-[#5D5D5F] ">{{item.date}}</p>
                </div>
                <!-- <img src="../../assets/imgs/talim/Download.png" alt=""> -->
                <img :src="item.img1" alt="">


                

            </div>


        </div>
    </div> 
    </div>
</template>
<style  scoped>
.wrapper_bot:hover {
    color:#F7483B
}
</style>