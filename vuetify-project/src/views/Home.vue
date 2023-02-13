<template>


	<v-card>
		<v-tabs v-model="tab" color="primary">
			<v-tab value="one">Item One</v-tab>
			<v-tab value="two">Item Two</v-tab>
			<v-tab value="three">Item Three</v-tab>
		</v-tabs>

		<v-card-text>
			<v-window v-model="tab">
				<v-window-item value="one">
							<v-row>
								<v-col cols="12" md="6">
									<v-text-field label="Label" v-model="Active"></v-text-field>
									<v-text-field label="Label" v-model="Active"></v-text-field>
									<SuperInput label="BP Code" v-model="CardCode" />
									<SuperComboBox label="BP Type" v-model="CardType" :items="_items" />
									<SuperCheckBox label="Active" v-model="Active" valueChecked="Y"
										valueUnchecked="N" />
									<SuperCheckBox label="Active" v-model="Active" valueChecked="Y"
										valueUnchecked="N" />
									<SuperButton label="Click Me" @click="onClick" />
								</v-col>
								<v-col cols="12" md="6">
									<v-text-field label="Label" v-model="Active"></v-text-field>
									<v-text-field label="Label" v-model="Active"></v-text-field>
									<SuperInput label="BP Code" v-model="CardCode" />
									<SuperComboBox label="BP Type" v-model="CardType" :items="_items" />
									<SuperCheckBox label="Active" v-model="Active" valueChecked="Y"
										valueUnchecked="N" />
									<SuperCheckBox label="Active" v-model="Active" valueChecked="Y"
										valueUnchecked="N" />
									<SuperButton label="Click Me" @click="onClick" />
								</v-col>
							</v-row>
				</v-window-item>

				<v-window-item value="two">
					<SuperRadioGroup v-model="radio">
						<SuperRadio label="中文1" value="1"/>
						<SuperRadio label="Radio 2" value="2"/>
						<SuperRadio label="Radio 3" value="3"/>
					  </SuperRadioGroup>
					  <v-radio-group inline  v-model="radio">
						<SuperRadio label="中文1" value="1"></SuperRadio>
						<v-radio label="Radio 2" value="2"></v-radio>
						<v-radio label="Radio 3" value="3"></v-radio>
					  </v-radio-group>
					  <v-text-field label="Label" v-model="radio"></v-text-field>
				</v-window-item>

				<v-window-item value="three">
					Three
				</v-window-item>
			</v-window>
		</v-card-text>
	</v-card>


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
			radio:"1",
			tab: "two",
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