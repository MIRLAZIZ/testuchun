<script setup>
</script>
<template>
  <div class="flex items-center justify-center">
    <div class="2xl:w-[1076px] xl:w-[900px] lg:w-[660px] bg-white rounded-xl  xl:p-8 lg:p-2 the_box_gender ">
        <div class="flex justify-between the_box_gender">
            <div class="w-[688px] mt-9 the_box_title">
                <h1 class="text-[28px] text-[#06203D] font-Halvar font-medium">BIZDA JINSLAR ARO AJOYIB ERKINLIKLAR VA
                    SHAROITLAR BOR.</h1>
                <p class="text-[20px] text-[#06203D]  font-normal mt-6">
                    Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing,
                    boshqaruv,
                    kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida,
                    hamda
                    boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv
                    muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va
                    zamonaviy
                    biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit
                    yaratamiz.
                </p>
            </div>
            <div class="w-[260px] h-[393px] p-4 rounded-lg border border-[#F1F1F1] the_wrapper">
                <div class="flex flex-col justify-between h-full  ">
                    <div class="flex justify-between items-center">
                        <h1>o'qub yili</h1>
                        <div class="flex items-center">
                            <span>2024</span>
                            <UIcon name="i-heroicons-chevron-down" class="ml-2" />
                        </div>
                    </div>
                    <img src="/assets/imgs/kampus/Pie Chart.png" alt="" class="w-[192px] h-[192px]">
                    <div>
                        <div class="flex justify-between">
                            <span class="flex items-center">
                                <div class="w-2 h-2 rounded-full dot1 mr-1"></div> Qiz bolalar
                            </span>
                            <span>12,000</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="flex items-center">
                                <div class="w-2 h-2 rounded-full dot2 mr-1"></div> O'g'il bolalar
                            </span>
                            <span>14,000</span>
                        </div>
                    </div>

                    <div class="flex justify-between items-end ">
                        <p>Jami soni</p>
                        <p class="text-[#06203D] text-[32px] h-11 the_title">26000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>    
</template>

<style scoped>

@media(max-width:1024px){
    .the_box_gender{
        padding:10px;
        /* width:750px; */
        width:100%
    }
}
@media(max-width:768px){
    .the_box_gender{
        padding:10px;
        /* width:570px; */
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:20px;

    }
    .the_box_title{
        width:500px
    }
}
@media(max-width:600px){
    .the_box_title{
        width:335px
    }
    .the_box_title h1{
        font-weight: 500;
        font-size: 16px;
    }
    .the_box_title p{
        font-weight: 400;
        font-size: 14px;
    }
     .the_box_gender{
        padding:15px;
        /* width:360px; */
        width:100%;
    }
    .the_title{
        font-weight: 400;
        font-size: 32px;
    }
}

.dot1 {
    background: linear-gradient(90deg, #EC4899 0%, #A855F7 52.6%, #3B82F6 100%);

}

.dot2 {
    background: linear-gradient(134.72deg, #06203D -0.13%, #1054A3 105.34%);
}
</style>