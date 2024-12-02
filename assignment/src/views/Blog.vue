<template>
  <div id="layoutSidenav_content">
    <Navbar />
    <main>
      <div class="container-fluid px-4">
        <h3 class="mt-4"></h3>
        <!-- Form -->
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">Bài Viết Mới</div>
          <div class="card-body">
            <form @submit.prevent="submitArticle">
              <div class="mb-3">
                <label for="postTitle" class="form-label">Tiêu đề Bài Viết</label>
                <input v-model="newArticle.title" type="text" class="form-control" id="postTitle"
                  placeholder="" required />
              </div>
              <div class="mb-3">
                <label for="postContent" class="form-label">Nội dung Bài Viết</label>
                <textarea v-model="newArticle.content" class="form-control" id="postContent" rows="5"
                  placeholder="" required></textarea>
              </div>
              <div class="mb-3">
                <label for="postImage" class="form-label">Chọn Ảnh</label>
                <input @change="handleImageUpload" class="form-control" type="file" id="postImage" />
              </div>
              <button type="submit" class="btn btn-success">Đăng Bài</button>
            </form>
          </div>
        </div>

        <!-- Danh Sách Bài Viết -->
        <div class="card mb-4">
          <div class="card-header bg-warning">Danh Sách Bài Viết</div>
          <div class="card-body">
            <div v-if="articles.length" class="list-group">
              <div v-for="(article, index) in articles" :key="index" class="list-group-item">
                <h5>{{ article.title }}</h5>
                <p>{{ article.content }}</p>
                <img v-if="article.image" :src="article.image" class="img-fluid my-2" alt="Hình ảnh bài viết" />
                <p><small class="text-muted">Ngày đăng: {{ article.date }}</small></p>
              </div>
            </div>
            <p v-else>Chưa có bài viết nào</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar.vue";

// Reactivity cho bài viết mới
const newArticle = ref({
  title: "",
  content: "",
  image: null,
});

// Danh sách bài viết, lấy từ localStorage nếu có
const articles = ref(JSON.parse(localStorage.getItem("articles")) || []);

// Hàm xử lý đăng bài viết
const submitArticle = () => {
  if (!newArticle.value.title || !newArticle.value.content) {
    Swal.fire({
      icon: "warning",
      title: "Thất bại",
      text: "Vui lòng nhập đầy đủ thông tin!",
    });
    return;
  }

  // Hiển thị SweetAlert xác nhận
  Swal.fire({
    title: "Xác nhận",
    text: "Sau khi tạo bài viết sẽ không thể xóa bài!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
      // Tạo bài viết mới
      const articleData = {
        title: newArticle.value.title,
        content: newArticle.value.content,
        image: newArticle.value.image ? URL.createObjectURL(newArticle.value.image) : "",
        date: new Date().toLocaleDateString(),
      };

      // Thông báo thành công
      Swal.fire({
        icon: "success",
        title: "Thành công",
        text: "Bài viết đã được đăng!",
      });

      // Thêm bài viết vào danh sách
      articles.value.unshift(articleData);

      // Lưu danh sách bài viết vào localStorage
      localStorage.setItem("articles", JSON.stringify(articles.value));

      // Reset form
      newArticle.value = { title: "", content: "", image: null };
    } else {
      // Nếu người dùng chọn hủy, thông báo huỷ đăng bài
      Swal.fire({
        icon: "info",
        title: "Đã hủy",
        text: "Bài viết chưa được đăng.",
      });
    }
  });
};

// Hàm xử lý tải ảnh
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    newArticle.value.image = file;
  }
};
</script>

<style></style>