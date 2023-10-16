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
  <ListTodo :todos="todos" @onDeleteTodo="handleDeleteTodo" @onToggleDone="handleToggleDone" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import ListTodo from './ListTodo.vue'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../hooks/firebase'

const todos = ref([])

onMounted(() => {
  // const querySnapshot = await getDocs(collection(db, 'todos'))

  // let fbTodos = []

  // querySnapshot.forEach((doc) => {
  //   const todo = {
  //     id: doc.id,
  //     content: doc.data().content,
  //     done: doc.data().done
  //   }
  //   fbTodos.push(todo)
  // })
  // todos.value = fbTodos

  onSnapshot(collection(db, 'todos'), (querySnapshot) => {
    const fbTodos = []
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done
      }
      fbTodos.push(todo)
    })
    todos.value = fbTodos
  })
})

const newTodoContent = ref('')

const addTodo = () => {
  const newTodo = {
    id: uuidv4(),
    content: newTodoContent.value,
    done: false
  }
  todos.value.unshift(newTodo)
  newTodoContent.value = ''
}

const handleDeleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

const handleToggleDone = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id)
  todos.value[index].done = !todos.value[index].done
}
</script>
