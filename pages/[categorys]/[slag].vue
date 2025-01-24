<script setup>
import { useHomeStore } from '~/store/home';
const menuData = ref(null)
const dinamicData = ref(null)

const store = useHomeStore()
const route = useRoute()


const findMenu = () => {
    if (store.menus.length > 0) {


        menuData.value = store.menus.find(menu => menu.path === '/page').children.find(item => item.path === route.fullPath)


        store.getMenuShow(menuData.value.id).then(res => {
            dinamicData.value = res.data
        })




    }
    else {

        store.getMenu().then(() => {

            menuData.value = store.menus.find(menu => menu.path === '/page')?.children.find(item => item.path === route.fullPath)
            store.getMenuShow(menuData.value.id).then(res => {
                dinamicData.value = res.data
            })
        })
            .then(() => {
                store.getMenuShow(menuData.value.id).then(res => {
                    dinamicData.value = res.data

                })

            })
    }
}




onMounted(() => {
    findMenu()







})

</script>
<template>
    <div>
        <!-- <UiCarousel :data="data" /> -->
        <!-- <UiDescriptions :data="dinamicData" /> -->


        <pre>
            {{ dinamicData }}
        </pre>
        <div class="2xl:w-[1076px] w-full">
            <div class=" w-full bg-white  rounded-xl p-8 ">
                <div v-for="item in dinamicData?.dinamikMenus" :key="item.id">

                    <UiDescriptions />




                </div>


            </div>
        </div>


    </div>
</template>



<style scoped></style>