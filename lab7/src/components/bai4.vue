<template>
    <div>
        <!--Nếu người dùng chưa đăng nhập, hiển thị form đăng nhập-->
        <LoginComponent v-if="!isLoggedIn" @LoggedIn="handleLoginSuccess" />
        
        <!--Nếu người dùng đã đăng nhập, hiển thị component bình luận-->
        <CommentComponent v-else :username="loggedInUser" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from './LoginComponent.vue';
import CommentComponent from './CommentComponent.vue';

// Quản lý trạng thái đăng nhập và tên người dùng đã đăng nhập
const isLoggedIn = ref(false); // Trạng thái đăng nhập
const loggedInUser = ref(''); // Tên người dùng đã đăng nhập

// Xử lý khi người dùng đăng nhập thành công
function handleLoginSuccess(username) {
  loggedInUser.value = username; // Lưu tên người dùng
  isLoggedIn.value = true;       // Cập nhật trạng thái đăng nhập
}
</script>

<style></style>