<template>
    <tr>
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.category }}</td>
        <td><button @click="showEdit" type="button" class="btn btn-warning btn-sml ">
                Edit
            </button>
        </td>
    </tr>
</template>

<script setup>

const props = defineProps({
  product: Object
})
const emit = defineEmits(['edit'])
function showEdit() {
  emit('edit', props.product);
}
</script>