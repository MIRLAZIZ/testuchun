<script setup>
import { useHomeStore } from "~/store/home";

const store = useHomeStore();
const isFixed = ref(false);
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

const handleScroll = () => {
  isFixed.value = window.scrollY > 300; // 200px dan pastga tushganda fixed bo'ladi
};

onMounted(() => {
  screenWidth.value = window.innerWidth;

  store.getTranslate();
  updateImage();

  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
    updateImage();
  });
  window.addEventListener("scroll", handleScroll);

  store.getMenu().then(() => {
    store.getCategorys().then((res) => {
      let data = res?.data?.data;

      let newsFind = store.menus.find((item) => item.path == "/news");
      newsFind.children = [];

      if (newsFind) {
        data.forEach((element) => {
          if (element.slug !== "ilmi-maqolalar") {
          }
          let newsChild = {
            title: element.title,
            path: `/news/${element.slug}`,
            slug: element.slug,
            dinamikMenus: [],
          };
          if (newsChild.slug !== "ilmi-maqolalar") {
            newsFind.children.push(newsChild);
          }
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
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <div class="bg-[#F4F6FA]">
    <div class="box_hidden2">
      <HomeHeaderNavBar
        :class="{
          'fixed-navbar': isFixed && $route.path !== '/',
          'hidden-navbar': !isFixed && $route.path !== '/',
        }"
      />
    </div>
    <div class="box_hidden1">
      <Sidebarmini />
    </div>

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

/* Default navbar (scroll oldidan) */
.hidden-navbar {
  /* transform: translateY(-100%); */
  transition: transform 0.4s ease-in-out;
  animation: fade-in 0.5s ease-in-out forwards;
}

/* Fixed navbar (scrolldan keyin) */
.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 50;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease-in-out;
  animation: fade-out 0.5s ease-in-out forwards;
}

@keyframes fade-in {
  0% {
    transform: translateY( -100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  
}
</style>