<template>
    <div class="container">
        <Form @bookCreated="handleAddBook"></Form>
        <Table :bookList="bookInventory" @bookBorrowed="handleBorrowBook"></Table>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Table from '@/components/Table.vue';
import Form from '@/components/Form.vue';

const bookInventory = reactive(
    JSON.parse(localStorage.getItem('bookInventory')) || [
        { title: "Lập trình Vue.js", author: "Nguyễn Văn A", quantity: 3 },
        { title: "JavaScript cơ bản", author: "Trần Văn B", quantity: 5 },
        { title: "HTML & CSS", author: "Lê Văn C", quantity: 2 }
    ]
);

function updateLocalStorage() {
    localStorage.setItem('bookInventory', JSON.stringify(bookInventory));
}

function handleAddBook(newBook) {
    bookInventory.unshift({
        title: newBook.title,
        author: newBook.author,
        quantity: Number(newBook.quantity)
    });
    updateLocalStorage();
}

function handleBorrowBook(bookTitle) {
    const book = bookInventory.find((b) =>
        b.title.toLowerCase() === bookTitle.toLowerCase()
    );

    if (book) {
        if (book.quantity > 0) {
            book.quantity--;
            alert(`Bạn đã mượn sách "${book.title}"`);
        } else {
            alert(`Sách "${book.title}" hiện đã hết`);
        }
    } else {
        alert(`Không tìm thấy sách "${bookTitle}"`);
    }
    updateLocalStorage();
}
</script>

<style></style>
