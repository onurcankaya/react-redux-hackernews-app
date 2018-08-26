import { all, takeLatest, call, put } from 'redux-saga/effects'
import { addStories, fetchErrors } from './actions'
import { fetchStories } from './api'

function* handleFetchStories(action) {
  try {
    const result = yield call(fetchStories, action.query)
    yield put(addStories(result.data.hits))
  } catch (error) {
    yield put(fetchErrors(error))
  }
}

export function* saga() {
  yield all([takeLatest('FETCH_STORIES', handleFetchStories)])
}
