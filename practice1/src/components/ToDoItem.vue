<template>
    <div>
        <input type="checkbox" @change="emit('toggle')"> done?
        <p :style="{textDecoration: todo.completed? 'line-through': 'none'}">{{ todo.text }}</p>
        <button @click="emit('delete')">xoa</button>
    </div>
</template>

<script setup>

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  }
})
const emit = defineEmits(['delete', 'toggle'])
</script>