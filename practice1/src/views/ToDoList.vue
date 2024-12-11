<template>
    <div>
        <form @submit.prevent="addToDo">
            <input type="text" v-model="newToDo">
            <button type="submit">add</button>
        </form>
        <ToDoItem v-for="(todo,index) in todos" :key="index" :todo="todo" @delete="deleteToDo(index)"
            @toggle="toggleCompleted(index)" />
    </div>
</template>

<script setup>
import ToDoItem from '@/components/ToDoItem.vue';
import { ref } from 'vue';

const newToDo = ref('');
const todos = ref([]);

function addToDo() {
  todos.value.push({ text: newToDo.value, completed: false });
  newToDo.value = '';
}
function deleteToDo(index) {
  todos.value.splice(index, 1);
}

function toggleCompleted(index) {
  todos.value[index].completed = !todos.value[index].completed;
}
</script>