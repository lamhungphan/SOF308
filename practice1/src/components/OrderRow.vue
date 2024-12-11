<template>
    <tr>
        <td>{{ order.id }}</td>
        <td>{{ order.customerName }}</td>
        <td>{{ order.orderDate }}</td>
        <td>{{ order.totalAmount }}</td>
        <td :style="{ color: statusColor  }">{{ order.status}}</td>
    </tr>
</template>

<script setup>
import { computed } from 'vue';


const statusColor = computed(() => {
  const key = props.order.status.toLowerCase();
  switch (key) {
    case 'pending':
      return 'blue';
    case 'completed':
      return 'green';
    case 'cancelled':
      return 'red';
    default:
      return 'black'
  }
})
const props = defineProps({
  order: {
    type: Object
  }
})
</script>