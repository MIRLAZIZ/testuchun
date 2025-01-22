<script setup>
const sum = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
const router = useRoute()
function goToSinglePage() {
  router.push('/education_single_page');
}

const props = defineProps({
    data:{
        type: Array,
        required: true,
        default: () => [],
    }
})

</script>
<template>
<div class="flex justify-center items-center ">
<div class=" 2xl:w-[1052px]  grid    2xl:grid-cols-3 2xl:grid-rows-3  2xl:gap-4         xl:w-[900px]  xl:grid    xl:grid-cols-2 xl:grid-rows-2  xl:gap-4 xl:justify-center   lg:w-[650px]  lg:grid    lg:grid-cols-2 lg:grid-rows-2  lg:gap-3 lg:justify-center  md:w-[400px] md:gap-2 sm:w-[300px] sm:gap-2 sm:justify-center">

        <div class=" w-[340px] bg-white rounded-xl 2xl:px-6 2xl:pt-6 2xl:pb-5   h-[146px] flex flex-col justify-between xl:w-[100%]  xl:px-4 xl:pb-4  xl:pt-4 lg:w-[100%] lg:px-3 lg:pb-3 lg:pt-3 md:w-[100%] md:px-3 md:pb-3 md:pt-3 sm:w-[100%] sm:pb-3 sm:pt-3 sm:px-3" v-for="item in props.data"
            :key="item.id">



            <div class="flex items-start">
                <img :src="item.img" alt="">

                <p class="font-medium ml-3  text-base text[#000000]">{{item.name}}
                </p>
            </div>

            <hr class="border border-[#DCE5F5]">



            <div class="flex justify-between ">
                <!-- <p class="font-normal text-base text-[#5D5D5F] wrapper_bot cursor-pointer"  @click="goToSinglePage">Batafsil</p> -->
                <router-link class="font-normal text-base text-[#5D5D5F] wrapper_bot cursor-pointer" to="/education_bakalavr">{{item.description}}</router-link>

                <UIcon name="i-heroicons-arrow-up-right" class=" w-4 h-4 bg-[#F7483B]" />
            
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