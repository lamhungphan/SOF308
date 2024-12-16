<template>
    <div class="container">
        <Form @add="handleCreate" @update="handleUpdate" :isEditing="isEditing" :member="selectedMember"></Form>
        <div class="mb-3">
            <label for="roleFilter">Lọc vai trò:</label>
            <select id="roleFilter" class="form-select" v-model="selectedRole">
                <option value="">Tất cả</option>
                <option value="Chủ tịch">Chủ tịch</option>
                <option value="Thành viên">Thành viên</option>
                <option value="Thư ký">Thư ký</option>
            </select>
        </div>
        <Table :memberList="filteredMembers" @memberEditing="selectMemberForEditing"></Table>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import Table from '@/components/Table.vue';
import Form from '@/components/Form.vue';

var memberList = ref([

]);

const selectedMember = ref({
    name: '',
    age: 0,
    role: ''
})

onMounted(() => {
    const response = localStorage.getItem('memberList')
    if (response) {
        memberList.value = JSON.parse(response);
    } else
        memberList.value = [
            { name: "Nguyễn Văn A", age: 21, role: "Chủ tịch" },
            { name: "Trần Thị B", age: 19, role: "Thành viên" },
            { name: "Lê Văn C", age: 22, role: "Thư ký" }
        ]
})
const isEditing = ref(false);
const selectedRole = ref('');

const filteredMembers = computed(() => {
    if (!selectedRole.value) return memberList.value;
    return memberList.value.filter(member => member.role === selectedRole.value);
});

function updateLocalStorage() {
    localStorage.setItem('memberList', JSON.stringify(memberList.value));
}

function resetForm() {
    selectedMember.value = { name: '', age: '', role: '' };
    isEditing.value = false;
}

function handleCreate(newMember) {
    if (newMember && newMember.name && newMember.age && newMember.role) {
        memberList.value.unshift(newMember);
        updateLocalStorage();
        resetForm();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin của thành viên (Tên, Tuổi, Vai trò)");
    }
}

function handleUpdate(updatedMember) {
    const index = memberList.value.findIndex((member) => member === updatedMember);
    if (index > -1) {
        memberList.value[index] = { ...updatedMember };
        updateLocalStorage();
        resetForm();
    } else {
        alert("Không tìm thấy thành viên với tên này để cập nhật");
    }
}


function selectMemberForEditing(member) {
    selectedMember.value = member;
    isEditing.value = true;
}

</script>

<style></style>
