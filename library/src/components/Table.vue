<template>
    <div>
        <h2>Danh sách Sách</h2>
        <div class="input-group mb-3 w-50">
            <input type="text" placeholder="Nhập tên sách muốn mượn" class="form-control" v-model="borrowedBookTitle" />
            <button class="btn btn-info" @click.prevent="handleBorrowBook">Mượn sách</button>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Tiêu đề</th>
                    <th>Tác giả</th>
                    <th>Số lượng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(book, index) in bookList" :key="index">
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.quantity }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import apiClient from '@/axios'; 

const props = defineProps({
    bookList: Array
});

const borrowedBookTitle = ref('');

async function handleBorrowBook() {
    // Kiểm tra xem ô nhập tên sách có trống không
    if (!borrowedBookTitle.value) {
        alert('Vui lòng nhập tên sách muốn mượn.');
        return;
    }

    try {
        const response = await apiClient.put(`/borrow/${borrowedBookTitle.value}`);
        // Kiểm tra phản hồi từ server
        if (response.status === 200) {

            // Tìm cuốn sách trong danh sách và giảm số lượng
            // NẾU tải lại danh sách sách từ API ( await fetchBooks(); ) sẽ cần load trang để cập nhật
            const book = props.bookList.find((b) => b.title.toLowerCase() === borrowedBookTitle.value.toLowerCase());
            if (book) {
                book.quantity--;  // Giảm số lượng sách
                alert(response.data);  // Hiển thị thông báo thành công
            }
        } else {
            alert('Không thể mượn sách!');
        }
    } catch (error) {
        console.error('Error borrowing book:', error);
        alert('Không thể mượn sách! Vui lòng thử lại.');
    } finally {
        borrowedBookTitle.value = ''; 
    }
}

</script>

<style></style>
