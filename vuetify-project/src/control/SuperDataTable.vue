<template>
	<v-data-table :items-per-page="-1" :headers="headers" :items="items" item-value="name">
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>Details</v-toolbar-title>
				<v-spacer></v-spacer>
				<slot name="detail"></slot>
				<!--	
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
							<v-btn color="primary" variant="text" @click="save">
								OK
							</v-btn>
							<v-btn variant="text" @click="close">
								Cancel
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				-->
			</v-toolbar>
		</template>
		<template v-slot:item.actions="{ item }">
			<v-icon size="small" @click="editRow(item.raw)">
				mdi-pencil
			</v-icon>
			<v-icon size="small" @click="deleteRow(item.raw)">
				mdi-delete
			</v-icon>
		</template>
	</v-data-table>
</template>
  

<script>
export default {
	props: ["items", "headers"],
	emits: ["deleteRow","editRow"],
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