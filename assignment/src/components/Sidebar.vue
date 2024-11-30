<template>
  <div class="col-lg-4">
    <!-- Search widget -->
    <div class="card mb-4">
      <div class="card-header"><b>Tìm kiếm</b></div>
      <div class="card-body">
        <div class="input-group">
          <input v-model="searchQuery" class="form-control" type="text" placeholder="Nhập tên tiêu đề, tác giả ..."
            aria-label="Enter search term..." aria-describedby="button-search" />
          <button @click="search" class="btn btn-primary" id="button-search" type="button">Tìm Kiếm</button>
        </div>
      </div>
    </div>

    <!-- Categories widget -->
    <div class="card mb-4">
      <div class="card-header"><b>Chủ đề</b></div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <ul class="list-unstyled mb-0">
              <li><a href="#!" class="category-link">Quan điểm - tranh luận</a></li>
              <li><a href="#!" class="category-link">Khoa học - Công nghệ</a></li>
              <li><a href="#!" class="category-link">Tài chính</a></li>
            </ul>
          </div>
          <div class="col-sm-6">
            <ul class="list-unstyled mb-0">
              <li><a href="#!" class="category-link">Người trong muôn nghề</a></li>
              <li><a href="#!" class="category-link">Sách</a></li>
              <li><a href="#!" class="category-link">Chuyện thầm kín</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Side widget -->
    <div class="card mb-4 text-center">
      <div class="card-header"><b>CÁC BÀI VIẾT NỔI BẬT BẠN KHÔNG NÊN BỎ LỠ!</b></div>
      <div class="card-body">
        Thứ Năm hàng tuần, Spiderum sẽ gửi bạn email tổng hợp những bài viết đáng đọc nhất tuần qua.
      </div>
      <img src="../assets/newsletter.png" alt="Newsletter Image" width="200" class="mx-auto img-fluid" />
      <label for="email">Chúng mình có thể gửi thư cho bạn qua:</label>
      <input type="email" name="email" id="email" class="form-control my-2 w-75 mx-auto" />
      <label for="username">Chúng mình có thể gọi bạn là:</label>
      <input type="text" name="username" id="username" class="form-control my-2 w-75 mx-auto" />
      <button class="btn btn-primary mx-auto m-3 p-2" id="button-newsletter" type="button">Đăng ký</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      // Xử lý sự kiện tìm kiếm bài viết
      console.log("Tìm kiếm với từ khóa: ", this.searchQuery);
     
    },
  },
};
</script>

<style scoped>
/* Bo góc và màu sắc cho các mục trong danh sách chủ đề */
.category-link {
  display: block;
  padding: 8px;
  margin-bottom: 6px;
  border-radius: 8px;
  /* Bo góc */
  text-decoration: none;
  color: #007bff;
  /* Màu chữ */
  background-color: #f8f9fa;
  /* Màu nền mặc định */
  transition: background-color 0.3s ease, color 0.3s ease;
  /* Hiệu ứng chuyển màu */
}

.category-link:hover {
  background-color: #007bff;
  /* Màu nền khi hover */
  color: #fff;
  /* Màu chữ khi hover */
}

/* Tùy chỉnh kiểu dáng của các nút tìm kiếm */
.input-group .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

/* Màu nền và viền cho các trường nhập liệu */
.form-control {
  border-radius: 8px;
  /* Bo góc cho các trường nhập liệu */
  border: 1px solid #ced4da;
}

.form-control:focus {
  border-color: #007bff;
  /* Đổi màu viền khi trường nhập liệu được chọn */
  box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
  /* Đổi màu viền focus */
}
</style>
