<template>
    <div class="p-5">
        <div class="2xl:w-[1440px] w-full bg-white text-black grid lg:grid-cols-4 sm:grid-cols-2 p-5 gap-6 justify-center rounded-xl  items-center " >
                        <div  class="2xl:w-[326px] w-full  h-[101px] p-[15px] border-[1px] border-[#E6EDFA]  rounded-lg " v-for="item in props.data " :key="item.id">
                              <div class="p-[15px 16px] rounded-lg h-[100%] flex flex-col justify-around "   >
                                    <div class="flex gap-2" >
                                        <img :src="item.img" alt="">
                                        <p class="font-normal  text-[#868587] text-lg"  >{{item.type}}</p>
                                    </div>
                                    <div class="flex flex-col justify-center">
                                        <p class="font-normal text-lg ">{{item.name}} </p>
                                        <p class="font-normal text-lg ">{{item.description ? item.description : ''}} </p>
                                    </div>
                                </div>
                        </div>
                      
                    </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data:{
        type:Array,
        required:true,
        default: () => ([]),

    }
})
</script>

<style  scoped>

</style>