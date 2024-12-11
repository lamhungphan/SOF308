<template>
    <form @submit.prevent="submitStudent">
      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input v-model="student.name" type="text" class="form-control" />
      </div>
  
      <div class="mb-3">
        <label for="" class="form-label">Date</label>
        <input v-model="student.birthDate" type="date" class="form-control" />
      </div>
  
      <div class="mb-3">
        <label for="" class="form-label">GPA</label>
        <input v-model="student.gpa" type="number" class="form-control" />
      </div>
  
      <div class="mb-3">
        <label for="" class="form-label">Gender</label>
        <div class="form-check form-check-inline">
          <input v-model="student.gender" class="form-check-input" type="radio" name="gender" :value="false" />
          <label class="form-check-label" for="">Female</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="student.gender" class="form-check-input" type="radio" name="gender" :value="true" />
          <label class="form-check-label" for="">Male</label>
        </div>
      </div>
  
      <div class="mb-3">
        <label for="" class="form-label">Department</label>
        <input v-model="student.department" type="text" class="form-control" />
      </div>
  
      <div class="mb-3">
        <label for="" class="form-label">Class</label>
        <input v-model="student.class" type="text" class="form-control" />
      </div>
  
      <button type="submit" class="btn btn-primary">Add</button>
      <button type="button" @click="submitRemoveStudent" class="btn btn-danger">Remove</button>
      <button type="button" @click="submitUpdateStudent" class="btn btn-warning">Update</button>
    </form>
  </template>
  
  <script setup>
  const props = defineProps({
    student: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
        birthDate: null,
        gpa: null,
        gender: false,
        department: '',
        class: '',
      })
    }
  })
  const emit = defineEmits(['submit', 'remove', 'update'])
  
  function submitStudent() {
    emit('submit', props.student);
  }
  
  function submitRemoveStudent() {
    if (props.student.id) {
      emit('remove', props.student.id);
    }
  }
  
  function submitUpdateStudent() {
    if (props.student.id) {
      emit('update', props.student);
    }
  }
  </script>
  