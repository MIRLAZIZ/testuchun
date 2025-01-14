<script setup>

</script>

<template>

    <div class=" bg-white  flex flex-col items-center justify-center py-[48px] h-[189px]">
        <h1 class="text-[40px] font-medium"> {{ $route.params.slug }}</h1>
        <div class="text-[#5D5D5F] text-lg">
            <button @click="$router.push('/')">Asosiy</button> / <button
                @click="$router.push('/kampus')">Kampus</button> / <button> {{ $route.params.slug }} </button>
        </div>
    </div>

</template>
