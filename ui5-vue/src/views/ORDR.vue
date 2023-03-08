<template>
	<ui5-page id="page" background-design="List" style="height: 95vh" floating-footer show-footer disable-scrolling="true">
		<ui5-bar design="Header">
			<ui5-label slot="startContent">Sales Order 100</ui5-label>
			<ui5-button slot="startContent" icon="navigation-left-arrow"></ui5-button>
			<ui5-button slot="startContent" icon="navigation-right-arrow"></ui5-button>

			<ui5-button slot="endContent" design="Emphasized">Edit</ui5-button>
			<ui5-button slot="endContent">New</ui5-button>
			<ui5-button slot="endContent">Delete</ui5-button>
		</ui5-bar>
		<ui5-label>Business Partner</ui5-label>

		<ui5-tabcontainer>
			<ui5-tab text="General" selected>
				<div class="page">
					<div class="form">
						<div class="form-element">
							<ui5-label id="myLabel" for="a1" required show-colon>First name</ui5-label>
							<div class="flex2">
								<ui5-input class="flex2-content" id="a1" required style="min-width: 0;"></ui5-input>
								<ui5-input class="flex2-content" id="a2" required style="min-width: 0;"></ui5-input>
							</div>
						</div>
						<div class="form-element">
							<ui5-label id="myLabel" for="myInput" required show-colon>First
								name</ui5-label>
							<super-input v-model="a"></super-input>
						</div>
						<div class="form-element">
							<ui5-label id="myLabel" for="myInput" required show-colon>First
								name</ui5-label>
							<super-input v-model="a"></super-input>
						</div>
						<div class="form-element">
							<super-button label="Test" @click="onClick"></super-button>
						</div>
					</div>
					<div class="form">
						<div class="form-element">
							<ui5-label required show-colon>Right</ui5-label>
							<div class="flex2">
								<ui5-input class="flex2-content" id="myInput1" required style="min-width: 0;"></ui5-input>
								<ui5-input class="flex2-content" id="myInput2" required style="min-width: 0;"></ui5-input>
							</div>
						</div>
						<div class="form-element">
							<ui5-label show-colon>Document Date</ui5-label>
							<ui5-date-picker id="myDatepicker1"></ui5-date-picker>
						</div>
						<div class="form-element">
							<ui5-label show-colon>Document Status</ui5-label>
							<ui5-checkbox text="Chocolate" checked></ui5-checkbox>
						</div>
						<div class="form-element">
							<ui5-label id="test" show-colon>Document Status</ui5-label>
							<ui5-select class="select" style="width:100%">
								<ui5-option icon="iphone">Phone</ui5-option>
								<ui5-option icon="ipad">Tablet</ui5-option>
								<ui5-option icon="laptop" selected>Desktop</ui5-option>
							</ui5-select>
						</div>
					</div>
				</div>
				<p></p>
			</ui5-tab>
			<ui5-tab text="Details"></ui5-tab>
			<ui5-tab text="Address"></ui5-tab>
			<ui5-tab text="Attachment"></ui5-tab>
		</ui5-tabcontainer>
		<ui5-bar slot="footer" design="Footer">
			<ui5-button design="Emphasized" slot="endContent">Save</ui5-button>
			<ui5-button slot="endContent">Cancel</ui5-button>
		</ui5-bar>
	</ui5-page>
</template>

<script setup>
import SuperInput from '../controls/SuperInput.vue'
import SuperButton from '../controls/SuperButton.vue'
</script>


<script>


</script>
