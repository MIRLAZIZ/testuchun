<template>

    <div class="mt-[64px]">
        <!-- Tabs -->
        <div class="flex space-x-8  text-sm text-[#010101]">

            <button class="pb-3  font-manrope  border-b-2  border-[#F7483B] ">

                Bakalavr
            </button>

            <button class="pb-3 font-manrope     ">
                Magistratura
            </button>

        </div>
        <hr class="bg-red-700">



        <!-- Grid Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">

            <div v-for="card in cards" :key="card.id" class="bg-white shadow-md rounded-xl p-6 pb-5">

                <h3 class=" text-[#2E4259] mb-2">Bakalavr</h3>

                <p class="font-medium ">{{ card.code }} - {{ card.name }}</p>

                <hr class="my-4">

                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <div class="flex">
                            <img src="@/assets/imgs/kampus/Card 2.png" alt="" class="w-5 h-5">
                            <span class="text-[#5D5D5F] ml-2">Kunduzgi:</span>
                        </div>
                        <span class="font-medium text-[#06203D] ">{{ card.dayPrice }}</span>
                    </div>


                    <div class="flex items-center justify-between">
                        <div class="flex">
                            <img src="@/assets/imgs/kampus/Card 2.png" alt="" class="w-5 h-5">
                            <span class="text-[#5D5D5F] ml-2">Sirtqi:</span>

                        </div>

                        <span class="font-medium text-[#06203D]">{{ card.eveningPrice }}</span>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    id: 1,
                    code: "6040100",
                    name: "Iqtisodiyot",
                    dayPrice: "19 500 000 UZS",
                    eveningPrice: "19 500 000 UZS",
                },
                {
                    id: 2,
                    code: "6040100",
                    name: "Iqtisodiyot",
                    dayPrice: "19 500 000 UZS",
                    eveningPrice: "19 500 000 UZS",
                },
                {
                    id: 3,
                    code: "6040100",
                    name: "Iqtisodiyot",
                    dayPrice: "19 500 000 UZS",
                    eveningPrice: "19 500 000 UZS",
                },
                {
                    id: 4,
                    code: "6040100",
                    name: "Iqtisodiyot",
                    dayPrice: "19 500 000 UZS",
                    eveningPrice: "19 500 000 UZS",
                },
                {
                    id: 5,
                    code: "6040100",
                    name: "Iqtisodiyot",
                    dayPrice: "19 500 000 UZS",
                    eveningPrice: "19 500 000 UZS",
                },
                {
                    id: 6,
                    code: "6040100",
                    name: "Iqtisodiyot",
                    dayPrice: "19 500 000 UZS",
                    eveningPrice: "19 500 000 UZS",
                },
            ],
        };
    },
};
</script>

<style>
/* Tailwind CSS styles are loaded via CDN or build system */
</style>