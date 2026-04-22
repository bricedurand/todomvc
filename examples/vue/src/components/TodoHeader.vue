<script>
export default {
	emits: ['add-todo'],
	data() {
		return {
			newTodo: '',
		};
	},
	methods: {
		addTodo() {
			const title = this.newTodo.trim();
			if (title) {
				this.$emit('add-todo', title);
				this.newTodo = '';
			}
		},
	},
};
</script>

<template>
	<header class="header">
		<h1>todos</h1>
		<input
			v-model="newTodo"
			type="text"
			class="new-todo"
			autofocus
			placeholder="What needs to be done?"
			@keyup.enter="addTodo"
		/>
	</header>
</template>
