<script setup>
import img1 from "../../assets/imgs/talim/Download.png"
const data_ab = ref(true)
const data = [
    {id:1, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},
    {id:2, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},
    {id:3, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},
    {id:4, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},
    {id:5, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},
    {id:6, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},
    {id:7, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},
    {id:9, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},
    {id:10, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},
    {id:11, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},
    {id:12, name:"Iqtisodiyot", date:"11 22 2020 ", img1:img1},


]
</script>

<template>
    <div>
        <div v-show="data_ab">
            <Science :data="data" />

        </div>
        <div v-show="!data_ab">
        <ScienceAbout />

        </div>
    </div>
</template>


