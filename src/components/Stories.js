import React from 'react'
import './Stories.css'

import Story from './Story'

const Stories = ({ stories }) => {
  return (
    <div className="stories">
      {(stories || []).map((story) => (
        <Story story={story} key={story.objectID} />
      ))}
    </div>
  )
}

export default Stories
