<template>
    <div>
        <div v-if="submited">
            <p>Name {{ formData.name }}</p>
            <p>Email {{ formData.email }}</p>
            <p>Address {{ formData.address }}</p>
            <button @click="reset">reset</button>
            <button @click="backForm">Back</button>
    
        </div>
        <div v-else>
            <FormStep v-if="step === 1" :step="step" :form-data="formData" @next="nextStep" />
            <FormStep v-if="step === 2" :step="step" :form-data="formData" @next="nextStep" @back="backStep" />
            <FormStep v-if="step === 3" :step="step" :form-data="formData" @back="backStep" @submit="submitForm" />
        </div>
    </div>
</template>

<script setup>
import FormStep from '@/components/FormStep.vue';
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  address: '',
})
const submited = ref(false);
const step = ref(1)

function nextStep() {
  if (step.value < 3) step.value++;
}
function backStep() {
  if (step.value > 1) step.value--
}
function submitForm() {
  step.value = 1;
  submited.value = true;

}
function backForm() {
  submited.value = false;
  step.value = 1
}
function reset() {
  formData.value = {};
  submited.value = false;
}
</script>