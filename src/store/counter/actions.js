import getRandomInt from '@/helpers/getRandomInt'

export const incrementRandomInt = async ({ commit }) => {
    commit('setLoading', true)
    const rndInt = await getRandomInt()
    // Para llamar una mutasion se usa lo siguiente
    commit('incrementBy', rndInt)
    commit('setLoading', false)
}

