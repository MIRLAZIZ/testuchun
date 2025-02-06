<template>
  <div class="w-full my-20">
    <div
      class="video-container  w-full"
      v-html="props.data?.yt_link+'?rel=0'"
      v-if="props && props.data?.yt_link"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* Asosiy konteyner */
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 nisbat uchun */
  height: 0;
  overflow: hidden;
}

/* iframe uchun stil */
.video-container :deep(iframe) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  border-radius: 12px;
}

/* Agar aniq o'lcham kerak bo'lsa */
/* .video-container :deep(iframe) {
  width: 100% !important;
  height: 500px !important;
} */
</style>