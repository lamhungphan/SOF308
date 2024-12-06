<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  setup() {
    const post = {
      title: 'Học Vue.js với Props',
      content: 'Props giúp truyền dữ liệu từ cha xuống con.',
    };

    const tags = ['Vue.js', 'Props', 'One-way Binding'];

    return { post, tags };
  }
};
</script>

<template>
  <div>
    <h1>Component Cha</h1>
    <ChildComponent :title="post.title" :content="post.content" :tags="tags" />
  </div>
</template>
