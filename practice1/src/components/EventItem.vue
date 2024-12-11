<template>
    <tr :style="{color: event.status ? 'black' : 'blue'}">
        <td>{{ event.timestamp }}</td>
        <td>{{ event.type }}</td>
        <td>{{ event.description }}</td>
        <td>{{ event.status }}</td>
        <td><input type="checkbox" :checked="event.status" @change="$emit('read',event.id,$event.target.checked)"></td>
    </tr>
</template>

<script setup>

const props = defineProps({
  event: {
    type: Object
  },

})
</script>