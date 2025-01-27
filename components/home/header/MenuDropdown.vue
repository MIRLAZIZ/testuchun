<template>
    <div>

        <!-- {{ store.optionsData }} -->
        <div class="relative w-full   "  >
            <div class="absolute   w-full is_dropdown  z-40   " :class="{ 'dropdown': store.is_open }" >
                <div class="grid grid-cols-auto-fit pt-12 pb-10 px-6  w-full">
                    <button v-for="option in store.optionsData[0]?.children" :key="option"
                        class=" text-gray-700 hover:text-red-700  text-left ">
                        <p @click="$router.push(option.path)">{{ option.title }} </p>

                    </button>


                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useHomeStore } from '~/store/home'

const store = useHomeStore()

const handleClickOutside = () => {
    store.is_open = false;
    store.optionsData = [];
};

watch(
    () => store.is_open, 
    (newValue) => {
        if (newValue===true) {
            document.addEventListener('click', handleClickOutside);
        }
         else {
            document.removeEventListener('click', handleClickOutside);
        }
    }
);



</script>

<style scoped>
.is_dropdown {
    max-height: 0;
    opacity: 0;
    transition: max-height 0.5s ease, opacity 0.5s ease;
}

.dropdown {
    max-height: 350px;
    /* Menyu maksimal balandligi */
    opacity: 1;
    transition: max-height 0.5s ease, opacity 0.5s ease;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
    0 6px 8px rgba(0, 0, 0, 0.08); */
    /* border-radius: 8px; */
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top: 0;
    /* Yumurroq burchaklar (optional) */
    background: white;
    /* Yorqinroq fon (optional) */
}

.grid-cols-auto-fit {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    gap: 8px;
}
</style>