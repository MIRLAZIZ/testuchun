<template>
    <div>
        <ScienceCertificat :data="store.certificate" />
    </div>
</template>

<script setup>
import { useContactStore } from '/store/contact'
import img1 from "../../assets/imgs/talim/instetut.svg"
import { onMounted } from "vue"

const store = useContactStore()
onMounted(()=>{
    store.getCertificate()
    console.log("Certificate",store.certificate)
})

const data =[
    {id:1, img1:img1 ,routerlink:"science-industry",date:"11 22 2022", name:'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi'},
    {id:2, img1:img1 ,routerlink:"science-industry",date:"11 22 2022", name:'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi'},
    {id:3, img1:img1 ,routerlink:"science-industry",date:"11 22 2022", name:'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi'},
    {id:4, img1:img1 ,routerlink:"science-industry",date:"11 22 2022", name:'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi'},
    {id:5, img1:img1 ,routerlink:"science-industry",date:"11 22 2022", name:'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi'},
    {id:6, img1:img1 ,routerlink:"science-industry",date:"11 22 2022", name:'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi'},
    {id:7, img1:img1 ,routerlink:"science-industry",date:"11 22 2022", name:'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi'},
    {id:8, img1:img1 ,routerlink:"science-industry",date:"11 22 2022", name:'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi'},
    {id:9, img1:img1 ,routerlink:"science-industry",date:"11 22 2022", name:'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi'},

]

</script>

<style  scoped>

</style>