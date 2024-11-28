<template>
    <div>
      <p>Giá trị hiện tại: {{ count }}</p>
      <button @click="count++">Tăng</button> <!-- Nút nhấn để tăng giá trị 'count' -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0 // ref(0)
      };
    }
  };
  </script>
  