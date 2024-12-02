<template>
  <div class="home-page">
    <NavbarComponent />
    <HeaderComponent />
    <div class="container">
      <div class="row">
        <BlogListComponent :articles="articles" :currentPage="currentPage" :itemsPerPage="itemsPerPage" />
        <SidebarComponent />
        <PaginationComponent :totalItems="totalArticles" :itemsPerPage="itemsPerPage" :currentPage="currentPage"
          :visiblePageCount="7" @page-changed="handlePageChange" />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import NavbarComponent from "../components/Navbar.vue";
import HeaderComponent from "../components/Header.vue";
import BlogListComponent from "./BlogList.vue";
import SidebarComponent from "../components/Sidebar.vue";
import PaginationComponent from "../components/Pagination.vue";
import FooterComponent from "../components/Footer.vue";

// Quản lý trạng thái phân trang
const currentPage = ref(1);
const itemsPerPage = 4;
const articles = ref([]);

// Lấy dữ liệu bài viết khi trang được tải
onMounted(() => {
  fetch("/src/articles.json")
    .then((response) => response.json())
    .then((data) => {
      articles.value = data;
    })
    .catch((error) => console.error("Error loading articles:", error));
});

// Tổng số bài viết
const totalArticles = computed(() => articles.value.length);

// Khi người dùng chuyển trang
function handlePageChange(page) {
  currentPage.value = page;
}

function logout() {
  localStorage.removeItem('loggedInUser');
  this.$router.push({ name: 'login' });
}
</script>

<style scoped></style>
