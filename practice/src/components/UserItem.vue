<template>
    <div>
        <p>{{ user.name }} - {{ user.age }}</p>
        <button @click="removeUser">Delete</button>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeUser() {
            this.$emit('remove', this.user.id);
        }
    }
}
</script>

<style>
button {
    margin: 5px;
    padding: 5px 10px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: darkred;
}
</style>