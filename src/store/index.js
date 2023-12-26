import { createStore } from 'vuex'
import getRandomInt from '@/helpers/getRandomInt'

export default createStore({
    state() {
        return {
            count: 0,
            lastMutation: 'none',
            isLoading: false,
            lastRandomInt: 0
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
            state.lastMutation = `IncrementBy: ${value}`
            state.lastRandomInt = value
        }
    },
    // Son metodos que pueden ser asincronos
    actions: {
        async incrementRandomInt(context) {
            const rndInt = await getRandomInt()

            // Para llamar una mutasion se usa lo siguiente
            context.commit('incrementBy', rndInt)
        }
    },
})
