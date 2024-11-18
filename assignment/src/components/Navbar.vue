<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#!">
        <img src="../assets/wideLogo.png" alt="" width="100">
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="#!">Về chúng tôi</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Liên hệ</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Đăng ký</a></li>
          <li class="nav-item"><a @click="toggleLoginForm" class="nav-link active" aria-current="page" href="#">Đăng nhập</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hiển thị form đăng nhập khi showLoginForm là true -->
  <login-form v-if="showLoginForm" @close="toggleLoginForm"></login-form>
</template>

<script>
import LoginForm from './Login.vue';

export default {
  name: "NavbarComponent",
  components: {
    LoginForm
  },
  data() {
    return {
      showLoginForm: false
    };
  },
  methods: {
    toggleLoginForm() {
      this.showLoginForm = !this.showLoginForm;
    }
  }
};
</script>
