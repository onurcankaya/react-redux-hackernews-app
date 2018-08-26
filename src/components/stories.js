import React from 'react'
import { connect } from 'react-redux'
import { archiveStory } from '../store/actions'
import { getReadableStories, getFetchError } from '../store/selectors'
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

const Stories = ({ archiveStory, stories, error }) => {
  return (
    <div className="stories">
      <StoriesHeader columns={COLUMNS} />

      {error && <p className="error">Something went wrong...</p>}

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
  error: getFetchError(state),
})

const mapDispatchToProps = (dispatch) => ({
  archiveStory: (id) => dispatch(archiveStory(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories)
