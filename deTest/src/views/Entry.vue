<template>
  <div class="container">
    <Form @productCreated="handleAddProduct"></Form>
    <Table :productList="productList" @product-purchased="handlePurchaseProduct"></Table>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue';
import Form from '@/components/Form.vue'
import Table from '@/components/Table.vue'
import { useRoute } from 'vue-router';

const productList = reactive(
  JSON.parse(localStorage.getItem('products')) || [
    { id: '223', name: 'Bánh Oreo', quantity: '2' },
    { id: '225', name: 'Kẹo chocolate', quantity: '5' },
    { id: '227', name: 'Sữa TH true milk', quantity: '4' }
  ]);

const route = useRoute();  // Khởi tạo để nhận query parameter từ URL
const selectedProduct = reactive({
  id: '',
  name: '',
  quantity: ''
});

// Lấy dữ liệu sản phẩm từ query và hiển thị lên form
watch(() => route.query.product, (newProduct) => {
  if (newProduct) {
    selectedProduct = JSON.parse(newProduct);
  }
});

function updateLocalStorage() {
  localStorage.setItem('products', JSON.stringify(productList));
}

function handleAddProduct(newProduct) {
  // Kiểm tra nếu ID đã tồn tại
  const isDuplicate = productList.some((product) => product.id === newProduct.id);

  if (isDuplicate) {
    alert(`ID "${newProduct.id}" đã tồn tại. Vui lòng chọn ID khác`);
    return; // Ngăn không cho thêm sản phẩm mới
  }

  productList.unshift({
    id: newProduct.id,
    name: newProduct.name,
    quantity: Number(newProduct.quantity)
  })
  updateLocalStorage();
}

function handlePurchaseProduct(productName) {
  const product = productList.find((p) =>
    p.name.toLowerCase() === productName.toLowerCase()
  );

  if (product) {
    if (product.quantity > 0) {
      product.quantity--;
    } else {
      alert(`Sản phẩm ${product.name} hiện đã hết`)
    }
  } else {
    alert(`Không tìm thấy sản phẩm "${productName}"`);
  }
  updateLocalStorage();
}

</script>

<style></style>