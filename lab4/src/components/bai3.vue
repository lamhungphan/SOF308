<template>
    <h1>{{greeting}}</h1>

    <button v-bind:title="buttonTitle" @click="changeGreeting">
        Click de thay doi
    </button>
</template>

<script>
export default {
    data(){
        return {
            greeting: "Xin chao ban",
            buttonTitle: "Nhan de thay doi loi chao"
        };
    },
    methods: {
        changeGreeting(){
            this.greeting = "Hello World!";
            this.buttonTitle = "Loi chao da duoc cap nhat";
        }
    }
}
</script>