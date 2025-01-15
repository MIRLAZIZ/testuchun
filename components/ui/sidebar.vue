<template>
    <div>
          <div>
                                  
                    <div class="box  shadow-md rounded-lg p-4 " style="background-color:white">
                        <div class=" wrapper text-white flex items-center justify-between rounded-md px-4 py-2">
                        <h2 class="text-lg font-semibold">Ta'lim dasturlari</h2>
                        </div>

                        <div class="mt-2">
                     
                        <div
                            v-for="(program, index) in programs"
                            :key="index"
                            class="flex items-center justify-between  text-slate-900 px-4 py-2 rounded-md cursor-pointer mt-2"
                            :class="{ 'bg-blue-50': selected === program.id }"
                            @click="selectProgram(program.id)"
                        >
                            <span class="text-xl font-medium">{{ program.name }}</span>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-red-300"
                            :class="{ hidden: selected !== program.id }"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        </div>
                    </div>

                <div  class="rounded-xl px-4 mt-4" style="background-image:linear-gradient(45deg, #0156BA, #011454);width:332px;height:184px">
                    <div  class="  flex gap-4 items-center justify-between mb-5 flex-col">
                        <img src="../../assets/imgs/talim/virus.svg" alt="">
                        <p class="text-2xl font-medium text-slate-50">Karantin qoidalariga rioya qiling</p>
                        
                    </div>
                 
                </div>


                <div style="" class="box p-6 mt-4">
                    <div  class="  flex gap-4 items-center justify-between mb-5">
                        <img src="../../assets/imgs/talim/image.svg" alt="">
                        <p class="text-2xl font-medium text-slate-50">REKTOR Bilan Bog'laning</p>
                    </div>
                    <div class="px-5 bg-white flex items-center justify-center rounded-xl p-3" style="cursor: pointer;width:286px;">
                        <p class="text-slate-900 text-lg font-semibold"> Yozish</p>
                    </div>
                </div>

                <div style="background-color:#00A3FF " class=" box rounded-xl p-6 mt-4">
                    <div  class="  mb-5 text-slate-50 " style="position:relative">
                        <p class="text-lg font-medium">TELEGRAM</p>
                        <div class="w-[90%]">
                             <p class="text-sm font-normal">yangiliklarni muntazam kuzatib boring</p>

                        </div>
                        <img style="position:absolute;top:0;right:0" src="../../assets/imgs/talim/Vector.svg" alt="">
                    </div>
                    <div class="px-5 bg-white flex items-center justify-center rounded-xl p-3" style="cursor: pointer;width:286px">
                        <p class="text-slate-900 text-lg font-semibold"> Obuna bo'lish</p>
                    </div>
                </div>


            </div>       
    </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
console.log('types',props.data)
const programs = ref([
  { id: 1, name: 'Bakalavr' },
  { id: 2, name: 'Magistratura' },
]);

const selected = ref(null);

function selectProgram(programId) {
  selected.value = programId;
}
</script>
<style scoped>
.wrapper{
    background-color:#06203D;
}
.box{
        background-color:#0156BA;
        width:332px;
        height:184px;
        border-radius:12px; 
}
.hidden {
  display: none;

}
</style>