<script setup>
import { useHomeStore } from '~/store/home';

const store = useHomeStore()
const route = useRoute()
const forms = {
    formenu: [
        {
            oreder: 4,

        }],
    formenu2: [
        {
            oreder: 1,

        }
    ],

    formenu3: [
        {
            oreder: 3,

        }
    ]


}



onMounted(() => {
    const parentPage = `/${route.fullPath.split('/')[1]}`

    store.menuFind(parentPage, route.fullPath)

})
function getSortedForms(forms) {
  const sortedForms = {};
  for (const [key, array] of Object.entries(forms)) {
    sortedForms[key] = array.sort((a, b) => Number(a.order) - Number(b.order));
  }
  return sortedForms;
}








</script>
<template>
    <div class="">

        <div class="2xl:w-[1076px] w-full ">
        


            <div v-for="item in store.menuShow?.dinamikMenus" :key="item.id">
                <div v-for="[key] in Object.entries(item.forms)" :key="key" class="2xl:w-[1076px]">


                    <div class=" w-full " v-for="data in item.forms[key] " :key="data.id">



                        <!-- form1--------------------------------------------------- -->
                        <div v-if="data.type == 'formmenu'" class="bg-white  rounded-xl p-8 ">

                            <UiCarousel :data="data.photo" />
                            <div class="mt-8   pr-16 containerText " v-html="data.text">

                            </div>
                        </div>



                        <!-- forma2--------------------------------------------------- -->

                        <div v-if="data.type == 'formmenu1'">
                            <HomeUsefulLinkCarusel :items="data.categories" :title="data.title" />

                        </div>



                        <!-- forma3--------------------------------------------------- -->
                        <div v-if="data.type == 'formmenu3'" class="  ">



                            <UiPositionCard :data="data" />



                        </div>
                    </div>

                </div>




            </div>

        </div>
    </div>

</template>

<style scoped>
.containerText ::v-deep(h2) {
    font-size: 28px !important;
    color: #06203D !important;
    margin-bottom: 24px !important;

}

.containerText ::v-deep(p) {
    font-size: 20px !important;
}
</style>