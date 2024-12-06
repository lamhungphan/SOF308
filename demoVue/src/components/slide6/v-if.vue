<template>
    <div>
      <p v-if="isLoggedIn">Chào mừng bạn quay lại!</p>
      <button v-if="!isLoggedIn" @click="login">Đăng nhập</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false
      };
    },
    methods: {
      login() {
        this.isLoggedIn = true;
      }
    }
  };
  </script>