const initialState = {
    user: null
}

const global = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.value
            }
        default:
            return state
    }
}

export default global