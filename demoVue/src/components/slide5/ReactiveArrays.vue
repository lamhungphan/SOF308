<template>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
      <button @click="addItem">Add Orange</button>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    setup() {
      const items = reactive(['Apple', 'Banana']);
  
      // Thêm một phần tử vào mảng
      const addItem = () => {
        items.push('Orange');
      };
  
      return { items, addItem };
    }
  };
  </script>