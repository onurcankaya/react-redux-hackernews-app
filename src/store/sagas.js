import { takeEvery, all, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { addStories } from './actions'

const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query='

const fetchStories = (query) =>
  axios(`${HN_BASE_URL}${query}`).then((result) => result.data)

function* handleFetchStories(action) {
  const result = yield call(fetchStories, action.payload)
  yield put(addStories(result.hits))
}

export function* saga() {
  yield all([takeEvery('FETCH_STORIES', handleFetchStories)])
}
