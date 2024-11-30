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
            <img class="rounded-circle" :src="comment.userImage" alt="User Image" />
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
      newComment: {
        content: ""
      },
      comments: [
        {
          id: 1,
          userName: "Mem 1",
          userImage: "https://dummyimage.com/50x50/ced4da/6c757d.jpg",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
        },
        {
          id: 2,
          userName: "Mem 2",
          userImage: "https://dummyimage.com/50x50/ced4da/6c757d.jpg",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      if (this.newComment.content.trim()) {
        const newComment = {
          id: this.comments.length + 1,
          userName: "New Commenter",
          userImage: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/599e3b95636919.5eb96c0445ea7.jpg",
          content: this.newComment.content
        };
        this.comments.push(newComment);
        this.newComment.content = "";
      }
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 10px;
}

textarea {
  resize: none;
}
</style>
