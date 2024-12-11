<template>
    <div class="container">
        <Form @studentCreated="handleAddStudent"></Form>
        <!-- 
        - Sử dụng component Form để lấy thông tin sinh viên
        - Khi form được submit, sẽ kích hoạt sự kiện 'studentCreated'
        - Gọi hàm 'handleAddStudent' trong EntryView để thêm sinh viên vào danh sách
        -->

        <Table :students="studentList"></Table>
        <!-- 
        - Sử dụng component Table để hiển thị danh sách sinh viên
        - Truyền danh sách sinh viên (studentList) vào Table qua props
        -->
        <div class="input-group mb-3 w-25">
            <input type="text" placeholder="Nhập tên sinh viên để xóa" class="form-control"
                v-model="studentNameToDelete">
            <button class="btn btn-danger" @click.prevent="handleDeleteStudent">Xóa</button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Table from '@/components/Table.vue';
import Form from '@/components/Form.vue';

const studentList = reactive(JSON.parse(localStorage.getItem('students')) || [
    { name: "An", age: 20, gpa: 8.5 },
    { name: "Bình", age: 22, gpa: 9.0 },
    { name: "Chi", age: 19, gpa: 7.5 }
]);

localStorage.setItem('students', JSON.stringify(studentList));

const studentNameToDelete = ref('');

function handleAddStudent(stud) { // có thể không bỏ stud vì emmit qua đã có student
    let newStudent = {
        name: stud.name,
        age: Number(stud.age),
        gpa: Number(stud.gpa),
    }

    studentList.push(newStudent);
    // Cập nhật danh sách sinh viên trong localStorage
    localStorage.setItem('students', JSON.stringify(studentList));
}

function handleDeleteStudent() {
    studentList.forEach((stud, index) => {
        if (stud.name === studentNameToDelete.value) {
            studentList.splice(index, 1);
        }
    });
    localStorage.setItem('students', JSON.stringify(studentList));
    studentNameToDelete.value = '';
}
</script>

<style></style>