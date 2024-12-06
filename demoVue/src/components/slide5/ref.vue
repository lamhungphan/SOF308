<script>
import { ref } from 'vue';

export default {
    setup() {
        const count = ref(0); // count là 1 object, giá trị thực được lưu trữ trong thuộc tính .value
        const increment = () => {
            count.value++;
        }
        return { count, increment }
    }
};
</script>

<template>
    <div>
        <div>{{ count }}</div>
        <button @click="increment">Increment</button>
    </div>
</template>