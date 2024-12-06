<template>
  <div>
    <div :class="['class1', dynamicClass]">
      Đây là một ví dụ với Array Syntax.
    </div>
    <button @click="toggleClass">Toggle Dynamic Class</button>
  </div>
</template>

<script>
// class1 là class cố định
// dynamicClass là class động, sẽ thay đổi khi nhấn nút, chuyển giữa class2 và class3
export default {
  data() {
    return {
      dynamicClass: 'class2'
    };
  },
  methods: {
    toggleClass() {
      this.dynamicClass = this.dynamicClass === 'class2' ? 'class3' : 'class2';
    }
  }
};
</script>

<style scoped>
.class1 {
  color: blue;
}

.class2 {
  font-size: 20px;
}

.class3 {
  font-weight: bold;
}
</style>