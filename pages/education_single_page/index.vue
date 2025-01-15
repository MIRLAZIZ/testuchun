<script setup>
const sum = ref([1, 2, 3, 4, 5])
const sum1 = ref([1, 2, 3])
const sum2 = ref([1, 2, 3,4])



</script>
<template>
    <div>
        <div style="position:relative;"  >
            <img  src="../../assets/imgs/talim/tabiat.svg" alt="">
            <div class="text-center">
                 <p  style="position:absolute;top:25%;right:30%;font-size:60px;width:630px;" class="font-medium  text-white">IQTISODIYOT FAKULTETI</p>

            </div>
            <div class="text-center">
                <p style="position:absolute;top:65%;right:38%;color:white">Asosiy / Bakalavr / 84309400943 -  Iqtisofiyot</p>
            </div>
            <div class="flex justify-center " style="position:absolute;top:80%; right:10%">
                     <div style="width:1440px;background-color:white;color:black;display:flex;border-radius:12px;height:165px;align-items:center;" >
                        <div style="width:326px;padding:20px;" v-for="(items,index) in sum " :key="index">
                              <div style="border:1px solid #E6EDFA;padding:15px 16px;border-radius:8px"  >
                                    <div class="flex gap-2" >
                                        <img src="../../assets/imgs/talim/watch.svg" alt="">
                                        <p class="font-normal text-sm" style="color:#868587" >Turi</p>
                                    </div>
                                    <p class="font-normal text-sm mt-2">Kunduzgi-5-yil</p>
                                    <p>Sirtqi-5-yil</p>

                                </div>
                        </div>
                      
                    </div>
            </div>
           
        </div>


          <div style="margin-top:187px;margin-bottom:104px;display:flex;align-items:center;justify-content:center;flex-direction:column">
                <div style="width:1440px;display:flex;align-items:center;justify-content:center;">
                    <div style="width:1016px; background-color:white;padding:72px 32px 24px 32px" class="flex flex-col gap-6 rounded-xl">
                        <div style="width:952px;border:1px solid #E6EDFA;padding:24px;" class="rounded-xl " v-for="(item,index) in sum1" :key="index">
                            <p class="mb-4 font-medium text-xl">FAKULTET TAVSIFI</p>
                            <p class="font-normal text-sm">Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit yaratamiz.</p>
                        </div>



                        <div class="mt-14">
                            <iframe width="952"
                            height="536" 
                            style="border-radius: 12px;"
                            src="https://www.youtube.com/embed/cIu2Sxy4wqg?si=5TAfut_HT72UbmJq" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>
                        </div>


                        <div class="flex gap-6 ">
                            <div class="w-[416px] h-[416]" >
                                <img src="../../assets/imgs/talim/build.svg" alt="">
                            </div>
                            <div class="rounded-xl  " style="width:464px;border:1px solid #E6EDFA;padding:64px 15px">
                                <p class="font-medium text-xl mb-6 mt-16">KIRISH TALABALRI</p>
                                <div class="flex gap-2 mb-6 w-[416px]">
                                      <div style="background-color:#F4F6FA" class="rounded-xl"  v-for="(item,index) in sum2" :key="index">
                                         <p class="text-slate-950 p-3">
                                                General
                                          </p>
                                      </div>
                                </div>
                                <div style="width:416px">
                                    <p class="font-normal text-sm mb-2 text-slate-950">Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!</p>
                                    <p class="font-normal text-xs" style="color:#868587">TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz.</p>
                                </div>
                              
                            </div>
                        </div>


                        <div class="flex gap-6 ">
                            
                            <div class="rounded-xl  " style="width:464px;border:1px solid #E6EDFA;padding:64px 15px">
                                <p class="font-medium text-xl mb-6 mt-16">FAOLIYAT</p>
                             
                                <div style="width:416px">
                                    <p class="font-normal text-sm mb-2 text-slate-950">Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!</p>
                                    <p class="font-normal text-xs" style="color:#868587">TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz.</p>
                                </div>
                              
                            </div>
                            <div class="w-[416px] h-[416]" >
                                <img src="../../assets/imgs/talim/tabiat_image.svg" alt="">
                            </div>
                            
                        </div>

                    </div>
                </div>


          </div>
    </div>
</template>
<style lang="" >

</style>