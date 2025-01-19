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

   <div class="w-[1052px]  grid h-[632px]   grid-cols-3 grid-rows-3  gap-4  ">

        <div class=" w-[340px] bg-white rounded-xl px-6 pt-6 pb-5   h-[140px] flex flex-col justify-between " v-for="item in props.data"
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
</template>
<style  scoped>
.wrapper_bot:hover {
    color:#F7483B
}
</style>