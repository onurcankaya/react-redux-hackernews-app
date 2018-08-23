import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import { saga } from './sagas'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(saga)

export default store
