<template>
    <h1>Counter in Vuex</h1>
    <h2>Direct access: {{ $store.state.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button>Random</button>

    <h2>mapState: {{ count }}</h2>
    <h2>lastMutation: {{ lastMutation }}</h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Counter',
    computed: {
        countComputed() {
            return this.$store.state.count
        },
        ...mapState(['count', 'lastMutation'])
    },
    methods: {
        increment() {
            // Al commit le pasamos el nombre de la mutasion
            this.$store.commit('increment')
        },
        incrementBy() {
            this.$store.commit('incrementBy', 5)
        },
    }
}
</script>

<style scoped>

</style>
