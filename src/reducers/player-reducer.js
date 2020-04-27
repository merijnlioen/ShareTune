const initialState = {
    isPlaying: false,
    isLoading: false,
    activeSong: null,
    songs: []
}

const player = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_IS_PLAYING':
            return {
                ...state,
                isPlaying: action.value
            }
        case 'UPDATE_SONGS':
            return {
                ...state,
                songs: action.value
            }
        case 'UPDATE_ACTIVE_SONG':
            return {
                ...state,
                activeSong: action.value
            }
        case 'UPDATE_IS_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
        default:
            return state
    }
}

export default player