<template>
    <div class="flex justify-center">

   
    <div class="mainContainer h-[571px] my-[104px] ">
        <div class="bg-white rounded-xl h-full p-10 flex flex-col justify-between border">



            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-medium font-Halvar">BIZNING YANGILIKLARIMIZ</h2>
                <button class="bg-red-500 text-white px-4 py-2 font-medium rounded-md hover:bg-red-600">
                    Barchasini ko'rish →
                </button>
            </div>



            <div class="flex h-[411px]  justify-between">

                <!-- Main news item -->
                <div class="h-[411px]  w-[551px] ">
                    <img :src="programItem?.image" alt="Institut yangiliklari" class="w-full h-full" />

                </div>

                <!-- news desctiption  -->
                <div class="px-4 w-[445px] flex flex-col justify-between">

                    <div>
                        <div class="flex justify-between items-center text-sm text-[#9A999B] mb-2">
                            <span class="flex items-center">Jahon
                                <div class="bg-[#F7483B] mx-2  h-[5px] w-[5px] rounded-full">
                                </div>{{ programItem?.date }}
                            </span>
                        </div>

                        <h3 class="font-medium  text-xl leading-7">
                            {{ programItem?.title }}
                        </h3>

                    </div>

                    <div>
                        <button
                            class=" flex justify-center items-center rounded-lg  text-[#F7483B] border border-[#F7483B]  w-[156px] h-12   font-medium">
                            Batafsil
                            <UIcon name="i-heroicons-arrow-long-right" class=" ml-2 w-6 h-6 text-[#F7483B] " />
                        </button>

                    </div>

                </div>

                <!-- News list -->
                <div class="w-[308px] overflow-y-scroll ">
                    <div v-for="(item, index) in news" :key="index" class="bg-white p-4 cursor-pointer "
                        @click="selectItem(item)">

                        <div class="flex justify-between items-center text-sm text-gray-500 mb-2 ">

                            <div class="flex justify-between items-center text-sm text-[#9A999B] mb-2">

                                <span class="flex items-center">Jahon
                                    <div class="bg-[#F7483B] mx-2  h-[5px] w-[5px] rounded-full">
                                    </div>{{ item.date }}
                                </span>
                            </div>
                        </div>
                        <h3 class=" text-lg mb-5">{{ item.title.substring(0, 70) }}</h3>
                        <hr>



                    </div>
                </div>
            </div>


        </div>
    </div>
</div>
</template>

<script setup>
import dataImg from '~/assets/imgs/home/image.png'


const news = [
    {
        date: '13.11.2024',
        title: 'Toshkent menejment va iqtisodiyot instituti jamoasi "Yoshil makon" lo',
        description: "Institutda Toshkent davlat iqtisodiyot universiteti direktori, i.f.d.,professor Aziz Saidkarimov ishtirokida O'liy ta'limda sifatli darslik vositalarini nashr etish mavzusida seminar-trening bo'lib o'tdi",
        image: dataImg
    },
    {
        date: '14.11.2024',
        title: 'Institutimiz professor-o\'qituvchilari, doktor shogird va k',
        description: "Institutda Toshkent davlat iqtisodiyot universiteti direktori, i.f.d.,professor Aziz Saidkarimov ishtirokida O'liy ta'limda sifatli darslik vositalarini nashr etish mavzusida seminar-trening bo'lib o'tdi",
        image: dataImg
    },
    {
        date: '15.11.2024',
        title: '14-oktabr kuni Toshkent menejment va iqtisodiyot instituti',
        description: "Institutda Toshkent davlat iqtisodiyot universiteti direktori, i.f.d.,professor Aziz Saidkarimov ishtirokida O'liy ta'limda sifatli darslik vositalarini nashr etish mavzusida seminar-trening bo'lib o'tdi",
        image: dataImg
    },
    {
        date: '16.11.2024',
        title: 'Toshkent shahrida siz kutgan kun!',
        description: "Institutda Toshkent davlat iqtisodiyot universiteti direktori, i.f.d.,professor Aziz Saidkarimov ishtirokida O'liy ta'limda sifatli darslik vositalarini nashr etish mavzusida seminar-trening bo'lib o'tdi",
        image: dataImg
    }
]

const programItem = ref(null)
const selectItem = (item) => {
    programItem.value = item
}

onMounted(() => {
    programItem.value = news[0]
})
</script>


<style scoped>
.overflow-y-scroll::-webkit-scrollbar {
    width: 8px;
}


</style>