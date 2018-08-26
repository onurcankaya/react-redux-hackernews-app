import { all, takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { addStories, fetchErrors } from './actions'

const HN_BASE_URL = 'https://hn.algolia.com/api/v1/search?query='

const fetchStories = (query) => axios(`${HN_BASE_URL}${query}`)

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
