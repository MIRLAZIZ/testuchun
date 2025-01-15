<script setup>
// const isOpen = ref(false)
const props = defineProps({
    isOpen: Boolean,
    require: true
})
const emit = defineEmits(['update:isOpen'])
</script>

<template>
    <div>

        <UModal v-model="props.isOpen" prevent-close>
            <UCard
                class="w-[1036px] h-[539px]  custom-modal">
               <div>

                
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
    max-width: 90%;
    max-height: 90%;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}
</style>
