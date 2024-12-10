<template>
    <div>
        <h3 class="mb-3">Thêm sách mới</h3>
        <form @submit.prevent="handleCreateBook">
            <div class="mb-3">
                <label for="title">Nhập tên sách</label>
                <input type="text" id="title" class="form-control" v-model="newBook.title" required />
            </div>
            <div class="mb-3">
                <label for="author">Nhập tác giả</label>
                <input type="text" id="author" class="form-control" v-model="newBook.author" required />
            </div>
            <div class="mb-3">
                <label for="quantity">Nhập số lượng</label>
                <input type="number" min="0" max="1000" step="1" id="quantity" class="form-control"
                    v-model="newBook.quantity" required />
            </div>
            <button type="submit" class="btn btn-primary">Thêm sách</button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const newBook = reactive({
    title: '',
    author: '',
    quantity: ''
});

const emit = defineEmits(['bookCreated']);

function handleCreateBook() {
    emit('bookCreated', { ...newBook });
    newBook.title = '';
    newBook.author = '';
    newBook.quantity = '';
}
</script>

<style></style>
