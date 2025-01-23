<template>
    <div class="relative inline-block text-left">
        <!-- Trigger button -->
        <button @click.stop="toggleDropdown"
            class="inline-flex justify-between w-full rounded-md   px-4 py-2   font-medium ">

            <!-- Selected option -->
            <div class="flex items-center text-[#5D5D5F]">
                <img :src="selectedLang?.img" alt="">
                <p class="ml-2 mr-2">{{ selectedLang?.label }}</p>
            </div>

            <!-- Dropdown icon -->
            <svg class=" h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.48l3.71-3.3a.75.75 0 111.04 1.08l-4 3.5a.75.75 0 01-1.04 0l-4-3.5a.75.75 0 01-.02-1.06z"
                    clip-rule="evenodd" />
            </svg>
        </button>

        <!-- Dropdown options -->
        <div v-show="isOpen"
            class="absolute right-0 z-50 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1">
                <button v-for="option in options" :key="option.value" @click="selectOption(option)"
                    class=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left  ">
                    <div class="flex items-center">
                        <img :src="option.img" alt="">
                        <p class="ml-2">{{ option.label }}</p>
                    </div>
                    <hr>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ru from 'assets/imgs/home/ru.png';
import { useHomeStore } from '~/store/home';

const store = useHomeStore()

// const { setLocale } = useI18n()
const isOpen = ref(false);
const selectedLang = ref(null); // Default selected option
const options = ref([
    { label: 'Uz', value: 'uz', img: ru },
    { label: 'Ru', value: 'ru', img: ru },
    { label: 'En', value: 'en', img: ru },
]);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
    selectedLang.value = option;
    // setLocale(option.value);
    localStorage.setItem('lang', JSON.stringify(option));
    isOpen.value = false;
    store.getTranslate()
};

const langclose = () => {
    isOpen.value = false;

};

watch(
    () => isOpen.value,
    (newValue) => {
        if (newValue) {
            document.addEventListener('click', langclose);
        } else {
            document.removeEventListener('click', langclose);
        }
    }
);

onBeforeUnmount(() => {
    document.removeEventListener('click', langclose);
});

onMounted(() => {
    const lang = localStorage.getItem('lang');
    if (lang) {

        selectedLang.value = JSON.parse(localStorage.getItem('lang'));
        // setLocale(selectedLang.value.value);
    } else {
        let optionsJson = JSON.stringify(options.value[0]);
        localStorage.setItem('lang', optionsJson);
        selectedLang.value = options.value[0];
        // setLocale(selectedLang.value.value);

    }

});
</script>