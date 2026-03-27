<script>
export default {
  props: {
    todo: Object
  },
  data() {
    return {
      editing: false,
      editText: this.todo.text
    }
  },
  methods: {
    editTodo() {
      this.editing = true;
      this.$nextTick(() => {
        this.$refs.editInput.focus();
      });
    },
    doneEdit() {
      this.editing = false;
      this.editText = this.editText.trim();

      this.$emit('update-todo', { ...this.todo, text: this.editText });
    },
    cancelEdit() {
      this.editing = false;
      this.editText = this.todo.text;
    }
  }
}
</script>

<template>
  <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
  <li :class="[{ completed: todo.completed }, { editing }]">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed">
      <label @dblclick="editTodo">{{ todo.text }}</label>
      <button class="destroy"></button>
    </div>
    <input
      class="edit"
      v-if="editing"
      v-model="editText"
      ref="editInput"
      @blur="doneEdit"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
    >
  </li>
</template>

<style scoped></style>