<script>
import TodoFooter from '../components/TodoFooter.vue';
import TodoHeader from '../components/TodoHeader.vue';
import TodoList from '../components/TodoList.vue';
import { useTodoStore } from '../stores/TodoStore';

export default {
  components: {
    TodoFooter,
    TodoHeader,
    TodoList
  },
  created() {
    this.todoStore = useTodoStore();
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
  <TodoHeader @add-todo="todoStore.addTodo"/>
  <TodoList :todoList="filteredTodos" @update-todo="todoStore.updateTodo" @delete-todo="todoStore.deleteTodo" @toggle-all="todoStore.toggleAll"/>
  <TodoFooter :todoList="todoStore.todos" @clear-completed="todoStore.clearCompleted"/>
</template>

<style scoped></style>
