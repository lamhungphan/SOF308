<template>
    <div>
        <h3>Filter</h3>
        <div class="mb-3">
            <label for="" class="form-label">Min price:</label>
            <input @input="updateFilter" v-model="filters.minPrice" type="number" class="form-control" placeholder="" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Max price:</label>
            <input @input="updateFilter" v-model="filters.maxPrice" type="number" class="form-control" placeholder="" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">start date:</label>
            <input @input="updateFilter" v-model="filters.startDate" type="date" class="form-control" placeholder="" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">end date:</label>
            <input @input="updateFilter" v-model="filters.endDate" type="date" class="form-control" placeholder="" />
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const filters = reactive({
  minPrice: null,
  maxPrice: null,
  startDate: '',
  endDate: '',
})
const emit = defineEmits(['update'])

function updateFilter() {
  emit('update', { ...filters })
}
</script>