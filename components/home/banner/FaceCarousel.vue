<script setup>
</script>
<template>
    <div class="flex items-center justify-between w-full h-[789px]">

        <!-- left arrow -->
        <div class="absolute left-24 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <!-- <img                src="/assets//imgs/home/angle-left.png" alt="" @click="$emit('left')"> -->
            <UIcon name="i-heroicons-chevron-left" class="w-12 h-20 text-[#72705F]" @click="$emit('left')" />

        </div>



        <!-- caption  -->
        <div class=" h-[500px] flex flex-col justify-start ">
            <h1 class="caption mt-14">

                TOSHKENT <br> MENEJMENT VA <br>IQTISODIYOT INSTITUT</h1>

            <button class="mt-10 text-white text-base bg-[#F7483B] w-[216px] h-[48px] font-medium rounded-lg flex justify-center  items-center ">Ariza topshirish
                <UIcon name="i-heroicons-arrow-long-right" class="w-5 h-5 text-white ml-2  " />
            </button>
        </div>


        <!-- window img  -->
        <div><img src="/assets/imgs/home/Group 1.png" alt=""></div>

        <!-- arrow right  -->
        <div class="absolute right-24 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <!-- <img src=" /assets/imgs/home/angle-right.png" alt="" @click="$emit('right')"> -->
            <UIcon name="i-heroicons-chevron-right" class="w-12 h-20 text-[#72705F]" @click="$emit('right')" />
        </div>


    </div>
</template>


<style scoped>


.caption {
    font-family: 'Halvar Breitschrift';
    font-size: 64px;
    font-weight: 500;
    line-height: 76.8px;

    color: #FFFFFF;

}
</style>