<template>
    <div>
        <p>{{ palindrome }}</p>
        <button class="btn btn-info" @click="showInfo">Đảo</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            palindrome: "qua lại khách chờ sông lặn sóng"
        }
    },
    methods: {
        showInfo: function () {
           this.palindrome = this.palindrome.split(' ').reverse().join(' ');
        }
    }
}
</script>

<style>

</style>