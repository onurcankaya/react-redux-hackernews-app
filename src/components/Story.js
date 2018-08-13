import React from 'react'
import './Story.css'

const Story = ({ story, columns }) => {
  const { title, url, author, num_comments, points } = story
  return (
    <div className="story">
      <span style={{ width: '40%' }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: '30%' }}>{author}</span>
      <span style={{ width: '10%' }}>{num_comments}</span>
      <span style={{ width: '10%' }}>{points}</span>
      <span style={{ width: '10%' }}>
        <button>Dismiss</button>
      </span>
    </div>
  )
}

export default Story
