<template>
  <nav aria-label="Pagination">
    <hr class="my-0" />
    <ul class="pagination justify-content-center my-4">
      <!-- Nút Previous -->
      <li :class="['page-item', { disabled: currentPage === 1 }]">
        <button class="page-link" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
          ←
        </button>
      </li>

      <!-- Nút số trang -->
      <li 
        v-for="page in visiblePages" 
        :key="page" 
        :class="['page-item', { active: currentPage === page }]">
        <button class="page-link" @click="changePage(page)">
          {{ page }}
        </button>
      </li>

      <!-- Nút Next -->
      <li :class="['page-item', { disabled: currentPage === totalPages }]">
        <button class="page-link" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
          →
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    totalItems: {
      type: Number,
      required: true, // Tổng số mục cần phân trang
    },
    itemsPerPage: {
      type: Number,
      default: 10, // Số mục hiển thị mỗi trang
    },
    currentPage: {
      type: Number,
      default: 1, // Trang hiện tại
    },
    visiblePageCount: {
      type: Number,
      default: 5, // Số nút trang hiển thị trong thanh phân trang
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage); // Tổng số trang
    },
    visiblePages() {
      const pages = [];
      const start = Math.max(1, this.currentPage - Math.floor(this.visiblePageCount / 2));
      const end = Math.min(this.totalPages, start + this.visiblePageCount - 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit("page-changed", page); // Phát sự kiện khi trang thay đổi
      }
    },
  },
};
</script>

<style scoped>
.page-item.disabled .page-link {
  pointer-events: none;
  opacity: 0.6;
}
</style>
