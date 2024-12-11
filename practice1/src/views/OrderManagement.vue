<template>
    <div>
        <div>
            <input type="text" v-model="searchQuery" placeholder="Search by customer name or id order?">
        </div>
        <div class="table-responsive-sm">
            <table class="table table-secondary">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Created date</th>
                    </tr>
                </thead>
                <tbody>
                    <OrderItem v-for="(order) in filterdOrders" :key="order.id" :order="order" @status="updateStatus"
                        @processTime="updateProcessTime" />
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4">Total processing time: {{ totalProcessingTime }} days</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    
    </div>
</template>

<script setup>
import OrderItem from '@/components/OrderItem.vue';
import { computed, ref } from 'vue';

const orders = ref([
  { id: 'ORD123', customerName: 'Nguyễn Văn A', createdAt: '2024-12-01T10:00:00', status: 'processing', processingTime: null },
  { id: 'ORD124', customerName: 'Trần Thị B', createdAt: '2024-12-01T12:00:00', status: 'shipped', processingTime: null },
  { id: 'ORD125', customerName: 'Lê Minh C', createdAt: '2024-12-02T09:00:00', status: 'cancelled', processingTime: null },
]);
const searchQuery = ref('');

const filterdOrders = computed(() => {
  let filtered = orders.value;
  if (searchQuery.value) {
    filtered = orders.value.filter(order => order.customerName.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase()) ||
      order.id.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase()));
  }
  return filtered;
})
function updateStatus(order) {
  const index = orders.value.findIndex(o => o.id === order.id);
  orders.value[index].status = order.status;
}
function updateProcessTime(id, processingTime) {
  const index = orders.value.findIndex(o => o.id === id);
  orders.value[index].processingTime = processingTime;
}
const totalProcessingTime = computed(() => {
  return orders.value.reduce((totalTime, order) => totalTime + order.processingTime, 0);
})
</script>