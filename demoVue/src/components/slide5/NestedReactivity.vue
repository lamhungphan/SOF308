<template>
    <div>
      <p>Name: {{ state.user.name }}</p>
      <p>City: {{ state.user.address.city }}</p>
      <button @click="changeCity">Change City</button>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    setup() {
      const state = reactive({
        user: {
          name: 'Sunny',
          address: {
            city: 'New York'
          }
        }
      });
  
      // Thay đổi giá trị thành phố
      const changeCity = () => {
        state.user.address.city = 'Los Angeles';
      };
  
      return { state, changeCity };
    }
  };
  </script>