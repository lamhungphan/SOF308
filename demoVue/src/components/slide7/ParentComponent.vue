<template>
    <div>
        <ChildComponent @my-event="handleEvent" />
    </div>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const handleEvent = (data) => {
    alert(data);
}
</script>

<style></style>