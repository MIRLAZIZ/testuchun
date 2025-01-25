    <script setup>
    import economy from '/assets/imgs/home/econom.png'
    import { useHomeStore } from '~/store/home'

    const store = useHomeStore()


    const selectedProgram = ref('Bakalavr')
    const selectProgram = (program) => {
        selectedProgram.value = program
    }

    const items = [
        {
            id: 1, name: 'Iqtisodiyot', img: economy,
            data: {
                duration: '4 / 5',
                acceptance: 'April',
                location: 'Toshkent / Farg\'ona',
                language: "O'zbek, Rus, Ingliz",
                description: " yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va ularni biznes va moliyaning turli sohalarida     muvaffaqiyatli faoliyatga tayyorlaydi."
            }
        },
        {
            id: 2, name: 'Buxgalteriya hisobiva audit', img: economy,
            data: {
                duration: '4 / 5',
                acceptance: 'April',
                location: 'Toshkent / Farg\'ona',
                language: "O'zbek, Rus, Ingliz",
                description: "yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va ularni biznes va moliyaning turli sohalarida     muvaffaqiyatli faoliyatga tayyorlaydi."
            }
        },
        {
            id: 3, name: 'Moliya va moliyaviy texnologiyalar', img: economy,
            data: {
                duration: '4 / 5',
                acceptance: 'April',
                location: 'Toshkent / Farg\'ona',
                language: "O'zbek, Rus, Ingliz",
                description: " yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va ularni biznes va moliyaning turli sohalarida     muvaffaqiyatli faoliyatga tayyorlaydi."
            }
        },
        {
            id: 4, name: 'Menejment', img: economy,
            data: {
                duration: '4 / 5',
                acceptance: 'April',
                location: 'Toshkent / Farg\'ona',
                language: "O'zbek, Rus, Ingliz",
                description: " yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va ularni biznes va moliyaning turli sohalarida     muvaffaqiyatli faoliyatga tayyorlaydi."
            }
        },
        {
            id: 5, name: 'Marketing', img: economy,
            data: {
                duration: '4 / 5',
                acceptance: 'April',
                location: 'Toshkent / Farg\'ona',
                language: "O'zbek, Rus, Ingliz",
                description: " yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va ularni biznes va moliyaning turli sohalarida     muvaffaqiyatli faoliyatga tayyorlaydi."
            }
        },
        {
            id: 6, name: 'Kadastr', img: economy,
            data: {
                duration: '4 / 5',
                acceptance: 'April',
                location: 'Toshkent / Farg\'ona',
                language: "O'zbek, Rus, Ingliz",
                description: " yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va ularni biznes va moliyaning turli sohalarida     muvaffaqiyatli faoliyatga tayyorlaydi."
            }
        },
        {
            id: 7, name: 'Soliqlar va soliqqa tortish', img: economy,
            data: {
                duration: '4 / 5',
                acceptance: 'April',
                location: 'Toshkent / Farg\'ona',
                language: "O'zbek, Rus, Ingliz",
                description: " yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va ularni biznes va moliyaning turli sohalarida     muvaffaqiyatli faoliyatga tayyorlaydi."
            }
        },
        {
            id: 8, name: 'Kompyuter injiniringi', img: economy,
            data: {
                duration: '4 / 5',
                acceptance: 'April',
                location: 'Toshkent / Farg\'ona',
                language: "O'zbek, Rus, Ingliz",
                description: " yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va ularni biznes va moliyaning turli sohalarida     muvaffaqiyatli faoliyatga tayyorlaydi."
            }
        },
        {
            id: 9, name: 'Dasturiy ta\'minot muhandisligi', img: economy,
            data: {
                duration: '4 / 5',
                acceptance: 'April',
                location: 'Toshkent / Farg\'ona',
                language: "O'zbek, Rus, Ingliz",
                description: " yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va ularni biznes va moliyaning turli sohalarida     muvaffaqiyatli faoliyatga tayyorlaydi."
            }
        },
        {
            id: 10, name: 'Psixologiya', img: economy,
            data: {
                duration: '4 / 5',
                acceptance: 'April',
                location: 'Toshkent / Farg\'ona',
                language: "O'zbek, Rus, Ingliz",
                description: " yonalishi boyicha oquv dasturi talabalarga ushbu sohada fundamental bilim va amaliy konikmalarni beradi. Uning doirasida moliya, marketing, menejment, statistika va boshqalar kabi turli jihatlar organiladi. Ushbu ixtisoslashtirilgan dastur talabalarga iqtisodiy sohaning zamonaviy jihatlarini har tomonlama tushunish imkonini beradi va ularni biznes va moliyaning turli sohalarida     muvaffaqiyatli faoliyatga tayyorlaydi."
            }
        },


    ]

    const programitem = ref(null)
    const progamItemId = ref(null)
    const upparCase = (text) => {
        return text.toLocaleUpperCase()
    }

    const selectItem = (data) => {
        progamItemId.value = data.id
        programitem.value = data.data

    }
    onMounted(() => {
        programitem.value = items[0].data
        progamItemId.value = items[0].id

    })

