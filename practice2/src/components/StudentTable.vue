<template>
    <div class="table-responsive-sm">
        <table class="table table-secondary">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Birth day</th>
                    <th scope="col">GPA</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Department</th>
                    <th scope="col">Class</th>
                </tr>
            </thead>
            <tbody>
                <StudentRow v-for="(student) in students" :key="student.id" :student="student" />
            </tbody>
        </table>
    </div>
</template>

<script setup>
import StudentRow from './StudentRow.vue';

const props = defineProps({
  students: {
    type: Array,
  }
})

</script>