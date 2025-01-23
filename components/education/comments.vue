<template>
    <div>
  <div style="margin-top:187px;margin-bottom:104px;display:flex;align-items:center;flex-direction:column" >
            <div>
                <p class="text-2xl font-medium">Bitiruvchilar fikrlari</p>
                <div class="flex gap-6">
                     <div v-for="item in  2" :key="item.id">
                        <div class="flex gap-6 mt-4 rounded-xl" style="width:464px;padding:20px;height:240px;border:1px solid #E6EDFA;background-color:#FFFFFF">
                            <div style="width:157px;200px">
                                <img src="../../assets/imgs/talim/person.svg" alt="">
                            </div>
                            <div style="width:243px;hieght:194px;">
                                <div class="mb-4 " style="width:243px;text-overflow:ellipsis;overflow: hidden; display:-webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                                    <p class=" font-medium text-xl ">Abduqayumov Abdumannon Abdulboriy o'g'li</p>

                                </div>
                                <p class="font-normal text-base" style="color:#9A999B">Mening ismim Musirmanova Dilbar va men Toshkent menejment va iqtisodiyot instituti talabasiman.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-[29px]">
                    <button class="bg-[#F7483B] rounded-lg w-[192px]  h-[48px] flex text-white gap-2 justify-center items-center font-medium text-base">Topshiriq <img src="../../assets/imgs/talim/arrow-right.png" alt=""> </button>
                </div>

            </div>
            
           
          
          

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>