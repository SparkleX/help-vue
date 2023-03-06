<template>
	<ui5-button @click="onClick">{{ label }}</ui5-button>
</template>
  

<script>
export default {
	props: ["label"],
	emits: ['click'],
	methods: {
		onClick(event) {
			this.$emit("click");
		}
	}
}
</script>  