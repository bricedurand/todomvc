<script>
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todoList: [
        { id: 1, text: 'Buy groceries', completed: false },
        { id: 2, text: 'Clean the house', completed: true },
        { id: 3, text: 'Finish homework', completed: false }
      ]
    }
  }
}
</script>

<template>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <TodoItem v-for="todo in todoList" :key="todo.id" :text="todo.text"/>
        </ul>
    </section>
</template>