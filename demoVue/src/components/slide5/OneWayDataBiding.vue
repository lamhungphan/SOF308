<template>
  <div>
    <p>
        Name: <input type="text" :value="name"> <!-- v-bind:value= -->
    </p>
    <a :href="url" class="btn">click me</a>
  </div>
</template>

<script>
export default {
 data(){
    return {
        name: 'Vue',
        url: 'https://www.google.com'
    }
 }
}
</script>

<style>

</style>