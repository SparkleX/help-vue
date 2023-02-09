<template>
	<v-text-field label="Label" v-bind:modelValue="modelValue" v-on:input="onChange" ></v-text-field>
</template>
  
<script setup>
//
</script>
<script>
export default {
	props: ["modelValue"],
	methods: {
		onChange(event) {
			this.$emit("update:modelValue", event.target.value);
		}
	}
}
</script>  