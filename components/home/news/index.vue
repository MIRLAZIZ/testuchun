<template>
    <div class="flex justify-center">


        <div class="mainContainer h-[571px] my-[104px] ">
            <div class="bg-white rounded-xl h-full p-10 flex flex-col justify-between border">



                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-medium font-Halvar">{{ store.dataTranslate['home.ourNews'] }}</h2>
                    <button
                        class="bg-red-500 text-white w-[233px] h-[48px] font-medium rounded-md  flex items-center justify-center">
                        {{ store.dataTranslate['home.see_all'] }}
                        <UIcon name="i-heroicons-arrow-long-right" class="ml-2 w-6 h-6 text-white" />
                    </button>
                </div>



                <div class="flex h-[411px]  justify-between">

                    <!-- Main news item -->
                    <div class="h-[411px]  w-[551px] ">
                        <img :src="programItem?.images[0][currentImage]" alt="Institut yangiliklari rasmi"
                            class="w-full h-full rounded-lg" v-if="programItem?.images?.length" />

                    </div>

                    <!-- news desctiption  -->
                    <div class="px-4 w-[445px] flex flex-col justify-between">

                        <div>
                            <div class="flex justify-between items-center text-sm text-[#9A999B] mb-2">
                                <span class="flex items-center">Jahon
                                    <div class="bg-[#F7483B] mx-2  h-[5px] w-[5px] rounded-full">
                                    </div>{{ programItem?.date.substring(0, 10) }}
                                </span>
                            </div>

                            <h3 class="font-medium  text-xl leading-7" v-html="programItem?.desc.substring(0, 200)">

                            </h3>

                        </div>

                        <div>
                            <button
                                class=" flex justify-center items-center rounded-lg  text-[#F7483B] border border-[#F7483B]  w-[156px] h-12   font-medium">
                                {{ store.dataTranslate['home.more_details'] }}
                                <UIcon name="i-heroicons-arrow-long-right" class=" ml-2 w-6 h-6 text-[#F7483B] " />
                            </button>

                        </div>

                    </div>

                    <!-- News list -->
                    <div class="w-[308px] overflow-y-scroll ">
                        <div v-for="(item, index) in store.news.data" :key="index" class="bg-white p-4 cursor-pointer "
                            @click="selectItem(item)">

                            <div class="flex justify-between items-center text-sm text-gray-500 mb-2 ">

                                <div class="flex justify-between items-center text-sm text-[#9A999B] mb-2">

                                    <span class="flex items-center">Jahon
                                        <div class="bg-[#F7483B] mx-2  h-[5px] w-[5px] rounded-full">
                                        </div>{{ item.date.substring(0, 10) }}
                                    </span>
                                </div>
                            </div>
                            <h3 class=" text-lg mb-5">{{ item?.title.substring(0, 70) }}</h3>
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
import { useHomeStore } from '~/store/home'

const store = useHomeStore()

const screenWidth = ref(0);
const currentImage = ref("");

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
const updateImage = () => {
    if (screenWidth.value <= 600) {
        currentImage.value = 'sm';
    } else if (screenWidth.value <= 1200) {
        currentImage.value = 'md';
    } else {
        currentImage.value = 'lg';
    }
};

const programItem = ref(null)
const selectItem = (item) => {
    console.log('item', item);

    programItem.value = item
}

onMounted(() => {
    // programItem.value = news[0]
    store.getNews()
        .then(() => {
            programItem.value = store.news.data[0]

            updateImage(); // Boshlanishida rasmni o'rnatish

            window.addEventListener("resize", () => {
                screenWidth.value = window.innerWidth; // Kenglikni yangilash
                updateImage(); // Rasmni moslashtirish
            });
        })


})










onUnmounted(() => {
    window.removeEventListener("resize", updateImage); // Tozalash
});
</script>


<style scoped>
.overflow-y-scroll::-webkit-scrollbar {
    width: 8px;
}
</style>