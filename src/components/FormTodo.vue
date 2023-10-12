<template>
  <form @submit.prevent="addTodo">
    <div class="field is-grouped mb-5">
      <p class="control is-expanded">
        <input v-model="newTodoContent" class="input" type="text" placeholder="Add a todo" />
      </p>
      <p class="control">
        <button :disabled="!newTodoContent" class="button is-info">Add</button>
      </p>
    </div>
  </form>
  <ListTodo :todos="todos" />
</template>

<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import ListTodo from './ListTodo.vue'

const todos = ref([
  { id: 1, content: 'Todo 1', done: true },
  { id: 2, content: 'Todo 2', done: false },
  { id: 3, content: 'Todo 3', done: false }
])

const newTodoContent = ref('')
const addTodo = () => {
  console.log('add todo')
  const newTodo = {
    id: uuidv4(),
    content: newTodoContent.value,
    done: false
  }
  console.log(newTodo)
  //todos.value.unshift(newTodo)
}
</script>
