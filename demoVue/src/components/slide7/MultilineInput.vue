<script setup>
import { ref } from 'vue'
const message = ref('')
</script>

<template>
    <div>
        <span>Để lại góp ý tại đây:</span>
        <p>{{ message }}</p>
        <textarea v-model="message" placeholder="Nội dung góp ý..."></textarea>
    </div>
</template>