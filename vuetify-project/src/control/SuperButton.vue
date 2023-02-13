<template>
	<v-btn color="primary" v-on:click="onClick">{{label}}</v-btn>
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