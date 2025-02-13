<template>
    <div class="flex justify-center py-10 w-full bg-white">

        <div class="mainContainer    ">
            <HomeFooterLogo  v-if="isClient" data-aos="fade-down"  />
            <hr class="mt-12 mb-14">
            <HomeFooterContact  v-if="isClient"  data-aos="fade-up" />

        </div>
    </div>
</template>

<script setup>
const isClient = ref(false);

onMounted(() => {
  isClient.value = true;
});
</script>

<style  scoped></style>