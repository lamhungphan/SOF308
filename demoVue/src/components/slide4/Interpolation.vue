<template>
    <div>
        <p>Show message</p>
        <p>{{ message }}</p>
        <p>{{ number + 5 }}</p>
        <p>{{ sayHi() }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Welcome to VueJS",
            number: 10
        }
    },
    methods: {
        sayHi() {
            return 'A function is here'
        }
    }
}
</script>

<style></style>