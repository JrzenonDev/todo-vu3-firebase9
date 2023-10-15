<template>
  <div
    v-for="todo in todos"
    :key="todo.id"
    :class="{ 'has-background-success-light': todo.done }"
    class="card mb-5"
  >
    <div class="card-content">
      <div class="content">
        <div class="columns is-mobile is-vcentered">
          <div class="column" :class="{ 'has-text-success line-through': todo.done }">
            {{ todo.content }}
          </div>

          <div class="column has-text-right">
            <button
              @click="onToggleDone(todo.id)"
              :class="todo.done ? 'is-success' : 'is-light'"
              class="button"
            >
              &check;
            </button>
            <button @click="onDeleteTodo(todo.id)" class="button is-danger ml-1">&cross;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { todos } = defineProps(['todos'])
const emit = defineEmits(['onDeleteTodo', 'onToggleDone'])

const onDeleteTodo = (id) => {
  emit('onDeleteTodo', id)
}

const onToggleDone = (id) => {
  emit('onToggleDone', id)
}
</script>
