<template>
    <div>
        <div v-if="step == 1" class="mb-3">
            <label class="form-label">Name</label>
            <input v-model="formData.name" type="text" class="form-control" />
        </div>
        <div v-if="step == 2" class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="formData.email" type="text" class="form-control" />
        </div>
        <div v-if="step == 3" class="mb-3">
            <label class="form-label">Address</label>
            <input v-model="formData.address" type="text" class="form-control" />
        </div>
        <div>
            <button v-if="step > 1" type="button" @click="emit('back')">Back</button>
            <button v-if="step < 3" type="button" @click="emit('next')">Next</button>
            <button v-if="step === 3" type="button" @click="emit('submit')">Submit</button>
        </div>
    </div>
</template>

<script setup>

defineProps({
  step: Number,
  formData: Object,
})
const emit = defineEmits(['next', 'back', 'submit'])
</script>