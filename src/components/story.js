import React from 'react'
import { ButtonInline } from './button'
import { shortenString } from '../utils'

const Story = ({ story, columns, archiveStory }) => {
  const { title, url, author, num_comments, objectID, points } = story
  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title && shortenString(title)}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={() => archiveStory(objectID)}>Dismiss</ButtonInline>
      </span>
    </div>
  )
}

export default Story
