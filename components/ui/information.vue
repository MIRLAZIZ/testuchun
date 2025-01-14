<script setup>
const sum = ref([1, 2, 3, 4, 5,6,7,8,9,10,11,12])

</script>
<template>
     <div class="w-[75%] flex-wrap  flex ">
                 <div class="p-3  w-[33%]" v-for="(item, index) in  sum" :key="index">
                    <div class="bg-white text-slate-900 px-3 rounded-xl  ">
                        <div class="flex border-b-2 p-5 gap-5">
                            <img src="../../assets/imgs/talim/car.svg" alt="">
                            <p >Iqtisodiyot Dasturiy Taminot Muhandisligi</p>
                        </div>
                        <div class="flex justify-between p-5">
                            <p class="">Batafsil</p>

                            <img src="../../assets/imgs/talim/arrow.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
</template>
<style lang="" scoped>
    
</style>