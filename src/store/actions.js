export const archiveStory = (id) => ({
  type: 'ARCHIVE_STORY',
  payload: id,
})

export const addStories = (stories) => ({
  type: 'ADD_STORIES',
  payload: stories,
})

export const fetchStories = (query) => ({
  type: 'FETCH_STORIES',
  payload: query,
})
