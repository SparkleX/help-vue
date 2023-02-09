<template>
	<input type="text" v-bind:value="modelValue" v-on:input="onChange" />
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
	props: ["modelValue"],
	methods: {
		onChange(event) {
			this.$emit("update:modelValue", event.target.value);
		}
	},
}
</script>