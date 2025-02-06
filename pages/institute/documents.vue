<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const route = useRoute();
const items = ref([]);

onMounted(() => {
  const prentPageOne = `/${route.fullPath.split("/")[1]}`;
  store.getMenuStatick(prentPageOne, route.fullPath);
  store.getDocuments().then((res) => {
    items.value = res.data;
  });
});
</script>
<template>
  <div class="">
    <div
      class=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4"
    >
      <div
        v-for="item in items?.data"
        :key="item.id"
        class="w-full bg-white rounded-xl  h-[146px] flex flex-col justify-between p-6   "
      >
        <h1 class="font-medium">
          {{
            item?.title?.length > 30
              ? item?.title?.slice(0, 40) + "..."
              : item?.title
          }}
        </h1>

        <hr class="border border-[#DCE5F5]" />

        <div
          class=" w-full text-[#5D5D5F]  "
        >
          <a
            :href="item.link"
            class="flex justify-between items-center w-full hover:text-[#F7483B] "
            target="_blank"
          >
            {{ store.dataTranslate["home.more_details"] }}
            <UIcon
              name="i-heroicons-arrow-up-right"
              class="ml-6 w-4 h-4 text-[#F7483B] "
            />
          </a>
        </div>

      </div>
    </div>
  </div>
</template>


<style  scoped>
@media (max-width: 1024px) {
  .main_branch {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 640px) {
  .main_box {
    width: 300px;
    gap: 2em;
    display: grid;
    justify-content: center;
  }
  .main_box_wrapper {
    width: 300px;
    padding: 2em;
  }
}
</style>
