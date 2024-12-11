<template>
  <div>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Search by name or datet time">
    </div>
    <div class="table-responsive-sm">
      <table class="table table-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Start time </th>
            <th scope="col">End time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <Event v-for="(event) in filteredEvents" :key="event.id" :event="event" @status="updateStatus" />
        </tbody>
      </table>
    </div>
    <h3>Report:</h3>
    <ul class="list-group list-group-numbered">
      <li class="list-group-item">Pending: {{ eventCounts.pending }}</li>
      <li class="list-group-item">Cancelled {{ eventCounts.cancelled }}</li>
      <li class="list-group-item">On going: {{ eventCounts.ongoing }}</li>
      <li class="list-group-item">Completed: {{ eventCounts.completed }}</li>
    </ul>
  </div>
</template>

<script setup>
import Event from '@/components/Event.vue';
import { computed, ref } from 'vue';

const events = ref([
  { id: 1, name: 'Hội thảo công nghệ', startTime: '2024-12-10T09:00:00', endTime: '2024-12-10T12:00:00', status: 'pending' },
  { id: 2, name: 'Hội chợ việc làm', startTime: '2024-12-11T10:00:00', endTime: '2024-12-11T15:00:00', status: 'ongoing' },
  { id: 3, name: 'Buổi thuyết trình AI', startTime: '2024-12-09T14:00:00', endTime: '2024-12-09T16:00:00', status: 'completed' },
]);

const searchQuery = ref();

const filteredEvents = computed(() => {
  let filtered = events.value;
  if (searchQuery.value) {
    filtered = filtered.filter(event => {
      const timeRange = `${event.endTime} - ${event.startTime}`
      return event.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        || timeRange.toLowerCase().includes(searchQuery.value.toLowerCase())
    })
  }
  return filtered;
})
function updateStatus(event) {
  const index = events.value.findIndex(e => e.id === event.id)
  events.value[index].status = event.status;
}

const eventCounts = computed(() => {
  return events.value.reduce((counts, event) => { counts[event.status] += 1; return counts }, { pending: 0, ongoing: 0, completed: 0, cancelled: 0 })
})
</script>