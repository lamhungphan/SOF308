<template>
    <div v-if="!isLoggedIn" class="p-5 col-sm-4">
        <h3>Form Đăng Nhập</h3>
        <form @submit.prevent="login">
            <div class="mb-3 mt-3">
                <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
                <p v-if="emailError" style="color: red;">{{ emailError }}</p>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
                <p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
            </div>
            <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </form>
    </div>
    <div v-else class="p-5 col-sm-5">
        <h3>Chào mừng, {{ email }}</h3>
        <button @click="logout" class="btn btn-primary">Đăng xuất</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const account = ref([
    { username: 'abc@email.com', password: '123' },
    { username: 'hungphan@gmail.com', password: '123' }
]);

const login = () => {
    // Reset thông điệp lỗi
    emailError.value = '';
    passwordError.value = '';

    // Validate email
    if (!email.value) {
        emailError.value = 'Email là bắt buộc';
    } else if (!emailRegex.test(email.value)) {
        emailError.value = 'Vui lòng nhập email hợp lệ';
    }

    // Validate mật khẩu
    if (!password.value) {
        passwordError.value = 'Mật khẩu là bắt buộc';
    }

    // Nếu không có lỗi, xử lý login
    if (!emailError.value && !passwordError.value) {
        const user = account.value.find(
            acc => acc.username === email.value && acc.password === password.value
        );
        if (user) {
            isLoggedIn.value = true;
        } else {
            emailError.value = 'Email hoặc mật khẩu không đúng';
        }
    }
}

const logout = () => {
    isLoggedIn.value = false;
    email.value = '';
    password.value = '';
    emailError.value = '';
    passwordError.value = '';
}
</script>

<style></style>
