<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()

onMounted(() => {
    store.getTranslate()
})

</script>
<template>

    <div class="bg-[#F4F6FA]">
        <HomeHeaderNavBar />

        <slot />

        <HomeFooter />

    </div>
</template>


<style scoped></style>