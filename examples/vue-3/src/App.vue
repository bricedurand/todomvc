<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoFooter,
    TodoHeader,
    TodoList
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    updateTodo(editedTodo) {
      this.todoList.find(t => t.id === editedTodo.id).text = editedTodo.text;
    },
  }
}
</script>

<template>
  <TodoHeader @add-todo="(text) => todoList.push({ id: Date.now(), text, completed: false })"/>
  <TodoList :todoList @update-todo="updateTodo"/>
  <TodoFooter :todoList/>
</template>

<style scoped></style>
