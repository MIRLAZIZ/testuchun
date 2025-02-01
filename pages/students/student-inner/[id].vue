<template>
    <div>
        <LibraryAbout  :data="student" />
        <!-- <LibraryStudent /> -->
        

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
       if(!store.menuShow){
           store.menuShow = JSON.parse(localStorage.getItem('studentlar'));
           console.log(store.menuShow);
           
       }

   })
</script>

<style scoped>

</style>