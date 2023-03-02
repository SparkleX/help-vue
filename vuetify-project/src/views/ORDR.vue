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
							{{ $t('message.hello', ['hello']) }}
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
					<SuperDataTable v-model:items="data.DOC1" :headers="ui.Table1" @delete-row="tableDeleteRow">
						<template v-slot:detail>
							<v-dialog v-model="dialog" max-width="500px">
								<template v-slot:activator="{ props }">
									<v-btn color="primary" v-bind="props">
										+ New
									</v-btn>
								</template>
								<v-card>
									<v-card-title>
										<span class="text-h5">Title</span>
									</v-card-title>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="primary" variant="text" @click="tableDetailClose">
											OK
										</v-btn>
										<v-btn variant="text" @click="tableDetailClose">
											Cancel
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-dialog>
						</template>
						<template v-slot:columns>
							<th class="text-left">#</th>
							<th class="text-left">Item No.</th>
							<th class="text-left">Qty</th>
							<th class="text-right">Actions</th>
						</template>
						<template v-slot:rows="{ item }">
							<td>{{ item.LineNum }}</td>
							<td style="padding-left: 0px;padding-right: 0px;">
								<SuperInput type="text" v-model="item.ItemCode" />
							</td>
							<td style="padding-left: 0px;padding-right: 0px;">
								<SuperInput type="text" v-model="item.Qty" />
							</td>
							<td class="text-right"> <v-icon size="small" @click="tableDeleteRow(a)">
									mdi-pencil
								</v-icon>
								<v-icon size="small" @click="tableDeleteRow(a)">
									mdi-delete
								</v-icon>
							</td>
						</template>
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
import { useAppStore } from '@/store/app.js'
import { test } from 'decimal-utils'
//alert(store);
</script>


<script>
const store = useAppStore();
export default {
	data() {
		return {
			dialog: false,
			ui: {
				codes: {
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
			const rt = test(100,288);
			alert(rt);
			//store.increment();
			//const str = JSON.stringify(this.$data.data);
			//console.debug(str);
			//alert(str);
		},
		tableDetailClose() {
			this.dialog = false
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem)
				this.editedIndex = -1
			})
		},
		tableDetailSave() {
			if (this.editedIndex > -1) {
				//Object.assign(this.desserts[this.editedIndex], this.editedItem)
			} else {
				//this.desserts.push(this.editedItem)
			}
			this.close()
		},
		tableDeleteRow(data) {
			//this.dialog = true
			alert(JSON.stringify(data));
		},
	}
}

</script>