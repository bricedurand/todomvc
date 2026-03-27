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
    deleteTodo(deletedTodo) {
      this.todoList = this.todoList.filter(t => t.id !== deletedTodo.id);
    }
  }
}
</script>

<template>
  <TodoHeader @add-todo="(text) => todoList.push({ id: Date.now(), text, completed: false })"/>
  <TodoList :todoList @update-todo="updateTodo" @delete-todo="deleteTodo"/>
  <TodoFooter :todoList/>
</template>

<style scoped></style>
