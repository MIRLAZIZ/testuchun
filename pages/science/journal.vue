<script setup>
import { useContactStore } from "/store/contact";
import { useHomeStore } from "~/store/home";
import { onMounted } from "vue";
const store = useContactStore();
const route = useRoute();
const homeStore = useHomeStore();
const loading = ref(true);

onMounted(() => {
  store
    .getDocument()
    .then(() => {
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });

  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  homeStore.getMenuStatick(prentPageOne, route.fullPath);
});
</script>

<template>
  <div class="w-full">
    <LoadingPage v-if="loading" />
    <Science :data="store.documents" v-else />
  </div>
</template>


