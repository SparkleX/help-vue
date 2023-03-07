<template>
	<ui5-page id="page" background-design="List" style="height: 500px" floating-footer show-footer>
		<ui5-tabcontainer>
			<ui5-tab text="General" selected>
				<div class="form">
					<div class="form-element">
						<ui5-label id="myLabel" class="grid-item" for="myInput" required show-colon>First name</ui5-label>
						<div>
							<ui5-input id="myInput" class="grid-item" required placeholder="Enter your name"></ui5-input>
							<ui5-input id="myInput" class="grid-item" required placeholder="Enter your name"></ui5-input>
						</div>
					</div>
					<div class="form-element">
						<ui5-label id="myLabel" class="grid-item" for="myInput" required show-colon>First name</ui5-label>
						<super-input v-model="a" class="grid-item"></super-input>
					</div>
					<div class="form-element">
						<ui5-label id="myLabel" class="grid-item" for="myInput" required show-colon>First name</ui5-label>
						<super-input v-model="a" class="grid-item"></super-input>
					</div>
					<div class="form-element">
						<super-button label="Test" @click="onClick"></super-button>
					</div>
				</div>
				<div class="form">
					<div class="form-element">
						<ui5-label class="grid-item" required show-colon>Right</ui5-label>
						<div>
							<ui5-input id="myInput" class="grid-item" required placeholder="Enter your name"></ui5-input>
							<ui5-input id="myInput" class="grid-item" required placeholder="Enter your name"></ui5-input>
						</div>
					</div>
				</div>
			</ui5-tab>
			<ui5-tab text="Details"></ui5-tab>
			<ui5-tab text="Address"></ui5-tab>
			<ui5-tab text="Attachment"></ui5-tab>
		</ui5-tabcontainer>
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
</script>


<script>


</script>