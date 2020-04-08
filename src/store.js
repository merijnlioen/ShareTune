import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import global from './reducers/global-reducer'

const rootReducer = combineReducers({
    global,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(thunk)

export default createStore(rootReducer, composeEnhancers(middleware))