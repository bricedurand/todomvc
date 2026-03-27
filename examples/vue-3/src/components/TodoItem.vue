<script>
export default {
  props: {
    todo: Object
  }
}
</script>

<template>
    <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
    <li class="{{ todo.completed ? 'completed' : '' }}">
        <div class="view">
        <input class="toggle" type="checkbox" v-model="todo.completed">
        <label>{{ todo.text }}</label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="{{ todo.text }}">
    </li>
</template>