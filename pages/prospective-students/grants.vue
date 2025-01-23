<template>
    <div>
        <div class="2xl:w-[1076px] w-full">



            <div class=" w-full bg-white  rounded-xl p-8 ">
                <UiDescriptions :data="data" />

            </div>

            <div>
           <AbuturentBaclavrGrand  />


            </div>
        </div>
    </div>
</template>

<script setup>

const data = [
{ id: 1, name: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!', description: 'Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz! Toshkent menejment va iqtisodiyot instituti: Sizning muvaffaqiyat yolingiz!' },
]


</script>

<style lang="scss" scoped></style>