<template>
    <div class="container">
        <form action="">
            <div class="mb-3">
                <label for="" class="form-label">ID</label>
                <input v-model="product.id" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input v-model="product.name" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Category</label>
                <input v-model="product.category" type="text" class="form-control" />
            </div>
    
            <button type="button" class="btn btn-primary" @click="saveProduct">
                Add
            </button>
            <button type="button" class="btn btn-primary" @click="updateProduct">
                Update
            </button>
            <button type="button" class="btn btn-primary" @click="removeProduct">
                Remove
            </button>
    
        </form>
    </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
})
const emit = defineEmits(['add', 'update', 'remove'])
function saveProduct() {
  emit('add', props.product)
}
function updateProduct() {
  emit('update', props.product)
}
function removeProduct() {
  emit('remove', props.product.id)
}
</script>