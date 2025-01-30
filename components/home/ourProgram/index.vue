    <script setup>
    import economy from '/assets/imgs/home/econom.png'
    import { useHomeStore } from '~/store/home'

    const store = useHomeStore()


    const selectedProgram = ref(0)
    const seletTypeEducution = (index) => {
        selectedProgram.value = index
        programitem.value = store.educationData[index].children[0]
        progamItemId.value = store.educationData[index].children[0].id
    }


    onMounted(() => {
        if (!store.educationData) {
            store.getEducation()
                .then(() => {

                    programitem.value = store.educationData[0].children[0]
                    progamItemId.value = store.educationData[0].children[0].id
                })
        }
        else {
            programitem.value = store.educationData[0].children[0]
            progamItemId.value = store.educationData[0].children[0].id
        }
    })

    const programitem = ref(null)
    const progamItemId = ref(null)
    const upparCase = (text) => {
        return text.toLocaleUpperCase()
    }

    const selectItem = (data) => {
        progamItemId.value = data.id
        programitem.value = data

    }

</script>
<template>
    <div class="flex justify-center" v-if="store.educationData">


        <div class="h-full mainContainer  my-[104px]  ">

            <div class="flex items-center ">
                <img src="/assets/imgs/home/program.png" alt="">
                <h1 class="font-normal text-[#2E4259] ml-2">{{ store.dataTranslate['home.ourPrograms'] }}</h1>

            </div>

            <div class="mt-10">
                <button class="selectProgram" :class="{ 'activeClass': selectedProgram === 0 }"
                    @click="seletTypeEducution(0)">
                    {{ store.educationData[0].name }}
                </button>

                <button class="ml-8 selectProgram" :class="{ 'activeClass': selectedProgram === 1 }"
                    @click="seletTypeEducution(1)">
                    {{ store.educationData[1].name }}
                </button>

            </div>



            <div class="flex wrapper_flex">
                <!-- program items  -->

                <div class="programItems">
                    <div class="programItem flex items-center  cursor-pointer"
                        :class="{ 'bg-white rounded-l-xl': item.id === progamItemId }"
                        v-for="item in store.educationData[selectedProgram].children" :key="item.id"
                        @click="selectItem(item)">
                        <img :src="item.img" alt="">
                        <p class="ml-4 wrapper_title">{{ item.name }}</p>


                    </div>
                </div>
                <!-- programma data  -->
                <div class="programmaData  bg-white flex flex-col justify-between" v-if="programitem"
                    :class="{ 'rounded-tl-xl': progamItemId !== store.educationData[selectedProgram].children[0].id }">
                    <pre>

               </pre>
                    <h2 class="programmaTitle">{{ programitem.name }}</h2>
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
                                    {{ programitem.daytime }}
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
                                    {{ programitem?.date }}
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
                                    {{ programitem.map }}

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
                                    {{ programitem.lang }}

                                </p>
                            </div>
                        </div>


                    </div>
                    <hr>


                    <div>
                        <p class="programDescription" v-html="programitem?.second_description?.substring(0, 400)">
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
@media (max-width:600px) {
    .programmaTitle {
        font-size: 18px !important;
        font-weight: 500 !important;
        line-height: 33.6px;
    }

    .programArgument {
        font-size: 18px !important;
        font-weight: 400 !important;
    }

    .programDescription {
        font-size: 14px;
        font-weight: 400;
    }

    .flex_grid {
        display: flex;
        flex-direction: column;
    }
}

@media (max-width:1024px) {
    .wrapper_flex {
        display: flex;
        flex-direction: column;

    }

    .programItems {
        width: 100% !important;
        height: 100px !important;
        display: flex;
        gap: 2em;
        overflow: auto;
        margin-bottom: 2em;
    }

    .programItem {
        width: 300px;
    }

    .wrapper_title {
        width: 250px;
    }

    .programmaData {
        width: 100% !important;
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
    border-bottom-left-radius: 12px;
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