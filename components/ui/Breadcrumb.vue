<script setup>
const route = useRoute()

const routeName = computed(() => {
    let patharr = route.path.split('/');
    const capitalizedArr = patharr.map(item => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });

    return capitalizedArr || '';
});

</script>

<template>

    <div class=" bg-white  flex flex-col items-center justify-center py-[48px] h-[189px]">
        <h1 class="text-[40px] font-medium text-[#06203D]">{{ routeName?.[routeName.length - 1].toUpperCase() }} </h1>
        <div class="text-[#5D5D5F] text-lg">
            <button @click="$router.push('/')">Asosiy</button><button
                v-if="routeName?.[1] == 'Kampus' && routeName?.length > 2" @click="$router.push('/kampus')"> /
                Kampus</button> / <button> {{ routeName?.[routeName.length - 1] }}
            </button>
        </div>
    </div>

</template>
