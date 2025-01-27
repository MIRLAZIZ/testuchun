<script setup>
import imgcarousel from '~/assets/imgs/kampus/carousel.png'
import { useHomeStore } from '~/store/home';

const datas = [
    { id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
    { id: 2, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
 
]
   const store = useHomeStore()
const route = useRoute()

const data = [
    imgcarousel,
    'https://picsum.photos/600/800?random=2',
    'https://picsum.photos/600/800?random=3',
    'https://picsum.photos/600/800?random=4',
    'https://picsum.photos/600/800?random=5',
    'https://picsum.photos/600/800?random=6',
    'https://picsum.photos/600/800?random=1',
    'https://picsum.photos/600/800?random=2',
    'https://picsum.photos/600/800?random=3',
    'https://picsum.photos/600/800?random=4',
]

onMounted(() => {
    const parentPage = `/${route.fullPath.split('/')[1]}`

    store.menuFind(parentPage, route.fullPath)

})


</script>
<template>
    <div class="">

    <div class="2xl:w-[1076px] w-full">
        <div class=" w-full bg-white  rounded-xl p-8 ">
            <UiCarousel :data="data" />

       
<!-- 
      </pre> -->

        <div v-for="item in store.menuShow?.dinamikMenus" :key="item.id">
            <div v-for="[key] in Object.entries(item.forms)" :key="key" class="2xl:w-[1076px]">


                <div class=" w-full " v-for="data in item.forms[key] " :key="data.id">


                    <div v-if="data.type == 'formmenu'"  class="bg-white  rounded-xl p-8  mt-10">
                       
                        <UiCarousel :data="data.photo" />
                        <div class="mt-8   pr-16 containerText" v-html="data.text">

                        </div>
                    </div>

                    <div v-if="data.type == 'formmenu1'">
                        <HomeUsefulLinkCarusel :items="data.categories" :title="data.title"/>

                    </div>
                </div>

            </div>




        </div>

    </div>
    </div>
    </div>

</template>

<style scoped>
@media (max-width:640px){
    .box_wrapper{
        width:350px;
    }
    .box_wrapper_padding{
        padding:10px
    }
}

.containerText ::v-deep(h2) {
    font-size: 28px !important;
    color: #06203D !important;
    margin-bottom: 24px !important;

}

.containerText ::v-deep(p) {
    font-size: 20px !important;
}
</style>