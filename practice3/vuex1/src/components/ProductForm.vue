<template>
    <form action="">
        <div>
            <label for="name">ID:</label>
            <input type="number" v-model="product.id" required min="1">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input v-model="product.name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Price</label>
            <input v-model="product.price" type="number" class="form-control" min="1" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Quantity</label>
            <input v-model="product.quantity" type="number" class="form-control" min="0" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Category</label>
            <input v-model="product.category" type="text" class="form-control" />
        </div>
        <button type="button" class="btn btn-primary" @click="submitAdd">
            Add
        </button>
        <button type="button" class="btn btn-primary" @click="submitUpdate">
            Update
        </button>
        <button type="button" class="btn btn-primary" @click="submitRemove">
            remove
        </button>
    
    </form>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      id: 0,
      name: '',
      price: 0,
      quantity: 0,
      category: '',
    })
  }
})
const emit = defineEmits(['add', 'update', 'remove'])

function submitAdd() {
  emit('add', props.product);
}
function submitUpdate() {
  emit('update', props.product)
}
function submitRemove() {
  emit('remove', props.product.id)
}
</script>