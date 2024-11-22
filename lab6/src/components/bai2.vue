<template>
  <div class="container">
    <h3>Nhập tháng của bạn</h3>
    <input type="number" v-model.number="month" />

    <p v-if="month < 1 || month > 12" style="color: red">
      Vui lòng nhập tháng từ 1 đến 12
    </p>
    <p v-else-if="month >= 1 && month <= 3">Xuân</p>
    <p v-else-if="month <= 6">Hạ</p>
    <p v-else-if="month <= 9">Thu</p>
    <p v-else>Đông</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const month = ref(1);
</script>

<style>
</style>