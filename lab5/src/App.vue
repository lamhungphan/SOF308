<template>
  <div id="app">
    <!-- <Homework/> -->
    <h1>Ứng dụng Blog nhỏ với Vue.js</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
// import Homework 
// from "./components/bai1.vue";
// from "./components/bai2.vue";
// from "./components/bai3.vue";

import { ref } from "vue";
import CreatePost from "./components/bai4-CreatePost.vue";
import PostList from "./components/bai4-PostList.vue";

const posts = ref([]);

function addPost(post) {
  posts.value.push(post);
}
</script>
<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
