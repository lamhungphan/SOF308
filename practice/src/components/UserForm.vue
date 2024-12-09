<template>
    <div>
        <form @submit.prevent="handleSave">
            <input
                type="text"
                placeholder="Nhập tên"
                v-model="editableUser.name"
                required
            />
            <input
                type="number"
                placeholder="Nhập tuổi"
                v-model="editableUser.age"
                required
            />
            <button type="submit">{{ isEditing ? "Cập nhật" : "Thêm" }}</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        userToEdit: {
            type: Object,
            default: null, // Nếu không chỉnh sửa, form sẽ trống
        }
    },
    data() {
        return {
            // Dữ liệu người dùng đang chỉnh sửa
            editableUser: {
                name: '',
                age: null
            }
        };
    },
    computed: {
        isEditing() {
            // Kiểm tra xem đang chỉnh sửa hay thêm mới
            return this.userToEdit !== null;
        }
    },
    watch: {
        // Mỗi khi 'userToEdit' thay đổi, cập nhật dữ liệu vào form
        userToEdit: {
            immediate: true,
            handler(newValue) {
                this.editableUser = newValue
                    ? { ...newValue }
                    : { name: '', age: null };
            }
        }
    },
    methods: {
        handleSave() {
            if (this.isEditing) {
                // Gửi sự kiện update nếu đang chỉnh sửa
                this.$emit('update', this.editableUser);
            } else {
                // Gửi sự kiện add nếu thêm mới
                this.$emit('add', { ...this.editableUser });
            }
            // Reset form sau khi lưu
            this.editableUser = { name: '', age: null };
        }
    }
};
</script>

<style>
form {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
}

input {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>
