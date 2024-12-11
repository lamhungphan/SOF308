<template>
    <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
    </tr>
</template>
<script setup>
defineProps({
  user: Object,
})
</script>