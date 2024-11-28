<template>
    <div>
        <p @click="showInfo">Click to button to see result</p>
    </div>
</template>

<script>
export default {
    methods: {
        showInfo: function () {
            alert('You just click to button')
        }
    }
}
</script>

<style>

</style>