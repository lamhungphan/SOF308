<template>
  <section class="mb-5">
    <div class="card bg-light">
      <div class="card-body">
        <!-- Comment form -->
        <form @submit.prevent="handleSubmit" class="mb-4">
          <textarea v-model="newComment.content" class="form-control" rows="3"
            placeholder="Tham gia đóng góp ý kiến nào" required></textarea>
          <button type="submit" class="btn btn-primary mt-2">Gửi bình luận</button>
        </form>

        <!-- Comment list -->
        <div class="d-flex mb-4" v-for="comment in comments" :key="comment.id">
          <!-- Comment -->
          <div class="flex-shrink-0">
            <img class="rounded-circle" :src="comment.userImage" width="50px" alt="User Image" />
          </div>
          <div class="ms-3">
            <div class="fw-bold">{{ comment.userName }}</div>
            {{ comment.content }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      isAuthenticated: false, // Theo dõi trạng thái đăng nhập
      newComment: {
        content: ""
      },
      comments: [
        {
          id: 1,
          userName: "HuskyWannaFly",
          userImage: "https://dummyimage.com/50x50/ced4da/6c757d.jpg",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
        },
        {
          id: 2,
          userName: "SadBoyFunFact",
          userImage: "https://dummyimage.com/50x50/ced4da/6c757d.jpg",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
        }
      ]
    };
  },
  mounted() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    this.isAuthenticated = !!loggedInUser; // Chuyển đổi giá trị thành boolean
  },
  methods: {
    handleSubmit() {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

      // Nếu chưa đăng nhập, hiển thị cảnh báo và chuyển hướng
      if (!this.isAuthenticated || !loggedInUser) {
        Swal.fire({
          icon: 'warning',
          title: 'Cảnh báo',
          text: 'Bạn cần đăng nhập để gửi bình luận!'
        });
        this.$router.push({ name: "login" });
        return;
      }

      // Nếu nội dung bình luận không hợp lệ, hiển thị thông báo
      if (!this.newComment.content.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'Lỗi',
          text: 'Nội dung bình luận không được để trống!'
        });
        return;
      }

      // Gửi bình luận
      const newComment = {
        id: this.comments.length + 1,
        userName: loggedInUser.name,
        userImage: loggedInUser.image || "https://mir-s3-cdn-cf.behance.net/project_modules/disp/599e3b95636919.5eb96c0445ea7.jpg",
        content: this.newComment.content,
      };
      this.comments.push(newComment);
      this.newComment.content = ""; // Reset nội dung sau khi gửi
      Swal.fire({
        icon: 'success',
        title: 'Thành công',
        text: 'Bình luận của bạn đã được gửi!'
      });
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 10px;
}

textarea {
  resize: none;
}
</style>
