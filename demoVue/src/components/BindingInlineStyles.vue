<template>
    <div>
      <p :style="{ color: textColor, fontSize: fontSize + 'px' }">Đoạn văn này có style động</p> <!-- Thay đổi màu và kích thước chữ -->
      <input v-model="textColor" placeholder="Nhập màu chữ">
      <input v-model="fontSize" type="number" placeholder="Nhập kích thước chữ">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        textColor: 'blue',
        fontSize: 16
      };
    }
  };
  </script>
  