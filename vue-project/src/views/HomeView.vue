
<template>
	<SuperInput v-model="CardCode" />
	<SuperInput v-model="CardCode" />
	<input v-model="CardCode" />
	<input v-model="CardCode" />
</template>

<script setup>
import SuperInput from '../components/control/SuperInput.vue'
</script>


<script>
export default {
	data() {
		return {
			CardCode: "abc"
		}
	}
}
</script>
