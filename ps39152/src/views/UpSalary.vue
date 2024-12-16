<template>
    <div class="container">
        <div class="input-group my-3 w-50">
            <input type="text" placeholder="Nhập tên nhân viên" class="form-control" v-model="searchQuery" required />
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Tên thành viên</th>
                    <th>Tuổi</th>
                    <th>Chức vụ</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(member, index) in filteredMembers" :key="index">
                    <td>{{ member.name }}</td>
                    <td>{{ member.age }}</td>
                    <td>{{ member.role }}</td>
                    <td>
                        <button class="btn btn-outline-info" @click.prevent="handleUpSalary(member)">
                            Tăng lương
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const members = ref(JSON.parse(localStorage.getItem('memberList')) || []);
const searchQuery = ref("");
const filteredMembers = computed(() => {
    if (searchQuery.value.trim() === "") {
        return members.value;
    } else {
        return members.value.filter((mem) =>
            mem.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    }
});

function handleUpSalary(mem) {
    switch (mem.role) {
        case 'Chủ tịch':
            alert(`"${mem.name}" là ${mem.role} được tăng 10.000.000`);
            break;
        case 'Thành viên':
            alert(`"${mem.name}" là ${mem.role} được tăng 5.000.000`);
            break;
        case 'Thư ký':
            alert(`"${mem.name}" là ${mem.role} được tăng 5.500.000`);
            break;
    }
    handleSearch();
}
</script>

<style></style>
