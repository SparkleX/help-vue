<template>
	<v-toolbar flat>
		<v-toolbar-title>Details</v-toolbar-title>
		<v-spacer></v-spacer>
		<slot name="detail"></slot>
	</v-toolbar>
	<v-table fixed-header height="300px">
		<thead>
			<tr>
				<slot name="columns"></slot>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in items" :key="item.ItemCode">
				<slot name="rows" v-bind="item"></slot>
			</tr>
		</tbody>
	</v-table>
</template>
  

<script>
export default {
	props: ["items", "headers"],
	emits: ["deleteRow", "editRow"],
	data() {
		return {
			dialog: false
		}
	},
	methods: {
		close() {
			this.dialog = false
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem)
				this.editedIndex = -1
			})
		},
		save() {
			if (this.editedIndex > -1) {
				//Object.assign(this.desserts[this.editedIndex], this.editedItem)
			} else {
				//this.desserts.push(this.editedItem)
			}
			this.close()
		},
		editRow(item) {
			//this.editedIndex = this.desserts.indexOf(item)
			//this.editedItem = Object.assign({}, item)
			//this.dialog = true
			this.$emit("editRow", item);
		},
		deleteRow(item) {
			//alert(item);
			this.$emit("deleteRow", item);
			//this.editedIndex = this.desserts.indexOf(item)
			//this.editedItem = Object.assign({}, item)
			//this.dialogDelete = true
		},
	}
}
</script>