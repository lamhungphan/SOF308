<template>
  <div class="container">
    <div class="row">
      <ProductForm :product="selecteProduct" @add="handleAdd" @update="handleUpdate" @remove="handleRemove" />
    </div>
    <div class="table-responsive">
      <table class="table table-success">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow v-for="product in filterByProduct" :key="product.id" :product="product" @edit="selectedProduct" />
        </tbody>
      </table>
    </div>
  
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import ProductRow from '../components/ProductRow.vue';
import { computed, ref } from 'vue';
import ProductForm from '../components/ProductForm.vue';
const searchQuery = ref('');
const store = useStore();


const selecteProduct = ref({
  id: '',
  name: '',
  category: '',
});
function handleAdd(product) {
  store.dispatch('product/addProduct', product)
}
function handleUpdate(product) {
  store.dispatch('product/updateProduct', product)
}
function handleRemove(id) {
  store.dispatch('product/removeProduct', id)
}
const selectedProduct = (product) => {
  return selecteProduct.value = product;
}
const filterByProduct = computed(() => {
  return store.getters['product/getProducts'];
})
</script>