import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from 'app/reducers'
import {crashReporter, logger, thunk} from './middleware'

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
  composeEnhancers = a => a
}

const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        logger,
        crashReporter,
        thunk,
      ),
    )
  )

export default store