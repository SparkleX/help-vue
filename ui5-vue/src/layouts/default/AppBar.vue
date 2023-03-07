<template>
	<ui5-shellbar id="shellbar" primary-title="SAP Business One" secondary-title="Sales Orders"
		notifications-count="99+" show-product-switch @menu-item-click="onMenuSelect">
			<ui5-li id="OCRD" slot="menuItems"  @selection-change="onMenuSelect">Business Partners</ui5-li>
			<ui5-li id="OITM" slot="menuItems">Item Master Data</ui5-li>
			<ui5-li id="ORDR" slot="menuItems">Sales Orders</ui5-li>
	</ui5-shellbar>
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
			const target = evt.detail.item.id
			switch (target) {
				case "OCRD":
				case "OITM":
				case "ORDR":
					this.$router.push(`/${target}`)
					break;

			}
		}
	}
}
</script>