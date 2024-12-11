<template>
    <div>
        <FilterControl @update="applyFilters" />
        <ul>
            <li v-for="(product, index) in filterProducts" :key="index">
                <p>{{ product.name }}</p>
                <p>{{product.price }}</p>
                <p>{{ product.date }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import FilterControl from '@/components/FilterControl.vue';
import { ref, computed } from 'vue';

const products = ref([
  { name: 'product a', price: 3000, date: '2023-10-01' },
  { name: 'product b', price: 4000, date: '2023-10-11' },
  { name: 'product c', price: 4500, date: '2023-12-01' },
  { name: 'product d', price: 3500, date: '2023-10-01' },
])
const filters = ref({
  minPrice: null,
  maxPrice: null,
  startDate: '',
  endDate: '',
})
function applyFilters(newFilter) {
  filters.value = { ...newFilter }
}

const filterProducts = computed(() => {
  return products.value.filter(product => {
    const { minPrice, maxPrice, startDate, endDate } = filters.value;
    const priceValid = (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
    const dateValid = (!startDate || product.date >= startDate) && (!endDate || product.date >= endDate);
    return priceValid && dateValid;
  })
}) 
</script>