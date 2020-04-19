import React from 'react'
import ReactDOM from 'react-dom'
import MainRouter from './main-router'
import store from './store'
import './assets/scss/app.scss'
import Firebase, { FirebaseContext }  from './firebase'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={ new Firebase() }>
      <MainRouter />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
)