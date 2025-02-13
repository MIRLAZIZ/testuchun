<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const props = defineProps({
    data: {
        type: Object,
        require: true
    }
})



</script>
<template>
    <div class="w-full">
        <EducationInformation :data="props.data" />


    </div>
</template>


<style scoped>

</style>