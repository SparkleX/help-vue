<template>
	<v-text-field :label="label" :modelValue="modelValue" @input="onChange" hide-details></v-text-field>
</template>
  
<script setup>
</script>
<script>
export default {
	props: ["modelValue", "label"],
	methods: {
		onChange(event) {
			this.$emit("update:modelValue", event.target.value);
		}
	}
}
</script>  