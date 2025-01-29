<template>
    <div>
              <!-- {{ props.data?.yt_link }} -->
                   <div class="mt-14" v-html="props.data?.yt_link" >
                          
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

.mt-14 ::v-deep(iframe)  {
  width: 100% !important; /* yoki aniq px o'lcham */
  height: 500px !important; /* kerakli balandlik */
}

</style>

