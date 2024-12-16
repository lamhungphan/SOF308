<template>
    <div class="container">
        <Form @bookCreated="handleAddBook"></Form>
        <Table :bookList="bookInventory" @bookBorrowed="handleBorrowBook"></Table>
        <!-- <Giveback :bookList="bookInventory" /> -->
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';  // Thêm import onMounted
import Table from '@/components/Table.vue';
import Form from '@/components/Form.vue';
import Giveback from '@/views/GiveBack.vue';  // Import Giveback component
import apiClient from '@/axios';

const bookInventory = reactive([]);

// Fetch danh sách sách khi khởi chạy
onMounted(async () => {
    await fetchBooks();
});

async function fetchBooks() {
    try {
        const response = await apiClient.get('/books');
        console.log('Books fetched successfully:', response.data);
        bookInventory.splice(0, bookInventory.length, ...response.data);  // Cập nhật dữ liệu sách mới vào bookInventory
    } catch (error) {
        console.error('Error fetching books:', error.message);
    }
}

async function handleAddBook(newBook) {
    try {
        const response = await apiClient.post('/books', {
            title: newBook.title,
            author: newBook.author,
            quantity: newBook.quantity,
        });
        bookInventory.push(response.data);
        alert('Thêm sách thành công!');
    } catch (error) {
        console.error('Error adding book:', error);
        alert('Không thể thêm sách!');
    }
}

async function handleBorrowBook(bookTitle) {
    const book = bookInventory.find((b) => b.title.toLowerCase() === bookTitle.toLowerCase());

    if (book) {
        if (book.quantity > 0) {
            try {
                const response = await apiClient.put(`/borrow/${book.title}`);
                book.quantity--;  // Giảm số lượng sách trong frontend
                alert(response.data);  // Hiển thị thông báo từ server
            } catch (error) {
                alert('Không thể mượn sách, vui lòng thử lại.');
                console.error(error);
            }
        } else {
            alert(`Sách "${book.title}" hiện đã hết`);
        }
    } else {
        alert(`Không tìm thấy sách "${bookTitle}"`);
    }
}
</script>

<style></style>
