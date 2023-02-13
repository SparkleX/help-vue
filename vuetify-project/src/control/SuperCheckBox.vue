<template>
    <v-checkbox v-bind:label="label" v-bind:modelValue="innerValue" v-on:update:modelValue="onUpdateModelValue" />
</template>

<script>
export default {
    props: ["modelValue", "label", "valueChecked", "valueUnchecked"],
    data() {
        return {
            innerValue: null
        }
    },
    methods: {
        onUpdateModelValue(value) {
            this.innerValue = value;
            this.$emit("update:modelValue", value ? this.valueChecked : this.valueUnchecked);
        }
    },
    watch: {
        modelValue: {
            handler: function (newVal, oldVal) {
                this.innerValue = (newVal == this.valueChecked);
            },
            immediate: true
        }
    }
}
</script>  