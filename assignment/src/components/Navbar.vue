<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="../assets/wideLogo.png" alt="" width="100">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/blog" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/account" class="nav-link">Tài khoản</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link active">Đăng ký</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <a @click="logout" class="btn text-danger">Đăng Xuất</a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link to="/login" class="nav-link text-primary">Đăng nhập</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false, // Trạng thái đăng nhập
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("loggedInUser"); // Xóa dữ liệu đăng nhập
      this.isLoggedIn = false; // Cập nhật trạng thái
      this.$router.push({ name: "home" }); // Chuyển hướng về trang đăng nhập
    },
  },
  mounted() {
    this.isLoggedIn = !!localStorage.getItem("loggedInUser"); // Kiểm tra trạng thái đăng nhập
  },
};
</script>
