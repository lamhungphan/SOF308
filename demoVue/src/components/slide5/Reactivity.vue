<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({ count: 0, user: { name: 'John', age: 25 } });
    // state là 1 object reactive

    const increment = () => {
      state.count++;
    };

    return { state, increment }; // Trả về state và increment
  }
}
</script>

<template>
  <div>
    <div>{{ state.count }}</div> <!-- Sử dụng state.count -->
    <button @click="increment">Increment</button>
  </div>
</template>
