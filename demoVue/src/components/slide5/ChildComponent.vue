<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: 'Nội dung mặc định'
    },
    tags: {
      type: Array,
      default: () => [] // Giá trị mặc định cho mảng
    }
  }
};
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <h3>Tags:</h3>
    <ul>
      <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
    </ul>
  </div>
</template>
