<template>
    <h1>Counter in Vuex</h1>
    <h2>Direct access: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

    <h2>mapState: {{ count }}</h2>
    <h2>lastMutation: {{ lastMutation }}</h2>
    <h2>Direct Getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Counter',
    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
    },
    methods: {
        increment() {
            // Al commit le pasamos el nombre de la mutasion
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5)
        },
        ...mapActions('counter', ['incrementRandomInt'])
        // ...mapActions('counter', {
        //     randomInt: 'incrementRandomInt'
        // })
        // incrementRandomInt() {
        //     this.$store.dispatch('incrementRandomInt')
        // },
    }
}
</script>