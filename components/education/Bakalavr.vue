<script setup>

import imgcarousel from '~/assets/imgs/kampus/carousel.png'
import gov from '~/assets/imgs/talim/Yangiliklar.png'
import gov1 from '~/assets/imgs/talim/Yangiliklar.png'
import creditExpress from '~/assets/imgs/home/creditExpress.png'
import link1 from '~/assets/imgs/talim/Yangiliklar.png'



const taps = [
    {id:1, name:'FAKULTET TAVSIFI',description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit yaratamiz."},
    {id:2, name:'FAKULTET TAVSIFI',description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit yaratamiz."},
    {id:3, name:'FAKULTET TAVSIFI',description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit yaratamiz."},

]

const aboutright = [
    {id:1, name:"Kirish talablari",description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!",descriptionall:"TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz."},
]

const generet = [
    {id:1, name:"general"},
    {id:2, name:"English language"},
    {id:3, name:"Math"},
    {id:4, name:"Age"}

]
const items = [
  { id: 1, images: link1, title: 'Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi' },
  { id: 2, images: gov1, title: "Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi" },
  { id: 2, images: gov, title: "Oʻzbekiston – 2030 strategiyasida belgilangan vazifalar ijrosi muhokama qilindi" },



]
</script>
<template>
    <div>
          <div class="mt-[104px] mb-[104px] flex items-center justify-center flex-col">
                <div class="2xl:w-[1440px] flex items-center justify-center xl:[1000px] w-full px-5">
                    <div class="lg:w-[1000px] w-full bg-white pt-[72px] px-[32px] pb-[24px]  flex flex-col gap-6 rounded-xl">
                        <EducationTabsview :data="taps" />
                         <EducationIframe />
                       <EducationAboutright  :data="aboutright" />
                        <EducationAboutleft  />
                    </div>
                </div>
          </div>
            <!-- <EducationComments />-->
            <HomeUsefulLink :items="items" /> 

    </div>
</template>
<style lang="css" >

.selector {
  background-image: url('/assets/imgs/talim/tabiat.svg');
    background-size: cover; /* Rasmni to'liq ekranga moslashtiradi */
  background-repeat: no-repeat; /* Rasm takrorlanmasligi uchun */
  background-position: center; /* Rasmni markazga joylashtiradi */
}


</style>