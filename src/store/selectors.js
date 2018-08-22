const isNotArchived = (archivedIds) => (story) =>
  archivedIds.indexOf(story.objectID) === -1

export const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState))
