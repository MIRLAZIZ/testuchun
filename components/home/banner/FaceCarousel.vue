<script setup>
import { useHomeStore } from '~/store/home'

const store = useHomeStore()
</script>
<template>

    <div class="grid grid-cols-2  w-full h-[789px]  mt-[50px]" style="grid-template-columns: 70% 30%;">
        <!-- caption  -->
        <div class=" h-[500px] home_wrapper flex flex-col justify-around  ">
            <h1 class="caption " v-html="store.dataTranslate['home.time']">
            </h1>

            <button
                class="mt-10 text-white text-base bg-[#F7483B] w-[216px] h-[48px] font-medium rounded-lg flex justify-center  items-center ">
                
                {{ store.dataTranslate['home.submit_application'] }}
                <UIcon name="i-heroicons-arrow-long-right" class="w-5 h-5 text-white ml-2  " />
            </button>
        </div>


        <!-- window img  -->
        <div class=" flex justify-end boder box_img_hidden "><img src="/assets/imgs/home/Group 1.png" alt=""
                class="w-[509px] h-[497px] ">
        </div>


        <!-- left arrow -->
        <div class="absolute home_left left-24 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <!-- <img                src="/assets//imgs/home/angle-left.png" alt="" @click="$emit('left')"> -->
            <UIcon name="i-heroicons-chevron-left" class="  w-12 h-20 text-[#72705F]" @click="$emit('left')" />

        </div>

        <!-- arrow right  -->
        <div class="absolute home_right  right-24 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <!-- <img src=" /assets/imgs/home/angle-right.png" alt="" @click="$emit('right')"> -->
            <UIcon name="i-heroicons-chevron-right" class="  w-12 h-20 text-[#72705F]" @click="$emit('right')" />
        </div>


    </div>
</template>


<style scoped>
.home_wrapper{
    margin-left:9em;
}
.caption {
    font-family: 'Halvar Breitschrift';
    font-size: 64px;
    font-weight: 500;
    line-height: 76.8px;
    /* margin-left:5em; */
    color: #FFFFFF;

}
@media (max-width:1024px){
    .caption {
    font-family: 'Halvar Breitschrift';
    font-size: 40px;
    font-weight: 500;
   width:500px;
}
}
@media (max-width:800px){
    .box_img_hidden{
        display: none;
    }
    .home_wrapper{
        display: flex;
        justify-content: flex-end;
        margin-left:3em;
    }
}

@media (max-width:640px){
       .home_left{
        position: absolute;
        left:12px;
    }
    .home_right{
        position: absolute;
        right: 12px;
    }
}
@media (max-width:600px){
    .caption {
    font-family: 'Halvar Breitschrift';
    font-size: 26px;
    font-weight: 500;
   width:330px;
    }
 
}
</style>