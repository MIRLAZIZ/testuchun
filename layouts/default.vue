<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()

const screenWidth = ref(0);

const updateImage = () => {
    if (screenWidth.value <= 600) {
        store.currentImage = 'sm';
    } else if (screenWidth.value <= 1200) {
        store.currentImage = 'md';
    } else {
       store.currentImage = 'lg';
    }
};


onMounted(() => {
    screenWidth.value = window.innerWidth;
    store.getTranslate()
    updateImage();

    window.addEventListener("resize", () => {

        screenWidth.value = window.innerWidth;
        updateImage();
    });
})


onUnmounted(() => {
    window.removeEventListener("resize", updateImage);
});
</script>
<template>

    <div class="bg-[#F4F6FA]">
        <HomeHeaderNavBar />

        <slot />

        <HomeFooter />

    </div>
</template>


<style scoped></style>