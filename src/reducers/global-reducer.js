const initialState = {
    user: null,
    isMobile: false,
    message: null,
    isMessageOpen: true,
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
        case 'UPDATE_MESSAGE': {
            return {
                ...state,
                message: action.value
            }
        }
        case 'UPDATE_IS_MESSAGE_OPENED': {
            return {
                ...state,
                isMessageOpen: action.value
            }
        }
        default:
            return state
    }
}

export default global