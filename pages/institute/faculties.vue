<script setup>
const data = [
    {id:1, name: "60410100 - IQTISODIYOT",description:"Batafsil"},
    {id:2, name: "60410200 - BUXGALTERIYA HISOBI VA AUDIT TARTIBI ",description:"Batafsil"}, 
    {id:3, name: "60410300 - MENEJMENT",description:"Batafsil"},
    {id:4, name: "60410400 - IKTISODIYOT",description:"Batafsil"}   
]

</script>

<template>
    <div>
        <!-- <EducationInformation  :items="items"/> -->
        <EducationInformation :data="data" />


    </div>
</template>



