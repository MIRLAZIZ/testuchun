<script setup>
// const isOpen = ref(false)
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
    }

})
const emit = defineEmits(['update:isOpen'])
</script>

<template>
    <div>

        <UModal v-model="props.isOpen" prevent-close>
            <UCard class="w-[1036px] h-[539px]  custom-modal p-4 ">
                <div class="flex justify-between">

                    <div class="w-[324px]  ">
                        <img :src="props.items[0].img" alt="certifacate img">
                    </div>



                    <div class="w-[592px] flex flex-col justify-between">

                        <div>
                            <div class="flex justify-between w-full ">
                                <img src="/assets/imgs/kampus/image 154.png" alt="">

                                <div class="flex items-center justify-center w-12 h-12  border rounded-full cursor-pointer" @click="emit('update:isOpen', false)" >
                                    <UIcon name="i-heroicons-x-mark" class=" w-7 h-7  text-[#2D264B]" />

                                </div>
                            </div>

                            <h1 class="text-2xl font-medium mt-6">
                                {{ props.items[0].title }}
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
                                <span class="text-[#9A999B]">Berilgan sana: </span>{{ props.items[0].date }}
                            </p>
                        </div>

                        <div class="flex justify-between">
                            <div class="flex  items-center gap-4">
                                <button
                                    class="w-12 h-12 border border-[#DCE5F5] rounded-xl flex justify-center items-center">
                                    <UIcon name="i-heroicons-arrow-long-left" class=" w-5 h-5 text-[#06203D]" />
                                </button>

                                <button
                                    class="w-12 h-12 border border-[#DCE5F5] rounded-xl flex justify-center items-center">
                                    <UIcon name="i-heroicons-arrow-long-right" class=" w-5 h-5 text-[#06203D]" />
                                </button>

                                <span class="text-[#9A999B]">1/{{ props.items.length }}</span>


                            </div>
                            <div>
                                <UButton
                                    class="bg-[#F7483B] w-[194px]  h-[48px] flex justify-center  items-center font-medium hover:bg-[#F7483B] text-base">
                                    Yuborish olish
                                    <img src="/assets/imgs/kampus/Download.png" alt="" class="w-5 h-5 ml-4">
                                </UButton>
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
</style>
