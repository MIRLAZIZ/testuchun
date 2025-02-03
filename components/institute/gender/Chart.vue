<script setup>
import { onMounted, ref, watch } from 'vue'
import { useHead } from '#imports'

// Props for backend data
const props = defineProps({
  boys: {
    type: Number,
    required: true,
    default: 0
  },
  girls: {
    type: Number,
    required: true,
    default: 0
  }
})

useHead({
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/chart.js',
      onload: () => {
        initChart()
      }
    }
  ]
})

const chartCanvas = ref(null)
let chartInstance = null

const initChart = () => {
  if (!chartCanvas.value || !window.Chart) return

  chartInstance = new window.Chart(chartCanvas.value, {
    type: 'pie',
    data: {
      datasets: [{
        data: [props.boys == 0 ? 3 : props.boys, props.girls == 0 ? 5 : props.girls],
        backgroundColor: ['#0A376A', '#CA4EC7']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  })
}

// Update chart when props change
watch([() => props.boys, () => props.girls], () => {
  if (chartInstance) {
    chartInstance.data.datasets[0].data = [props.boys, props.girls]
    chartInstance.update()
  }
})

onMounted(() => {
  if (window.Chart) {
    initChart()
  }
})
</script>

<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>