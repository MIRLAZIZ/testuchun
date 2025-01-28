<script setup>
import { useHomeStore } from "~/store/home";
import img1 from "/assets/imgs/talim/car.svg"

const store = useHomeStore();
const props = defineProps({
    data: {
        type: Object,
        require: true
    }
})


</script>
<template>
    <div>
        <EducationInformation :data="props.data" />
        <EducationFaq />


    </div>
</template>


<style scoped>

</style>