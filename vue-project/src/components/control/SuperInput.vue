<template>
	<input v-bind:value="data" v-on:input="onChange" />
</template>
<style scoped>
input {
	font-weight: 500;
	font-size: 1rem;
	width: 100%;
	height: 2rem;
	top: 0px;
}
</style>

<script>
export default {
	props: ["data"],
	methods: {
		onChange(event) {
			this.$emit("update:data", event.target.value);
		}
	},
}
</script>