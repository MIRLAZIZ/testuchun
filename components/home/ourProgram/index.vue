    <script setup>
    import economy from '/assets/imgs/home/econom.png'


    const selectedProgram = ref('Bakalavr')
    const selectProgram = (program) => {
        selectedProgram.value = program
    }

    const items = [
        { id: 1, name: 'Iqtisodiyot', img: economy },
        { id: 2, name: 'Buxgalteriya hisobiva audit', img: economy },
        { id: 3, name: 'Moliya va moliyaviy texnologiyalar', img: economy },
        { id: 4, name: 'Menejment', img: economy },
        { id: 5, name: 'Marketing', img: economy },
        { id: 6, name: 'Kadastr', img: economy },
        { id: 7, name: 'Soliqlar va soliqqa tortish', img: economy },
        { id: 8, name: 'Kompyuter injiniringi', img: economy },
        { id: 9, name: 'Dasturiy ta\'minot muhandisligi', img: economy },
        { id: 10, name: 'Psixologiya', img: economy },


    ]

</script>
<template>
    <div class="h-[866px] px-[240px] mt-[104px] border ">

        <div class="flex items-center ">
            <img src="/assets/imgs/home/program.png" alt="">
            <h1 class="font-normal text-[#2E4259] ml-2">BIZNING DASTURLARIMIZ</h1>
        </div>

        <div class="mt-10">
            <button class="selectProgram" :class="{ 'activeClass': selectedProgram === 'Bakalavr' }"
                @click="selectProgram('Bakalavr')">
                Bakalavr
            </button>

            <button class="ml-8 selectProgram" :class="{ 'activeClass': selectedProgram === 'Magistratura' }"
                @click="selectProgram('Magistratura')">
                Magistratura
            </button>

        </div>


        <div class="flex">
            <!-- program items  -->
            <div class="programItems">
                <div class="programItem flex items-center border" v-for="item in items" :key="item.id">
                    <img :src="item.img" alt="">
                    <p class="ml-4">{{ item.name }}</p>

                </div>
            </div>


            <!-- programma data  -->
            <div class="programmaData bg-white">

                <h2 class="programmaTitle">IQTISODIYOT</h2>
                <hr class="my-8">

                <div>
                    <div>
                        <div class="flex"> 
                            <img src="/assets/imgs/home/school.png" alt="">
                            <span class="text-[#5D5D5F] ml-2">Davomiyligi</span>
                        </div>
                        <div>
                            <p class="text-[#06203D]">
                                4 / 5 yil
                            </p>
                        </div>







                    </div>


                </div>

                <!-- <img src="/assets/imgs/home/location.png" alt="">
                <img src="/assets/imgs/home/globe.png" alt="">
                <img src="/assets/imgs/home/school.png" alt="">
                <img src="/assets/imgs/home/calendar-notes.png" alt=""> -->


            </div>



        </div>








    </div>
</template>


<style scoped>
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
    border-radius: 0px 12px 12px 12px;
    padding: 32px;
}

.programmaTitle {
    /* font-family: Halvar Breitschrift; */
    font-size: 28px;
    font-weight: 500;
    line-height: 33.6px;



}
</style>