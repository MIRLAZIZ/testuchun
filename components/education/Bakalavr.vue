<script setup>
// const sum = ref([
//     {img:'../../assets'}
// ])
const sum = ref([1, 2, 3,4])

const sum1 = ref([1, 2, 3])
const sum2 = ref([1, 2, 3,4])
const sum3 = ref([1, 2,])



</script>
<template>
    <div>
        <div  class="relative"  >
            <img  src="../../assets/imgs/talim/tabiat.svg" alt="">
            <div class="text-center">
                 <p   class="font-medium  text-white absolute top-[25%] right-[30%] text-[64px] w-[630px]">IQTISODIYOT FAKULTETI</p>

            </div>
            <div class="text-center">
                <p  class="absolute top-[65%] right-[38%] text-white font-normal text-lg"  >Asosiy / Bakalavr / 84309400943 -  Iqtisodiyot</p>
            </div>
            <div class="flex justify-center absolute top-[80%] right-[10%] " >
                     <div class="w-[1440px] bg-white text-black flex gap-6 justify-center rounded-xl h-[165px] items-center" >
                        <div  class="w-[326px] h-[101px] p-[15px] border-[1px] border-[#E6EDFA]  rounded-lg " v-for="(items,index) in sum " :key="index">
                              <div class="p-[15px 16px] rounded-lg h-[100%] flex flex-col justify-around "   >
                                    <div class="flex gap-2" >
                                        <img src="../../assets/imgs/talim/watch.svg" alt="">
                                        <p class="font-normal  text-[#868587] text-lg"  >Turi</p>
                                    </div>
                                    <div class="flex flex-col justify-center">
                                        <p class="font-normal text-lg ">Kunduzgi-5-yil </p>
                                        <!-- <p>Sirtqi-5-yil</p> -->
                                    </div>
                                  

                                </div>
                        </div>
                      
                    </div>
            </div>
           
        </div>


          <div style="margin-top:187px;margin-bottom:104px;display:flex;align-items:center;justify-content:center;flex-direction:column">
                <div style="width:1440px;display:flex;align-items:center;justify-content:center;">
                    <div style="width:1016px; background-color:white;padding:72px 32px 24px 32px" class="flex flex-col gap-6 rounded-xl">
                        <div style="width:952px;border:1px solid #E6EDFA;padding:24px;" class="rounded-xl " v-for="(item,index) in sum1" :key="index">
                            <p class="mb-4 font-medium text-2xl">FAKULTET TAVSIFI</p>
                            <p class="font-normal text-base">Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit yaratamiz.</p>
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


                        <div class="flex gap-6  w-[952px]">
                            <div class="w-[464px] h-[416]" >
                                <img src="../../assets/imgs/talim/build.svg" alt="">
                            </div>
                            <div class="rounded-xl h-[416px] w-[464px] flex justify-center flex-col" style="border:1px solid #E6EDFA;padding:15px">
                                <div>
                                <p class="font-medium text-2xl mb-6 ">KIRISH TALABALRI</p>

                                </div>
                                <div class="flex gap-2 mb-6 w-[416px]">
                                      <div style="background-color:#F4F6FA" class="rounded-xl"  v-for="(item,index) in sum2" :key="index">
                                         <p class="text-slate-950 p-3 font-semibold text-xs">
                                                General
                                          </p>
                                      </div>
                                </div>
                                <div style="width:416px" class="">
                                    <p class="font-normal text-base mb-2 text-slate-950">Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!</p>
                                    <p class="font-normal text-sm" style="color:#868587">TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz.</p>
                                </div>
                              
                            </div>
                        </div>


                        <div class="flex gap-6 w-[952px] ">
                            
                            <div class="rounded-xl w-[464px] flex flex-col justify-center " style="border:1px solid #E6EDFA;padding:15px">
                                <p class="font-medium text-2xl mb-6 ">FAOLIYAT</p>
                             
                                <div style="width:416px">
                                    <p class="font-normal text-base text-[#000000]">Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz.</p>
                                </div>
                              
                            </div>
                            <div class="w-[464px] h-[416]" >
                                <img src="../../assets/imgs/talim/tabiat_image.svg" alt="">
                            </div>
                            
                        </div>

                    </div>
                </div>


          </div>

            <div class="" style="margin-top:187px;margin-bottom:104px;display:flex;align-items:center;justify-content:center;flex-direction:column">
                   <div class="flex gap-8 p-8  rounded-xl w-[952px] h-[498px]" style="background-color:#06203D">
                          <div class="w-[329px] h-[434px]" >
                                <img src="../../assets/imgs/talim/person.svg" alt="">
                            </div>  
                            <div class="rounded-xl  " style="width:527px;display:flex;flex-direction:column;justify-content:center">
                                <p class="font-normal text-base" style="color:#88929D">Kurs lideri</p>
                                <p class="font-medium text-2xl mb-4  text-white">Abdulla Qodirov</p>
                             
                                <div style="width:416px" >
                                    <p class="font-normal text-base text-white " style="color:#FFFFFFCC">TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz.</p>
                                </div>
                              
                            </div>
                            
                            
                        </div>
        </div>


        <div style="margin-top:187px;margin-bottom:104px;display:flex;align-items:center;flex-direction:column" >
            <div>
                <p class="text-2xl font-medium">Bitiruvchilar fikrlari</p>
                <div class="flex gap-6">
                     <div v-for="(item,index) in  sum3" :key="index">
                        <div class="flex gap-6 mt-4 rounded-xl" style="width:464px;padding:20px;height:240px;border:1px solid #E6EDFA;background-color:#FFFFFF">
                            <div style="width:157px;200px">
                                <img src="../../assets/imgs/talim/person.svg" alt="">
                            </div>
                            <div style="width:243px;hieght:194px;">
                                <div class="mb-4 " style="width:243px;text-overflow:ellipsis;overflow: hidden; display:-webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                                    <p class=" font-medium text-xl ">Abduqayumov Abdumannon Abdulboriy o'g'li</p>

                                </div>
                                <p class="font-normal text-base" style="color:#9A999B">Mening ismim Musirmanova Dilbar va men Toshkent menejment va iqtisodiyot instituti talabasiman.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-[29px]">
                    <button class="bg-[#F7483B] rounded-lg w-[192px]  h-[48px] flex text-white gap-2 justify-center items-center font-medium text-base">Topshiriq <img src="../../assets/imgs/talim/arrow-right.png" alt=""> </button>
                </div>

            </div>
            
           
          
          

        </div>

    </div>
</template>
<style lang="" >

</style>