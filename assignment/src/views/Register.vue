<template>
    <div class="wrapper">
      <div class="logo">
        <img src="../assets/Remove-bg.icon.png" alt="Logo" />
      </div>
      <div class="text-center mt-4 name">Chào "đồng" nhện</div>
      <form @submit.prevent="handleRegister" class="p-3 mt-3">
        <!-- Trường nhập tên đăng nhập -->
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input type="text" v-model="username" placeholder="Username" />
        </div>
        <!-- Trường nhập mật khẩu -->
        <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input type="password" v-model="password" placeholder="Password" />
        </div>
        <!-- Trường nhập lại mật khẩu -->
        <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
        </div>
        <!-- Nút đăng ký -->
        <button class="btn mt-3" type="submit">Đăng ký</button>
      </form>
      <div class="text-center fs-6">
        Đã có tài khoản? <a href="#" @click="switchToLogin">Đăng nhập</a>
      </div>
      <!-- Nút đóng form -->
      <button @click="closeForm" class="btn btn-secondary mt-3">Đóng</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '', // Lưu tên đăng nhập
        password: '', // Lưu mật khẩu
        confirmPassword: '' // Lưu mật khẩu nhập lại để xác nhận
      };
    },
    methods: {
      // Hàm xử lý đăng ký
      handleRegister() {
        // Kiểm tra dữ liệu hợp lệ
        if (!this.username || !this.password || !this.confirmPassword) {
          alert('Vui lòng nhập đầy đủ thông tin!');
          return;
        }
  
        if (this.password !== this.confirmPassword) {
          alert('Mật khẩu không khớp!');
          return;
        }
  
        // Lưu thông tin người dùng vào localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === this.username);
  
        if (userExists) {
          alert('Tên đăng nhập đã tồn tại!');
        } else {
          users.push({ username: this.username, password: this.password });
          localStorage.setItem('users', JSON.stringify(users));
          alert('Đăng ký thành công!');

          // Chuyển hướng sang trang đăng nhập
          this.$router.push({ name: 'login' });
        }
      }
    }
  };
  </script>

<style scoped>
/* Importing fonts from Google */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* Reseting */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #ecf0f3;
}

.wrapper {
  max-width: 350px;
  min-height: 500px;
  margin: 80px auto;
  padding: 40px 30px 30px 30px;
  background-color: #ecf0f3;
  border-radius: 15px;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
}

.logo {
  width: 80px;
  margin: auto;
}

.logo img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaa7, -8px -8px 15px #fff;
}

.wrapper .name {
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  padding-left: 10px;
  color: #555;
}

.wrapper .form-field input {
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 10px 15px 10px 10px;
}

.wrapper .form-field {
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
}

.wrapper .form-field .fas {
  color: #555;
}

.wrapper .btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  background-color: #03a9f4;
  color: #fff;
  border-radius: 25px;
  box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
  letter-spacing: 1.3px;
}

.wrapper .btn:hover {
  background-color: #039be5;
}

.wrapper a {
  text-decoration: none;
  font-size: 0.8rem;
  color: #03a9f4;
}

.wrapper a:hover {
  color: #039be5;
}

@media (max-width: 380px) {
  .wrapper {
    margin: 30px 20px;
    padding: 40px 15px 15px 15px;
  }
}
</style>