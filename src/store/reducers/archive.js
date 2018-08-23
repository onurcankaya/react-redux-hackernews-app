const INITIAL_STATE = []

export const archiveReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ARCHIVE_STORY':
      return [...state, action.id]
    default:
      return state
  }
}
