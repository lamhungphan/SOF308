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

const props = defineProps({
    bookList: Array
});

const borrowedBookTitle = ref('');

const emit = defineEmits(['bookBorrowed']);

function handleBorrowBook() {
    emit('bookBorrowed', borrowedBookTitle.value);
    borrowedBookTitle.value = '';
}
</script>

<style></style>
