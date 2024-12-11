<template>
    <div>
        <StudentForm :student="studentForm" @submit="handleAdd" @remove="handleDelete" @update="handleUpdate" />
    </div>
</template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import StudentForm from '../components/StudentForm.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()
const studentForm = ref({
  id: '',
  name: '',
  birthDate: null,
  gpa: null,
  gender: false,
  department: '',
  class: '',
})

if (route.params.id) {
  const studentId = route.params.id
  const currentStudent = store.getters.getStudentById(studentId)
  if (currentStudent) {
    studentForm.value = currentStudent
  }
}


function handleAdd() {
  store.dispatch('addStudent', studentForm.value)
  router.push({ name: 'home' })
}

function handleDelete() {
  store.dispatch('deleteStudent', studentForm.value.id)
  router.push({ name: 'home' })
}

function handleUpdate() {
  store.dispatch('updatedFilters', studentForm.value)
  router.push({ name: 'home' })
}
  </script>
  