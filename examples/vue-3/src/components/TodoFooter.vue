<script>
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
            <a class="selected" href="#/">All</a>
        </li>
        <li>
            <a href="#/active">Active</a>
        </li>
        <li>
            <a href="#/completed">Completed</a>
        </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Clear completed</button>
    </footer>
</template>