<template>
  <div>
    <p v-if="count > 0">Giá trị lớn hơn 0</p>
    <p v-else>Giá trị không hợp lệ</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: -1
    };
  }
};
</script>