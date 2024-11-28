<template>
    <div>
        <Navbar/>
        <div class="container-fluid px-4">
            <h3 class="mt-4">Quản lý Tài khoản</h3>
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <img src="../assets/Chi-Nguyen.png" class="rounded-circle mb-3" alt="User Avatar"
                                width="100">
                            <h5 class="card-title">Tên người dùng</h5>
                            <p class="card-text">Email: user@example.com</p>
                            <button class="btn btn-outline-secondary" data-bs-toggle=""
                                data-bs-target="#editProfile">Chỉnh
                                sửa thông tin</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div id="editProfile" class="">
                        <div class="card">
                            <div class="card-header">Chỉnh sửa Thông tin Cá nhân</div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="username" class="form-label">Tên người dùng</label>
                                        <input type="text" class="form-control" id="username"
                                            placeholder="Nhập tên người dùng">
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Nhập email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Mật khẩu mới</label>
                                        <input type="password" class="form-control" id="password"
                                            placeholder="Nhập mật khẩu mới">
                                    </div>
                                    <div class="mb-3">
                                        <label for="avatar" class="form-label">Ảnh đại diện</label>
                                        <input type="file" class="form-control" id="avatar">
                                    </div>
                                    <button type="submit" class="btn btn-primary">Lưu Thay Đổi</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<style></style>