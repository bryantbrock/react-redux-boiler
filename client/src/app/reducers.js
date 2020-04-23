import {combineReducers} from 'redux'
import AuthReducer from 'app/auth/state'
import ErrorReducer from 'app/errors/state'

export default combineReducers({
  auth: AuthReducer,
  errors: ErrorReducer,
})