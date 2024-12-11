<template>
    <div class="container">
        <div class="input-group my-3 w-25">
            <input type="text" placeholder="Tên sinh viên muốn gửi thông báo" class="form-control"
                v-model="filterKeyword">
            <button class="btn btn-info" @click.prevent="filterStudentsByName">Lọc</button>
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
                        <button class="btn btn-outline-info" @click.prevent="sendNotificationToStudent(student)">Gửi
                            thông báo</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Lấy danh sách sinh viên từ localStorage
const studentList = JSON.parse(localStorage.getItem('students')) || [];

// Biến lưu danh sách sinh viên được lọc
const filterKeyword = ref("");

// Biến reactive để lưu danh sách hiển thị
const displayStudents = ref([]);

// Danh sách sinh viên sau khi được lọc
function filterStudentsByName() {
    displayStudents.value = studentList.filter((student) =>
    student.name.toLowerCase().includes(filterKeyword.value.toLowerCase())    );
}

// Gửi thông báo khi bấm nút
function sendNotificationToStudent(student) {
    alert(`Thông báo cho sinh viên ${student.name}, DTB là ${student.gpa}`);
}
</script>

<style></style>