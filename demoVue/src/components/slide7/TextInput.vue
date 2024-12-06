<template>
    <div>
      <label for="name">Tên:</label>
      <input id="name" v-model="name" type="text">
      <p>Tên của bạn là: {{ name }}</p>
    </div>
  </template>
  
  <script setup>
      import { ref } from 'vue';
      const name = ref('Liên');
  </script>