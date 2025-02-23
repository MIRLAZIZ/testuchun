<template>
  <div class="w-full">
    <div v-if="props.data && props.data.department_boss">
      <div class="w-full">
        <div class="bg-white rounded-xl cursor-pointer p-8">
          <div class="text-[18px] text-[#5D5D5F] cursor-pointer mb-8">
            <span @click="$router.push('/')">{{
              store.dataTranslate["home.home"]
            }}</span
            >/
            <span @click="$router.push('/institute/kafedralar')"
              >{{ store?.menuShow?.title }} /</span
            >
            <span>
              {{ props.data?.department_boss?.last_name[$i18n.locale] }}
              {{ props.data?.department_boss?.first_name[$i18n.locale] }}
              {{ props.data?.department_boss?.surname[$i18n.locale] }}
            </span>
          </div>
          <!-- data  -->
          <div
            class="flex w-full flex-col md:flex-row gap-8 rounded-xl"
            v-if="props.data && props.data.department_boss"
          >
            <div
              class="md:w-[283px] h-[361px] flex justify-center w-full flex-shrink-0"
            >
              <img
                :src="props.data.department_boss[store.currentImage2]"
                alt=""
                class="w-full h-full sm:w-[283px] rounded-lg object-cover"
              />
            </div>
            <div class="flex flex-col w-full">
              <div>
                <p class="mb-2 font-medium text-2xl">
                  {{ props.data?.department_boss.last_name[$i18n.locale] }}
                  {{ props.data.department_boss?.first_name[$i18n.locale] }}
                  {{ props.data?.department_boss.surname[$i18n.locale] }}
                </p>
                <p class="text-xl text-[#9A999B]">
                  {{
                    props.data?.department_boss?.employ_meta?.position.name[
                      $i18n.locale
                    ]
                  }}
                </p>
              </div>

              <!-- contacts  -->
              <div class="flex gap-4 lg:mt-6 mt-4 flex-col">
                <!-- phone  -->

                <div class="flex gap-1 flex-col">
                  <div
                    class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full"
                    v-if="
                      props.data &&
                      props.data.department_boss &&
                      props.data?.department_boss?.phone
                    "
                  >
                    <img src="/assets/imgs/vacansiec/phone.png" alt="" />
                    <div>
                      <p class="text-[#5D5D5F] text-base font-normal">
                        {{ store.dataTranslate["contract.phone_number"] }}
                      </p>
                      <p>
                        <a
                          :href="'tel:' + props.data?.department_boss?.phone"
                          target="_blank"
                        >
                          {{ props.data?.department_boss?.phone }}</a
                        >
                      </p>
                    </div>
                  </div>

                  <!-- email  -->
                  <div
                    class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full"
                    v-if="
                      props.data &&
                      props.data.department_boss &&
                      props.data?.department_boss?.email
                    "
                  >
                    <img src="/assets/imgs/vacansiec/email.png" alt="" />

                    <div>
                      <p class="text-[#5D5D5F]">
                        {{ store.dataTranslate["contract.email"] }}
                      </p>
                      <p>
                        <a
                          :href="'mailto:' + props.data?.department_boss?.email"
                          target="_blank"
                        >
                          {{ props.data?.department_boss?.email }}</a
                        >
                      </p>
                    </div>
                  </div>

                  <!-- work time  -->
                  <div
                    class="bg-[#F4F6FA] flex items-center gap-3 p-4 rounded-xl w-full"
                    v-if="
                      props.data &&
                      props.data.department_boss &&
                      props.data?.department_boss?.work_time &&
                      props.data?.department_boss?.work_time[$i18n.locale]
                    "
                  >
                    <img class="w-4 h-4" :src="time" alt="" />
                    <div>
                      <p class="text-[#5D5D5F] text-base font-normal">
                        {{ store.dataTranslate["contract.working_days"] }}
                      </p>
                      <p>
                        {{ props.data.department_boss.work_time[$i18n.locale] }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="mt-6"
                v-if="
                  props.data &&
                  props.data.department_boss &&
                  props.data?.department_boss?.dec
                "
              >
                <div>
                  <p
                    ref="text"
                    class="text"
                    v-html="
                      props.data?.department_boss?.dec[$i18n.locale]?.substring(
                        0,
                        expanded
                      )
                    "
                  ></p>
                  <button
                    v-if="props.data?.department_boss.dec?.length > expanded"
                    @click="expanded = props.data?.department_boss.dec?.length"
                    class="text-red-500 font-bold"
                  >
                    {{ store.dataTranslate["contract.more"] }}...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- xodimlar  -->

      <div
        class=""
        v-if="
          props.data &&
          props.data.simple_employee &&
          props.data.simple_employee.length > 0
        "
      >
        <h1 class="font-Halvar font-medium text-[28px] my-6 mt-20">
          {{ store.dataTranslate["contract.employees"] }}
        </h1>

        <div class="grid grid-cols-2 gap-4 2xl:gap-6">
          <div
            class="w-full rounded-xl p-5 flex xl:flex-row flex-col gap-4 bg-white"
            v-for="item in props.data?.simple_employee"
            :key="item"
          >
            <div
              class="h-[200px] xl:w-[157px] flex justify-center w-full flex-shrink-0"
            >
              <img
                :src="item[store.currentImage2]"
                alt=""
                class="object-cover w-full h-full rounded-lg sm:w-[157px]"
              />
            </div>

            <div class="flex flex-col justify-between">
              <h1 class="text-xl font-medium">
                {{ item?.last_name[$i18n.locale] }}
                {{ item?.first_name[$i18n.locale] }}
                {{ item?.surname[$i18n.locale] }}
              </h1>
              <p class="mt-2 text-[#88929D]">
                {{ item?.employ_meta?.position.name[$i18n.locale] }}
              </p>
              <hr class="border border-[#DCE5F5] my-6" />
              <button
                @click="$router.push(`/institute/details/kafedra/${item.slug}`)"
                class="border border-[#F7483B] 2xl:w-[164px] w-full h-[48px] flex justify-center items-center text-[#F7483B] rounded-lg"
              >
                {{ store.dataTranslate["home.more_details"] }}
                <UIcon
                  name="i-heroicons-arrow-long-right"
                  class="ml-6 w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center font-Halvar" v-else>
      <p>{{ store.dataTranslate["header.do_not"] }}</p>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from "~/store/home";
import time from "@/assets/imgs/vacansiec/hour.png";

const store = useHomeStore();
const expanded = ref(500);
const props = defineProps({
  data: {
    type: Object,
    requered: true,
    default: () => [],
  },
});
</script>

