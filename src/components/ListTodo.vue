<template>
  <div v-for="todo in todos" :key="todo.id" class="card mb-5">
    <div class="card-content">
      <div class="content">
        <div class="columns is-mobile is-vcentered">
          <div class="column">{{ todo.content }}</div>

          <div class="column has-text-right">
            <button class="button is-light">&check;</button>
            <button class="button is-danger ml-1">&cross;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: 1, content: 'Todo 1', done: true },
  { id: 2, content: 'Todo 2', done: false },
  { id: 3, content: 'Todo 3', done: false }
])
</script>
