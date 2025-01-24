<script setup>
import gov from '~/assets/imgs/home/gov.png'
import gov1 from '~/assets/imgs/home/gov1.png'
import creditExpress from '~/assets/imgs/home/creditExpress.png'
import link1 from '~/assets/imgs/home/link1.png'
import { useHomeStore } from '~/store/home'
import herg from '~/assets/imgs/home/image 149.png'
import econom from '~/assets/imgs/home/moliya.png'

const store = useHomeStore()

const items = ref([])
// const items = [
//   { id: 1, img: link1, link: 'wwwm.constitution.uz' },
//   { id: 2, img: gov1, link: "www.gov.uz/oz/edu" },
//   { id: 2, img: gov, link: "www.gov.uz" },
//   { id: 2, img: creditExpress, link: "www.imv.uz" }


// ]
const items2 = [
  { id: 1, img: herg, link: 'wwwm.constitution.uz' },
  { id: 2, img: gov, link: "www.gov.uz/oz/edu" },
  { id: 2, img: herg, link: "www.gov.uz/oz/edu" },
  { id: 2, img: econom, link: "www.imv.uz" }
]


onMounted(() => {
  store.getPartners().then(res => {
    items.value = res.data.data
    
  })
})

</script>


<template>
  <div class="">
    <HomeBanner />
      <HomeSciences />
      <HomeAbautInstut />
      <HomeFacts />
      <HomeStudents />
      <HomeOurProgram />
      <HomeQuestions />
      <HomeNews />
      <HomeIntsMedia />
      <HomeMarking />
      <HomeUsefulLink :items="items" :title="'home\.partners_text'"/>
      <HomeOurAdresses />
      <HomeUsefulLink :items="items2" :title="'home\.usefulLinks'" />


  </div>
</template>


<style scoped></style>