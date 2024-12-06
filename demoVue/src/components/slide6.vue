<template>
  <div>
    <Home></Home>
    <h1>1. Conditional Redering</h1>
    <h3>v-if</h3>
    <vIf></vIf>

    <h3>v-else-if</h3>
    <vElseIf></vElseIf>

    <h3>v-else</h3>
    <vElse></vElse>

    <h3>v-show</h3>
    <vShow></vShow>

    <h1>2. List Redering</h1>
    <h3>v-for</h3>
    <h4>Array</h4>
    <vForArray></vForArray>

    <h4>Object</h4>
    <vForObject></vForObject>

    <h4>Integer</h4>
    <vForLoop></vForLoop>

  </div>
</template>

<script setup>
import Home from "./Home.vue"
import vIf from "./slide6/v-if.vue";
import vElseIf from "./slide6/v-else-if.vue";
import vElse from "./slide6/v-else.vue";
import vShow from "./slide6/v-show.vue";
import vForArray from "./slide6/v-for-array.vue";
import vForObject from "./slide6/v-for-object.vue";
import vForLoop from "./slide6/v-for-loop.vue";
</script>

<style></style>