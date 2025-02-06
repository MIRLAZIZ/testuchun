<script setup>
import { useHomeStore } from "~/store/home";
const store = useHomeStore();

const screenWidth = ref(0);

const updateImage = () => {
  if (screenWidth.value <= 600) {
    store.currentImage = "sm";
    store.currentImage2 = "sm_img";
  } else if (screenWidth.value <= 1200) {
    store.currentImage = "md";
    store.currentImage2 = "md_img";
  } else {
    store.currentImage = "lg";
    store.currentImage2 = "lg_img";
  }
};

onMounted(() => {
  screenWidth.value = window.innerWidth;

  store.getTranslate();
  updateImage();

  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
    updateImage();
  });

  store.getMenu().then(() => {
    store.getCategorys().then((res) => {
      let data = res?.data?.data;

      let newsFind = store.menus.find((item) => item.path == "/news");
      newsFind.children = [];

      if (newsFind) {
        data.forEach((element) => {
          let newsChild = {
            title: element.title,
            path: `/news/${element.slug}`,
            slug: element.slug,
            dinamikMenus: [],
          };
          newsFind.children.push(newsChild);
        });
      }

      // const allChildren = store.menus
      //   .flatMap((item) => item.children)
      //   .map((item) => item.path);
      // console.log(allChildren, "allChildren");
    });
  });
  store.getsiteInfo();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateImage);
});
</script>
<template>
  <div class="bg-[#F4F6FA]">
    <div class="box_hidden2">
      <HomeHeaderNavBar />
    </div>
    <div class="box_hidden1">
      <Sidebarmini />
    </div>
    <!-- <Sidebarmini  /> -->
    <!-- <HomeHeaderNavBar /> -->

    <slot />

    <HomeFooter />
  </div>
</template>


<style scoped>
@media (max-width: 1200px) {
  .box_hidden2 {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .box_hidden1 {
    display: none !important;
  }
}
.box_hidden1 {
  display: block;
}
.box_hidden2 {
  display: block;
}
</style>