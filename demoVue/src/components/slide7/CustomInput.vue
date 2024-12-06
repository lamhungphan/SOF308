<template>
    <div>
        <input :value="modelValue" @input="updateValue" />
    </div>
</template>

<script>
    export default {
        props: ['modelValue'],
        methods: {
            updateValue(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }          
    };
</script>