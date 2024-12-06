<template>
    <div>
      <p v-show="isVisible">Đoạn văn này có thể được ẩn</p>
      <button @click="toggleVisibility">Hiển thị / Ẩn</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: true
      };
    },
    methods: {
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      }
    }
  };
  </script>