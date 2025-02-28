<script setup>
import { useHomeStore } from '~/store/home'

const gotoExtraLink = (path) => {
    if (path) {
    const fullUrl = path.startsWith("http") ? path : `https://${path}`;
    window.open(fullUrl, "_blank", "noopener,noreferrer");
  }

}

const store = useHomeStore()
</script>
<template>
    <div class="">
        <main>
            <div class="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-[25%_20%_53%] gap-8  ">

                <div class="">
                    <p class="sm:text-lg text-sm text-[#2E4259]">{{ store.dataTranslate['footer.contactUs'] }}</p>
                    <div class="flex items-center mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/phone.png" alt="" class="mr-2 w-[26px] h-[26px]">
                        <a :href="'tel:' + store.siteInfo?.phone_number?.split('\r\n')[0]"
                            class="text-[#06203D] font-medium sm:text-[22px] text-sm" target="_blank">
                            {{ store.siteInfo?.phone_number?.split('\r\n')[0] }}
                        </a>
                    </div>
                      <div class="flex items-center mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/phone.png" alt="" class="mr-2 w-[26px] h-[26px]">
                        <a :href="'tel:' + store.siteInfo?.phone_number?.split('\r\n')[1]"
                            class="text-[#06203D] font-medium sm:text-[22px] text-sm" target="_blank">
                            {{ store.siteInfo?.phone_number?.split('\r\n')[1] }}
                        </a>
                    </div>
                    <div class="flex items-center mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/phone.png" alt="" class="mr-2 w-[26px] h-[26px]">
                        <a :href="'tel:' + store.siteInfo?.phone_number?.split('\r\n')[2]"
                            class="text-[#06203D] font-medium sm:text-[22px] text-sm" target="_blank">
                            {{ store.siteInfo?.phone_number?.split('\r\n')[2] }}
                        </a>
                    </div>

                    <div class="flex items-center mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/phone.png" alt="" class="mr-2 w-[26px] h-[26px]">
                        <a :href="'tel:' + store.siteInfo?.phone_number?.split('\r\n')[3]"
                            class="text-[#06203D] font-medium sm:text-[22px] text-sm" target="_blank">
                            {{ store.siteInfo?.phone_number?.split('\r\n')[3] }}
                        </a>
                    </div>
                </div>


                <div class="  ">
                    <p class="text-lg text-[#2E4259]">{{ store.dataTranslate['footer.contactUs'] }}</p>
                    <div class="flex items-center mt-4 text-[22px] font-medium font-Halvar">
                        <img src="/assets/imgs/home/envelope.png" alt="" class="mr-2 w-[26px] h-[26px]">
                        <a :href="'mailto:' + store.siteInfo?.email" target="_blank" class="text-[#06203D] sm:text-lg  text-[12px]">{{ store.siteInfo?.email }}</a>

                    </div>
                </div>

                <div  class=" md:col-span-2 2xl:col-span-1 md:grid md:grid-cols-2  md:gap-8 2xl:grid-cols-1 justify-between" >
                    <div class=" cursor-pointer " @click="gotoExtraLink(store.kampus?.data[0].map)">
                      
                        <p class="text-lg text-[#2E4259]  ">{{ store.dataTranslate['footer.address'] }}</p>
                        <div class="flex  mt-4 text-[22px] font-medium font-Halvar">
                            <img src="/assets/imgs/home/locationdot.png" alt="" class="w-[26px] h-[26px] mr-2">
                            <a > {{ store.siteInfo?.address }}</a>
                        </div>
                    </div>
                    <div class="  cursor-pointer" @click="gotoExtraLink(store.kampus?.data[1].map)">
                       <br>
                        <div class="flex  mt-4 text-[22px] font-medium font-Halvar">
                            <img src="/assets/imgs/home/locationdot.png" alt="" class="w-[26px] h-[26px] mr-2">
                            <a> {{ store.dataTranslate['footer.fergana']}}</a>
                        </div>
                    </div>
                </div>
               


            </div>
        </main>
        <div class="flex justify-between mt-8  text-lg  text-[#06203D] box_wrapper_li">
            <p>{{ store.dataTranslate['footer.copyright'] }}</p>
            <p>{{ store.dataTranslate['footer.developed'] }} <span class="text-[#F7483B]">NDC</span></p>
        </div>
        
    </div>

</template>
<style scoped>
@media(max-width:1024px) {
    .box_wrapper {
        display: flex;
        flex-direction: column;
    }

    .box_wrapper_li {
        display: flex;
        flex-direction: column;
    }

    .box_wrapper_width {
        width: 100%
    }
}
@media (max-width:600px){
    a {
        font-size: 14px !important;
    }
    p{
        font-size: 14px !important;
    }
}
    a {
        font-weight: 500;
        font-size: 22px;
        color: #06203D;
    }
    p{
        font-weight:400;
        font-size: 18px;
    }
</style>