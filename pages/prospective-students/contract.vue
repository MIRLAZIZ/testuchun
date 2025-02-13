<template>
  <div>
    <div class="2xl:w-[1076px] w-full">
      <div class="w-full bg-white rounded-xl p-8">
        <UiDescriptions :data="data" />
      </div>

      <div>
        <AbuturentBaclavrGrand />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const data = ref([
  {
    id: 1,
    name: store.dataTranslate["header.contract_grant_title"],
    description: store.dataTranslate["header.contract_grant_text"],
  },
]);

onMounted(() => {
  if (!store.menuShow) {
    store.menuShow = JSON.parse(localStorage.getItem("grants"));
  }
});
</script>

<style  scoped></style>