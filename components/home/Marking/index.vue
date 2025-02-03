<template>
    <div class="flex justify-center bg-[#06203D]">
        <div class="mainContainer  h-[568px] box_height">

            <div class="xl:px-[120px] lg:px-[30px] w-full h-full ">
                <div class=" py-14 flex  h-full  box_ul_li">
                    <!-- buttons  -->
                    <div class="w-2/4 h-full  flex flex-col justify-between wrapper_full">

                        <div>
                            <h2 class=" font-Halvar text-[28px] text-white  mb-6 ">{{
                                store.dataTranslate['homeMarking.markings'] }}</h2>
                            <p class=" text-[#88929D]  text-xl">
                                {{ store.dataTranslate['homeMarking.markings_text'] }}
                            </p>
                        </div>


                        <!-- Chap tomondagi tugmalar -->
                        <div class=" flex flex-wrap gap-4 ul_top " v-if="marks.length">
                            <button v-for="mark in marks" :key="mark.id"
                                :class="[selectedMark === mark.id ? mark.color : '']"
                                class="flex justify-center py-3 px-6  border border-[#354251] rounded-lg text-lg  text-white"
                                @click="selectMark(mark.id)">
                                <img :src="selectedMark === mark.id ? mark.activeImg : mark.img" alt="" class="mr-2"> {{
                                    store.dataTranslate[mark.label] }}

                            </button>
                        </div>
                    </div>




                    <!-- O'ng tomondagi kartalar -->
                    <div class="relative  w-2/4  flex justify-end ul_right  " v-if="marks.length"
                        :style="{ paddingRight: (marks.length * 16) - 16 + 'px' }">

                        <div v-for="(mark, index) in marks" :key="mark.id"
                            class="sm:w-[329px] w-[300px]  h-[456px]  flex flex-col  justify-between box_content"
                            :class="`absolute p-6 rounded-lg shadow-lg ${mark.color} transition-all duration-500 ease-in-out`"
                            :style="{
                                zIndex: selectedMark === mark.id ? 10 : (marks.length + 1 - mark.id),
                                transform: selectedMark === mark.id
                                    ? 'translateX(0) translateY(0)'
                                    : ` translateX(${index * 16}px) translateY(0)`
                            }">
                            <img src="/assets/imgs/home/marka.png" alt="" class="w-16 h-16">

                            <div class="text-white">
                                <h3 class="text-xl  mb-2">{{ store.dataTranslate[mark.label] }}</h3>

                                <p>{{ store.dataTranslate[mark.description] }}</p>


                            </div>
                            <div>

                                <hr class="bg-[#F2BC8C]   ">
                                <img src="/assets/imgs/home/quotes.png" alt="" class="w-5 h-[18px] mt-[18px]">
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import activeBullsety from '~/assets/imgs/home/bullseye.png'
import book from '~/assets/imgs/home/book.png'
import wallet from '~/assets/imgs/home/wallet.png'
import briefcace from '~/assets/imgs/home/briefcase.png'
import arrowTrend from '~/assets/imgs/home/arrow-trend-up.png'
import activeBook from '~/assets/imgs/home/book-open.svg'
import activewallet from '~/assets/imgs/home/wallet.svg'
import activeBriefcace from '~/assets/imgs/home/briefcase.svg'
import activeArrowTrend from '~/assets/imgs/home/arrow-trend-up.svg'
import bullsety from '~/assets/imgs/home/bullseye.svg'
import { useHomeStore } from '~/store/home';

const store = useHomeStore()

const marks = ref([
    {
        id: 1,
        label: 'homeMarking.goal',
        color: 'bg-[#EA9040]    ',
        description: 'homeMarking.goal_text',
        img: bullsety,
        activeImg: activeBullsety
    },
    {
        id: 2,
        label: 'homeMarking.science',
        color: 'bg-[#F7483B] ',
        description: 'homeMarking.science-text',
        img: book,
        activeImg: activeBook
    },
    {
        id: 3,
        label: 'homeMarking.innovation',
        color: 'bg-[#1878F3] ',
        description: 'homeMarking.innovation_text',
        img: wallet,
        activeImg: activewallet
    },
    {
        id: 4,
        label: 'homeMarking.entrepreneurship',
        color: 'bg-[#00CD69] ',
        description: 'homeMarking.entrepreneurship-text',
        img: briefcace,
        activeImg: activeBriefcace
    },
    {
        id: 5,
        label: 'homeMarking.career_development',
        color: 'bg-[#5D5FEF]',
        description: 'homeMarking.career_text',
        img: arrowTrend,
        activeImg: activeArrowTrend
    },
])


const selectedMark = ref(1) // Boshlang'ich karta

function selectMark(id) {
    selectedMark.value = id
}
</script>

<style scoped>
@media (max-width:880px){
    .box_ul_li{
        display:flex;
        flex-direction: column;
        align-items: center;
        
    }
    .wrapper_full{
        width:600px;
    }
    .box_height{
        height:100%
    }
    .ul_right{
        height: 30em;
    }
    .ul_top{
        margin-top:32px;
        margin-bottom:32px;
    }
}
@media (max-width:600px){
    .wrapper_full{
        width:280px;
    }
    .wrapper_full h2{
        font-weight: 500;
        font-size: 20px;
    }
    .wrapper_full p{
        font-weight: 400;
        font-size: 14px;
    }
    .ul_right{
        padding-left:13em;
        padding-right: 4px !important;
    }
    .box_content{
        padding:10px;
        width:270px;
    }
    button{
          font-weight: 400;
        font-size: 14px;
    }
    .ul_right h3{
        font-weight: 500;
        font-size: 16px;
    }
    .ul_right p{
        font-weight: 400;
        font-size: 14px;
    }
}
.bg-dark-blue {
    background-color: #1e3a8a;
}
</style>