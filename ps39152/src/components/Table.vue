<template>
    <div>
        <h2>Danh sách thành viên</h2>
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
                <tr v-for="(member, index) in memberList" :key="index">
                    <td>{{ member.name }}</td>
                    <td>{{ member.age }}</td>
                    <td>{{ member.role }}</td>
                    <td>
                        <button type="button" class="btn btn-info" @click="editMember(member)">Chỉnh
                            sửa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

const props = defineProps({
    memberList: Array,
});

const emit = defineEmits(['memberEditing']);

function editMember(mem) {
    emit('memberEditing', mem);
}
</script>

<style></style>
