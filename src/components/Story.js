import React from 'react'
import { ButtonInline } from './Button'
import './Story.css'

const Story = ({ story, columns, onArchive }) => {
  const { title, url, author, num_comments, objectID, points } = story
  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={() => onArchive(objectID)}>Dismiss</ButtonInline>
      </span>
    </div>
  )
}

export default Story
