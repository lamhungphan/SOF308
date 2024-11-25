<template>
    <div>
        <h1>Show message</h1>
        <h2>{{ message }}</h2>
        <h2>{{ number + 5 }}</h2>
        <h2>{{ sayHi() }}</h2>
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