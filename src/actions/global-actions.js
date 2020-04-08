export const updateUser = value => ({
    type: 'UPDATE_USER',
    value
})

export const updateIsMobile = value => ({
    type: 'UPDATE_IS_MOBILE',
    value
})





export const observeAuthChange = firebase => dispatch => {
    firebase.auth.onAuthStateChanged(authUser => {
        if(authUser) return dispatch(updateUser(authUser))
        dispatch(updateUser({}))
    })
}