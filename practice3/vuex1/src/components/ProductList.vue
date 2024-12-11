<template>
    <div class="table-responsive-sm">
        <table class="table table-secondary">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Category</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product) in products " :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>{{ product.category }}</td>
                    <td><button type="button" @click="editProduct(product)" class="btn btn-primary">
                            Edit
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script setup>
const props = defineProps({
  products: {
    type: Array,
  }
})
const emit = defineEmits(['edit'])
function editProduct(product) {
  emit('edit', product)
}
</script>