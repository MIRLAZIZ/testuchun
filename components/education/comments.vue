<template>
  <div>
    <div class="box_wrap" v-if="props.data && props.data.length">
      <div>
        <p class="text-2xl font-medium">
          {{ store.dataTranslate["footer.professor"] }}
        </p>
        <!-- {{ props.data }} -->
        <div class="flex gap-6">
          <div v-for="item in props.data" :key="item.id">
            <div
              class="flex gap-6 mt-4 rounded-xl w-[464px] border border-[#E6EDFA] bg-white p-4"
            >
              <div style="width: 157px">
                <NuxtImg
                  :src="item.photo[store.currentImage]"
                  alt=""
                  class="w-full h-[206px] rounded-lg object-cover"
                />
              </div>
              <div style="width: 243px">
                <div class="mb-4 substringTitele">
                  <p class="font-medium text-xl">
                    {{ item.name }}
                  </p>
                </div>
                <p
                  class="font-normal text-base"
                  style="color: #9a999b"
                  v-html="item.dec"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style scoped>
.box_wrap {
  margin-top: 187px;
  margin-bottom: 104px;
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