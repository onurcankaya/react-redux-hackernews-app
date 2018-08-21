import React from 'react'

const StoriesHeader = ({ columns }) => (
  <div className="stories-header">
    {Object.keys(columns).map((key) => {
      return (
        <span style={{ width: columns[key].width }} key={key}>
          {columns[key].label}
        </span>
      )
    })}
  </div>
)

export default StoriesHeader
