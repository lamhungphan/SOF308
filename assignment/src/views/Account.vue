<template>
    <div>
      <Navbar />
      <div class="container-fluid px-4">
        <h3 class="mt-4">Quản lý Tài khoản</h3>
        <div class="row">
          <!-- User Information Card -->
          <div class="col-12 col-md-4">
            <div class="card">
              <div class="card-body text-center">
                <img :src="user.avatar" class="rounded-circle mb-3" alt="User Avatar" width="100" />
                <h5 class="card-title">{{ user.username }}</h5>
                <p class="card-text">{{ user.email }}</p>
                <button class="btn btn-outline-secondary" @click="editProfile">
                  Chỉnh sửa thông tin
                </button>
              </div>
            </div>
          </div>
  
          <!-- Edit Profile Form (Hiển thị luôn) -->
          <div class="col-12 col-md-8">
            <div class="card">
              <div class="card-header">Chỉnh sửa Thông tin Cá nhân</div>
              <div class="card-body">
                <form @submit.prevent="saveChanges">
                  <div class="mb-3">
                    <label for="username" class="form-label">Tên người dùng</label>
                    <input v-model="user.username" type="text" class="form-control" id="username" placeholder="Nhập tên người dùng" />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input v-model="user.email" type="email" class="form-control" id="email" placeholder="Nhập email" />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">Mật khẩu mới</label>
                    <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Nhập mật khẩu mới" />
                  </div>
                  <div class="mb-3">
                    <label for="avatar" class="form-label">Ảnh đại diện</label>
                    <input @change="handleImageUpload" type="file" class="form-control" id="avatar" />
                  </div>
                  <button type="submit" class="btn btn-primary">Lưu Thay Đổi</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from "vue";
  import Navbar from "../components/Navbar.vue";
  
  // Dữ liệu người dùng mặc định
  const user = ref({
    username: "Tên người dùng",
    email: "user@example.com",
    password: "",
    avatar: "../assets/Chi-Nguyen.png", // Đường dẫn đến ảnh đại diện mặc định
  });
  
  // Xử lý tải ảnh đại diện
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      user.value.avatar = URL.createObjectURL(file); // Cập nhật đường dẫn ảnh đại diện
    }
  };
  
  // Lưu thông tin thay đổi
  const saveChanges = () => {
    // Xử lý lưu thông tin người dùng vào backend hoặc local storage
    console.log("Lưu thay đổi:", user.value);
    alert("Thông tin đã được lưu.");
  };
  </script>
  

<style></style>