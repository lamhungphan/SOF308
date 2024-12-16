<template>
  <div class="container">
    <div class="input-group my-3 w-50">
      <input type="text" placeholder="Nhập tên sản phẩm" class="form-control" v-model="searchQuery" required />
      <button class="btn btn-warning" @click.prevent="handleSearch">
        Tìm
      </button>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Mã</th>
          <th>Tên sản phẩm</th>
          <th>Số lượng</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in filteredProduct" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>
            <button class="btn btn-outline-info" @click.prevent="handleUpdate(product)">
              Chỉnh sửa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const products = ref(JSON.parse(localStorage.getItem('products')) || []);
const searchQuery = ref("");
const filteredProduct = ref([]);
const router = useRouter();

function handleSearch() {
  if (searchQuery.value.trim() === "") {
    filteredProduct.value = [];
  } else {
    filteredProduct.value = products.value.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
}

function handleUpdate(product) {
  // Chuyển dữ liệu về trang entry và đẩy lên form
  router.push({ name: 'home', query: { product: JSON.stringify(product) } });
}

</script>

<style></style>