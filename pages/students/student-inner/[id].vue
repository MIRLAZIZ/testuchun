<template>
    <div>
        
        <LibraryAbout  :data="student" />
        

    </div>
</template>

<script setup>
import img1 from '/assets/imgs/talim/person.svg'
import { useHomeStore } from '~/store/home';

const store = useHomeStore();
const student = ref(null)
const route = useRoute()

   
   onMounted(() => {
       store.getStudentShow(route.params.id)
       .then(res => {
           student.value = res.data
       })

   })
</script>

<style scoped>

</style>