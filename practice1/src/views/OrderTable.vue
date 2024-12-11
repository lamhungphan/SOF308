<template>
    <div>
        <div class="table-responsive-sm">
            <h3>List order</h3>
            <div>
                <h5>Filters</h5>
                <div class="mb-3">
                    <label for="" class="form-label">Filters</label>
                    <input type="text" v-model="searchQuery" placeholder="Search by id or name">
                    <select class="form-select form-select-lg" v-model="selectedQuery">
                        <option value="all">all</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
    
            </div>
            <table class="table table-success">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <OrderRow v-for="(order,index) in filterOrders" :key="index" :order="order" />
                    <tr>
                        <td colspan="5">{{ totalAmounts }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
    </div>
</template>

<script setup>
import OrderRow from '@/components/OrderRow.vue';
import { computed, ref } from 'vue';

const orders = ref([
  { id: 'ORD001', customerName: 'Nguyễn Văn A', orderDate: '2024-11-01', totalAmount: 500000, status: 'Completed' },
  { id: 'ORD002', customerName: 'Trần Thị B', orderDate: '2024-11-05', totalAmount: 300000, status: 'Pending' },
  { id: 'ORD003', customerName: 'Lê Minh C', orderDate: '2024-11-10', totalAmount: 1200000, status: 'Cancelled' },
  { id: 'ORD004', customerName: 'Phan Ngọc D', orderDate: '2024-11-12', totalAmount: 700000, status: 'Completed' },
]);

const searchQuery = ref('');
const selectedQuery = ref('');

const filterOrders = computed(() => {
  let filtered = orders.value;

  filtered = filtered.filter(order => {
    return order.id.toLowerCase().includes(searchQuery.value.toLowerCase().trim())
      || order.customerName.toLowerCase().includes(searchQuery.value.toLowerCase().trim());
  });
  if (selectedQuery.value != 'all') return filtered.filter(order => order.status.toLowerCase().includes(selectedQuery.value.toLowerCase().trim()));
  return filtered;
})
const totalAmounts = computed(() => {
  const ordersCompleted = orders.value.filter(o => {
    return o.status.toLowerCase().includes('completed');
  })
  return ordersCompleted.reduce((total, order) => total + order.totalAmount, 0)
})
</script>