<template>
  <div class="home-page">
    <NavbarComponent />
    <HeaderComponent />
    <div class="container">
      <div class="row">
        <BlogListComponent />
        <SidebarComponent />
        <PaginationComponent
          :totalItems="totalArticles" 
          :itemsPerPage="10" 
          :currentPage="currentPage" 
          :visiblePageCount="7" 
          @page-changed="handlePageChange"
        />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import NavbarComponent from "../components/Navbar.vue";
import HeaderComponent from "../components/Header.vue";
import BlogListComponent from "../components/BlogList.vue";
import SidebarComponent from "../components/Sidebar.vue";
import PaginationComponent from "../components/Pagination.vue";
import FooterComponent from "../components/Footer.vue";


</script>

<style scoped>

</style>