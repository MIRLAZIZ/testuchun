<script setup>
import img1 from "/assets/imgs/talim/watch.svg"
const datatype = [
    {id:1,img:img1,type:"Turi",name:"Kunduzgi 5-yil",description:"Sirtqi 4-yil"},
    {id:2,img:img1,type:"Til",name:"O'zbek Rus Ingliz ",description:""},
    {id:3,img:img1,type:"Manzil",name:"Toshkent Shahri",description:""},
    {id:4,img:img1,type:"Boshlanish sanasi",name:"01 aprel , 2024",description:""}

]

const taps = [
    {id:1, name:'FAKULTET TAVSIFI',description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit yaratamiz."},
    {id:2, name:'FAKULTET TAVSIFI',description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit yaratamiz."},
    {id:3, name:'FAKULTET TAVSIFI',description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit yaratamiz."},

]

const aboutright = [
    {id:1, name:"Kirish talablari",description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!",descriptionall:"TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz."},
    // {id:2, name:"Kirish talablari",description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!",descriptionall:"TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz."},
    // {id:3, name:"Kirish talablari",description:"Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!",descriptionall:"TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz."}

]

const aboutleft = [

]
const generet = [
    {id:1, name:"general"},
    {id:2, name:"English language"},
    {id:3, name:"Math"},
    {id:4, name:"Age"}

]


</script>
<template>
    <div>
        <div  class="relative w-full  "   >
            <img  class="2xl:w-[100%] xl:w-[100%]" src="/assets/imgs/talim/tabiat.svg" alt="">

            <div class="text-center">
                 <p   class="font-medium  text-white absolute top-[25%] right-[30%] text-[64px] w-[630px]">IQTISODIYOT FAKULTETI</p>

            </div>
            <div class="text-center">
                <p  class="absolute top-[65%] right-[38%] text-white font-normal text-lg"  >Asosiy / Bakalavr / 84309400943 -  Iqtisodiyot</p>
            </div>
            <div class="flex justify-center absolute top-[80%] right-[10%] " >
                     <EducationTypeedu :data="datatype" />
            </div>
           
        </div>


          <div class="mt-[187px] mb-[104px] flex items-center justify-center flex-col">
                <div class="2xl:w-[1440px] flex items-center justify-center xl:[1000px]">
                    <div class="w-[1016px] bg-white pt-[72px] px-[32px] pb-[24px] flex flex-col gap-6 rounded-xl">

                        <EducationTabsview :data="taps" />
                        <EducationIframe />
                        <EducationAboutright  :data="aboutright" />
                        <EducationAboutleft  />

                    </div>
                </div>
          </div>

            <EducationAboutperson />
            <EducationComments />

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