import reducer from 'app/reducers'
import {crashReporter, logger, thunk} from 'middleware'
import {getDefaultMiddleware, configureStore} from '@reduxjs/toolkit'

const middleware = [...getDefaultMiddleware(), logger, crashReporter, thunk]
const store = configureStore({reducer, middleware})


export default store