<template>
    <div>
         <div class="flex gap-6  lg:w-[952px] w-full about">
                            <div class="lg:w-[464px] w-full h-[416]" >
                                <img class="w-full" src="../../assets/imgs/talim/build.svg" alt="">
                            </div>
                            <div class="rounded-xl lg:w-[464px] w-full flex justify-center flex-col" style="border:1px solid #E6EDFA;padding:15px">
                                <div>
                                <p class="font-medium text-2xl mb-6 box_title ">KIRISH TALABALRI</p>

                                </div>
                                <div class="flex gap-2 mb-6 lg:w-[416px] w-full">
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
                                                    
                                                    <div style="width:100%;padding:24px 10px 24px 0px;" class="rounded-xl  " v-for="item in props.data" :key="item.id">
                                                            <p class="font-normal text-base mb-2 text-slate-950 tab-content_title">{{item.description}}</p>
                                                            <p class="font-normal text-sm text-[#868587] tab-content_text">{{item.descriptionall}}</p>
                                                        </div>
                                                </div>
                                                <div v-if="activeTab === 'plan'" class="flex flex-col gap-6 rounded-xl">
                                                    <div style="width:100%;padding:24px  10px 24px 0px;" class="rounded-xl  " v-for="item in props.data" :key="item.id">
                                                        <p class="font-normal text-base mb-2 text-slate-950 tab-content_title ">{{item.description}}</p>
                                                        <p class="font-normal text-sm text-[#868587] tab-content_text" >{{item.descriptionall}}</p>
                                                    </div>
                                                </div>
                                                <div v-if="activeTab === 'plan1'" class="flex flex-col gap-6 rounded-xl">
                                                    <div style="width:100%;padding:24px  10px 24px 0px;" class="rounded-xl  " v-for="item in props.data" :key="item.id">
                                                        <p class="font-normal text-base mb-2 text-slate-950 tab-content_title">{{item.description}}</p>
                                                        <p class="font-normal text-sm text-[#868587] tab-content_text">{{item.descriptionall}}</p>
                                                    </div>
                                                </div>
                                                <div v-if="activeTab === 'plan2'" class="flex flex-col gap-6 rounded-xl">
                                                    <div style="width:100%;padding:24px  10px 24px 0px;" class="rounded-xl  " v-for="item in props.data" :key="item.id">
                                                        <p class="font-normal text-base mb-2 text-slate-950 tab-content_title">{{item.description}}</p>
                                                        <p class="font-normal text-sm text-[#868587] tab-content_text">{{item.descriptionall}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
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
@media (max-width:600px){
    .box_title{
        font-size:14px;
        font-weight: 500;;
    }
    .tab-content_title{
        font-weight: 400px;
        font-size: 14px;;
    }
    .tab-content_text{
        font-weight: 400px;
        font-size: 12px;;
    }
    .tab-buttons{
        font-weight: 600;
        font-size: 12px;
    }
       .tab{
        flex-direction: column;
    }
}
@media (max-width:1024px){
    .about{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
 
}
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