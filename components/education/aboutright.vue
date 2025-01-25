<template>
    <div>
         <div class="flex gap-6  w-[952px]">
                            <div class="w-[464px] h-[416]" >
                                <img src="../../assets/imgs/talim/build.svg" alt="">
                            </div>
                            <div class="rounded-xl h-[416px] w-[464px] flex justify-center flex-col" style="border:1px solid #E6EDFA;padding:15px">
                                <div>
                                <p class="font-medium text-2xl mb-6 ">KIRISH TALABALRI</p>

                                </div>
                                <div class="flex gap-2 mb-6 w-[416px]">
                                      <!-- <div style="background-color:#F4F6FA" class="rounded-xl"  v-for="item in 4" :key="item.id">
                                         <p class="text-slate-950 p-3 font-semibold text-xs">
                                                General
                                          </p>
                                      </div> -->
                                        <div class="tabs-container">
                                            <div class="tab">
                                            <button
                                                v-for="tab in tabs"
                                                :key="tab.id"
                                                :class="{ active: tab.id === activeTab }"
                                                @click="changeTab(tab.id)"
                                                class="tab-buttons font-semibold text-sm text-black cursor-pointer"
                                            >
                                                {{ tab.label }}
                                            </button>
                                            </div>
                                            <div class="tab-content ">
                                                <div v-if="activeTab === 'general'" class="flex flex-col gap-6 rounded-xl">
                                                    
                                                    <div style="width:100%;padding:24px;" class="rounded-xl  " v-for="item in props.data" :key="item.id">
                                                            <p class="font-normal text-base mb-2 text-slate-950">{{item.description}}</p>
                                                            <p class="font-normal text-sm text-[#868587]">{{item.descriptionall}}</p>
                                                        </div>
                                                </div>
                                                <div v-if="activeTab === 'plan'" class="flex flex-col gap-6 rounded-xl">
                                                    <div style="width:100%;padding:24px;" class="rounded-xl  " v-for="item in props.data" :key="item.id">
                                                        <p class="font-normal text-base mb-2 text-slate-950">{{item.description}}</p>
                                                        <p class="font-normal text-sm text-[#868587]">{{item.descriptionall}}</p>
                                                    </div>
                                                </div>
                                                <div v-if="activeTab === 'plan1'" class="flex flex-col gap-6 rounded-xl">
                                                    <div style="width:100%;padding:24px;" class="rounded-xl  " v-for="item in props.data" :key="item.id">
                                                        <p class="font-normal text-base mb-2 text-slate-950">{{item.description}}</p>
                                                        <p class="font-normal text-sm text-[#868587]">{{item.descriptionall}}</p>
                                                    </div>
                                                </div>
                                                <div v-if="activeTab === 'plan2'" class="flex flex-col gap-6 rounded-xl">
                                                    <div style="width:100%;padding:24px;" class="rounded-xl  " v-for="item in props.data" :key="item.id">
                                                        <p class="font-normal text-base mb-2 text-slate-950">{{item.description}}</p>
                                                        <p class="font-normal text-sm text-[#868587]">{{item.descriptionall}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <!-- <div style="width:416px" class="">
                                    <p class="font-normal text-base mb-2 text-slate-950">Toshkent menejment va iqtisodiyot institutiga xush kelibsiz!</p>
                                    <p class="font-normal text-sm" style="color:#868587">TMII bu, iqtisodiyot, marketing, boshqaruv, kompyuter injeneriyasi, dasturiy injiniringi, kadastr, maktabgacha ta'lim va psixologiya sohasida, hamda boshqa muhim sohalarda ilmiy tadqiqot, ta’lim berish va amaliyotga ixtisoslashgan yetakchi o'quv muassasalardan biridir. Biz, talabalarning imkoniyatlarini rivojlantirish, shakllantirish va zamonaviy biznes intellektual va dinamik muhit yaratamiz.</p>
                                </div> -->
                              
                            </div>
                        </div>

                      
    </div>
</template>

<script setup>
const props = defineProps({
    data:{
        type:Array,
        required:true,
        default: () => [],

    }
})
const tabs = [
  { id: 'general', label: 'General' },
  { id: 'plan', label: 'English language' },
  { id: 'plan1', label: 'Math' },
  { id: 'plan2', label: 'age' },

];
const activeTab = ref('general');

const changeTab = (tabId) => {
  activeTab.value = tabId;
};
</script>

<style  scoped>
.tab{
    display: flex;
}
.tab-buttons {
  padding: 10px 20px;
/* //   border-bottom: 2px solid transparent; */
  transition: all 0.3s ease;
}

.tab-buttons.active {
/* //   border-bottom: 2px solid #007bff; */
border-radius: 12px;
  color: white;
  background-color:#06203D
}
</style>