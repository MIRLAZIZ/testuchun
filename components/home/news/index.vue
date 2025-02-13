<template>
    <div class="flex justify-center" v-if="programItem">
        <div class="    mainContainer h-full my-[64px]  flex justify-center ">
            <div class=" rounded-xl bg-white border  border-[#E6EDFA] h-full p-10 flex flex-col lg:justify-between justify-center w-full  align">

        <div class=" h-full lg:w-full md:w-[600px]  sm:w-[500px] w-full     ">
            <div class="  h-full flex flex-col justify-between  align">


                <div class="flex justify-between items-center align">
                    <h2 class="text-2xl font-medium font-Halvar sm:mb-8 mb-4 text-[#06203D]">{{ store.dataTranslate['home.ourNews'] }}</h2>
          

                    <button
                    @click="$router.push('/news/yangiliklar')"
                        class="bg-red-500 text-white w-[233px] h-[48px] font-medium rounded-md dsiplay_hidden  flex items-center justify-center">
                        {{ store.dataTranslate['home.see_all'] }}
                        <UIcon name="i-heroicons-arrow-long-right" class="ml-2 w-6 h-6 text-white" />
                    </button>
                </div>



                <div class="flex h-[411px]  justify-between box_ul">

                    <!-- Main news item -->
                    <div data-aos="zoom-in-up" class="h-[411px]  lg:w-[551px] w-full img_width">
                        <img :src="programItem?.images[0][store.currentImage]" alt="Institut yangiliklari rasmi"
                            class="w-full h-full rounded-lg object-fill" v-if="programItem?.images?.length" />

                    </div>

                    <!-- news desctiption  -->
                    <div  data-aos="zoom-in-down" class="lg:px-4 lg:w-[445px] w-[100%] flex flex-col justify-between width">

                        <div class="">
                            <div class="flex justify-between items-center text-sm text-[#9A999B] mb-2">
                                <span class="flex items-center">{{ programItem?.categories[0]?.name }}
                                    <div class="bg-[#F7483B] mx-2  h-[5px] w-[5px] rounded-full">
                                    </div>{{ programItem?.date.substring(0, 10) }}
                                </span>
                            </div>

                            <h3 class="font-medium  text-xl leading-7 leand  text-[#06203D]" v-html="programItem?.desc?.substring(0, 200)">

                            </h3>

                        </div>

                        <div class="lg:mt-0 mt-5">
                            <button
                                class=" flex justify-center items-center rounded-lg  text-[#F7483B] border border-[#F7483B]  w-[156px] h-12   font-medium" @click="$router.push(`news-inner/${programItem?.slug}`)" >
                                {{ store.dataTranslate['home.more_details'] }}
                                <UIcon name="i-heroicons-arrow-long-right" class=" ml-2 w-6 h-6 text-[#F7483B] " />
                            </button>

                        </div>

                    </div>

                    <!-- News list -->
                    <div data-aos="zoom-in-down" class="lg:w-[308px] w-full h-[300px] overflow-y-scroll mt-4 ">
                        <div v-for="(item, index) in store.news.data" :key="index" class="bg-white lg:p-4 cursor-pointer "
                            @click="$router.push(`news-inner/${item.slug}`)">
                      

                            <div class="flex mt-8 justify-between items-center text-sm text-gray-500 mb-2 ">

                                <div class="flex justify-between items-center text-sm text-[#9A999B] mb-2">

                                    <span class="flex items-center">{{  item.categories[0]?.name }}
                                        <div class="bg-[#F7483B] mx-2  h-[5px] w-[5px] rounded-full">
                                        </div>{{ item?.date?.substring(0, 10) }}
                                    </span>
                                </div>
                            </div>

                            <h3 class=" text-lg mb-5 text text-[#06203D]" >{{ item?.title.substring(0, 70) }}</h3>
                              <hr>
                        </div>
                        
                    </div>
                     <button
                                class="bg-red-500 lg:hidden sm:mx-4 text-white w-[233px] h-[48px] font-medium rounded-md  flex items-center justify-center">
                                {{ store.dataTranslate['home.see_all'] }}
                                <UIcon name="i-heroicons-arrow-long-right" class="ml-2 w-6 h-6 text-white" />
                            </button>
                </div>


            </div>
        </div>
    </div>
        </div>
    </div>
</template>

<script setup>
import dataImg from '~/assets/imgs/home/image.png'
import { useHomeStore } from '~/store/home'

const store = useHomeStore()

const programItem = ref(null)

onMounted(() => {
    // programItem.value = news[0]
    store.getNews()
        .then(() => {
            programItem.value = store.news.data[0]
        })

})



</script>


<style scoped>
@media (max-width:400px){
    /* .align{
        width: 350px;
    } */
    .img_width{
        width: 100%  !important;
    }
    .width{
        width:317px
    }
}
@media (max-width:700px){
    /* .img_width{
        width:340px;
        height: 350px;
    } */
    .width{
        width:340px
    }
    .align{
        padding:10px;
    }
    .align h2{
        font-weight: 500;
        font-size: 22px;
    }
    .leand{
        font-weight: 500px;
        font-size: 16px;
    }
    .text{
        font-weight: 400;
        font-size: 16px;
    }
}

@media (max-width:1024px){
    .dsiplay_hidden{
        display:none;
    }
    .box_ul{
        height:100%;
        display:flex;
        gap:2em;
        flex-direction: column;
        /* align-items: center; */
    }
    .align{
        display:flex;
        align-items: center;
        margin-bottom: 1em;
    }
}
.overflow-y-scroll::-webkit-scrollbar {
    width: 8px;
}
</style>
