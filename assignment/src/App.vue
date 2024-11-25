<script setup>
import NavbarComponent from "./components/Navbar.vue";
import HeaderComponent from "./components/Header.vue";
import BlogListComponent from "./components/BlogList.vue";
import CommentComponent from "./components/Comment.vue";
import SidebarComponent from "./components/Sidebar.vue";
import PaginationComponent from "./components/Pagination.vue";
import FooterComponent from "./components/Footer.vue";
</script>

<template>
  <div>
    <NavbarComponent />
    <HeaderComponent />
    <div class="container">
      <div class="row">
        <BlogListComponent />
        <SidebarComponent />
        <PaginationComponent />
      </div>
      <CommentComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped>
</style>
