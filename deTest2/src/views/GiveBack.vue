<template>
    <div class="container">
        <div class="input-group my-3 w-50">
            <input type="text" placeholder="Nhập tên sách để trả" class="form-control" v-model="searchQuery" required />
            <button class="btn btn-warning" @click.prevent="handleSearch">
                Tìm kiếm
            </button>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Tên sách</th>
                    <th>Tác giả</th>
                    <th>Số lượng</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(book, index) in filteredBooks" :key="index">
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.quantity }}</td>
                    <td>
                        <button class="btn btn-outline-info" @click.prevent="handleReturnBook(book)">
                            Hoàn trả sách
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from "vue";

const books = ref(JSON.parse(localStorage.getItem('bookInventory')) || []);
const searchQuery = ref("");
const filteredBooks = ref([]);

function handleSearch() {
    if (searchQuery.value.trim() === "") {
        filteredBooks.value = [];
    } else {
        filteredBooks.value = books.value.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    }
}

function handleReturnBook(book) {
    book.quantity++;
    alert(`Sách "${book.title}" đã được hoàn trả`);
    localStorage.setItem('bookInventory', JSON.stringify(books.value));
    handleSearch();
}
</script>

<style></style>
