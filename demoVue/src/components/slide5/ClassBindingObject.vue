<template>
    <div>
      <div :class="{ active: isActive, disabled: !isEnabled }">
        Đây là một ví dụ với Object Syntax.
      </div>
      <button @click="toggleState">Toggle State</button>
    </div>
  </template>
  
  <script>
// Khi isActive là true, class active sẽ được áp dụng cho phần tử <div>
// Khi isEnabled là false, class disabled sẽ được áp dụng cho phần tử <div>
  export default {
    data() {
      return {
        isActive: true,
        isEnabled: false
      };
    },
    methods: {
      toggleState() {
        this.isActive = !this.isActive;
        this.isEnabled = !this.isEnabled;
      }
    }
  };
  </script>
  
  <style scoped>
  .active {
    background-color: green;
  }
  
  .disabled {
    background-color: gray;
  }
  </style>
  