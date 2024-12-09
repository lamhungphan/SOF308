<template>
    <div>
        <p>{{ user.name }} - {{ user.age }}</p>

        <!-- Nút sửa: Gửi sự kiện 'edit' với thông tin của người dùng -->
        <button @click="editUser">Sửa</button>

        <!-- Nút xóa: Gửi sự kiện 'remove' với ID của người dùng -->
        <button @click="removeUser">Xóa</button>
    </div>
</template>

<script>
export default {
    // Nhận props 'user' từ component cha
    props: {
        user: {
            type: Object, // Đảm bảo user là một đối tượng
            required: true // Bắt buộc phải có
        }
    },
    methods: {
        // Xử lý sự kiện xóa người dùng
        removeUser() {
            // Phát sự kiện 'remove' kèm ID của người dùng lên parent
            this.$emit('remove', this.user.id);
        },
        // Xử lý sự kiện sửa người dùng
        editUser() {
            // Phát sự kiện 'edit' kèm toàn bộ thông tin người dùng lên parent
            this.$emit('edit', this.user);
        }
    }
};
</script>

<style>
button {
    margin: 5px;
    padding: 5px 10px;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:last-child {
    background-color: red;
}

button:last-child:hover {
    background-color: darkred;
}
</style>
