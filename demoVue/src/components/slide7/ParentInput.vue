<template>
    <div>
        <CustomInput v-model="inputValue" />
        <p>Input Value: {{ inputValue }}</p>
    </div>
</template>

<script>
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';
export default {
    components: { CustomInput },
    setup() {
        const inputValue = ref('');
        return {
            inputValue
        };
    },
};
</script>