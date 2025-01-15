<script setup>
const sum = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

</script>
<template>
    <div class="w-[1052px]  grid h-[632px]   grid-cols-3 grid-rows-3  gap-4  ">

        <div class="  w-[340px] bg-white rounded-xl px-6 pt-6 pb-5   h-[146px] flex flex-col justify-between " v-for="(item, index) in sum"
            :key="index">



            <div class="flex items-start">
                <img src="/assets/imgs/talim/car.svg" alt="">

                <p class="font-medium ml-3 ">60610300 - KOMPYUTER INJINIRINGI
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