<script setup>
import { useHomeStore } from "~/store/home";
import {useContactStore} from "~/store/contact";


const store1 = useContactStore();
const store = useHomeStore();
onMounted(() =>{
    store1.getStudents(2024)
    
})
</script>
<template>
  <div class="flex items-center justify-center">
    <div class="2xl:w-[1076px] xl:w-[900px] lg:w-[660px] bg-white rounded-xl  xl:p-8 lg:p-2 the_box_gender ">
        <div class="flex justify-between the_box_gender">
            <div class="w-[688px] mt-9 the_box_title">
                <h1 class="text-[28px] text-[#06203D] font-Halvar font-medium">{{store.dataTranslate['about.about_gender']}}</h1>
                <p class="text-[20px] text-[#06203D]  font-normal mt-6">
                        {{store.dataTranslate['about.toshkent']}}
                </p>
            </div>
            <div class="w-[260px] h-[393px] p-4 rounded-lg border border-[#F1F1F1] the_wrapper">
                <div class="flex flex-col justify-between h-full  ">
                    <div class="flex justify-between items-center">
                        <h1>{{store.dataTranslate['about.yil']}}</h1>
                        <div class="flex items-center">
                            <span>2024</span>
                            <UIcon name="i-heroicons-chevron-down" class="ml-2" />
                        </div>
                    </div>
                    <!-- <img src="/assets/imgs/kampus/Pie Chart.png" alt="" class="w-[192px] h-[192px]"> -->
                 <Chart />
                    <div>
                        <div class="flex justify-between">
                            <span class="flex items-center">
                                <div class="w-2 h-2 rounded-full dot1 mr-1"></div> {{store.dataTranslate['about.qiz_bolalar']}}
                            </span>
                            <span>{{store1.student?.female_students}}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="flex items-center">
                                <div class="w-2 h-2 rounded-full dot2 mr-1"></div> {{store.dataTranslate['about.ogil_bolalar']}}
                            </span>
                            <span>{{store1.student?.male_students}}</span>
                        </div>
                    </div>

                    <div class="flex justify-between items-end ">
                        <p> {{store.dataTranslate['about.jami']}}</p>
                        <p class="text-[#06203D] text-[32px] h-11 the_title">{{ (store1.student?.male_students || 0) + (store1.student?.female_students || 0) }}</p>
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