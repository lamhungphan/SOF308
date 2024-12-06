<template>
  <div>
    <div :style="[baseStyle, overrideStyle]">
      Đây là một ví dụ với Array Syntax cho Style Binding.
    </div>
    <button @click="toggleOverride">Toggle Override Style</button>
  </div>
</template>

<script>
// baseStyle là đối tượng chứa các thuộc tính CSS mặc định (color: blue, font-size: 16px).
// overrideStyle là đối tượng chứa các thuộc tính CSS có thể thay đổi động, trong ví dụ này là màu sắc.
// Khi nhấn nút, màu sắc sẽ thay đổi giữa green và red.
export default {
  data() {
    return {
      baseStyle: {
        color: 'blue',
        fontSize: '16px'
      },
      overrideStyle: {
        color: 'green'
      }
    };
  },
  methods: {
    toggleOverride() {
      this.overrideStyle.color = this.overrideStyle.color === 'green' ? 'red' : 'green';
    }
  }
};
</script>
