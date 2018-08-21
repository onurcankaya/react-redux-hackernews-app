import { ARCHIVE_STORY } from '../constants/action-types'

const archiveStory = (id) => ({
  type: ARCHIVE_STORY,
  id,
})

export default archiveStory
