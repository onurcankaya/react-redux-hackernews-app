export const archiveStory = (id) => ({
  type: 'ARCHIVE_STORY',
  id,
})

export const addStories = (stories) => ({
  type: 'ADD_STORIES',
  stories,
})

export const fetchStories = (query) => ({
  type: 'FETCH_STORIES',
  query,
})

export const fetchErrors = (error) => ({
  type: 'FETCH_ERRORS',
  error,
})
