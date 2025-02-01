<template>
    <div>
  <div class="main_branch    2xl:w-[1076px] xl:w-[920px] lg:w-[650px]">
            <div class=" bg-white">

            <div
            class="flex 2xl:w-[1076px] xl:gap-8 sm:gap-4  xl:p-8 sm:p-4 gap-8 rounded-xl border-[#E6EDFA]-1   sm:w-[100%] main_box">

                <div class="w-[283px] h-[361px]">
                    <img class="img1" src="/assets/imgs/talim/person.svg" alt="">
                </div>
                <div class="lg:w-[741px] md:w-[70%] sm:w-[60%] w-full img1 flex flex-col flex_col  ">
                    <div>
                        <p class="mb-2 font-medium text-2xl main_box_width ">Abduqayumov Abdumannon</p>
                        <p class="font-normal text-xl text-[#9A999B] main_box_width ">shlar departament boshlig'i</p>
                    </div>
                    
                    <div class="flex gap-4 lg:mt-6 mt-4   flex-col">
                        <div class="flex gap-4 flex_col">
                            <div class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full">
                                <!-- <UIcon name="i-heroicons-phone" class="text-gray-400 w-5 h-5" /> -->
                                <img src="/assets/imgs/vacansiec/phone.png" alt="">
                                <div>
                                    <p class="text-[#5D5D5F] text-base font-normal">Telefon raqam:</p>
                                    <p class="text-black font-normal text-base">+998 99 972 32 26</p>
                                </div>
                            </div>
                            <div class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full">
                                <!-- <UIcon name="i-heroicons-phone" class="text-gray-400 w-5 h-5" /> -->
                                <img src="/assets/imgs/vacansiec/email.png" alt="">

                                <div>
                                    <p class="text-[#5D5D5F] text-base font-normal">Elektron pochta:</p>
                                    <p class="text-black font-normal text-base">ravshanovalsiehr763@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full">
                                <!-- <UIcon name="i-heroicons-phone" class="text-gray-400 w-5 h-5" /> -->
                            <img class="w-4 h-4" src="/assets/imgs/vacansiec/vaqt.png" alt="">
                            <div>
                                <p class="text-[#5D5D5F] text-base font-normal">Ish kunlari:</p>
                                <p class="text-black font-normal text-base">Dushanba - Juma <span>09:00 - 18:00</span> </p>
                            </div>
                        </div>
                    
                    </div>

                    <div class="mt-6">
                        <!-- <p>Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga erishishlari uchun intellektual va dinamik muhit yaratamiz.
Toshkent menejment va iqtisodiyot instituti 2021-yilda Oliy ta’lim sohasida nodavlat ta’lim xizmatlarini ko‘rsatish uchun O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirligi tomonidan berilgan 2024-yil 24-iyuldagi 327608-sonli litsenziyasi asosida talabalarga sifatli ta’lim berish maqsadida tashkil etilgan. Mehnat bozori va umuman jamiyatning jadal o'sib borayotgan ehtiyojlarini qondirish uchun zamon bilan hamnafas rivojlanishda va takomillashishda davom etmoqdamiz.</p> -->
                             <div class="text_padding">
                                <p ref="text" class="text" :class="{ 'line-clamp-3': !expanded }">
                                {{ fullText }}
                                </p>
                                <button v-if="!expanded" @click="expanded = true" class="text-red-500 font-bold">
                                    Ko‘proq...
                                </button>
                            </div>
                    </div>

                </div>
            </div>
          
        </div>
    </div>
    </div>
</template>

<script setup>
const fullText = ref(`2023 yil Toshkent menejment va iqtisodiyot instituti tarkibida 
“Umumiqtisodiy fanlar” kafedrasi tashkil qilingan. 2023/2024 o‘quv yilida 
kafedrada 60310100 – Iqtisodiyot (tarmoqlar va sohalar bo‘yicha); 
60410100 – Buxgalteriya hisobi va audit ...2023 yil Toshkent menejment va iqtisodiyot instituti tarkibida 
“Umumiqtisodiy fanlar” kafedrasi tashkil qilingan. 2023/2024 o‘quv yilida 
kafedrada 60310100 – Iqtisodiyot (tarmoqlar va sohalar bo‘yicha); 
60410100 – Buxgalteriya hisobi va audit ...2023 yil Toshkent menejment va iqtisodiyot instituti tarkibida 
“Umumiqtisodiy fanlar” kafedrasi tashkil qilingan. 2023/2024 o‘quv yilida 
kafedrada 60310100 – Iqtisodiyot (tarmoqlar va sohalar bo‘yicha); 
60410100 – Buxgalteriya hisobi va audit ...`);

const expanded = ref(false);
</script>

<style scoped>
.text {
  overflow: hidden;
  font-weight: 400;
  font-size: 16px;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Faqat 3 qatorni ko‘rsatish */
  -webkit-box-orient: vertical;
  overflow: hidden;
}


@media (max-width:1280px){
    .flex_col{
        flex-direction: column;
    }
}
@media (max-width:1024px) {
    .main_branch {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width:640px) {
    .text_padding{
        padding:2em
    }
    .main_box {
        display: flex;
        flex-direction: column;   
        align-items: center;
    }
    .flex_col{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img1 {
        width: 100%;
    }

    .main_box_width {
        width: 100%;

        text-align: center;
    }
}


.copied-text {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4caf50;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeInOut 2.5s ease-in-out;
    z-index: 1000;
}

</style>