<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import { useTodoStore } from './stores/TodoStore';

export default {
  components: {
    TodoFooter,
    TodoHeader,
    TodoList
  },
  created() {
    this.todoStore = useTodoStore();
  },
  methods: {
    addTodo(text) {
      this.todoStore.todos.push({ id: Date.now(), text, completed: false });
    },
    updateTodo(editedTodo) {
      this.todoStore.todos.find(t => t.id === editedTodo.id).text = editedTodo.text;
    },
    deleteTodo(deletedTodo) {
      this.todoStore.todos = this.todoStore.todos.filter(t => t.id !== deletedTodo.id);
    },
    clearCompleted() {
      this.todoStore.todos = this.todoStore.todos.filter(t => !t.completed);
    }
  },
  computed: {
    filteredTodos() {
      switch(this.$route.name) {
        case "active":
          return this.todoStore.todos.filter(t => !t.completed);
        case "completed":
          return this.todoStore.todos.filter(t => t.completed);
        default:
          return this.todoStore.todos;
      }
    }
  
  }
}
</script>

<template>
  <TodoHeader @add-todo="addTodo"/>
  <TodoList :todoList="filteredTodos" @update-todo="updateTodo" @delete-todo="deleteTodo"/>
  <TodoFooter :todoList="this.todoStore.todos" @clear-completed="clearCompleted"/>
</template>

<style scoped></style>
