import React from 'react'
import './Stories.css'

import StoriesHeader from './StoriesHeader'
import Story from './Story'

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    label: 'Archive',
    width: '10%',
  },
}

const Stories = ({ stories }) => {
  return (
    <div className="stories">
      <StoriesHeader columns={COLUMNS} />
      {(stories || []).map((story) => (
        <Story columns={COLUMNS} key={story.objectID} story={story} />
      ))}
    </div>
  )
}

export default Stories
