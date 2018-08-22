import React from 'react'
import SearchStories from './search-stories'
import Stories from './stories'

const App = () => {
  return (
    <div className="app">
      <div className="interactions">
        <SearchStories />
      </div>
      <Stories />
    </div>
  )
}

export default App
