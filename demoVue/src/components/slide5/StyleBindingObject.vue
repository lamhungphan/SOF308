<template>
  <div>
    <div :style="{ color: textColor, fontSize: fontSize + 'px' }">
      Đây là một ví dụ với Style Binding và Object Syntax.
    </div>
    <button @click="changeStyle">Change Style</button>
  </div>
</template>

<script>
// textColor và fontSize là dữ liệu trong component
// Khi nhấn nút, các thuộc tính CSS sẽ thay đổi, chuyển giữa red và green cho màu sắc, và 16px và 20px cho kích thước chữ
export default {
  data() {
    return {
      textColor: 'red',
      fontSize: 16
    };
  },
  methods: {
    changeStyle() {
      this.textColor = this.textColor === 'red' ? 'green' : 'red';
      this.fontSize = this.fontSize === 16 ? 20 : 16;
    }
  }
};
</script>