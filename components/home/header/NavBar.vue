<script setup>
import { useHomeStore } from "~/store/home";
const store = useHomeStore();
</script>
<template>
    <div class="pb-4 bg-white  flex justify-center">
        <div class="mainContainer pb-4 ">
            <HomeHeaderNavContacts  v-if="!store.isFixed"/>
            <div @mouseleave="store.is_open= false">
                <HomeHeaderNavbarMenu class="mt-7 " />
                <HomeHeaderMenuDropdown />

            </div>

        </div>
    </div>
</template>


<style  scoped></style>