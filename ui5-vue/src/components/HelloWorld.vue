

<template>
	<ui5-page id="page" background-design="List" floating-footer  show-footer>
		<ui5-bar design="Header" slot="header">
			<ui5-button icon="home" tooltip="Go home" slot="startContent"></ui5-button>
			<ui5-label>Title</ui5-label>
			<ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>
		</ui5-bar>
		<div>
			123
			<ui5-label id="myLabel" for="myInput" required show-colon>First name</ui5-label>
			<ui5-input id="myInput" required placeholder="Enter your name"></ui5-input>
			<super-input v-model="a"></super-input>
			<super-input v-model="a"></super-input>
			<super-button label="Test" @click="onClick"></super-button>
		</div>
		<div slot="footer">
			<ui5-bar design="FloatingFooter">
				<ui5-icon name="home" slot="startContent"></ui5-icon>
				<ui5-button design="Positive" slot="endContent">Agree</ui5-button>
				<ui5-button design="Negative" slot="endContent">Decline</ui5-button>
				<ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
			</ui5-bar>
		</div>
	</ui5-page>
</template>

<script setup>
import SuperInput from '../controls/SuperInput.vue'
import SuperButton from '../controls/SuperButton.vue'
//alert(store);
</script>

<script>
export default {
	data() {
		return {
			a: "100"
		}
	},
	methods: {
		onClick(event) {
			alert("1");
		},
		update(event) {
			this.a = event.target.value;
		}
	}
}
</script>