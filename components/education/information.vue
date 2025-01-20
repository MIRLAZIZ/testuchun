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
    <div class="w-[1052px]  grid h-[632px]   grid-cols-3 grid-rows-3  gap-4  ">

        <div class=" w-[340px] bg-white rounded-xl px-6 pt-6 pb-5   h-[146px] flex flex-col justify-between " v-for="item in props.data"
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
</template>
<style  scoped>
.wrapper_bot:hover {
    color:#F7483B
}
</style>