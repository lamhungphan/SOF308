<template>
    <div>
        <h1>List students</h1>
        <h4>Filters</h4>
        <div>
            <input v-model="filters.name" @input="updatedFilters" type="text" placeholder="Search by name">
        </div>
        <div>
            <input v-model="filters.name" @input="updatedFilters" type="text" placeholder="Search by name">
        </div>
        <div>
            <input v-model="filters.name" @input="updatedFilters" type="text" placeholder="Search by name">
        </div>
        <h4>Sort by</h4>
        <div class="mb-3">
            <select class="form-select form-select-lg" v-model="sortBy">
                <option value="name">Name</option>
                <option value="gpa">GPA</option>
                <option value="birth">BirthDay</option>
            </select>
        </div>
        <StudentTable :students="filteredStudent" />
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import StudentTable from '../components/StudentTable.vue';
const store = useStore();


const filteredStudent = computed(() => store.getters.filteredStudent)
const filters = computed(() => store.state.filters)
const sortBy = computed(() => store.state.sortBy)

function updatedFilters() {
  store.dispatch('updateFilters', filters.value)
}
function updateSort() {
  store.dispatch('updatedFilters', sortBy.value)
}

</script>