<template>
    <tr>
        <td>{{ props.order.id }}</td>
        <td>{{ props.order.customerName }}</td>
        <td>
            <div class="mb-3">
                <select class="form-select form-select-lg" v-model="props.order.status" @change="updateStatus">
                    <option value="processing">processing</option>
                    <option value="shipped">shipped</option>
                    <option value="cancelled">cancelled</option>
                </select>
            </div>
            <p v-if="calculateProcessingTime > 0 ">{{ calculateProcessingTime }} days later</p>
        </td>
        <td>{{ props.order.createdAt }}</td>
    </tr>
</template>

<script setup>
import { computed, onMounted } from 'vue';
const calculateProcessingTime = computed(() => {
  if (props.order.status === 'processing') {
    return 0;
  }
  const startDate = new Date(props.order.createdAt);
  const endDate = new Date();
  const diff = endDate - startDate;
  const minute = Math.floor(diff / 1000 / 60 / 60 / 24);
  return minute;
})

const emit = defineEmits(['status', 'processTime']);
const props = defineProps({
  order: {
    type: Object,
  }
})
function updateStatus() {
  emit('processTime', props.order.id, calculateProcessingTime);
  emit('status', props.order);
}
</script>