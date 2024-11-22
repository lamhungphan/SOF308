<template>
  <div>
    <h2>Tạo bài viết mới</h2>
    <input v-model="title" placeholder="Tiêu đề bài viết" />
    <input v-model="author" placeholder="Tên tác giả" />
    <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>
    <button @click="submitPost">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-post"]);

const title = ref("");
const author = ref("");
const content = ref("");

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
    };

    emit("add-post", newPost);

    //reset fields
    title.value = "";
    content.value = "";
    author.value = "";
  }
}
</script>

<style>
input,
textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>