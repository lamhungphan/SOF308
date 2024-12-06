<template>
    <div>
      <p>{{ state.user.name }}</p>
      <button @click="deleteName">Delete Name</button>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    setup() {
      const state = reactive({
        user: {
          name: 'Sunny',
          age: 25
        }
      });
  
      // Xóa tên người dùng
      const deleteName = () => {
        delete state.user.name; // Vue sẽ tự động cập nhật giao diện
      };
  
      return { state, deleteName };
    }
  };
  </script>