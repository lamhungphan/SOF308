<template>
    <div>
        <div class="table-responsive-sm">
            <h3>EventHistory</h3>
            <input type="text" v-model="searchQuery">
            <table class="table table-success">
                <thead>
                    <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Type</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Check?</th>
                    </tr>
                </thead>
                <tbody>
                    <EventItem v-for="event in filteredEvents" :key="event.id" :event="event" @read="updateStatus" />
                </tbody>
            </table>
        </div>
    
    </div>
</template>

<script setup>
import EventItem from '@/components/EventItem.vue';
import { computed, ref } from 'vue';

const events = ref([
  { id: 1, timestamp: '2024-12-01 10:00', type: 'Cảnh báo', description: 'Máy chủ bị lỗi', status: false },
  { id: 2, timestamp: '2024-12-01 12:00', type: 'Thông báo', description: 'Cập nhật thành công', status: false },
  { id: 3, timestamp: '2024-12-02 09:00', type: 'Lỗi hệ thống', description: 'Không thể kết nối cơ sở dữ liệu', status: false },
]);

const searchQuery = ref('');

const filteredEvents = computed(() => {
  if (searchQuery.value) return events.value.filter(e => e.description.toLowerCase().includes(searchQuery.value.toLowerCase()))
  else return events.value;
})

function updateStatus(eventId, status) {
  const index = events.value.findIndex(e => e.id === eventId)
  events.value[index].status = status
}

</script>