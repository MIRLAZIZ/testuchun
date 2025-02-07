// error.vue
<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1>404</h1>
    <p>{{ error?.message }}</p>
    <button @click="handleError">Bosh sahifaga</button>
  </div>
</template>

<script setup>
const error = useError()
const handleError = () => {
  navigateTo('/')
}
</script>