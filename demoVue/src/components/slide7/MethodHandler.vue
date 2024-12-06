<template>
    <div>
        <button class="btn btn-dark m-5" @click="addNumber">Thêm</button>
        <p>Số lượng: <span class="text-danger">{{ count }}</span></p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const addNumber = () => {
    count.value += 1;
}
</script>

<style></style>