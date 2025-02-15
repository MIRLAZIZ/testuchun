<template>
  <div>
    <div class="main_branch" v-if="props.data">
      <div class="grid gap-4 grid-cols-2 sm:items-center sm:justify-around">
        <div
          class="bg-white w-full rounded-xl p-5 flex border box_wrapper xl:justify-center xl:items-center sm:items-center justify-between main_box_wrapper"
          v-for="item in props.data.data"
          :key="item"
        >
          <!-- <div class=" border h-[200px] w-[157px]"> -->
          <img
            :src="item?.photo[store.currentImage]"
            alt=""
            class="imgs h-[200px] w-[157px] object-cover rounded-lg"
          />
          <!-- </div> -->

          <div class="flex box_wrapper_pad flex-col justify-center pl-6">
            <h1 class="sm:text-xl text-base font-medium ">
              {{
                item?.name?.length > 40
                  ? item?.name?.substring(0, 40) + "..."
                  : item?.name?.substring(0, 40)
              }}
            </h1>
            <p class="mt-2 sm:text-lg text-sm text-[#88929D]">
              {{
                item?.position?.length > 70
                  ? item?.position?.substring(0, 70) + "..."
                  : item?.position
              }}
            </p>
            <hr class="border border-[#DCE5F5] my-6" />
            <div
            @click="$router.push(`/students/student-inner/${item?.slug}`)"

              class="bg-white border border-[#F7483B] sm:w-[164px] w-full h-[48px] flex text-[#F7483B] justify-center items-center rounded-lg cursor-pointer font-medium text-[12px] sm:text-base"
            >
              {{ store.dataTranslate["home.more_details"] }}
              <UIcon
                name="i-heroicons-arrow-long-right"
                class="sm:ml-6 ml-2 sm:w-6 w-3 sm:h-6 h-3"
              />
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
    requered: true,
    default: () => ({} || null),
  },
});
</script>

<style  scoped>
@media (max-width: 440px) {
  /* .main_box{
        gap:5px !important;
    } */
  /* .main_box_wrapper{
        padding:5px !important;
    } */
}
@media (max-width: 640px) {
  .box_wrapper_pad {
    padding: 2px;
  }
  .img {
    width: 100%;
  }
  .main_branch {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 1024px) {
  .box_wrapper {
    display: flex;
    /* flex-direction: column; */
    height: auto;
  }
}
@media (max-width: 1200px) {
  .box_wrapper {
    flex-direction: column;
  }
}
</style>