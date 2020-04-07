import React from 'react'
import ReactDOM from 'react-dom'
import Firebase, { FirebaseContext } from './firebase'
import MainRouter from './main-router'

ReactDOM.render(
  <FirebaseContext.Provider value={ new Firebase() }>
    <MainRouter />
  </FirebaseContext.Provider>,
  document.getElementById('root')
)