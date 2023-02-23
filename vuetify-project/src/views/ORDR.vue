<template>
	<v-row justify="end" no-gutters>
		<SuperButton label="Edit" @click="onClick" />
	</v-row>
	<v-card>
		<v-tabs v-model="data.tab" color="primary">
			<v-tab value="one">Item One</v-tab>
			<v-tab value="two">Item Two</v-tab>
			<v-tab value="three">Item Three</v-tab>
		</v-tabs>

		<v-card-text>
			<v-window v-model="data.tab">
				<v-window-item value="one">
					<v-row>
						<v-col cols="12" md="6">
							<v-text-field label="Label" v-model="data.Active"></v-text-field>
							<v-text-field label="Label" v-model="data.Active"></v-text-field>
							<SuperInput label="BP Code" v-model="data.CardCode" />
							<SuperComboBox label="BP Type" v-model="data.CardType" :items="ui.codes.CardType" />
							<SuperCheckBox label="Active" v-model="data.Active" valueChecked="Y" valueUnchecked="N" />
							<SuperCheckBox label="Active" v-model="data.Active" valueChecked="Y" valueUnchecked="N" />
							<SuperButton label="Click Me" @click="onClick" />
							<SuperButton label="Click Me" @click="onClick" />

						</v-col>
						<v-col cols="12" md="6">
							<v-text-field label="Label" v-model="data.Active"></v-text-field>
							<v-text-field label="Label" v-model="data.Active"></v-text-field>
							<SuperInput label="BP Code" v-model="data.CardCode" />
							<SuperComboBox label="BP Type" v-model="data.CardType" :items="ui.codes.CardType" />
							<SuperCheckBox label="Active" v-model="data.Active" valueChecked="Y" valueUnchecked="N" />
							<SuperCheckBox label="Active" v-model="data.Active" valueChecked="Y" valueUnchecked="N" />
							<SuperButton label="Save" @click="onClick" />
						</v-col>
					</v-row>
				</v-window-item>

				<v-window-item value="two">
					<SuperRadioGroup v-model="data.radio">
						<SuperRadio label="中文1" value="1" />
						<SuperRadio label="Radio 2" value="2" />
						<SuperRadio label="Radio 3" value="3" />
					</SuperRadioGroup>
					<v-radio-group inline v-model="data.radio">
						<SuperRadio label="中文1" value="1"></SuperRadio>
						<v-radio label="Radio 2" value="2"></v-radio>
						<v-radio label="Radio 3" value="3"></v-radio>
					</v-radio-group>
					<v-text-field label="Label" v-model="data.radio"></v-text-field>
				</v-window-item>

				<v-window-item value="three">
					<SuperDataTable :items="data.DOC1" :headers="ui.Table1">

					</SuperDataTable>
				</v-window-item>
			</v-window>
		</v-card-text>
	</v-card>
	<v-footer class="bg-grey-lighten-1">
		<SuperButton color="primary" label="Click Me" @click="onClick" />
	</v-footer>
</template>

<script setup>
import SuperInput from '@/control/SuperInput.vue'
import SuperComboBox from '@/control/SuperComboBox.vue'
import SuperCheckBox from '@/control/SuperCheckBox.vue'
import SuperRadioGroup from '@/control/SuperRadioGroup.vue'
import SuperRadio from '@/control/SuperRadio.vue'
import SuperButton from '@/control/SuperButton.vue'
import SuperDataTable from '@/control/SuperDataTable.vue'
</script>


<script>
export default {
	data() {
		return {
			ui: {
				Table1: [
					{ title: '#', align: 'start', key: 'LineNum', sortable: false },
					{ title: 'Item No.', align: 'start', key: 'ItemCode', sortable: false },
					{ title: 'Qty', align: 'end', key: 'Qty', sortable: false },
					{ title: 'Actions', key: 'actions', align: 'end', sortable: false },
				],
				codes:{
					CardType: [{ value: 'C', desc: 'Customer' }, { value: 'S', desc: 'Vendor' }, { value: 'L', desc: 'Leads' }],
				}
			},
			data: {
				radio: "1",
				tab: "three",
				CardCode: "abc",
				CardType: "S",
				Active: "N",
				DOC1: [
					{
						ItemCode: 'Frozen Yogurt',
						LineNum: 1,
						Qty: 6.0
					},
					{
						ItemCode: 'Jelly bean',
						LineNum: 2,
						Qty: 0.0
					},
					{
						ItemCode: 'KitKat',
						LineNum: 3,
						Qty: 26.0
					},
					{
						ItemCode: 'Eclair',
						LineNum: 4,
						Qty: 16.0
					}
				]

			}
		}
	},
	methods: {
		onClick(event) {
			const str = JSON.stringify(this.$data.data);
			console.debug(str);
			alert(str);
		}
	}
}

</script>