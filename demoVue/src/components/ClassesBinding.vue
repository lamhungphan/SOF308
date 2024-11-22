<template>
  <div>
    <p :class="{ active: isActive }">Đây là một đoạn văn</p> <!-- class 'active' sẽ được thêm khi isActive là true -->
    <button @click="isActive = !isActive">Chuyển trạng thái</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style>
.active {
  color: red;
  font-weight: bold;
}
</style>
