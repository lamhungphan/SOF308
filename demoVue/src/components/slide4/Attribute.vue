<template>
    <div>
        <h2 v-bind:class="className" v-bind:style="styleData" v-html="content"></h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: "Yo, it's Hendrick here",
            className: 'text-red',
            styleData: 'font-size: 2.5rem'
        }
    }
}
</script>

<style scoped>
.text-red {
    color: red;
}
</style>