<template>
  <div>
    <Navbar />
    <div class="container-fluid px-4">
      <h3 class="mt-4"></h3>
      <div class="row">
        <!-- User Information Card -->
        <div class="col-12 col-md-4">
          <div class="card">
            <div class="card-body text-center">
              <img :src="user.avatar" class="rounded-circle mb-3" alt="User Avatar" width="100" />
              <h5 class="card-title">{{ user.username }}</h5>
              <p class="card-text">{{ user.email }}</p>
            </div>
          </div>
        </div>

        <!-- Edit Profile Form -->
        <div class="col-12 col-md-8">
          <div class="card">
            <div class="card-header fw-bold bg-info">Thông tin Cá nhân</div>
            <div class="card-body">
              <form @submit.prevent="saveChanges">
                <div class="mb-3">
                  <label for="username" class="form-label">Tên người dùng</label>
                  <input v-model="user.username" type="text" class="form-control" id="username"
                    placeholder="Nhập tên người dùng" disabled />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input v-model="user.email" type="email" class="form-control" id="email" placeholder="Nhập email" />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Mật khẩu</label>
                  <input v-model="user.password" type="password" class="form-control" id="password"
                    placeholder="Nhập mật khẩu mới" />
                </div>
                <button type="submit" class="btn btn-warning">Lưu Thay Đổi</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
import Swal from "sweetalert2";

// Dữ liệu người dùng
const user = ref({
  username: "",
  email: "",
  password: "",
  avatar: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/599e3b95636919.5eb96c0445ea7.jpg", // Avatar mặc định
});

// Tải thông tin từ localStorage
onMounted(() => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const users = JSON.parse(localStorage.getItem("users"));

  if (loggedInUser && users) {
    // Lấy thông tin người dùng dựa trên `username`
    const detailedUser = users.find((u) => u.username === loggedInUser.username);
    if (detailedUser) {
      Object.assign(user.value, detailedUser); // Gán thông tin chi tiết cho user
    }
  }
});

// Xử lý tải ảnh đại diện
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    user.value.avatar = URL.createObjectURL(file); // Cập nhật đường dẫn ảnh đại diện
  }
};

// Lưu thay đổi
const saveChanges = () => {
  if (!user.value.password) {
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text: "Mật khẩu không được để trống!",
    });
    return;
  }

  // Cập nhật thông tin vào localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex((u) => u.username === user.value.username);

  if (index !== -1) {
    users[index] = { ...users[index], ...user.value }; // Cập nhật thông tin
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(user.value));
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: "Thông tin tài khoản đã được cập nhật.",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text: "Không tìm thấy người dùng trong danh sách!",
    });
  }
};
</script>