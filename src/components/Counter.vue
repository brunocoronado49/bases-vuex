<template>
    <h1>Counter in Vuex</h1>
    <h2>Direct access: {{ $store.state.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>
</template>

<script>
export default {
    name: 'Counter',
    computed: {
        countComputed() {
            return this.$store.state.count
        }
    }
}
</script>

<style scoped>

</style>