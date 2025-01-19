<template>
    <div>
        <!-- <LibraryStudents /> -->
        <LibraryAbout :data="data" />

    </div>
</template>

<script setup>
import img1 from '../../assets/imgs/talim/person.svg'
const data =[
    { id: 1,img:img1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
]
</script>

<style lang="scss" scoped>

</style>