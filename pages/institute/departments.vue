<template>
    <div>
        <!-- <InstituteManagement/> -->
        <LibraryStudents  :data="data" />

    </div>
</template>

<script setup>
import img1 from '../../assets/imgs/talim/person.svg'

const data =[
    { id: 1,img:img1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' },
    { id: 2,img:img1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' },
    { id: 3,img:img1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' },
    { id: 4,img:img1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' },
    { id: 5,img:img1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' },
    { id: 6,img:img1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: '' }
]
</script>

<style scoped>

</style>