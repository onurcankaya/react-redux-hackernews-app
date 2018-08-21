import React from 'react'
import { connect } from 'react-redux'
import archiveStory from '../actions/archive-story'
import { getReadableStories } from '../selectors/story'
import StoriesHeader from './stories-header'
import Story from './story'

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

const Stories = ({ archiveStory, stories }) => {
  return (
    <div className="stories">
      <StoriesHeader columns={COLUMNS} />
      {(stories || []).map((story) => (
        <Story
          columns={COLUMNS}
          key={story.objectID}
          archiveStory={archiveStory}
          story={story}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  stories: getReadableStories(state),
})

const mapDispatchToProps = (dispatch) => ({
  archiveStory: (id) => dispatch(archiveStory(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories)
