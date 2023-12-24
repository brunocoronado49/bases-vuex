import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            count: 0,
            lastMutation: 'none'
        }
    },
    // Las mutations son sincronas y cambian el state
    mutations: {
        // Pasamos la referencia al state como parametro
        increment(state) {
            state.count++
            state.lastMutation = 'Increment'
        },
        incrementBy(state, value) {
            state.count += value
            state.lastMutation = 'IncrementBy'
        }
    },
})
