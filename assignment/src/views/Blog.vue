<template>
    <div id="layoutSidenav_content">
        <Navbar />
        <main>
            <div class="container-fluid px-4">
                <h3 class="mt-4">Quản lý Bài Viết</h3>

                <!-- Form-->
                <div class="card mb-4">
                    <div class="card-header">Đăng Bài Viết Mới</div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="postTitle" class="form-label">Tiêu đề Bài Viết</label>
                                <input type="text" class="form-control" id="postTitle"
                                    placeholder="Nhập tiêu đề bài viết">
                            </div>
                            <div class="mb-3">
                                <label for="postContent" class="form-label">Nội dung Bài Viết</label>
                                <textarea class="form-control" id="postContent" rows="5"
                                    placeholder="Nhập nội dung bài viết"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="postImage" class="form-label">Chọn Ảnh</label>
                                <input class="form-control" type="file" id="postImage">
                            </div>
                            <button type="submit" class="btn btn-success">Đăng Bài</button>
                        </form>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="card mb-4">
                            <div class="card-body">
                                <h5 class="card-title">Tiêu đề Bài Viết</h5>
                                <p class="card-text">Tóm tắt nội dung bài viết...</p>
                                <a href="#" class="btn btn-primary">Xem Chi Tiết</a>
                                <button class="btn btn-warning ms-2">Sửa</button>
                                <button class="btn btn-danger ms-2">Xóa</button>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <h5 class="card-title">Tiêu đề Bài Viết Khác</h5>
                                <p class="card-text">Tóm tắt nội dung bài viết khác...</p>
                                <a href="#" class="btn btn-primary">Xem Chi Tiết</a>
                                <button class="btn btn-warning ms-2">Sửa</button>
                                <button class="btn btn-danger ms-2">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue"
</script>

<style></style>