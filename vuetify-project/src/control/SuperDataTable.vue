<template>
	<v-data-table :items-per-page="-1" :headers="headers" :items="items" item-value="name"></v-data-table>
</template>
  

<script>
export default {
	props: ["items", "headers"]
}
</script>