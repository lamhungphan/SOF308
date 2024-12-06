<template>
    <div>
      <p v-if="status === 'loading'">Đang tải dữ liệu...</p>
      <p v-else-if="status === 'success'">Tải dữ liệu thành công!</p>
      <p v-else-if="status === 'error'">Đã xảy ra lỗi. Vui lòng thử lại.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        status: 'loading' // Thay đổi giá trị để kiểm tra từng trạng thái
      };
    }
  };
  </script>