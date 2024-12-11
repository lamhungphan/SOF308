<template>
    <td scope="row">{{ item.name }}</td>
    <td>{{ item.price }}</td>
    <td><input :value="item.quantity" type="number" @input="emit('quantity', +$event.target.value)" min="1" /></td>
    <td><button @click="emit('edit',item)">edit</button>||<button @click="emit('delete')">delete</button></td>
</template>

<script setup>

defineProps({
  item: {
    type: Object,
    Required: true,
  }
})

const emit = defineEmits(['quantity', 'delete', 'edit'])
</script>