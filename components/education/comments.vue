<template>
  <div>
    <div
   class="box_wrap"
    >

      <div>
        <p class="text-2xl font-medium">Bitiruvchilar fikrlari</p>
        {{ props.data }}
        <div class="flex gap-6">
          <div v-for="item in 2" :key="item.id">
            <div
              class="flex gap-6 mt-4 rounded-xl w-[464px] h-[240px] border border-[#E6EDFA] bg-white p-4"
            
            >
              <div style="width: 157px">
                <img src="../../assets/imgs/talim/person.svg" alt="" />
              </div>
              <div style="width: 243px; hieght: 194px">
                <div class="mb-4 substringTitele">
                  <p class="font-medium text-xl">
                    Abduqayumov Abdumannon Abdulboriy o'g'li
                  </p>
                </div>
                <p class="font-normal text-base" style="color: #9a999b">
                  Mening ismim Musirmanova Dilbar va men Toshkent menejment va
                  iqtisodiyot instituti talabasiman.
                </p>
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
  data: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>

  .box_wrap{
        margin-top: 187px;
        margin-bottom: 104px;
        display: flex;
        align-items: center;
        flex-direction: column;
  }
.substringTitele {
  width: 243px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>