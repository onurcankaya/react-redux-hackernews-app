import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'

import store from './store'

ReactDOM.render(
  <App
    stories={store.getState().storyState}
    onArchive={(id) => {
      console.log(id)
    }}
  />,
  document.getElementById('root')
)
