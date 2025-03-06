<script setup>
import { computed } from 'vue'
import { useHomeStore } from '~/store/home'

const store = useHomeStore()

const sortMenu = computed(() => {
    return store.optionsData[0]?.children.sort((a, b) => Number(a.order) - Number(b.order)) || []
})

// Dinamik ustun ajratish
const groupedChildren = computed(() => {
    const children = [...sortMenu.value]
    const count = children.length
    if (count === 0) return []

    let columnSizes = []

    if (count === 1) {
        columnSizes = [1]
    } else if (count === 2) {
        columnSizes = [1, 1]
    } else if (count === 3) {
        columnSizes = [1, 1, 1]
    } else if (count === 4) {
        columnSizes = [2, 2]
    } else if (count === 5) {
        columnSizes = [2, 1, 1]
    } else if (count === 6) {
        columnSizes = [2, 2, 2]
    } else if (count === 7) {
        columnSizes = [3, 2, 2]
    } else if (count === 8) {
        columnSizes = [3, 3, 2]
    } else if (count === 9) {
        columnSizes = [3, 3, 3]
    } else {
        columnSizes = [4, 4, count - 8] // 10 va undan katta bo‘lsa
    }

    const columns = []
    let index = 0

    columnSizes.forEach(size => {
        columns.push(children.slice(index, index + size))
        index += size
    })

    return columns
})

</script>


<template>
    <div class="" >
        <div class="relative w-full" >
            <div class="absolute w-full is_dropdown z-40" :class="{ 'dropdown': store.is_open }">
                <div class="dropdown-content">
                    <div v-for="(column, colIndex) in groupedChildren" :key="colIndex" class="menu-column">
                        <button v-for="option in column" :key="option.id"
                            class="text-gray-700 hover:text-red-700 text-left">
                            <div v-if="option.path">
                                <p @click="$router.push(option.path)">{{ option.title }}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.is_dropdown {
    max-height: 0;
    opacity: 0;
    transition: max-height 0.5s ease,  ;
}

.dropdown {
    max-height: 350px;
    opacity: 1;
    transition: max-height 1s ease, opacity 0.5s ease-in-out;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    background: white;
}

.dropdown-content {
    display: flex;
    gap: 20px;
    padding: 12px;
}

.menu-column {
    flex: 1;
}

.menu-column button {
    display: block;
    width: 100%;
    margin-bottom: 8px;
}


</style>