import { combineReducers } from 'redux'
import archiveReducer from './archive'
import storyReducer from './story'

const rootReducer = combineReducers({
  archiveState: archiveReducer,
  storyState: storyReducer,
})

export default rootReducer
