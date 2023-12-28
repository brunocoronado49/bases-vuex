import getRandomInt from '@/helpers/getRandomInt'

const counterStore = {
    // TODO falta algo
    namespaced: true,
    state: () => ({
        count: 0,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0,
    }),
    // Las mutations son sincronas y cambian el state
    mutations: {
        // Pasamos la referencia al state como pa rametro
        increment(state) {
            state.count++
            state.lastMutation = 'Increment'
        },
        incrementBy(state, value) {
            state.count += value
            state.lastMutation = `IncrementBy: ${value}`
            state.lastRandomInt = value
        },
        setLoading(state, value) {
            state.isLoading = value
            state.lastMutation = 'SetLoading'
        },
    },
    // Son metodos que pueden ser asincronos
    actions: {
        async incrementRandomInt({ commit }) {
            commit('setLoading', true)
            const rndInt = await getRandomInt()
            // Para llamar una mutasion se usa lo siguiente
            commit('incrementBy', rndInt)
            commit('setLoading', false)
        }
    },
    getters: {
        squareCount(state) {
            return state.count * state.count
        }
    },
}

export default counterStore
