<template>
    <ul>
      <li v-for="(value, key) in user" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: { name: 'John', age: 25, city: 'New York' }
      };
    }
  };
  </script>