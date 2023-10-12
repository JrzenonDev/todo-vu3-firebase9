<template>
  <form @submit.prevent="addTodo">
    <div class="field is-grouped mb-5">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Add a todo" />
      </p>
      <p class="control">
        <a class="button is-info"> Add </a>
      </p>
    </div>
  </form>
</template>

<script setup></script>
