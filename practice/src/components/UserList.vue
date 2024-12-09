<template>
    <div>
        <h3>Danh sách người dùng</h3>

        <!-- Form thêm hoặc chỉnh sửa -->
        <UserForm :userToEdit="editingUser" @add="handleAdd" @update="handleUpdate" />

        <!-- Danh sách người dùng -->
        <div v-for="user in users" :key="user.id">
            <UserItem :user="user" @remove="handleRemove" @edit="handleEdit" />
        </div>
    </div>
</template>

<script>
import UserForm from './UserForm.vue';
import UserItem from './UserItem.vue';

export default {
    components: { UserForm, UserItem },
    data() {
        return {
            // Danh sách người dùng
            users: [
                { id: 1, name: 'Nguyen Van A', age: 30 },
                { id: 2, name: 'Tran Thi B', age: 25 },
                { id: 3, name: 'Le Van C', age: 20 }
            ],
            // Người dùng đang chỉnh sửa
            editingUser: null
        };
    },
    methods: {
        // Xử lý sự kiện xoá người dùng
        handleRemove(userId) {
            this.users = this.users.filter(user => user.id !== userId);
        },
        // Xử lý sự kiện thêm người dùng
        handleAdd(newUser) {
            const newId = this.users.length
                ? this.users[this.users.length - 1].id + 1
                : 1;
            
            // this.users.push({ id: newId, ...newUser });      // Thêm người dùng mới vào cuối danh sách

            // Thêm người dùng mới vào đầu danh sách
            const userWithId = { ...newUser, id: newId };
            this.users.unshift(userWithId);
        },
        // Xử lý sự kiện chỉnh sửa người dùng
        handleEdit(user) {
            this.editingUser = user;
        },
        // Cập nhật thông tin người dùng
        handleUpdate(updatedUser) {
            this.users = this.users.map(user =>
                user.id === updatedUser.id ? updatedUser : user
            );
            this.editingUser = null; // Reset sau khi cập nhật
        }
    }
};
</script>

<style>
h3 {
    text-align: center;
    color: #4CAF50;
}
</style>
