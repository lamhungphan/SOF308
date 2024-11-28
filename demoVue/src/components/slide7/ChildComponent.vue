<template>
    <button @click="sendEvent">Click me</button>
</template>

<script setup>
const emit = defineEmits(['my-event']);

const sendEvent = () => {
    emit('my-event', 'dữ liệu từ phía component con')
}
</script>

<style></style>