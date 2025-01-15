<script setup>
const sum = ref([1, 2, 3, 4, 5,6,7,8,9,10,11,12])

</script>
<template>
     <div class="w-[1052px]  grid h-[632px]   grid-cols-3 grid-rows-3  gap-4  ">
                 <div class="  w-[340px] bg-white rounded-xl    h-[146px]" v-for="(item, index) in  sum" :key="index">
                    <div class=" text-slate-900 px-3  ">
                        <div class="flex border-b-2 p-3 gap-5 w-[292px]">
                            <img src="../../assets/imgs/talim/car.svg" alt="">
                            <p class="font-medium text-sm">Iqtisodiyot Dasturiy Taminot Muhandisligi</p>
                        </div>
                        <div class="flex justify-between p-3">
                            <p class="">Batafsil</p>

                            <img src="../../assets/imgs/talim/arrow.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
</template>
<style lang="" scoped>
    
</style>