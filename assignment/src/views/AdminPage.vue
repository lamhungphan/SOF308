<template>
    <div class="admin-page">
      <h1>Quản lý</h1>
      <div>
        <h2>Danh mục</h2>
        <ul>
          <li v-for="category in categories" :key="category.id">
            {{ category.name }}
            <button @click="editCategory(category)">Sửa</button>
            <button @click="deleteCategory(category.id)">Xóa</button>
          </li>
        </ul>
        <form @submit.prevent="addCategory">
          <input v-model="newCategory" placeholder="Tên danh mục" />
          <button type="submit">Thêm danh mục</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const categories = ref([{ id: 1, name: "Thể thao" }, { id: 2, name: "Giáo dục" }]);
  const newCategory = ref("");
  
  const addCategory = () => {
    categories.value.push({ id: Date.now(), name: newCategory.value });
    newCategory.value = "";
  };
  
  const editCategory = (category) => {
    const newName = prompt("Tên mới:", category.name);
    if (newName) category.name = newName;
  };
  
  const deleteCategory = (id) => {
    categories.value = categories.value.filter((category) => category.id !== id);
  };
  </script>
  
  <style scoped>
  </style>
  