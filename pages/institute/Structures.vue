<script setup>
const showImage = ref(false)
</script>
<template>
    <div class="flex items-center justify-center">
        <div class="w-[1076px] p-8 bg-white rounded-xl  xl:w-[900px] lg:w-[700px] md:w-[750px] sm:w-[600px] box_wrapper">
            <!-- <div class="p-5 border rounded-xl">

                <img src="/assets/imgs/kampus/image 150.png" alt="">
            </div> -->
            <div>
                <!-- Rasm -->
                <img 
                src="/assets/imgs/kampus/image 150.png" 
                alt="Diagram p-5 border rounded-xl" 
                class="thumbnail" 
                @click="showImage = true"
                />

                <!-- Modal oyna -->
                <div v-if="showImage" class="modal" @click.self="showImage = false">
                <img src="/assets/imgs/kampus/image 150.png" alt="Diagram" class="modal-content" />
                </div>
            </div>


            <div class="mt-8 box_padding pr-14">
                <h1 class="text-[28px] text-[#06203D]  mb-6 ">Toshkent menejment va iqtisodiyot instituti:
                    Sizning
                    muvaffaqiyat
                    yo'lingiz!</h1>
                <p class="text-[20px] text-black ">
                    Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot,
                    marketing,
                    boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va
                    psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va
                    amaliyotga
                    ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini
                    rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga
                    erishishlari uchun intellektual va dinamik muhit yaratamiz.
                    Toshkent menejment va iqtisodiyot instituti 2021-yilda Oliy ta’lim sohasida nodavlat ta’lim
                    xizmatlarini ko‘rsatish uchun O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar
                    vazirligi tomonidan berilgan 2024-yil 24-iyuldagi 327608-sonli litsenziyasi asosida
                    talabalarga
                    sifatli ta’lim berish maqsadida tashkil etilgan. Mehnat bozori va umuman jamiyatning jadal
                    o'sib
                    borayotgan ehtiyojlarini qondirish uchun zamon bilan hamnafas rivojlanishda va
                    takomillashishda
                    davom etmoqdamiz.
                </p>
            </div>


            <div class="mt-8 pr-16 box_padding">
                <h1 class="text-[28px] text-[#06203D]  mb-6">Toshkent menejment va iqtisodiyot instituti:
                    Sizning
                    muvaffaqiyat
                    yo'lingiz!</h1>
                <p class="text-[20px] text-black">
                    Toshkent menejment va iqtisodiyot institutiga xush kelibsiz! TMII bu, iqtisodiyot,
                    marketing,
                    boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va
                    psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va
                    amaliyotga
                    ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini
                    rivojlantirish, shakllantirish va zamonaviy biznes dunyosida muvaffaqiyatli karyeraga
                    erishishlari uchun intellektual va dinamik muhit yaratamiz.
                    Toshkent menejment va iqtisodiyot instituti 2021-yilda Oliy ta’lim sohasida nodavlat ta’lim
                    xizmatlarini ko‘rsatish uchun O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar
                    vazirligi tomonidan berilgan 2024-yil 24-iyuldagi 327608-sonli litsenziyasi asosida
                    talabalarga
                    sifatli ta’lim berish maqsadida tashkil etilgan. Mehnat bozori va umuman jamiyatning jadal
                    o'sib
                    borayotgan ehtiyojlarini qondirish uchun zamon bilan hamnafas rivojlanishda va
                    takomillashishda
                    davom etmoqdamiz.
                </p>
            </div>



        </div>

    </div>
</template>
<style lang="css" scoped>
@media (max-width:640px){
    .box_wrapper{
        width:350px;
    }
    .box_padding{
        padding:0px
    }
    .box_padding h1{
        font-size: 16px;
        font-weight:500;

    }
     .box_padding p{
        font-size: 14px;
        font-weight:400;
        
    }
}

/* .thumbnail {
  width: 200px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
} */

/* Modal uchun oyna */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Modal tarkibidagi rasm */
.modal-content {
  max-width: 90%;
  max-height: 90%;
  border: 2px solid #fff;
  border-radius: 10px;
}
</style>
