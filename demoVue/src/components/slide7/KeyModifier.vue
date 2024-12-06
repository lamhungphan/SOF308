<script setup>
    const warn = () => {
    alert('Bạn vừa ấn Enter!');
    };
</script>

<template>
  <div>
    <input type="text" v-on:keyup.enter="warn" />
  </div>
</template>