<template>
    <div class="flex ">
        <ul v-for="menu in store.menus" :key="menu.id" class="relative">
            <!-- Menu tugmasi -->
            <li @click.stop="store.menuDrop(menu)" class="px-4  text-[#020105] font-normal	 cursor-pointer flex   ">
                {{ menu.name }}
                 <svg class="-mr-1  h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17 17" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.48l3.71-3.3a.75.75 0 111.04 1.08l-4 3.5a.75.75 0 01-1.04 0l-4-3.5a.75.75 0 01-.02-1.06z"
                            clip-rule="evenodd" />
                    </svg>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()




</script>

<style scoped>
/* Qo'shimcha Styling */
</style>
