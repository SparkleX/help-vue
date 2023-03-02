

<template>
	<input v-model="a"/>
	<input v-model="a"/>
	<ui5-input :value="a" @input="onClick"/>
	<ui5-input :value="a" @input="this.a = $event.target.value"/>
	<ui5-button >Hello world!</ui5-button>
</template>
<script setup>
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Input.js";
</script>
<script>
export default {
	data() {
		return {
			a: 1
		}
	},
	methods: {
		onClick(event) {
			this.a = event.target.value;
		}
	}
}

</script>