import React from 'react'
import ReactDOM from 'react-dom'
import Firebase, { FirebaseContext }  from './firebase'
import MainRouter from './main-router'

ReactDOM.render(
  <FirebaseContext.Provider value={ new Firebase() }>
    <FirebaseContext.Consumer>
      {firebase => (
        <MainRouter firebase={firebase} />
      )}
    </FirebaseContext.Consumer>
  </FirebaseContext.Provider>,
  document.getElementById('root')
)