<template>
    <div>
        <ProductForm :product="selectedProduct" @add="handleAdd" @update="handleUpdate" @remove="handleRemove" />
        <ProductList :products="products" @edit="handleEdit" />
        <h2>Total price: {{ totalPrice }}</h2>
    </div>
</template>

<script setup>
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const selectedProduct = ref({})
function handleEdit(product) {
  selectedProduct.value = product
}
const products = computed(() => {
  return store.getters['product/allProduct']
})
function handleAdd(product) {
  store.dispatch('product/addProduct', product)
}
function handleUpdate(product) {
  store.dispatch('product/updateProduct', product)
}
function handleRemove(id) {
  store.dispatch('product/removeProduct', id)
}
const totalPrice = computed(() => {
  return store.getters['product/totalValue'];
})
</script>