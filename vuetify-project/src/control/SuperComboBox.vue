<template>
	<v-select v-bind:label="label" v-bind:modelValue="modelValue" v-on:update:modelValue="onUpdateModelValue"
		item-title="desc" item-value="value" v-bind:items="items" />
</template>

<script setup>
//
</script>
<script>
export default {
	props: ["modelValue", "label", "items"],
	/*	data() {
			return {
				items: [{ value: 'C', desc: 'Customer' }, { value: 'S', desc: 'Vendor' }, { value: 'L', desc: 'Leads' }]
			}
		},*/
	methods: {
		onUpdateModelValue(value) {
			this.$emit("update:modelValue", value);
		}
	}
}
</script>  