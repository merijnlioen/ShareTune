export const updateUser = value => ({
    type: 'UPDATE_USER',
    value
})





export const observeAuthChange = firebase => dispatch => {
    firebase.auth.onAuthStateChanged(authUser => {
        console.log(authUser)
        if(authUser) return dispatch(updateUser(authUser))
        dispatch(updateUser({}))
    })
}