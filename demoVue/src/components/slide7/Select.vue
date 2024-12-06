<template>
    <div>
      <label for="fruit">Chọn loại trái cây: </label>
      <select id="fruit" v-model="selectedFruit">
        <option value="Apple">Táo</option>
        <option value="Banana">Chuối</option>
        <option value="Orange">Cam</option>
      </select>
      <p>Trái cây bạn chọn là: {{ selectedFruit }}</p>
    </div>
  </template>
  
  <script setup>
      import { ref } from 'vue';
      const selectedFruit = ref('Apple');
  </script>