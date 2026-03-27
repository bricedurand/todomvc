<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        todoList: Array
    },
    computed: {
        remainingCount() {
            return this.todoList.filter(t => !t.completed).length;
        },
        remainingText() {
            return this.remainingCount === 1 ? 'item left' : 'items left';
        }
    }
}
</script>

<template>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer" v-if="todoList.length > 0">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>{{ remainingCount }}</strong> {{ remainingText }}</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
        <li>
            <RouterLink class="selected" to="#/">All</RouterLink>
        </li>
        <li>
            <RouterLink to="#/active">Active</RouterLink>
        </li>
        <li>
            <RouterLink to="#/completed">Completed</RouterLink>
        </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button v-if="todoList.some(t => t.completed)" class="clear-completed" @click="$emit('clear-completed')">Clear completed</button>
    </footer>
</template>