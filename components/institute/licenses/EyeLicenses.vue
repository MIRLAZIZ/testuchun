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

                    <div class="w-[592px]">
                        <div class="flex justify-between w-full ">
                            <img src="/assets/imgs/kampus/image 154.png" alt="">

                            <div class="flex items-center justify-center w-12 h-12  border rounded-full">
                                <UIcon name="i-heroicons-x-mark" class=" w-7 h-7  text-[#2D264B]" />

                            </div>
                        </div>
                        <div>
                            <h1 class="text-2xl font-medium mt-4">
                                {{ props.items[0].title }}
                            </h1>
                            <p class=" text-[#868587] mt-4">
                                yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy
                                konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va
                                boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga
                                iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va
                                ularni biznes va
                            </p>

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
