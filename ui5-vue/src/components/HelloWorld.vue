

<template>
	<super-input v-model="a"></super-input>
	<super-input v-model="a"></super-input>
	<super-button label="Test" @click="onClick"></super-button>
</template>

<script setup>
import SuperInput from '../controls/SuperInput.vue'
import SuperButton from '../controls/SuperButton.vue'
//alert(store);
</script>

<script>
export default {
	data() {
		return {
			a:"100"
		}
	},
	methods: {
		onClick(event) {
			alert("1");
		},
		update (event) {
			this.a = event.target.value;
		}
	}
}
</script>