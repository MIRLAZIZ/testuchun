<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const route = useRoute();
const items = ref([]);
const loading = ref(true);
onMounted(() => {
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);
  store
    .getDocuments()
    .then((res) => {
      items.value = res.data;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
});
function  gotoextralink(path){
    window.open(path, "_blank", "noopener,noreferrer");
}
</script>
<template>
  <div>
    <LoadingPage v-if="loading" />
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 auto-rows-max" v-if="items">
        <div
          v-for="item in items?.data"
          :key="item.id"
          class="w-full cursor-pointer bg-white rounded-xl flex flex-col justify-between p-6  " 
          @click="gotoextralink(item.link)"
        >
          <h1 class="font-medium">
            {{
              item?.title
            }}
          </h1>

        

          <div class="w-full text-[#5D5D5F]">
            <hr class="border border-[#DCE5F5] my-4" />
            <a
              
              class="flex justify-between items-center w-full hover:text-[#F7483B]"
              target="_blank"
            >
              {{ store.dataTranslate["home.more_details"] }}
              <UIcon
                name="i-heroicons-arrow-up-right"
                class="ml-6 w-4 h-4 text-[#F7483B]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



