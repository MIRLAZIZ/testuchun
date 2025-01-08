<script setup>
import { useHomeStore } from '~/store/home'
const store = useHomeStore()

const { setLocale } = useI18n()

const buttonres = () => {
    store.fetchData()
        .then((res) => {
            console.log(res, 'axios')
        })
    
    }

        // console.log(useRuntimeConfig());
        

const fechData = () => {
    $fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res, 'fetch')
        })
}
onMounted(() => {
    localStorage.setItem('authToken', '123')

    // $fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => {
    //         console.log(res, 'fetch')
    //     })
})


</script>
<template>
    <div>
        {{ $i18n.locale }}
        <p style="color:red;">{{ $t('hello') }} {{ $t('world') }}</p>
        {{ store.count }}
        <!-- <UButton @click="$i18n.locale = 'ru'; $router.push($i18n.localePath(''))">axios</UButton>
        <UButton @click="$i18n.locale = 'en'">Fetch</UButton> -->

        <UButton @click="setLocale('ru')">ru</UButton>
        <UButton @click="setLocale('en')">en</UButton>
        <UButton @click="setLocale('uz')">ru</UButton>
        <UButton @click="$router.push('/test')">test</UButton>
        <NuxtLink to="/test">test</NuxtLink>


        <!-- <NuxtImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToti4AHW_VG6iIPfI_4vhSeYHbQ1rwZz5Jag&s"
            class="mt-10" /> -->

        
    </div>

</template>

<style lang="scss" scoped></style>