const initialState = {
    user: null,
    isMobile: false
}

const global = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.value
            }
        case 'UPDATE_IS_MOBILE':
            return {
                ...state,
                isMobile: action.value
            }
        default:
            return state
    }
}

export default global