<template>
    <div>
        <h3>Danh sách người dùng</h3>
        <div v-for="user in users" :key="user.id">
            <UserItem :user="user" @remove="handleRemove" />
        </div>
    </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
    components: { UserItem },
    data() {
        return {
            users: [
                { id: 1, name: 'Nguyen Van A', age: 30 },
                { id: 2, name: 'Tran Thi B', age: 25 },
                { id: 3, name: 'Le Van C', age: 20 }
            ]
        }
    },
    methods: {
        handleRemove(userId) {
            this.users = this.users.filter(user => user.id !== userId);
        }
    }
}
</script>

<style>
h3 {
    text-align: center;
    color: #4CAF50;
}
</style>