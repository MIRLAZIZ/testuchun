<script setup>
import { computed } from 'vue'
import { useHomeStore } from '~/store/home'

const store = useHomeStore()
const route = useRoute()

onMounted(() => {
    const parentPage = `/${route.fullPath.split('/')[1]}`
    store.menuFind(parentPage, route.fullPath)
})

// Ma'lumotlarni yagona massivga keltirami
const processedMenus = computed(() => {

    let data = store.menuShow?.dinamikMenus?.flatMap(item =>
        Object.entries(item.forms).flatMap(([, formArray]) =>
            formArray
            // .sort((a, b) => Number(a.order) - Number(b.order))

        )
    )
    if (data) {
        data.sort((a, b) => Number(a.order) - Number(b.order))

    }

    return data || []
})


</script>

<template>
    <div class="2xl:w-[1076px]  xl:w-[920px] lg:w-[650px] md:w-[700px] sm:w-[630px] w-full">
          <!-- <pre>{{processedMenus}}</pre>  -->

        <div v-for="(data,index) in processedMenus" :key="data.id" class="w-full"
            :class="{ 'mt-10': index !== 0 &&  data.type !== 'formmenu3' } ">

            <div v-if="data.type === 'formmenu' " class="bg-white rounded-xl p-8">
                <UiCarousel :data="data.photo" />
                <div class="mt-8 2xl:pr-16 containerText" v-html="data.text"></div>
            </div>


            <HomeUsefulLinkCarusel v-if="data.type === 'formmenu1'" :items="data.categories" :title="data?.title" />

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