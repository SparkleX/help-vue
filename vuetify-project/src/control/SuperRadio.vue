<template>
	<v-radio :label="label" :modelValue="modelValue"></v-radio>
</template>
  

<script>
export default {
	props: ["modelValue", "label"]
}
</script>  