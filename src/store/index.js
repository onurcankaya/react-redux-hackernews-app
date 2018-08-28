import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import { saga } from './sagas'

const middlewares = []
const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)

  middlewares.push(logger)
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer)

sagaMiddleware.run(saga)

export default store
