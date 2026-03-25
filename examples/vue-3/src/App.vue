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
}
</script>

<template>
  <TodoHeader @add-todo="(text) => todoList.push({ id: Date.now(), text })"/>
  <TodoList :todoList/>
  <TodoFooter :todoList/>
</template>

<style scoped></style>
