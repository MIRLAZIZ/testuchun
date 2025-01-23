<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHomeStore } from "~/store/home";

const route = useRoute();
const store = useHomeStore();
let menudata = store.menus.flatMap(menu => menu.children);

// `route` o'zgarganda avtomatik qayta hisoblashni ta'minlash uchun `route.path`ni kuzatamiz
const getMenuLink = computed(() => {
    const routePath = route.fullPath; // Vue kuzatib boradigan reactive qiymat
    let menu = menudata.find(menu => menu.path === routePath);
    return menu ? menu : {};
});
</script>

<template>
    <div class="bg-white flex flex-col items-center justify-center py-[48px] h-[189px]">
        <h1 class="text-[40px] font-medium text-[#06203D]">{{ getMenuLink.title }}</h1>
        <div class="text-[#5D5D5F] text-lg">
            <button @click="$router.push('/')">Asosiy</button> /
            <button>{{ getMenuLink.title }}</button>
        </div>
    </div>
</template>