</script>
<template>
    <div class="flex justify-center">

        <div class="h-full mainContainer  my-[104px]  ">

            <div class="flex items-center ">
                <img src="/assets/imgs/home/program.png" alt="">
                <h1 class="font-normal text-[#2E4259] ml-2">{{ store.dataTranslate['home.ourPrograms'] }}</h1>
            </div>

            <div class="mt-10">
                <button class="selectProgram" :class="{ 'activeClass': selectedProgram === 'Bakalavr' }"
                    @click="selectProgram('Bakalavr')">
                    {{ store.dataTranslate['home.bachelor'] }}
                </button>

                <button class="ml-8 selectProgram" :class="{ 'activeClass': selectedProgram === 'Magistratura' }"
                    @click="selectProgram('Magistratura')">
                    {{ store.dataTranslate['home.master'] }}
                </button>

            </div>


            <div class="flex wrapper_flex">
                <!-- program items  -->

                <div class="programItems">
                    <div class="programItem flex items-center  cursor-pointer"
                        :class="{ 'bg-white rounded-l-xl': item.id === progamItemId }" v-for="item in items"
                        :key="item.id" @click="selectItem(item)">
                        <img :src="item.img" alt="">
                        <p class="ml-4 wrapper_title">{{ item.name }}</p>

                    </div>
                </div>
                <!-- programma data  -->
                <div class="programmaData  bg-white flex flex-col justify-between" v-if="programitem"
                    :class="[{ 'rounded-tl-xl': progamItemId !== items[0].id }, { 'rounded-bl-xl': progamItemId !== items[items.length - 1].id }]">

                    <h2 class="programmaTitle">IQTISODIYOT</h2>
                    <hr>

                    <div class="grid grid-cols-2 gap-y-10 flex_grid">

                        <!-- davomiyligi  -->
                        <div>
                            <div class="flex">
                                <img src="/assets/imgs/home/school.png" alt="">
                                <span class="text-[#5D5D5F] ml-2">{{ store.dataTranslate['home.duration'] }}</span>
                            </div>
                            <div>
                                <p class="text-[#06203D]  programArgument mt-3">
                                    {{ programitem.duration }}
                                </p>
                            </div>
                        </div>



                        <!-- qabul qilishi -->
                        <div>
                            <div class="flex">
                                <img src="/assets/imgs/home/calendar-notes.png" alt="">
                                <span class="text-[#5D5D5F] ml-2">{{ store.dataTranslate['home.acceptance'] }}</span>
                            </div>
                            <div>
                                <p class="text-[#06203D]  programArgument mt-3">
                                    {{ upparCase(programitem.acceptance) }}
                                </p>
                            </div>
                        </div>



                        <!-- manzil -->
                        <div>
                            <div class="flex">
                                <img src="/assets/imgs/home/location.png" alt="">
                                <span class="text-[#5D5D5F] ml-2">{{ store.dataTranslate['home.address'] }}</span>
                            </div>
                            <div>
                                <p class="text-[#06203D]  programArgument mt-3">
                                    {{ programitem.location }} shaharlari

                                </p>
                            </div>
                        </div>





                        <!-- Til  -->
                        <div>
                            <div class="flex">
                                <img src="/assets/imgs/home/globe.png" alt="">
                                <span class="text-[#5D5D5F] ml-2">{{ store.dataTranslate['home.language'] }}</span>
                            </div>
                            <div>
                                <p class="text-[#06203D]  programArgument mt-3">
                                    {{ programitem.language }}

                                </p>
                            </div>
                        </div>


                    </div>
                    <hr>

                    <div>
                        <p class="programDescription">
                            {{ programitem.description }}
                        </p>
                    </div>

                    <div>

                        <div class="flex">


                            <button
                                class="bg-[#F7483B] w-[156px] h-[48px] flex justify-center items-center text-white font-medium rounded-lg">
                                {{ store.dataTranslate['home.more_details'] }}
                                <UIcon name="i-heroicons-arrow-long-right" class=" ml-2 w-5 h-5 text-white " />
                            </button>

                            <button
                                class="bg-[#E6EDFA] w-[216px] h-[48px]  text-[#06203D] flex justify-center items-center font-medium rounded-lg ml-6 ">
                                {{ store.dataTranslate['home.submit_application'] }}
                                <UIcon name="i-heroicons-arrow-long-right" class=" ml-2 w-5 h-5 text-[#06203D]" />
                            </button>


                        </div>


                    </div>

                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
@media (max-width:600px){
    .programmaTitle {
        font-size: 18px !important;
        font-weight: 500 !important;
        line-height: 33.6px;
    }
    .programArgument{
        font-size:18px !important;
        font-weight: 400 !important;
    }
    .programDescription{
        font-size:14px;
        font-weight: 400;
    }
    .flex_grid{
        display:flex;
        flex-direction: column;
    }
}
@media (max-width:1024px){
    .wrapper_flex{
        display: flex;
        flex-direction: column;

    }
    .programItems{
        width:100% !important;
        height: 100px !important;
        display:flex;
        gap:2em;
        overflow: auto;
        margin-bottom: 2em;
    }
    .programItem{
        width:300px;
    }
    .wrapper_title{
        width:250px;
    }
    .programmaData{
        width:100% !important;
        height: 100% !important;
    }
}

.activeClass {
    color: #06203D !important;
    font-size: 28px !important;
}

.selectProgram {
    font-size: 24px;
    color: #808D9D;
    font-weight: 400;
}

.programItems {
    width: 619px;
    height: 730px;


}

.programItem {
    height: 73px;
    padding: 24px 32px 24px 32px;
    font-size: 18px;

}

.programmaData {
    width: 821px;
    height: 730px;
    
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 32px;
}

.programmaTitle {
    /* font-family: Halvar Breitschrift; */
    font-size: 28px;
    font-weight: 500;
    line-height: 33.6px;



}

.programArgument {
    font-size: 32px;
    font-weight: 400;
    line-height: 38.4px;

}

.programDescription {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: #06203D;

}
</style>