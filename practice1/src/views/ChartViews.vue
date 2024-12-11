<template>
    <div>
        <ChartControl @updateChart="updateChart" />
        <component :is="chartComponent" :chartData="chartData" />
    </div>
</template>

<script setup>
import ChartControl from '@/components/ChartControl.vue';
import { Chart, registerables } from 'chart.js';
import { ref, computed } from 'vue';
import { DoughnutChart, PieChart, LineChart, BarChart, PolarAreaChart } from 'vue-chart-3';
Chart.register(...registerables);
const chartType = ref('line');
const chartData = ref({
  labels: ['1', '2', '3', '4'],
  datasets: [
    {
      label: 'data 2',
      data: [1, 2, 3, 4],
      borderColor: 'black',
      backgroundColor: ['red', 'blue', 'gray', 'yellow'],
      tension: 0.1,
    }
  ]
});

const chartComponent = computed(() => {
  switch (chartType.value) {
    case 'bar':
      return BarChart
    case 'pie':
      return PieChart
    case 'doughnut':
      return DoughnutChart
    case 'polar':
      return PolarAreaChart
    default:
      return LineChart

  }
});

function updateChart(type) {
  chartType.value = type;
}
</script>