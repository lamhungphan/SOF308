<template>
    <div>
        <p v-html="content"></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: "this content was written by  v-html"
        }
    }
}
</script>

<style></style>