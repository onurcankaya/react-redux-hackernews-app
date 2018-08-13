import React from 'react'
import './StoriesHeader.css'

const StoriesHeader = ({ columns }) => {
  return (
    <div className="stories-header">
      {Object.keys(columns).map((key) => (
        <span style={{ width: columns[key].width }} key={key}>
          {columns[key].label}
        </span>
      ))}
    </div>
  )
}

export default StoriesHeader
