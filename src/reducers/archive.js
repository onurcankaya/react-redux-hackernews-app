import { ARCHIVE_STORY } from '../constants/action-types'

const INITIAL_STATE = []

const archiveReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ARCHIVE_STORY:
      return [...state, action.id]
    default:
      return state
  }
}

export default archiveReducer
