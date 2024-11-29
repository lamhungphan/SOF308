<template>
    <div>
      <Navbar />
      <div class="row">
        <div class="col-lg-8">
          <article v-if="article">
            <!-- Tiêu đề bài viết -->
            <header class="mb-4">
              <h1 class="fw-bolder mb-1">{{ article.title }}</h1>
              <div class="text-muted fst-italic mb-2">
                {{ article.date }} - {{ article.author }}
              </div>
              <div>
                <a v-for="category in article.categories" :key="category" class="badge bg-secondary text-decoration-none link-light" href="#!">
                  {{ category }}
                </a>
              </div>
            </header>
            <!-- Hình ảnh -->
            <figure class="mb-4">
              <img class="img-fluid rounded" :src="article.image" alt="..." />
            </figure>
            <!-- Nội dung -->
            <section class="mb-5">
              <p class="fs-5 mb-4">{{ article.content }}</p>
            </section>
          </article>
          <Comment />
        </div>
      </div>
    </div>
  </template>
  

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import articles from '/src/articles.json'; // Đường dẫn đến file article.json
import Navbar from '../components/Navbar.vue';
import Comment from '@/components/Comment.vue';

const route = useRoute(); // Lấy route hiện tại
const article = ref(null); // Lưu trữ bài viết hiện tại

onMounted(() => {
  const id = parseInt(route.params.id, 10); // Lấy id từ route
  article.value = articles.find((a) => a.id === id); // Tìm bài viết theo id
});

</script>


<style></style>