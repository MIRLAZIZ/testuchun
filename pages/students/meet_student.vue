<template>
    <div>
        <LibraryStudents :data="studets" />

    </div>
</template>

<script setup>

import { useHomeStore } from '~/store/home';
import img1 from '/assets/imgs/talim/person.svg'


const studets = ref(null)
const store = useHomeStore()
const route = useRoute()




onMounted(() => {
    store.getStudents()
        .then(res => {
            studets.value = res.data
        })

    const parentPage = `/${route.fullPath.split('/')[1]}`
    store.menuFind(parentPage, route.fullPath)
})

</script>

<style scoped></style>