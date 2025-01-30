<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();

import img1 from "/assets/imgs/talim/instetut.svg"



onMounted(() => {
    if (!store.news) {
        store.getNews()
    }
})
</script>
<template>
    <div class="mb-[144px]">
        <ScienceCertificat :data="store.news?.data" />




    </div>
</template>

<style scoped></style>