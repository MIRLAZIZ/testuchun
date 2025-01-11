<script setup lang="ts">

// useSeoMeta({
//   title: 'TimeEduan',
//   ogTitle: 'My Amazing Site',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://timeed.netlify.app/_nuxt/logomini.sfiy4GxW.png',
//   twitterCard: 'summary_large_image',
// })


useHead({
  title: 'TimeEduan',
  meta: [
    // Muhim: Oldin OG taglar, keyin boshqa meta taglar
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://timeed.netlify.app' },
    { property: 'og:image', content: 'https://timeed.netlify.app/_nuxt/logomini.sfiy4GxW.png' },
    { property: 'og:title', content: 'My Amazing Site' },
    { property: 'og:description', content: 'This is my amazing site, let me tell you all about it.' },

    // Keyin Twitter taglar
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: 'https://timeed.netlify.app/_nuxt/logomini.sfiy4GxW.png' },

    // Eng oxirida oddiy meta taglar
    { name: 'description', content: 'This is my amazing site, let me tell you all about it.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://timeed.netlify.app' }
  ]
})


</script>


<template>
  <NuxtLayout>
    <NuxtPage />

  </NuxtLayout>

</template>
