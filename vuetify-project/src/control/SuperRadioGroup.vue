<template>
	<v-radio-group inline :modelValue="modelValue" v-on:update:modelValue="onUpdateModelValue">
		<slot></slot>
	</v-radio-group>
</template>
  

<script>
export default {
	props: ["modelValue"],
	methods: {
		onUpdateModelValue(value) {
			this.$emit("update:modelValue", value);
		}
	}
}
</script>  