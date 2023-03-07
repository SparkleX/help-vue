<template>
	<ui5-input :value="modelValue" @input="onChange"  style="width: 100%"></ui5-input>
</template>

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