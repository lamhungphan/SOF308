<template>
    <div>
        <h3>User management</h3>
        <div class="table-responsive-sm">
            <input type="text" v-model="searchQuery" placeholder="Search by name or email">
            <table class="table table-secondary">
                <thead>
                    <tr>
                        <th scope="col" @click="sort('name')">Name</th>
                        <th scope="col" @click="sort('email')">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <UserRow v-for="(user,index) in filteredUsers" :key="index" :user="user" />
                </tbody>
            </table>
        </div>
    
    </div>
</template>

<script setup>
import UserRow from '@/components/UserRow.vue';
import { ref, computed } from 'vue';

const users = ref([
  { name: 'John Dee', email: 'john@gmail.com' },
  { name: 'Jane', email: 'jane@gmail.com' },])

const searchQuery = ref('');
const sortKey = ref('');
const sortOrder = ref(true)

const filteredUsers = computed(() => {
  return users.value.filter(user => {
    return user.name.toLowerCase().includes(searchQuery.value.toLocaleLowerCase()) ||
      user.email.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase())
  }).sort((a, b) => {
    if (!sortKey.value) {
      return 0;
    }
    const key = sortKey.value;
    const order = sortOrder.value
    return a[key] > b[key] ? order : a[key] < b[key] ? -order : 0
  })
})
function sort(key) {
  if (sortKey.value === key) {
    sortOrder.value = !sortOrder.value;
    return;
  }
  sortKey.value = key
  sortOrder.value = true;
}
</script>