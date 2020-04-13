import {combineReducers} from 'redux'
import AuthReducer from 'app/auth/reducer'
import ErrorReducer from 'app/errors/reducer'

export default combineReducers({
  auth: AuthReducer,
  errors: ErrorReducer,
})