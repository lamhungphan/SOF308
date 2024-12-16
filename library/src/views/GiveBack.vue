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
import { ref } from 'vue';
import apiClient from '@/axios';

const searchQuery = ref('');
const filteredBooks = ref([]);
const books = ref([]);

// Fetch sách từ API khi component được mount
async function fetchBooks() {
    try {
        const response = await apiClient.get('/books');
        books.value = response.data;
        handleSearch(); // Làm mới kết quả tìm kiếm
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Tìm kiếm sách theo tên
function handleSearch() {
    filteredBooks.value = books.value.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
}

// Xử lý hoàn trả sách
async function handleReturnBook(book) {
    try {
        const response = await apiClient.put(`/return/${book.title}`);
        
        if (response.status === 200) {
            book.quantity++;  // Tăng số lượng sách sau khi trả
            alert(response.data);  // Hiển thị thông báo trả sách thành công
        } else {
            alert('Không thể trả sách!');
        }
    } catch (error) {
        console.error('Error returning book:', error.response || error.message);
        alert('Không thể trả sách! Vui lòng thử lại.');
    }
}

// Lấy danh sách sách khi trang được load
fetchBooks();
</script>

<style scoped>
/* Thêm các style nếu cần */
</style>
