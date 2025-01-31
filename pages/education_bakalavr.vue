<script setup>
const datatype = [
    {id:1,img:img1,type:"Turi",name:"Kunduzgi 5-yil",description:"Sirtqi 4-yil"},
    {id:2,img:img1,type:"Til",name:"O'zbek Rus Ingliz ",description:""},
    {id:3,img:img1,type:"Manzil",name:"Toshkent Shahri",description:""},
    {id:4,img:img1,type:"Boshlanish sanasi",name:"01 aprel , 2024",description:""}
]
import img1 from "/assets/imgs/talim/watch.svg"

</script>
<template>
     <div class="mb-[144px]">
        <div>
        <UiBreadcrumb />
        <div class="flex items-center justify-center">
                <EducationTypeedu :data="datatype"/>

        </div>
        </div>
     
                <NuxtPage />
           

    </div>
</template>


<style scoped>

</style>