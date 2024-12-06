<template>
    <div>
      <input type="checkbox" value="HTML" v-model="checkedNames">HTML <br>
      <input type="checkbox" value="CSS" v-model="checkedNames">CSS <br>
      <input type="checkbox" value="JavaScript" v-model="checkedNames">JavaScript <br>
      <p>Ngôn ngữ bạn chọn: {{ checkedNames.join(', ') }}</p>
    </div>
  </template>
  
  <script setup>
      import { ref } from 'vue';
      const checkedNames = ref([]);
  </script>