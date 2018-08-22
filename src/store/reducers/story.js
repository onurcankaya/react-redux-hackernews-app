const INITIAL_STATE = []

export const storyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_STORIES': {
      return action.payload
    }
    default:
      return state
  }
}
