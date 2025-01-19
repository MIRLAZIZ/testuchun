<script setup>
const items = [
    {id:1, title: "60410100 - IQTISODIYOT"},
    {id:2, title: "60410200 - BUXGALTERIYA HISOBI VA AUDIT TARTIBI "}, 
    {id:3, title: "60410300 - MENEJMENT"},
    {id:4, title: "60410400 - IKTISODIYOT"},
    {id:5, title: "60410500 - ICHKI TARTIB QOYDALARI"},
    {id:6, title: "60410600 - ICHKI TARTIB QOYDALARI"},
    {id:7, title: "60410700 - ICHKI TARTIB QOYDALARI"},
    {id:8, title: "60410800 - ICHKI TARTIB QOYDALARI"},
    {id:9, title: "60410900 - ICHKI TARTIB QOYDALARI"},
    {id:10, title: "60411000 - ICHKI TARTIB QOYDALARI"},
    {id:11, title: "60411100 - ICHKI TARTIB QOYDALARI"},
    {id:12, title: "60411200 - ICHKI TARTIB QOYDALARI"},
 
    
]
 </script>
<template>
    <div>
        <EducationInformation  :items="items"/>
        <EducationFaq />


    </div>
</template>


<style scoped>

</style>