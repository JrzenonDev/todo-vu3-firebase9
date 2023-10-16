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
import ListTodo from './ListTodo.vue'
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../hooks/firebase'

const todosCollectionRef = collection(db, 'todos')

const todos = ref([])

onMounted(() => {
  onSnapshot(todosCollectionRef, (querySnapshot) => {
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
  addDoc(todosCollectionRef, {
    content: newTodoContent.value,
    done: false
  })
  newTodoContent.value = ''
}

const handleDeleteTodo = (id) => {
  deleteDoc(doc(todosCollectionRef, id))
}

const handleToggleDone = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id)

  updateDoc(doc(todosCollectionRef, id), {
    done: !todos.value[index].done
  })
}
</script>
