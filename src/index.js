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
      <FirebaseContext.Consumer>
        {firebase => (
          <MainRouter firebase={firebase} />
        )}
      </FirebaseContext.Consumer>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
)