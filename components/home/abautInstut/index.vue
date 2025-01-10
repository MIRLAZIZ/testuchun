<script setup>
import kampus from '~/assets/imgs/home/building-3.png'
import auditoriya from '~/assets/imgs/home/sitemap.png'
import active from '~/assets/imgs/home/multi-user.png'
import book from '~/assets/imgs/home/book-open.png'

const items = [
    { id: 1, name: 'Kampus', img: kampus },
    { id: 2, name: 'Autitoriya', img: auditoriya },
    { id: 3, name: 'Falollar zali', img: active },
    { id: 4, name: 'Kutubxona', img: book }
]

</script>

<template>
    <div class="px-[240px]">
        <div class="grid grid-cols-2 gap-8 bg-white rounded-lg shadow-md  h-[630px] p-8">
            <!-- Chap bo'lim -->
            <div class="flex flex-col justify-between">
                <div>
                    <h1 class="abautTitle ">
                        TOSHKENT MENEJMENT VA <br> IQTISODIYOT INSTITUT
                    </h1>
                    <p class="abautBody my-6 ">
                        Bugungi kunga qadar institut O‘zbekiston va xorijdagi xalqaro
                        universitetlar va ta’lim tashkilotlari bilan hamkorlik qilib,
                        bakalavriat va magistratura yo‘nalishlari bo‘yicha ta’lim dasturlari,
                        ta’lim dasturlari, ta’lim va kadrlar tayyorlash va qayta tayyorlash
                        dasturlarini amalga oshiradi.
                    </p>
                </div>

                
                <UButton class="text-base bg-[#F7483B] w-[216px] h-[48px] flex justify-center font-medium	 ">Ariza
                    topshirish
                    <UIcon name="i-heroicons-arrow-long-right" class="w-5 h-5" />
                </UButton>


                <div class="mt-6 grid grid-cols-2 gap-4   w-[556px]">

                    <button v-for="item in items" :key="item.id" class="buttons border flex flex-col justify-between">
                        <img :src="item.img" alt="">
                        <p class="text-[#06203D] text-left">{{ item.name }}</p>
                    </button>

                </div>

            </div>

            <!-- O'ng bo'lim -->
            <div class="flex flex-col items-center  relative h-full">
                <img src="/assets/imgs/home/Rectangle 15.png" alt="Institut binosi"
                    class="rounded-lg shadow-md abautImg" />

                    <div class="absolute bg-white w-[80px] h-[80px]  flex justify-center items-center rounded-full right-6 bottom-6 ">
                        <img src="/assets/imgs/home/playVideo.png" alt="">
                    </div>

            </div>
        </div>
    </div>
</template>
<style>
.abautTitle {
    font-family:'Halvar Breitschrift';
    font-size: 28px;
    font-weight: 500;
    line-height: 33.6px;


}

.abautBody {
    /* font-family: Golos Text; */
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
}

.buttons {
    max-width: 270px;
    height: 107px;
    padding: 15px 16px 15px 16px;
    border-radius: 8px;
}

.abautImg {
    width: 680px;
    height: 100%;
    border-radius: 8px ;

}
</style>
