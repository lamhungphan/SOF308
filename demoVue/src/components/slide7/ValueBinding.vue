<template>
    <div>
        <!-- `picked` là một chuỗi "a" khi được chọn -->
        <input type="radio" v-model="picked" value="a" />

        <!-- `toggle` là true hoặc false -->
        <input type="checkbox" v-model="toggle" />

        <!-- `selected` là một chuỗi "abc" khi tùy chọn đầu tiên được chọn -->
        <select v-model="selected">
            <option value="abc">ABC</option>
        </select>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>