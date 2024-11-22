<template>
  <div>
    <p>{{ message }}</p> <!-- Sử dụng data binding để hiển thị 'message' -->
    <input v-model="message" placeholder="Nhập thông điệp mới"> <!-- v-model để ràng buộc hai chiều -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue.js!'
    };
  }
};
</script>
