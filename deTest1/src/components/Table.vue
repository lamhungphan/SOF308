<template>
    <div class="my-3">
        <h2 class="mb-3">Danh sách sinh viên</h2>
        <div class="input-group mb-3 w-25">
            <input type="number" min="0" max="10" step="1" placeholder="Lọc sinh viên" class="form-control"
                v-model="gpaFilter">
            <button class="btn btn-info" @click.prevent="applyFilter">Lọc</button>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <!-- Render tiêu đề bảng dựa trên các thuộc tính của đối tượng sinh viên -->
                    <th v-for="(header, index) in Object.keys(students.at(0))" :key="index" v-html="header"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in filteredStudentList" :key="index">
                    <td v-html="student.name"></td>
                    <td v-html="student.age"></td>
                    <td v-html="student.gpa"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Nhận danh sách sinh viên từ component cha
const props = defineProps({
    students: Array
});
// props.students là 1 hằng số

// Danh sách hiển thị (có thể được lọc)
const filteredStudentList = ref(props.students);

// Giá trị GPA dùng để lọc sinh viên
const gpaFilter = ref()

// Lọc danh sách sinh viên theo GPA
function applyFilter() {
    filteredStudentList.value = props.students.filter(student => student.gpa >= gpaFilter.value);
}
</script>

<style></style>