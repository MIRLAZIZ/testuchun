<template>
    <div>
         <div class="2xl:w-[1076px] w-full">
            <h2 class="text-2xl font-semibold">{{store.dataTranslate["contract.grand"]}}</h2>
         </div>
         <p class="text-xl font-medium mt-6" v-html="store.dataTranslate['contract.grands']"></p>
    </div>
</template>

<script setup>
import { useHomeStore } from '~/store/home';

const store = useHomeStore()

onMounted(() => {
    if (!store.menuShow) {
        store.menuShow = JSON.parse(localStorage.getItem("grants"));
    }
})
</script>

<style  scoped>
@media (max-width:600px){
    h2 {
        font-size: 20px;
        font-weight: 500;
    }
       p {
        font-size: 18px;
        font-weight: 400;
    }
}
</style>