// Pasamos la referencia al state como pa rametro
export const increment = (state) => {
    state.count++
    state.lastMutation = 'Increment'
}

export const incrementBy = (state, value) => {
    state.count += value
    state.lastMutation = `IncrementBy: ${value}`
    state.lastRandomInt = value
}

export const setLoading = (state, value) => {
    state.isLoading = value
    state.lastMutation = 'SetLoading'
}

