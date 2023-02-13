<template>
	<v-text-field label="Label" v-model="Active"></v-text-field>
	<v-text-field label="Label" v-model="Active"></v-text-field>
	<SuperInput label="BP Code" v-model="CardCode" />
	<SuperComboBox label="BP Type" v-model="CardType" :items="_items"/>
	<SuperCheckBox label="Active" v-model="Active" valueChecked="Y" valueUnchecked="N"/>
	<SuperCheckBox label="Active" v-model="Active" valueChecked="Y" valueUnchecked="N"/>
	<SuperButton label="Click Me" @click="onClick"/>

</template>

<script setup>
import SuperInput from '@/control/SuperInput.vue'
import SuperComboBox from '@/control/SuperComboBox.vue'
import SuperCheckBox from '@/control/SuperCheckBox.vue'
import SuperRadioGroup from '@/control/SuperRadioGroup.vue'
import SuperRadio from '@/control/SuperRadio.vue'
import SuperButton from '@/control/SuperButton.vue'

</script>


<script>
export default {
	data() {
		return {
			CardCode: "abc",
			CardType: "S",
			Active: "N",
			_items: [{ value: 'C', desc: 'Customer' }, { value: 'S', desc: 'Vendor' }, { value: 'L', desc: 'Leads' }]
		}
	},
	methods: {
		onClick(event) {
			alert("button clicked")
		}
	}
}
</script>