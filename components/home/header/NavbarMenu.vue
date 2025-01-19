<script setup lang="ts">

</script>

<template>
    <div class="flex justify-between items-center">
        <div @click="$router.push('/')" class="cursor-pointer"><img src="/assets/imgs/home/logomini.png" alt=""></div>
        <div class="flex items-center"> <HomeHeaderMenu/> 
             <div class="ml-6"> 
                <button class="bg-[#F7483B] w-[196px] h-[48px] rounded-lg font-medium text-white flex justify-center items-center">Ro'yhatdan o'tish</button>
            </div></div>

       
    </div>
</template>

