<script setup>
const props = defineProps({
    items: {
        type: Array,
        require: true,
        default: () => []
    }
})

</script>
<template>
    <div class="w-[1052px]  grid h-[632px]   grid-cols-3 grid-rows-3  gap-4  ">

        <div class="  w-[340px] bg-white rounded-xl px-6 pt-6 pb-5   h-[146px] flex flex-col justify-between " v-for="(item, index) in items"
            :key="index">

       

            <div class="flex items-start  h-11">
                <img src="/assets/imgs/talim/car.svg" alt="">

                <p class="font-medium ml-3 ">{{ item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title }}
                </p>
            </div>
            <hr class="border border-[#DCE5F5]">




            <div class="flex justify-between ">
                <p class="">Batafsil</p>

                <UIcon name="i-heroicons-arrow-up-right" class=" w-4 h-4 bg-[#F7483B]" />

            </div>


        </div>
    </div>
</template>
<style lang="" scoped>

</style>