<script setup>
import { useHomeStore } from "~/store/home";

const props = defineProps({
  data: {
    type: Array,

  }
})

const store = useHomeStore();


const data = ref(null);
onMounted(() => {

  if (store.menus) {
    localStorage.setItem("news", JSON.stringify(store.menuShow));
  }
})
</script>
<template>
  <div>

    <div v-for="(items, idx) in props.data" :key="idx">
      <!-- <pre>{{ items }}</pre> -->

      <h1 class="font-Halvar font-medium sm:text-[28px] text-[22px] mb-6" :class="{ 'mt-10': idx != 0 }">{{ items.title }}
      </h1>



      <div>

        <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full">
          <div class="rounded-xl p-3 bg-white w-full cursor-pointer" v-for="item in items?.posts" :key="item.id"
            @click="$router.push(`/news-inner/${item.slug}`)">
            <div class="h-[200px] w-full">
              <img v-if="item?.images?.length" :src="item?.images[0][store?.currentImage]" alt="Yangliklar rasmi"
                class="w-full h-full rounded-lg " />
            </div>

            <div>
              <div class="flex gap-2 mt-4 mb-3">
                <img v-if="item?.date" class="w-5 h-5" src="/assets/imgs/talim/Calender.png" alt="" />
                <p class="font-normal text-base text-[#5D5D5F] wrapper_bot">
                  {{ item?.date ? item.date.substring(0, 10) : "" }}
                </p>
              </div>
              <div>
                <p class="font-medium text-xl">
                  {{
                    item?.title.length > 50
                      ? item.title.substring(0, 50) + "..."
                      : item.title
                  }}
                </p>

                <!-- <p v-html="item.desc"></p> -->
              </div>
            </div>
          </div>


        </div>

      </div>

    </div>
  </div>
</template>
