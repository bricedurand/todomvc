<script>
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  props: {
    todoList: Array
  }
}
</script>

<template>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main" v-if="todoList.length > 0">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <TodoItem v-for="todo in todoList" :key="todo.id" :text="todo.text"/>
        </ul>
    </section>
</template>