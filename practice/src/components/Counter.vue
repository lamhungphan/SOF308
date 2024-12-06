<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">AC</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    }
    const decrement = () => {
      count.value--;
    }
    const reset = () => {
      count.value = 0;
    }

    return {
      count,
      increment,
      decrement,
      reset
    };
  }
}
</script>

<style></style>