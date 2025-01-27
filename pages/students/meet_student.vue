<template>
    <div>
        <LibraryStudents :data="studets" />

    </div>
</template>

<script setup>

import { useHomeStore } from '~/store/home';
import img1 from '/assets/imgs/talim/person.svg'

const store = useHomeStore();
const studets = ref(null)


onMounted(() => {
    store.getStudents()
        .then(res => {
            studets.value = res.data
        })
})

</script>

<style lang="scss" scoped></style>