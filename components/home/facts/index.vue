<script setup>
import { useHomeStore } from '~/store/home'

const store = useHomeStore()

onMounted(() => {
   
})


</script>
<template>
    <div class="flex justify-center " >
        <div class="mt-[104px] mainContainer">
            <h1 class="facts">{{store.dataTranslate['home.facts_number']}} </h1>           
            <div class="mt-6 grid 2xl:grid-cols-3 lg:gap-4 lg:grid md:grid-cols-2 md:gap-4  sm:grid sm:grid-cols-2 sm:gap-4 flex_box">
                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="factsNumber text-[#F7483B]">+</span>
                        <span class="factsNumber ">{{ store.siteInfo?.educational_programs ? store.siteInfo?.educational_programs
                            : 0 }}</span>
                    </div>
                    <hr class="bg-[#E9EEF9]">

                    <p class="text-[#06203D] text-left">{{ store.dataTranslate['home.educational_programs'] }}</p>
                </div>

                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="factsNumber ">{{ store.siteInfo?.audience_size ? store.siteInfo?.audience_size : 0 }}</span>
                    </div>
                    <hr class="bg-[#E9EEF9]">

                    <p class="text-[#06203D] text-left">{{ store.dataTranslate['home.number_auditories'] }}</p>
                </div>

                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="factsNumber text-[#F7483B]">+</span>
                        <span class="factsNumber ">{{ store.siteInfo?.green_zone ? store.siteInfo?.green_zone : 0 }}m<sup
                                class="lg:text-[32px] text-[26px]">2</sup></span>
                    </div>
                    <hr class="bg-[#E9EEF9]">

                    <p class="text-[#06203D] text-left"></p>{{ store.dataTranslate['home.green_zone'] }}
                </div>



                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="factsNumber text-[#F7483B]">+</span>
                        <span class="factsNumber ">{{ store.siteInfo?.library_collection ? store.siteInfo?.library_collection : 0
                            }}</span>
                    </div>
                    <hr class="bg-[#E9EEF9]">

                    <p class="text-[#06203D] text-left">{{ store.dataTranslate['home.library_fund'] }} </p>
                </div>

                <div class="h-[164px] px-8 py-6 bg-white w-full rounded-xl flex flex-col justify-between">
                    <div>
                        <span class="factsNumber ">{{store.siteInfo?.number_of_students ? store.siteInfo?.number_of_students : 0
                            }}</span>
                    </div>
                    <hr class="bg-[#E9EEF9]">

                    <p class="text-[#06203D] text-left">{{ store.dataTranslate['home.number_students'] }} </p>
                </div>

                <div class="h-[164px] 2xl:px-8 xl:py-6 lg:px-6 lg:py-4 sm:px-4 sm:py-3 bg-white w-full rounded-xl ">
                    <div class="flex h-full w-full">
                        <div class="flex flex-col justify-between h-full w-full pr-3">
                            <div class="flex items-center">
                                <img src="/assets//imgs/home/Frame (1).png" class="w-[32px] h-[32px]" alt="">
                                <span class="factsNumber ">{{ store.siteInfo?.male_students ? store.siteInfo?.male_students : 0
                                    }}</span>
                            </div>
                            <hr class="bg-[#E9EEF9]">

                            <p class="text-[#06203D] text_left ml-1">{{ store.dataTranslate['home.male_students'] }} </p>
                        </div>
                        <div class="flex flex-col justify-between h-full  w-full pl-3">
                            <div class="flex items-center">
                                <img src="/assets//imgs/home/Frame.png" alt="" class="w-[32px] h-[32px]">
                                <span class="factsNumber ml-1 ">{{ store.siteInfo?.female_students ?
                                    store.siteInfo?.female_students : 0 }}</span>
                            </div>
                            <hr class="bg-[#E9EEF9]">
                            <p class="text-[#06203D] text-left">{{ store.dataTranslate['home.female_students'] }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
@media (max-width:1024px){
    .factsNumber{
    font-size: 46px !important;
    font-weight: 400 !important;
    font-family: Golos Text;
    }
}
@media (max-width:900px){
    .factsNumber{
    font-size: 30px !important;
    font-weight: 400 !important;
    font-family: Golos Text;
    }
}
@media (max-width:640px){
    .flex_box{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
       grid-template-rows: repeat(4, 1fr);
       gap: 1rem;      
    }
    .facts {
    font-family: 'Halvar Breitschrift';
    font-size: 24px !important;
    font-weight: 400 !important;
    }
    .text_left{
        font-size: 14px;
        font-weight: 400;
    }
    .factsNumber{
        font-size: 24px !important;
        font-weight: 400 !important;
    }
}
.facts {
    font-family: 'Halvar Breitschrift';
    font-size: 28px;
    font-weight: 500;
    line-height: 33.6px;
}

.factsNumber {
    font-size: 56px;
    font-weight: 400;
    line-height: 67.2px;
    text-align: left;


}
</style>