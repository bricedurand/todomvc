<script>
export default {
  props: {
    text: String
  }
}
</script>

<template>
    <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
    <li class="completed">
        <div class="view">
        <input class="toggle" type="checkbox" checked>
        <label>{{ text }}</label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="{{ text }}"">
    </li>
</template>