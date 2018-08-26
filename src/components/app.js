import React from 'react'
import Stories from './stories'
import SearchStories from './search-stories'

const App = () => {
  return (
    <div className="app">
      <div style={{ textAlign: 'center' }}>
        <SearchStories />
      </div>
      <Stories />
    </div>
  )
}

export default App
