<template>
    <div>
      <label>
        <input type="checkbox" v-model="isChecked"> Chấp nhận điều khoản
      </label>
      <p>Trạng thái: {{ isChecked ? 'Đã chấp nhận' : 'Chưa chấp nhận' }}</p>
    </div>
  </template>
  
  <script setup>
      import { ref } from 'vue';
      const isChecked = ref(false);
  </script>