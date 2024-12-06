<template>
    <div>
        <h3>Quản lý thông tin người dùng</h3>

        <div v-if="!isEditing">
            <p><strong>Ten:  </strong>{{ user.name }}</p>
            <p><strong>Tuoi:  </strong>{{ user.age }}</p>
            <p><strong>Thanh pho:  </strong>{{ user.city }}</p>
            <button @click="editUser">Edit</button>
        </div>

        <div v-else>
            <p>
                <strong>Ten</strong>
                <input type="text" v-model="user.name">
            </p>
            <p>
                <strong>Tuoi</strong>
                <input type="number" v-model="user.age">
            </p>
            <p>
                <strong>Thanh pho</strong>
                <input type="text" v-model="user.city">
            </p>
            <button @click="updateUser">Update</button>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { ref } from 'vue';

export default {
    setup() {
        const user = reactive({
            name: 'Phan Lam Hung',
            age: 25,
            city: 'HCMC'
        });

        const isEditing = ref(false)

        const editUser = () => {
            isEditing.value = true
        };

        const updateUser = () => {
            isEditing.value = false
        };
        return {
            user,
            isEditing,
            editUser,
            updateUser
        }

    }
}
</script>

<style>
h3 {
    text-align: center;
    color: #4CAF50;
}

button {
    margin: 10px 0;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

input {
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>