import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
    namespaced: true,
    state,
    // Las mutations son sincronas y cambian el state
    mutations,
    // Son metodos que pueden ser asincronos
    actions,
    getters,
}

export default counterStore
