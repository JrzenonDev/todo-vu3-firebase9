<template>
  <div class="badass-todo">
    <div class="title has-text-centered">
      <h1>Badass Todo</h1>
    </div>

    <div class="field is-grouped mb-5">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Add a todo" />
      </p>
      <p class="control">
        <a class="button is-info"> Add </a>
      </p>
    </div>

    <div v-for="i in 3" class="card mb-5">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column">Todo 1</div>

            <div class="column has-text-right">
              <button class="button is-light">&check;</button>
              <button class="button is-danger ml-1">&cross;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import 'bulma/css/bulma.css';

.badass-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}
</style>
