<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const items = ref([])

onMounted(() => {
    store.getFacultet().then((res) => {
        items.value = res.data
    })
    
    
})
</script>

<template>
    <div>

         <InstituteKafedra  :data="items"/>


    </div>
</template>



