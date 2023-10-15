<script setup>
import FormTodo from './components/FormTodo.vue'
import ListTodo from './components/ListTodo.vue'
</script>

<template>
  <div class="badass-todo">
    <div class="title has-text-centered">
      <h1>Badass Todo</h1>
    </div>

    <FormTodo />

    <ListTodo />
  </div>
</template>

<style>
@import 'bulma/css/bulma.css';

.badass-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}

.line-through {
  text-decoration: line-through;
}
</style>
