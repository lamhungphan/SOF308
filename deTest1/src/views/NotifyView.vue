<template>
    <div class="container">
        <div class="input-group my-3 w-25">
            <input type="text" placeholder="Nhập tên sinh viên để xóa" class="form-control" v-model="filter">
            <button class="btn btn-info" @click.prevent="doFilter">Lọc</button>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>GPA</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in displayStudents" :key="index">
                    <td v-html="student.name"></td>
                    <td v-html="student.age"></td>
                    <td v-html="student.gpa"></td>
                    <td>
                        <button class="btn btn-outline-info" @click.prevent="doNotify(student)">Gửi thông báo</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Lấy danh sách sinh viên từ localStorage
const students = JSON.parse(localStorage.getItem('students')) || [];

// Biến lưu danh sách sinh viên được lọc
const filter = ref("");

// Biến reactive để lưu danh sách hiển thị
const displayStudents = ref([]);

// Lọc sinh viên theo tên
function doFilter() {
    displayStudents.value = students.filter((student) =>
        student.name.includes(filter.value)
    );
}

// Gửi thông báo khi bấm nút
function doNotify(student) {
    alert(`Thông báo cho sinh viên ${student.name}, DTB là ${student.gpa}`);
}
</script>

<style></style>