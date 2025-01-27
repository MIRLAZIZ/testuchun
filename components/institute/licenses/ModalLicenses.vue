<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true,
        default: false
    },
    items: {
        type: Array,
        require: true,
        default: () => []
    },
    data_id: {
        type: Number,
        require: true,
    }

})
const emit = defineEmits(['update:isOpen'])

const itemIndex = ref(null)

watch(
    () => props.data_id,
    (newValue) => {
        itemIndex.value = newValue
    }, { deep: true })

const nextOn = () => {
    if (itemIndex.value < props.items.length-1) {
        itemIndex.value++
    }
}

const previousOne = () => {
    if (itemIndex.value > 0) {
        itemIndex.value--
    }
}


</script>

<template>
    <div>

        <UModal  class="box_hidden" v-model="props.isOpen" prevent-close>
            <UCard class="2xl:w-[1036px] lg:w-[1000px] h-[539px] md:w-[750px]  custom-modal p-2 box_height  dark:bg-white" style="background-color:white"  >
                <div class="flex justify-between lg:gap-3 box_flex ">

                    <div class="md:w-[324px] box_block">
                        <img :src="props.items[itemIndex].img" alt="certifacate img">
                        
                    </div>



                    <div class="lg:w-[592px] sm:w-[400px] flex flex-col justify-between">

                        <div>
                            <div class="flex justify-between w-full ">
                                <img src="/assets/imgs/kampus/image 154.png" alt="">

                                <div class="flex items-center justify-center w-12 h-12  border rounded-full cursor-pointer box_hidden "
                                    @click="emit('update:isOpen', false)">
                                    <UIcon name="i-heroicons-x-mark" class=" w-7 h-7  text-[#2D264B]" />

                                </div>
                            </div>

                            <h1 class="text-2xl font-medium mt-6">
                                {{ props.items[itemIndex].title }}
                            </h1>
                            <p class=" text-[#868587] mt-4">
                                yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy
                                konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va
                                boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga
                                iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va
                                ularni biznes va
                            </p>

                            <hr class="border-[#ECF1FB]  my-6">

                            <p>
                                <span class="text-[#9A999B]">Berilgan sana: </span>{{ props.items[itemIndex].date }}
                            </p>
                        </div>
                        {{ itemIndex }}
                        <div class="flex justify-between">
                            <div class="flex  items-center gap-4">
                                <button
                                    class="w-12 h-12 border border-[#DCE5F5] rounded-xl flex justify-center items-center"
                                    @click="previousOne">
                                    <UIcon name="i-heroicons-arrow-long-left" class=" w-5 h-5 text-[#06203D]" />
                                </button>

                                <button
                                    class="w-12 h-12 border border-[#DCE5F5] rounded-xl flex justify-center items-center"
                                    @click="nextOn">
                                    <UIcon name="i-heroicons-arrow-long-right" class=" w-5 h-5 text-[#06203D]" />
                                </button>

                                <span class="text-[#9A999B]">{{ itemIndex + 1 }}/{{ props.items.length }}</span>


                            </div>
                            <div>
                                <button
                                    class="bg-[#F7483B] w-[194px]  h-[48px] flex justify-center  items-center font-medium rounded-lg text-white ">
                                    Yuklab olish
                                    <img src="/assets/imgs/kampus/Download.png" alt="" class="w-5 h-5 ml-4">
                                </button>
                            </div>

                        </div>

                    </div>





                </div>


            </UCard>
        </UModal>

        <UModal class="md:hidden" v-model="props.isOpen" prevent-close>
            <UCard class=" h-[539px] md:w-[750px] sm:w-[600px] custom-modal  box_height  dark:bg-white" style="background-color:white;"  >
                <div class="flex justify-between lg:gap-3 box_flex content-between relative">

                    <div class="w-full box_block">
                        <div>
                            <img class="w-[136px] h-[193px]"  :src="props.items[itemIndex].img" alt="certifacate img">

                        </div>
                         <div class="flex items-center justify-center w-12 h-12 md:hidden  border rounded-full cursor-pointer  absolute right-0  "
                                    @click="emit('update:isOpen', false)">
                                    <UIcon name="i-heroicons-x-mark" class=" w-7 h-7  text-[#2D264B]" />

                        </div>
                    </div>



                    <div class="lg:w-[592px]  flex flex-col justify-between ">

                        <div>
                            <div class="flex  w-full  items-center justify-center gap-2 mt-2" >
                                <div class="flex justify-between  w-12 h-12" >
                                    <img src="/assets/imgs/kampus/image 154.png" alt="">

                                </div>

                               
                                <div class="flex items-center justify-center ">
                                    <h1 class="text-base font-medium ">
                                        {{ props.items[itemIndex].title }}
                                    </h1>
                                </div>
                           
                            </div>

                          
                            <p class=" text-[#868587] mt-4">
                                yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy
                                konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va
                                boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga
                                iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va
                                ularni biznes va
                            </p>

                            <hr class="border-[#ECF1FB]  my-6">

                            <p>
                                <span class="text-[#9A999B]">Berilgan sana: </span>{{ props.items[itemIndex].date }}
                            </p>
                        </div>
                        <!-- {{ itemIndex }} -->
                        <div class="flex  mt-4 flex-row-reverse gap-1 w-full">
                            <div class="flex  items-center gap-4 flex-row-reverse">
                                <div class="flex  items-center gap-4">
                                    <button
                                        class="w-12 h-12 border border-[#DCE5F5] rounded-xl flex justify-center items-center"
                                        @click="previousOne">
                                        <UIcon name="i-heroicons-arrow-long-left" class=" w-5 h-5 text-[#06203D]" />
                                    </button>

                                    <button
                                        class="w-12 h-12 border border-[#DCE5F5] rounded-xl flex justify-center items-center"
                                        @click="nextOn">
                                        <UIcon name="i-heroicons-arrow-long-right" class=" w-5 h-5 text-[#06203D]" />
                                    </button>  
                                </div>
                  
                                <span class="text-[#9A999B]">{{ itemIndex + 1 }}/{{ props.items.length }}</span>

                            </div>
                            <div class="ml-3">
                                <button
                                    class="bg-[#F7483B] w-[194px]  h-[48px] flex justify-center  items-center font-medium rounded-lg text-white ">
                                    Yuklab olish
                                    <img src="/assets/imgs/kampus/Download.png" alt="" class="w-5 h-5 ml-4">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </UCard>
        </UModal>
    </div>
</template>

<style>
.custom-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}
@media (max-width:600px){
    .box_height{
        width:371px !important
    }
}
@media (max-width:768px){
    .box_flex{
        display:flex;
        flex-direction:column;
    }
    .box_height{
        width:600px;
        height:600px;
        overflow-x: auto;
    }
    .box_hidden{
        display:none;
    }
    .box_block{
        display:flex;
        width:100%;
        justify-content: center;
    }
}
@media (prefers-color-scheme: dark) {
  .custom-modal {
    background-color: white; /* Dark Mode uchun ham oq fon belgilanadi */
    color: black;
  }
}
</style>
