<template>
	<v-app-bar color="primary" flat>
		<v-app-bar-title>
			<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			Sales Order
		</v-app-bar-title>
	</v-app-bar>
	<v-navigation-drawer v-model="drawer" temporary>
		<v-list :items="items" @click:select="onMenuSelect"></v-list>
	</v-navigation-drawer>
</template>

<script setup>
  //
</script>
<script>
export default {
	data: () => ({
		drawer: false,
		group: null,
		items: [
			{
				title: 'Business Partners',
				value: 'OCRD',
			},
			{
				title: 'Item Master Data',
				value: 'OITM',
			},
			{
				title: 'Sales Order',
				value: 'ORDR',
			}
		],
	}),

	watch: {
		group() {
			this.drawer = false
		},
	},
	methods: {
		onMenuSelect(evt) {
			switch (evt.id) {
				case "OCRD":
				case "OITM":
				case "ORDR":
					this.$router.push(`/${evt.id}`)
					break;

			}
		}
	}
}
</script>