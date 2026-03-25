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
  <TodoHeader/>
  <TodoList :todoList/>
  <TodoFooter :todoList/>
</template>

<style scoped></style>
