<template>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ index + 1 }}. {{ item }}
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: ['Táo', 'Chuối', 'Cam']
      };
    }
  };
  </script>