<template>
    <div class="w-50 my-3">
        <h3 class="mb-3">Form sinh viên</h3>
        <form @submit.prevent="createStudent">
            <div class="mb-3">
                <label for="name" class="form=label">Tên</label>
                <input type="text" id="name" class="form-control" v-model="student.name" required>
            </div>
            <div class="mb-3">
                <label for="age" class="form=label">Tuổi</label>
                <input type="number" min="0" step="1" id="age" class="form-control" v-model="student.age" required>
            </div>
            <div class="mb-3">
                <label for="gpa" class="form=label">Điểm trung bình</label>
                <input type="number" min="0" max="10" step="0.1" id="gpa" class="form-control" v-model="student.gpa"
                    required>
            </div>
            <div class="mb-3">
                <button class="btn btn-primary" type="submit">Thêm sinh viên</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

// Xác định sự kiện emit để gửi dữ liệu khi form được submit
const emit = defineEmits(['studentCreated']);

// Biến reactive để lưu thông tin sinh viên nhập vào form
const student = reactive({
    name: '',
    age: '',
    gpa: ''
});

// Hàm xử lý khi form được submit
function createStudent() {
    emit('studentCreated', student); // Gửi sự kiện + dữ liệu sinh viên qua Parent
    student.name = ''; // Reset form sau khi submit
    student.age = '';
    student.gpa = '';
}
</script>

<style></style>