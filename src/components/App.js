import React from 'react'
import './App.css'

import Stories from './Stories'

const App = ({ onArchive, stories }) => {
  return (
    <div className="app">
      <Stories stories={stories} onArchive={onArchive} />
    </div>
  )
}

export default App
