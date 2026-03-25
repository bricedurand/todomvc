<script>
export default {
  emits: ['add-todo'],
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      const text = this.newTodo.trim();
      if (text) {
        this.$emit('add-todo', text);
        this.newTodo = '';
      }
    }
  }
}
</script>

<template>
    <header class="header">
        <h1>todos</h1>
        <input
            class="new-todo"
            placeholder="What needs to be done?"
            autofocus
            v-model="newTodo"
            @keyup.enter="addTodo"
        >
    </header>
</template>

<style scoped></style>