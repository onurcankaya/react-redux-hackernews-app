const INITIAL_STATE = {
  stories: [],
  error: null,
}

export const storyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_STORIES':
      return { ...state, stories: action.stories }
    case 'FETCH_ERRORS':
      return { ...state, error: action.error }
    default:
      return state
  }
}
