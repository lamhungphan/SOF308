<template>
    <div id="layoutSidenav_content">
      <Navbar />
      <main>
        <div class="container-fluid px-4">
          <h3 class="mt-4">Quản lý Bài Viết</h3>
  
          <!-- Form Đăng Bài Viết Mới -->
          <div class="card mb-4">
            <div class="card-header">Đăng Bài Viết Mới</div>
            <div class="card-body">
              <form @submit.prevent="submitArticle">
                <div class="mb-3">
                  <label for="postTitle" class="form-label">Tiêu đề Bài Viết</label>
                  <input v-model="newArticle.title" type="text" class="form-control" id="postTitle" placeholder="Nhập tiêu đề bài viết" required />
                </div>
                <div class="mb-3">
                  <label for="postContent" class="form-label">Nội dung Bài Viết</label>
                  <textarea v-model="newArticle.content" class="form-control" id="postContent" rows="5" placeholder="Nhập nội dung bài viết" required></textarea>
                </div>
                <div class="mb-3">
                  <label for="postImage" class="form-label">Chọn Ảnh</label>
                  <input @change="handleImageUpload" class="form-control" type="file" id="postImage" />
                </div>
                <button type="submit" class="btn btn-success">Đăng Bài</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Navbar from "../components/Navbar.vue";
  
  const newArticle = ref({
    title: "",
    content: "",
    image: null,
  });
  
  const submitArticle = async () => {
    // 1. Tạo đối tượng bài viết mới
    const articleData = {
      title: newArticle.value.title,
      content: newArticle.value.content,
      image: newArticle.value.image ? URL.createObjectURL(newArticle.value.image) : "", // Xử lý ảnh nếu có
      date: new Date().toLocaleDateString(),
    };
  
    // 2. Gửi dữ liệu đến server hoặc lưu tạm thời
    // Gửi dữ liệu bài viết đến API hoặc lưu vào localStorage để sử dụng tạm
    try {
      const response = await fetch('/api/saveArticle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(articleData),
      });
  
      if (response.ok) {
        alert("Bài viết đã được đăng!");
        // Reset form sau khi gửi
        newArticle.value = { title: "", content: "", image: null };
      } else {
        alert("Lỗi khi đăng bài viết!");
      }
    } catch (error) {
      console.error("Error saving article:", error);
      alert("Có lỗi xảy ra khi đăng bài viết.");
    }
  };
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      newArticle.value.image = file;
    }
  };
  </script>

<style></style>