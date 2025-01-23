<template>
    <nav class="flex  justify-between box_wrapper">
        <div>

            <img src="/assets/imgs/home/footerLogo.png" alt="" class="w-[154px] h-[53px]">
        </div>

        <ul class="flex w-[768px] flex-wrap gap-6 text-lg box_wrapper_li  text-black">
            <li v-for="item in navigationItems" :key="item">
                <!-- <NuxtLink :to="item.href">{{ item.label }}</NuxtLink> -->
                {{ item.label }}
            </li>
        </ul>
    </nav>
</template>

<script setup>
const navigationItems = [
    { id: 1, label: 'Biz haqimizda', href: '/about' },
    { id: 2, label: 'Rahbariyat', href: '/services' },
    { id: 3, label: 'Bizning missiyamiz', href: '/contact' },
    { id: 4, label: 'Talim dasturi', href: '/blog' },
    { id: 5, label: 'Qabul qilish jarayoni', href: '/contact' },
    { id: 6, label: 'Talabalar xizmatlari', href: '/contact' },
    { id: 7, label: 'Fakultetlar', href: '/contact' },
    { id: 8, label: 'Biz bilan bog’lanish', href: '/contact' },



]


</script>
<style lang="css" scoped>
@media(max-width:1024px){
    .box_wrapper{
        display:flex;
        flex-direction: column;
        gap:2em;
    }
    .box_wrapper_li{
        width:100%;
    }
}
</style>