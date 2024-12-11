<template>
  <tr>
    <td>{{ student.name }}</td>
    <td>{{ student.birthDate }}</td>
    <td>{{ student.gpa }}</td>
    <td>{{ student.gender }}</td>
    <td>{{ student.department }}</td>
    <td>{{ student.class }}</td>
    <td><button type="button" @click="submitDelete">Delete</button>||<button type="button"
        @click="submitEdit">Edit</button></td>
  </tr>
</template>

<script setup>
import { popScopeId } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter()

const store = useStore();
const props = defineProps({
  student: {
    type: Object
  }
})
const emit = defineEmits(['delete', 'edit'])
function submitDelete() {
  store.dispatch('deleteStudent', props.student.id)
}
function submitEdit() {
  router.push({ name: 'edit', params: { id: props.student.id } })
}
</script>