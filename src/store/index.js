import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import { saga } from './sagas'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
)

sagaMiddleware.run(saga)

export default store
