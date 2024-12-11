<template>
    <tr>
        <td>{{ event.name }}</td>
        <td>{{ event.startTime }}</td>
        <td>{{ event.endTime }}</td>
        <td>
            <div v-if="isEnded">ended</div>
            <div v-else class="mb-3">
                <select class="form-select form-select-lg" v-model="event.status" @change="updateStatus">
                    <option value="pending">pending</option>
                    <option value="ongoing">on going</option>
                    <option value="completed">completed</option>
                    <option value="cancelled">cancelled</option>
                </select>
            </div>
        </td>
    </tr>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
  event: {
    type: Object,
  }
})
const emit = defineEmits(['']);

const isEnded = computed(() => {
  const now = new Date();
  return now > props.event.endTime;
})
function updateStatus() {
  emit('status', props.event);
}
</script>