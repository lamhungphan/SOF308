<template>
    <section class="mb-5">
      <div class="card bg-light">
        <div class="card-body">
          <!-- Comment form-->
          <form class="mb-4">
            <textarea class="form-control" rows="3" placeholder="Tham gia đóng góp ý kiến nào"></textarea>
          </form>
  
          <!-- Comment with nested comments-->
          <div class="d-flex mb-4" v-for="comment in comments" :key="comment.id">
            <!-- Parent comment-->
            <div class="flex-shrink-0">
              <img class="rounded-circle" :src="comment.userImage" alt="User Image" />
            </div>
            <div class="ms-3">
              <div class="fw-bold">{{ comment.userName }}</div>
              {{ comment.content }}
              
              <!-- Nested child comments -->
              <div v-if="comment.replies && comment.replies.length" v-for="reply in comment.replies" :key="reply.id" class="d-flex mt-4">
                <div class="flex-shrink-0">
                  <img class="rounded-circle" :src="reply.userImage" alt="Reply User Image" />
                </div>
                <div class="ms-3">
                  <div class="fw-bold">{{ reply.userName }}</div>
                  {{ reply.content }}
                </div>
              </div>
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
        comments: [
          {
            id: 1,
            userName: "Commenter Name",
            userImage: "https://dummyimage.com/50x50/ced4da/6c757d.jpg",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
            replies: [
              {
                id: 1.1,
                userName: "Reply User 1",
                userImage: "https://dummyimage.com/50x50/ced4da/6c757d.jpg",
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
              },
              {
                id: 1.2,
                userName: "Reply User 2",
                userImage: "https://dummyimage.com/50x50/ced4da/6c757d.jpg",
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
              }
            ]
          },
          {
            id: 2,
            userName: "Another Commenter",
            userImage: "https://dummyimage.com/50x50/ced4da/6c757d.jpg",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
            replies: []
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>

</style>
  