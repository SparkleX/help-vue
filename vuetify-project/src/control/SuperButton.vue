<template>
	<v-btn :color="color" v-on:click="onClick">{{label}}</v-btn>
</template>
  

<script>
export default {
	props: ["label","color"],
    emits: ['click'],
    methods: {
		onClick(event) {
            this.$emit("click");
		}
	}
}
</script>  