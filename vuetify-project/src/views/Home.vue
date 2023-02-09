<template>
	<v-text-field label="Label" v-model="CardCode"></v-text-field>
	<v-text-field label="Label" v-model="CardCode"></v-text-field>
	<MyInput v-model="CardCode"/>
</template>

<script setup>
import MyInput from '@/components/MyInput.vue'
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