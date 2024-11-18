<template>
    <div class="col-lg-4">
      <!-- Search widget -->
      <div class="card mb-4">
        <div class="card-header">Tìm kiếm</div>
        <div class="card-body">
          <div class="input-group">
            <input class="form-control" type="text" placeholder="Nhập tên tiêu đề, tác giả ..." aria-label="Enter search term..." aria-describedby="button-search" />
            <button class="btn btn-primary" id="button-search" type="button">Go!</button>
          </div>
        </div>
      </div>
      <!-- Categories widget -->
      <div class="card mb-4">
        <div class="card-header">Chủ đề</div>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-6">
              <ul class="list-unstyled mb-0">
                <li><a href="#!">Quan điểm - tranh luận</a></li>
                <li><a href="#!">Khoa học - Công nghệ</a></li>
                <li><a href="#!">Tài chính</a></li>
              </ul>
            </div>
            <div class="col-sm-6">
              <ul class="list-unstyled mb-0">
                <li><a href="#!">Người trong muôn nghề</a></li>
                <li><a href="#!">Sách</a></li>
                <li><a href="#!">Chuyện thầm kín</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Side widget -->
      <div class="card mb-4 text-center">
        <div class="card-header">CÁC BÀI VIẾT NỔI BẬT BẠN KHÔNG NÊN BỎ LỠ!</div>
        <div class="card-body">Thứ Năm hàng tuần, Spiderum sẽ gửi bạn email tổng hợp những bài viết đáng đọc nhất tuần qua.</div>
        <img src="../assets/newsletter.png" alt="Newsletter Image" width="200" class="mx-auto img-fluid">
        <label for="email">Chúng mình có thể gửi thư cho bạn qua:</label>
        <input type="email" name="email" id="email" class="form-control my-2 w-75 mx-auto">
        <label for="username">Chúng mình có thể gọi bạn là:</label>
        <input type="text" name="username" id="username" class="form-control my-2 w-75 mx-auto">
        <button class="btn btn-primary mx-auto m-3 p-2" id="button-newsletter" type="button">Đăng ký</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SidebarComponent"
  };
  </script>
  
  <style scoped>

</style>
  